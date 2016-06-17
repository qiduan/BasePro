class Main extends egret.DisplayObjectContainer{
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        //注入自定义的素材解析器
        this.stage.registerImplementation("eui.IAssetAdapter",new AssetAdapter());
        this.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //适配方式
        if(Game.DeviceUtils.IsPC){
            Game.StageUtils.setScaleMode(egret.StageScaleMode.EXACT_FIT);
        }else if(Game.DeviceUtils.IsMobile){
            Game.StageUtils.setScaleMode(egret.StageScaleMode.EXACT_FIT);
        }
        //开启调试,默认关闭
        Game.DebugUtils.setOpen(true);
        //初始化服务器地址
        Game.Http.initServer("http://h5future.com/ADemo/relay.php");
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载LoadingScene资源组。
     */
    private onConfigComplete():void{
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json",this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this);
    }
    /**
     * 主题文件加载完成
     */
    private onThemeLoadComplete(): void {
        //加载界面需要的资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, Main.onResourceLoadComplete, this);
        //加载loading页面需要的资源
        RES.loadGroup("LoadingScene");
    }
    private static onResourceLoadComplete(event:RES.ResourceEvent):void{
        var groupName = event.groupName;
        //分页加载完毕
        switch(groupName) {
            case "LoadingScene":
                Game.SceneManager.runScene(SceneConstant.LoadingScene);
                break;
        }
    }
}


