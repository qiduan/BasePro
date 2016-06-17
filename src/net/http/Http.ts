/**
 * Created by liuwen on 16/6/4.
 */
class Http extends BaseClass {
    private _serverUrl:string;
    private _urlLoader:egret.URLLoader;
    private _request:egret.URLRequest;
    /**请求队列*/
    private _cache:Array<any>;
    private _isRequesting:boolean;
    /**请求的返回值*/
    private _data:CacheData;
    private _type:string;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._data = new CacheData();
        this._cache = [];
        this._request = new egret.URLRequest();
        var header:egret.URLRequestHeader = new egret.URLRequestHeader("Access-Control-Allow-Origin", "*");
        this._request.requestHeaders.push(header);
        this._request.method = egret.URLRequestMethod.POST;

        this._urlLoader = new egret.URLLoader();
        this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    }

    /**
     * 初始化服务器地址
     * @param serverUrl服务器链接地址
     */
    public initServer(serverUrl:string):void {
        this._serverUrl = serverUrl;
    }

    /**
     * 数据缓存
     * @returns {DynamicChange}
     * @constructor
     */
    public get Data():CacheData {
        return this._data;
    }

    /**
     * Http错误处理函数
     * @param e
     */
    private onError(e:egret.Event):void {
        this.nextPost();
    }

    /**
     * 请求数据
     * @param    type
     * @param    t_variables
     */
    public send(type:string, urlVariables:egret.URLVariables):void {
        this._cache.push([type, urlVariables]);
        this.post();
    }

    /**
     * 请求服务器
     */
    private post():void {
        if (this._isRequesting) {
            return;
        }

        if (this._cache.length == 0) {
            return;
        }

        var arr:Array<any> = this._cache.shift();
        var type:string = arr[0];
        var urlVariables:egret.URLVariables = arr[1];
        this._type = type;
        this._request.url = this._serverUrl;
        this._request.data = urlVariables;
        //JSON.stringify(JSON.parse(JSON.stringify(urlVariables))["variables"]);
        Log.trace("请求数据",JSON.stringify(JSON.parse(JSON.stringify(urlVariables))["variables"]));

        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        this._urlLoader.load(this._request);
        this._isRequesting = true;
    }

    /**
     * 数据返回
     * @param event
     */
    private onLoaderComplete(event:egret.Event):void {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        Log.trace(this._urlLoader.data);
        var t_obj:any = JSON.parse(this._urlLoader.data);
        if (!t_obj.hasOwnProperty("status") || t_obj["status"] == 1) {
            //表示请求成功,缓存请求的数据,发送到消息处理中心处理(消息类型,返回值)
            this._data.update(this._type, t_obj);
            //App.MessageCenter.dispatch(this._type, t_obj);
            Log.trace("缓存的数据:===>",this._data.getCache(this._type)["status"]);
            Game.EventManager.dispatcherWith(this._type,t_obj);
        }
        else {
            Log.trace("Http错误:" + t_obj["status"],t_obj["msg"]);
        }
        this.nextPost();
    }

    /**
     * 开始下一个请求
     */
    private nextPost():void {
        this._isRequesting = false;
        this.post();
    }
}
