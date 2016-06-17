/**
 * Created by liuwen on 15/10/30.
 */
var Animator = (function () {
    function Animator(name, mcName) {
        this.initAni(name, mcName);
    }
    var d = __define,c=Animator,p=c.prototype;
    p.initAni = function (name, mcName) {
        var dataJson = name + "_json";
        var texturePng = name + "_png";
        var data = RES.getRes(dataJson); //获取描述
        var texture = RES.getRes(texturePng); //获取大图
        Global._mcFactory.mcDataSet = data;
        Global._mcFactory.texture = texture;
        this._mc = new egret.MovieClip(Global._mcFactory.generateMovieClipData(mcName));
    };
    p.play = function (loop) {
        if (loop) {
            this._mc.play(-1);
        }
        else {
            this._mc.play(1);
        }
    };
    p.setFrameRate = function (frame) {
        this._mc.frameRate = frame;
    };
    return Animator;
}());
egret.registerClass(Animator,'Animator');
