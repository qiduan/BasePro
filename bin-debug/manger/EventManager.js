/**
 * Created by liuwen on 16/6/3.
 */
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        _super.call(this);
        this.eventDis = new egret.EventDispatcher();
    }
    var d = __define,c=EventManager,p=c.prototype;
    /**
     * 派发一个指定参数的事件。
     * @param type {string} 事件类型
     * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
     * @param data {any} 事件data,附带的数据
     * */
    p.dispatcherWith = function (type, data) {
        this.eventDis.dispatchEventWith(type, false, data);
    };
    p.addELS = function (type, callBack, content) {
        this.eventDis.addEventListener(type, callBack, content);
    };
    p.removeELS = function (type, callBack, content) {
        this.eventDis.removeEventListener(type, callBack, content);
    };
    return EventManager;
}(BaseClass));
egret.registerClass(EventManager,'EventManager');
