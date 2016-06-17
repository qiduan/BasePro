/**
 * Created by liuwen on 15/11/3.
 */
class Sound{

    public sound:egret.Sound;
    public channel:egret.SoundChannel;
    constructor(sourceName:string,type:string){
        this.initSound(type,sourceName);
    }

    public initSound(type:string,sourceName:string):void{
        this.sound = RES.getRes(sourceName);
        this.sound.type = type;
    }

    public play(loops: boolean):void{
        this.stop();
        if(loops){
            this.channel = this.sound.play(0,-1);
        }else{
            this.channel = this.sound.play(0,1);
        }
    }

    public stop(){
        if(this.channel){
            this.channel.stop();
            this.channel = null;
        }
    }
}