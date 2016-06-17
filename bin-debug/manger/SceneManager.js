/**
 * Created by liuwen on 16/6/4.
 * 场景管理器
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    /**
     * 构造函数
     */
    function SceneManager() {
        _super.call(this);
        this._scenes = {};
    }
    var d = __define,c=SceneManager,p=c.prototype;
    /**
     * 清空处理
     */
    p.clear = function () {
        var nowScene = this._scenes[this._currScene];
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    };
    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    p.register = function (key, scene) {
        this._scenes[key] = scene;
    };
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    p.runScene = function (key) {
        var nowScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + SceneConstant[key] + "不存在,注册一个场景");
            var classZ = egret.getDefinitionByName(SceneConstant[key]);
            var obj = new classZ(SceneConstant[key]);
            this.register(key, obj);
            nowScene = this._scenes[key];
        }
        var oldScene = this._scenes[this._currScene];
        if (oldScene) {
            //Log.trace("旧场景为"+SceneConstant[this._currScene])
            oldScene.onExit();
        }
        nowScene.onEnter();
        this._currScene = key;
        //Log.trace("当前场景为"+SceneConstant[this._currScene])
    };
    /**
     * 获取当前Scene
     * @returns {number}
     */
    p.getCurrScene = function () {
        return this._currScene;
    };
    return SceneManager;
}(BaseClass));
egret.registerClass(SceneManager,'SceneManager');
