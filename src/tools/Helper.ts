/**
 * Created by liuwen on 16/6/15.
 */
class Helper{
    public static setAnchor(obj:any,an_x:number,an_y:number){
        //设置了九宫格无效,设施了cashanbitmmap无效
        obj.anchorOffsetX = obj.width*an_x;
        obj.anchorOffsetY = obj.height*an_y;
        obj.x = obj.x + obj.anchorOffsetX;
        obj.y = obj.y + obj.anchorOffsetY;
    }
    /**设置居中*/
    public static setCenter(obj:any){
        obj.x = (Game.StageUtils.getUIStage().width - obj.width)/2;
        obj.y = (Game.StageUtils.getUIStage().height - obj.height)/2;
    }
}