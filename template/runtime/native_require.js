
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/socket/socket.js",
	"libs/jweixin-1.0.0/jweixin-1.0.0-additional.js",
	"libs/jquery-1.11.0.min.js",
	"bin-debug/Game.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/adapter/AssetAdapter.js",
	"bin-debug/adapter/MergeJsonAnalyzer.js",
	"bin-debug/adapter/ThemeAdapter.js",
	"bin-debug/base/BaseClass.js",
	"bin-debug/base/BaseScene.js",
	"bin-debug/constant/EventConstant.js",
	"bin-debug/constant/SceneConstant.js",
	"bin-debug/manger/EventManager.js",
	"bin-debug/manger/MsgManager.js",
	"bin-debug/manger/SceneManager.js",
	"bin-debug/manger/SoundManager.js",
	"bin-debug/manger/TimerManager.js",
	"bin-debug/mvc/control/LoginCtrl.js",
	"bin-debug/mvc/module/Player.js",
	"bin-debug/mvc/manger/MainPlayer.js",
	"bin-debug/net/http/CacheData.js",
	"bin-debug/net/http/Http.js",
	"bin-debug/scene/LoadingScene.js",
	"bin-debug/scene/LoginScene.js",
	"bin-debug/scene/MainScene.js",
	"bin-debug/scene/Mod.js",
	"bin-debug/tools/Animator.js",
	"bin-debug/tools/DebugUtils.js",
	"bin-debug/tools/DeviceUtils.js",
	"bin-debug/tools/Global.js",
	"bin-debug/tools/Helper.js",
	"bin-debug/tools/Log.js",
	"bin-debug/tools/ObjectPool.js",
	"bin-debug/tools/ResourceUtils.js",
	"bin-debug/tools/Sound.js",
	"bin-debug/tools/StageUtils.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};