/**
 * Created by liuwen on 16/6/3.
 */
class Log {
    /**
     * 追踪输出
     * @param messsage 内容
     * @constructor
     */
    public static trace(...optionalParams:any[]):void {
        if (Game.DebugUtils.isDebug) {
            optionalParams[0] = "[DebugLog]" + optionalParams[0];
            console.log.apply(console, optionalParams);
        }
    }
}