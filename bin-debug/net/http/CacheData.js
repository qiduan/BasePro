/**
 * Created by liuwen on 16/6/17.
 * HTTP数据缓存
 */
var CacheData = (function () {
    function CacheData() {
        this.dataList = {};
    }
    var d = __define,c=CacheData,p=c.prototype;
    p.update = function (type, obj) {
        this.dataList[type] = obj;
    };
    p.getCache = function (type) {
        if (this.dataList[type] == null) {
            return null;
        }
        return this.dataList[type];
    };
    return CacheData;
}());
egret.registerClass(CacheData,'CacheData');
