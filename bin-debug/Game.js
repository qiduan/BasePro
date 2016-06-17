/**
 * Created by liuwen on 16/6/3.
 * 全局管理类
 */
var Game = (function () {
    function Game() {
    }
    var d = __define,c=Game,p=c.prototype;
    d(Game, "MsgManager"
        /**
         * MsgManager
         * @type {MsgManager}
         * 获取单例管理器
         */
        ,function () {
            return MsgManager.getInstance();
        }
    );
    d(Game, "Http"
        /**
         * HTTP管理
         * @type {Http}
         * 获取单例管理器
         */
        ,function () {
            return Http.getInstance();
        }
    );
    d(Game, "SceneManager"
        /**
         * 场景管理器
         * @type {SceneManager}
         * 获取单例管理器
         */
        ,function () {
            return SceneManager.getInstance();
        }
    );
    d(Game, "SoundManager"
        /**
         * 音乐管理器
         * @type {SoundManager}
         * 获取单例管理器
         */
        ,function () {
            return SoundManager.getInstance();
        }
    );
    d(Game, "EventManager"
        /**
         * 事件管理器
         * @type {EventManager}
         * 获取单例管理器
         */
        ,function () {
            return EventManager.getInstance();
        }
    );
    d(Game, "DebugUtils"
        /**
         * 调试管理器
         * @type {EventManager}
         * 获取单例管理器
         */
        ,function () {
            return DebugUtils.getInstance();
        }
    );
    d(Game, "TimerManager"
        /**
         * 时间管理器
         * @type {TimerManager}
         * 获取单例管理器
         */
        ,function () {
            return TimerManager.getInstance();
        }
    );
    d(Game, "DeviceUtils"
        /**
         * 设备查询
         * @type {DeviceUtils}
         * 获取单例管理器
         */
        ,function () {
            return DeviceUtils.getInstance();
        }
    );
    d(Game, "StageUtils"
        /**
         * 舞台相关
         * @type {StageUtils}
         * 获取单例管理器
         */
        ,function () {
            return StageUtils.getInstance();
        }
    );
    d(Game, "ResourceUtils"
        ,function () {
            return ResourceUtils.getInstance();
        }
    );
    return Game;
}());
egret.registerClass(Game,'Game');
