/**
 * Created by liuwen on 16/6/17.
 */
var MsgManager = (function (_super) {
    __extends(MsgManager, _super);
    function MsgManager() {
        _super.call(this);
        this.json = new URLVariables();
    }
    var d = __define,c=MsgManager,p=c.prototype;
    p.send = function (type, data) {
        this.json.variables = data;
        Game.Http.send(type, this.json);
    };
    return MsgManager;
}(BaseClass));
egret.registerClass(MsgManager,'MsgManager');
