/**
 * Created by liuwen on 16/6/15.
 */
var Helper = (function () {
    function Helper() {
    }
    var d = __define,c=Helper,p=c.prototype;
    Helper.setAnchor = function (obj, an_x, an_y) {
        //设置了九宫格无效,设施了cashanbitmmap无效
        obj.anchorOffsetX = obj.width * an_x;
        obj.anchorOffsetY = obj.height * an_y;
        obj.x = obj.x + obj.anchorOffsetX;
        obj.y = obj.y + obj.anchorOffsetY;
    };
    /**设置居中*/
    Helper.setCenter = function (obj) {
        obj.x = (Game.StageUtils.getUIStage().width - obj.width) / 2;
        obj.y = (Game.StageUtils.getUIStage().height - obj.height) / 2;
    };
    return Helper;
}());
egret.registerClass(Helper,'Helper');
