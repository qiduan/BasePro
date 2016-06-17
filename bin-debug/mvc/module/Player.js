/**
 * Created by liuwen on 16/6/15.
 */
var Player = (function () {
    function Player() {
    }
    var d = __define,c=Player,p=c.prototype;
    d(p, "atk"
        ,function () {
            return this._atk;
        }
        ,function (value) {
            this._atk = value;
        }
    );
    d(p, "def"
        ,function () {
            return this._def;
        }
        ,function (value) {
            this._def = value;
        }
    );
    d(p, "crt"
        ,function () {
            return this._crt;
        }
        ,function (value) {
            this._crt = value;
        }
    );
    d(p, "hp"
        ,function () {
            return this._hp;
        }
        ,function (value) {
            this._hp = value;
        }
    );
    d(p, "mp"
        ,function () {
            return this._mp;
        }
        ,function (value) {
            this._mp = value;
        }
    );
    d(p, "dod"
        ,function () {
            return this._dod;
        }
        ,function (value) {
            this._dod = value;
        }
    );
    d(p, "headId"
        ,function () {
            return this._headId;
        }
        ,function (value) {
            this._headId = value;
        }
    );
    d(p, "level"
        ,function () {
            return this._level;
        }
        ,function (value) {
            this._level = value;
        }
    );
    d(p, "exp"
        ,function () {
            return this._exp;
        }
        ,function (value) {
            this._exp = value;
        }
    );
    d(p, "spirit"
        ,function () {
            return this._spirit;
        }
        ,function (value) {
            this._spirit = value;
        }
    );
    d(p, "gold"
        ,function () {
            return this._gold;
        }
        ,function (value) {
            this._gold = value;
        }
    );
    d(p, "diamonds"
        ,function () {
            return this._diamonds;
        }
        ,function (value) {
            this._diamonds = value;
        }
    );
    return Player;
}());
egret.registerClass(Player,'Player');
