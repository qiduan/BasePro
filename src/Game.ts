/**
 * Created by liuwen on 16/6/3.
 * 全局管理类
 */
class Game{

    /**
     * MsgManager
     * @type {MsgManager}
     * 获取单例管理器
     */
    public static get MsgManager():MsgManager {
        return MsgManager.getInstance();
    }

    /**
     * HTTP管理
     * @type {Http}
     * 获取单例管理器
     */
    public static get Http():Http {
        return Http.getInstance();
    }

    /**
     * 场景管理器
     * @type {SceneManager}
     * 获取单例管理器
     */
    public static get SceneManager():SceneManager {
        return SceneManager.getInstance();
    }

    /**
     * 音乐管理器
     * @type {SoundManager}
     * 获取单例管理器
     */
    public static get SoundManager():SoundManager {
        return SoundManager.getInstance();
    }


    /**
     * 事件管理器
     * @type {EventManager}
     * 获取单例管理器
     */
    public static get EventManager():EventManager {
        return EventManager.getInstance();
    }

    /**
     * 调试管理器
     * @type {EventManager}
     * 获取单例管理器
     */
    public static get DebugUtils():DebugUtils {
        return DebugUtils.getInstance();
    }

    /**
     * 时间管理器
     * @type {TimerManager}
     * 获取单例管理器
     */
    public static get TimerManager():TimerManager {
        return TimerManager.getInstance();
    }

    /**
     * 设备查询
     * @type {DeviceUtils}
     * 获取单例管理器
     */
    public static get DeviceUtils():DeviceUtils {
        return DeviceUtils.getInstance();
    }

    /**
     * 舞台相关
     * @type {StageUtils}
     * 获取单例管理器
     */
    public static get StageUtils():StageUtils {
        return StageUtils.getInstance();
    }

    public static get ResourceUtils():ResourceUtils{
        return ResourceUtils.getInstance();
    }


}