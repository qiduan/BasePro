/**
 * Created by liuwen on 16/6/17.
 */
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        _super.call(this);
        this.callBack = this.initUI;
        _super.prototype.initSkin.call(this, "LoginScene");
    }
    var d = __define,c=LoginScene,p=c.prototype;
    /**初始化UI属性*/
    p.initUI = function () {
        this.addEventLis();
        Log.trace("初始化LoginScene数据");
    };
    /**添加事件监听*/
    p.addEventLis = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        Game.EventManager.addELS(EventConstant.Login, this.isLogin, this);
    };
    /**移除事件监听*/
    p.removeEventLis = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        Game.EventManager.removeELS(EventConstant.Login, this.isLogin, this);
    };
    /**点击事件*/
    p.onClick = function (event) {
        switch (event.target) {
            case this.partJson["lbLogin"]:
                this.loginEvent();
                break;
        }
    };
    /**登录事件*/
    p.loginEvent = function () {
        var userName = this.partJson["edtUserName"].text;
        var passWord = this.partJson["edtPassword"].text;
        if (userName == "") {
            alert("用户名不能为空");
            return;
        }
        else if (passWord == "") {
            alert("密码不能为空");
            return;
        }
        LoginCtrl.getInstance().loginIn({ act: EventConstant.Login, userName: userName, passWord: passWord });
    };
    /**登录是否成功*/
    p.isLogin = function (event) {
        Log.trace("登录返回的数据==>", event.data);
        if (event.data["status"] == 1) {
            Game.SceneManager.runScene(SceneConstant.MainScene);
        }
    };
    /**进入场景*/
    p.onEnter = function () {
        Game.StageUtils.getUIStage().addChild(this);
    };
    /**退出场景*/
    p.onExit = function () {
        this.removeEventLis();
        Game.StageUtils.getUIStage().removeChild(this);
    };
    return LoginScene;
}(BaseScene));
egret.registerClass(LoginScene,'LoginScene');
