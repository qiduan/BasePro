/**
 * Created by liuwen on 16/6/15.
 */
class Player{
    get atk():number {
        return this._atk;
    }

    set atk(value:number) {
        this._atk = value;
    }

    get def():number {
        return this._def;
    }

    set def(value:number) {
        this._def = value;
    }

    get crt():number {
        return this._crt;
    }

    set crt(value:number) {
        this._crt = value;
    }

    get hp():number {
        return this._hp;
    }

    set hp(value:number) {
        this._hp = value;
    }

    get mp():number {
        return this._mp;
    }

    set mp(value:number) {
        this._mp = value;
    }

    get dod():number {
        return this._dod;
    }

    set dod(value:number) {
        this._dod = value;
    }

    get headId():number {
        return this._headId;
    }

    set headId(value:number) {
        this._headId = value;
    }

    get level():number {
        return this._level;
    }

    set level(value:number) {
        this._level = value;
    }

    get exp():number {
        return this._exp;
    }

    set exp(value:number) {
        this._exp = value;
    }

    get spirit():number {
        return this._spirit;
    }

    set spirit(value:number) {
        this._spirit = value;
    }

    get gold():number {
        return this._gold;
    }

    set gold(value:number) {
        this._gold = value;
    }

    get diamonds():number {
        return this._diamonds;
    }

    set diamonds(value:number) {
        this._diamonds = value;
    }

    /**攻击*/
    private _atk:number;
    /**防御*/
    private _def:number;
    /**暴击*/
    private _crt:number;
    /**生命值*/
    private _hp:number;
    /**魔法值*/
    private _mp:number;
    /**闪避值*/
    private _dod:number;
    /**头像ID,固定头像的选择*/
    private _headId:number;
    /**人物等级*/
    private _level:number;
    /**人物经验值*/
    private _exp:number;
    /**人物体力*/
    private _spirit:number;
    /**人物金币*/
    private _gold:number;
    /**人物元宝*/
    private _diamonds:number;

    /**人物技能*/
    /**人物装备*/
    /**人物道具*/

    /**人物穿戴的装备*/


}