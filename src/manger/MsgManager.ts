/**
 * Created by liuwen on 16/6/17.
 */
class MsgManager extends BaseClass{

    constructor(){
        super();
        this.json =  new URLVariables();
    }

    private json:URLVariables;

    public send(type:string,data:any):void{
        this.json.variables = data;
        Game.Http.send(type,this.json);
    }
}