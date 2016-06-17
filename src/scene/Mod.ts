/**
 * Created by liuwen on 16/6/17.
 */
/**
 * Created by liuwen on 16/6/17.
 */
class Mod extends BaseScene{
    public constructor(){
        super();
        this.callBack = this.initUI;
        super.initSkin("LoginScene");
    }

    /**初始化UI属性*/
    public initUI(): void {
        this.addEventLis();
        Log.trace("初始化LoginScene数据");
    }

    /**添加事件监听*/
    public addEventLis(): void {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
    }

    /**移除事件监听*/
    public removeEventLis(): void {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
    }

    /**点击事件*/
    public onClick(event: egret.TouchEvent): void {
        switch(event.target) {

        }
    }

    /**进入场景*/
    public onEnter():void{
        Log.trace("MainScene加入显示列表");
        Game.StageUtils.getUIStage().addChild(this);
    }

    /**退出场景*/
    public onExit():void{
        this.removeEventLis();
        Game.StageUtils.getUIStage().removeChild(this);
    }

}
