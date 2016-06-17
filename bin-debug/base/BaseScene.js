/**
 * Created by liuwen on 16/6/4.
 * 场景基类
 */
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    /**
     * 构造函数
     */
    function BaseScene() {
        _super.call(this);
        /**添加组件*/
        this.partJson = {};
    }
    var d = __define,c=BaseScene,p=c.prototype;
    /**初始化舞台*/
    p.initSkin = function (skinName) {
        this.skinName = Global.skinPath + skinName + "Skin.exml";
        this.once(eui.UIEvent.CREATION_COMPLETE, this.onCreateComplete, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    };
    p.partAdded = function (partName, instance) {
        Log.trace("加载组件===>" + partName);
        _super.prototype.partAdded.call(this, partName, instance);
        this.partJson[partName] = instance;
    };
    /**组件创建完成*/
    p.onCreateComplete = function () {
        Log.trace(this.skinName + "组件加载完成舞台");
    };
    /**加入舞台,初始化UI数据*/
    p.onAddToStage = function () {
        Log.trace(this.skinName + "加入舞台");
        this.callBack();
    };
    /**移除舞台*/
    p.onRemoveFromStage = function () {
        Log.trace(this.skinName + "移除舞台");
    };
    /**
     * 进入Scene调用
     */
    p.onEnter = function () {
    };
    /**
     * 退出Scene调用
     */
    p.onExit = function () {
    };
    return BaseScene;
}(eui.Component));
egret.registerClass(BaseScene,'BaseScene');
