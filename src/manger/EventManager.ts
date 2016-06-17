/**
 * Created by liuwen on 16/6/3.
 */
class EventManager extends BaseClass{

    public constructor() {
        super();
        this.eventDis = new egret.EventDispatcher();
    }
    /**事件发送器*/
    public eventDis:egret.EventDispatcher;

    /**
     * 派发一个指定参数的事件。
     * @param type {string} 事件类型
     * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
     * @param data {any} 事件data,附带的数据
     * */
    public dispatcherWith(type:string, data?: any){
        this.eventDis.dispatchEventWith(type,false,data);
    }

    public addELS(type:string,callBack:Function,content:any):void{
        this.eventDis.addEventListener(type,callBack,content);
    }

    public removeELS(type:string,callBack:Function,content:any):void{
        this.eventDis.removeEventListener(type,callBack,content);
    }

}