/**
 * Created by liuwen on 15/10/30.
 */

class Animator{

    constructor(name:string,mcName:string){
        this.initAni(name,mcName);
    }

    public _mc:egret.MovieClip;

    public  initAni(name:string,mcName:string):void{
        var dataJson = name+"_json";
        var texturePng = name+"_png";
        var data = RES.getRes(dataJson);//获取描述
        var texture = RES.getRes(texturePng);//获取大图
        Global._mcFactory.mcDataSet = data;
        Global._mcFactory.texture = texture;
        this._mc = new egret.MovieClip(Global._mcFactory.generateMovieClipData(mcName));
    }

    public play(loop:boolean):void{
        if(loop){
            this._mc.play(-1);
        }else{
            this._mc.play(1);
        }
    }

    public setFrameRate(frame:number){
        this._mc.frameRate = frame;
    }



}