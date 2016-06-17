/**
 * Created by liuwen on 16/6/17.
 */
class LoginCtrl extends BaseClass{

    constructor(){
        super();
    }

    /**登录*/
    public loginIn(data:any):void{
        Game.MsgManager.send(EventConstant.Login,data);
    }

    /**注销*/
    public loginOut():void{

    }



}