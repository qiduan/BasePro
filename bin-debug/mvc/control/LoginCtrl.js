/**
 * Created by liuwen on 16/6/17.
 */
var LoginCtrl = (function (_super) {
    __extends(LoginCtrl, _super);
    function LoginCtrl() {
        _super.call(this);
    }
    var d = __define,c=LoginCtrl,p=c.prototype;
    /**登录*/
    p.loginIn = function (data) {
        Game.MsgManager.send(EventConstant.Login, data);
    };
    /**注销*/
    p.loginOut = function () {
    };
    return LoginCtrl;
}(BaseClass));
egret.registerClass(LoginCtrl,'LoginCtrl');
