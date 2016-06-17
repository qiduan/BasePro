/**
 * Created by liuwen on 16/2/20.
 */
class SoundManager extends BaseClass{

    constructor(){
        super();
    }


    public  soundList:any = {};

    //播放音效
    public  playEffectSound(name:string):void{
        if(this.soundList[name]){
            this.soundList[name].play();
        }else{
            var soundSource = name+"_mp3";
            var sound:Sound = new Sound(soundSource,egret.Sound.EFFECT);
            this.soundList[name] = sound;
            sound.play(false);
        }
    }
    //播放音乐
    public  playMusicSound(name:string):void{
        if(this.soundList[name]){
            this.soundList[name].play();
        }else{
            var soundSource = name+"_mp3";
            var sound:Sound = new Sound(soundSource,egret.Sound.MUSIC);
            this.soundList[name] = sound;
            sound.play(false);
        }
    }


}