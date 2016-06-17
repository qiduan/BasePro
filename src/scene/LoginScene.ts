/**
 * Created by liuwen on 16/6/17.
 */
class LoginScene extends BaseScene{
    public constructor(){
        super();
        this.callBack = this.initUI;
        super.initSkin("LoginScene");
    }

    /**初始化UI属性*/
    public initUI(): void {
        this.addEventLis();
        Log.trace("初始化LoginScene数据");
    }

    /**添加事件监听*/
    public addEventLis(): void {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
        Game.EventManager.addELS(EventConstant.Login,this.isLogin,this);

    }

    /**移除事件监听*/
    public removeEventLis(): void {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
        Game.EventManager.removeELS(EventConstant.Login,this.isLogin,this);
    }

    /**点击事件*/
    public onClick(event: egret.TouchEvent): void {
        switch(event.target) {
            case this.partJson["lbLogin"]:this.loginEvent();break;
        }
    }

    /**登录事件*/
    public loginEvent():void{
        var userName = this.partJson["edtUserName"].text;
        var passWord = this.partJson["edtPassword"].text;
        if(userName == ""){
            alert("用户名不能为空");
            return;
        }else if(passWord == ""){
            alert("密码不能为空");
            return;
        }
        LoginCtrl.getInstance().loginIn({act:EventConstant.Login,userName:userName,passWord:passWord});
    }

    /**登录是否成功*/
    public isLogin(event:egret.Event){
        Log.trace("登录返回的数据==>",event.data);
        if (event.data["status"] == 1){
            Game.SceneManager.runScene(SceneConstant.MainScene);
        }
    }

    /**进入场景*/
    public onEnter():void{
        Game.StageUtils.getUIStage().addChild(this);
    }

    /**退出场景*/
    public onExit():void{
        this.removeEventLis();
        Game.StageUtils.getUIStage().removeChild(this);
    }

}
