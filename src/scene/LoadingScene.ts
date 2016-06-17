/**
 * Created by liuwen on 16/6/4.
 * 进入游戏的加载界面,是一级加载界面,需要加载该场景所用到的资源,和下一个场景的资源
 */
class LoadingScene extends BaseScene{
    public constructor(){
        super();
        this.callBack = this.loadGroup;
        super.initSkin("LoadingScene");
    }

    /**加载第一个界面资源*/
    public loadGroup():void{
        var runAni:Animator = new Animator("loadRun","loadRun");
        this.addChild(runAni._mc);
        runAni.play(true);
        //Helper.setAnchor(runAni._mc,0.5,0.5);
        Helper.setCenter(runAni._mc);
        runAni._mc.y = 390;
        Game.ResourceUtils.loadGroup("MainScene", this.onResourceLoadComplete, this.onResourceLoadProgress, this);
        //静默加载其他页的资源
    }

    /**进入第一个界面*/
    public onResourceLoadComplete():void{

        Game.SceneManager.runScene(SceneConstant.LoginScene);
    }

    public onResourceLoadProgress(itemsLoaded:number, itemsTotal:number):void{
        this.setProgress(itemsLoaded,itemsTotal);
    }

    public setProgress(current:number, total:number):void {
        var progress = Math.ceil((current/total)*100);
        this.partJson["spLoadFrg"].width =  Math.ceil((current/total)*667);
        this.partJson["lbLoad"].text = progress + "%";
    }

    /**进入场景*/
    public onEnter():void{
        Game.StageUtils.getUIStage().addChild(this);
        Log.trace(Game.StageUtils.getUIStage().width,Game.StageUtils.getUIStage().height);
    }

    /**退出场景*/
    public onExit():void{
        Game.StageUtils.getUIStage().removeChild(this);
    }

}
