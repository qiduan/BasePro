/**
 * Created by liuwen on 16/6/4.
 * 场景基类
 */
class BaseScene extends eui.Component {
    /**
     * 构造函数
     */
    public constructor() {
        super();
    }

    public groupName:string;

    /**初始化舞台*/
    public initSkin(skinName:string){
        this.skinName = Global.skinPath+skinName+"Skin.exml";
        this.once(eui.UIEvent.CREATION_COMPLETE,this.onCreateComplete,this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
    }

    /**添加组件*/
    public partJson: any = {};
    public partAdded(partName: string,instance: any): void {
        Log.trace("加载组件===>"+partName);
        super.partAdded(partName,instance);
        this.partJson[partName] = instance;
    }

    /**组件创建完成*/
    public onCreateComplete(): void {
        Log.trace(this.skinName+"组件加载完成舞台");
    }

    public callBack:Function;
    /**加入舞台,初始化UI数据*/
    public onAddToStage(): void {
        Log.trace(this.skinName+"加入舞台");
        this.callBack();
    }

    /**移除舞台*/
    public onRemoveFromStage(): void {
        Log.trace(this.skinName+"移除舞台");
    }

    /**
     * 进入Scene调用
     */
    public onEnter():void {

    }
    /**
     * 退出Scene调用
     */
    public onExit():void {

    }


}