/**
 * Created by liuwen on 16/6/4.
 * 进入游戏的加载界面,是一级加载界面,需要加载该场景所用到的资源,和下一个场景的资源
 */
var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        _super.call(this);
        this.callBack = this.loadGroup;
        _super.prototype.initSkin.call(this, "LoadingScene");
    }
    var d = __define,c=LoadingScene,p=c.prototype;
    /**加载第一个界面资源*/
    p.loadGroup = function () {
        var runAni = new Animator("loadRun", "loadRun");
        this.addChild(runAni._mc);
        runAni.play(true);
        //Helper.setAnchor(runAni._mc,0.5,0.5);
        Helper.setCenter(runAni._mc);
        runAni._mc.y = 390;
        Game.ResourceUtils.loadGroup("MainScene", this.onResourceLoadComplete, this.onResourceLoadProgress, this);
        //静默加载其他页的资源
    };
    /**进入第一个界面*/
    p.onResourceLoadComplete = function () {
        Game.SceneManager.runScene(SceneConstant.LoginScene);
    };
    p.onResourceLoadProgress = function (itemsLoaded, itemsTotal) {
        this.setProgress(itemsLoaded, itemsTotal);
    };
    p.setProgress = function (current, total) {
        var progress = Math.ceil((current / total) * 100);
        this.partJson["spLoadFrg"].width = Math.ceil((current / total) * 667);
        this.partJson["lbLoad"].text = progress + "%";
    };
    /**进入场景*/
    p.onEnter = function () {
        Game.StageUtils.getUIStage().addChild(this);
        Log.trace(Game.StageUtils.getUIStage().width, Game.StageUtils.getUIStage().height);
    };
    /**退出场景*/
    p.onExit = function () {
        Game.StageUtils.getUIStage().removeChild(this);
    };
    return LoadingScene;
}(BaseScene));
egret.registerClass(LoadingScene,'LoadingScene');
