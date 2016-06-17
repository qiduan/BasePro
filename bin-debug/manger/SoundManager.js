/**
 * Created by liuwen on 16/2/20.
 */
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        _super.call(this);
        this.soundList = {};
    }
    var d = __define,c=SoundManager,p=c.prototype;
    //播放音效
    p.playEffectSound = function (name) {
        if (this.soundList[name]) {
            this.soundList[name].play();
        }
        else {
            var soundSource = name + "_mp3";
            var sound = new Sound(soundSource, egret.Sound.EFFECT);
            this.soundList[name] = sound;
            sound.play(false);
        }
    };
    //播放音乐
    p.playMusicSound = function (name) {
        if (this.soundList[name]) {
            this.soundList[name].play();
        }
        else {
            var soundSource = name + "_mp3";
            var sound = new Sound(soundSource, egret.Sound.MUSIC);
            this.soundList[name] = sound;
            sound.play(false);
        }
    };
    return SoundManager;
}(BaseClass));
egret.registerClass(SoundManager,'SoundManager');
