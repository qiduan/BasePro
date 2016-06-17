/**
 * Created by liuwen on 15/11/3.
 */
var Sound = (function () {
    function Sound(sourceName, type) {
        this.initSound(type, sourceName);
    }
    var d = __define,c=Sound,p=c.prototype;
    p.initSound = function (type, sourceName) {
        this.sound = RES.getRes(sourceName);
        this.sound.type = type;
    };
    p.play = function (loops) {
        this.stop();
        if (loops) {
            this.channel = this.sound.play(0, -1);
        }
        else {
            this.channel = this.sound.play(0, 1);
        }
    };
    p.stop = function () {
        if (this.channel) {
            this.channel.stop();
            this.channel = null;
        }
    };
    return Sound;
}());
egret.registerClass(Sound,'Sound');
