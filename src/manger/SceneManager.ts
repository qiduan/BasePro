/**
 * Created by liuwen on 16/6/4.
 * 场景管理器
 */
class SceneManager extends BaseClass{
    /**场景缓存*/
    private _scenes:any;
    /**当前场景索引*/
    private _currScene:number;
    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._scenes = {};
    }

    /**
     * 清空处理
     */
    public clear():void {
        var nowScene:BaseScene = this._scenes[this._currScene];
        if(nowScene){
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    }

    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    public register(key:number, scene:BaseScene):void {
        this._scenes[key] = scene;
    }

    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    public runScene(key:number):void {
        var nowScene:BaseScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + SceneConstant[key] + "不存在,注册一个场景");
            var classZ:any = egret.getDefinitionByName(SceneConstant[key]);
            var obj = new classZ(SceneConstant[key]);
            this.register(key,obj);
            nowScene = this._scenes[key];
        }
        var oldScene:BaseScene = this._scenes[this._currScene];
        if (oldScene) {
            //Log.trace("旧场景为"+SceneConstant[this._currScene])
            oldScene.onExit();
        }
        nowScene.onEnter();
        this._currScene = key;
        //Log.trace("当前场景为"+SceneConstant[this._currScene])
    }

    /**
     * 获取当前Scene
     * @returns {number}
     */
    public getCurrScene():number {
        return this._currScene;
    }

}