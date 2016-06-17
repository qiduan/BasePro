/**
 * Created by liuwen on 16/6/17.
 */
/**
 * Created by liuwen on 16/6/17.
 */
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.call(this);
        this.callBack = this.initUI;
        _super.prototype.initSkin.call(this, "LoginScene");
    }
    var d = __define,c=Mod,p=c.prototype;
    /**初始化UI属性*/
    p.initUI = function () {
        this.addEventLis();
        Log.trace("初始化LoginScene数据");
    };
    /**添加事件监听*/
    p.addEventLis = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    /**移除事件监听*/
    p.removeEventLis = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    /**点击事件*/
    p.onClick = function (event) {
        switch (event.target) {
        }
    };
    /**进入场景*/
    p.onEnter = function () {
        Log.trace("MainScene加入显示列表");
        Game.StageUtils.getUIStage().addChild(this);
    };
    /**退出场景*/
    p.onExit = function () {
        this.removeEventLis();
        Game.StageUtils.getUIStage().removeChild(this);
    };
    return Mod;
}(BaseScene));
egret.registerClass(Mod,'Mod');
