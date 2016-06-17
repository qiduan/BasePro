/**
 * Created by liuwen on 16/6/17.
 * HTTP数据缓存
 */
class CacheData{

    constructor(){

    }

    public dataList:any = {};

    public update(type:string,obj:any){
        this.dataList[type] = obj;
    }

    public getCache(type:string):any{

        if (this.dataList[type] == null){
            return null;
        }
        return this.dataList[type];

    }

}