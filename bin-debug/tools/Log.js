/**
 * Created by liuwen on 16/6/3.
 */
var Log = (function () {
    function Log() {
    }
    var d = __define,c=Log,p=c.prototype;
    /**
     * 追踪输出
     * @param messsage 内容
     * @constructor
     */
    Log.trace = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i - 0] = arguments[_i];
        }
        if (Game.DebugUtils.isDebug) {
            optionalParams[0] = "[DebugLog]" + optionalParams[0];
            console.log.apply(console, optionalParams);
        }
    };
    return Log;
}());
egret.registerClass(Log,'Log');
