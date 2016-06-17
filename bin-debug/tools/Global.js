/**
 * Created by liuwen on 16/6/4.
 */
var Global = (function () {
    function Global() {
    }
    var d = __define,c=Global,p=c.prototype;
    //初始化分享,调用一次就够了
    Global.initShare = function () {
        var localUrl = window.location.href;
        localUrl = localUrl.split("#")[0];
        var encode_url = Global.LenEncodeUlr(localUrl);
        //获取签名的地址
        var url = Global.ServerUrl + "interface.php?act=getSignPackage&shareUrl=" + encode_url;
        var urlLoader = new egret.URLLoader();
        var req = new egret.URLRequest(url);
        urlLoader.load(req);
        req.method = egret.URLRequestMethod.POST;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (e) {
            var signPackage = JSON.parse(e.target.data);
            var bodyConfig = new BodyConfig();
            bodyConfig.debug = true; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            bodyConfig.appId = signPackage.appId; // 必填，公众号的唯一标识
            bodyConfig.timestamp = signPackage.timestamp; // 必填，生成签名的时间戳
            bodyConfig.nonceStr = signPackage.nonceStr; // 必填，生成签名的随机串
            bodyConfig.signature = signPackage.signature; // 必填，签名，见附录1
            bodyConfig.jsApiList = [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard' //查看微信卡包中的卡券接口
            ];
            //alert("appId="+ bodyConfig.appId);
            wx.config(bodyConfig);
            wx.error(function (res) {
                console.log(res);
                //alert("验证失败");
            });
        }, this);
    };
    //分享的具体信息，改变信息后再调用一次
    Global.setShareInfo = function () {
        var shareTitle = Global.shareTitle;
        var shareContent = Global.shareContent;
        var shareLink = Global.shareLink;
        var shareImg = Global.shareImg;
        wx.ready(function () {
            //分享到朋友
            var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
            bodyMenuShareAppMessage.desc = shareContent;
            bodyMenuShareAppMessage.title = shareTitle;
            bodyMenuShareAppMessage.link = shareLink;
            bodyMenuShareAppMessage.imgUrl = shareImg;
            bodyMenuShareAppMessage.trigger = function () {
                //alert("用户点击发送给朋友1");
            };
            bodyMenuShareAppMessage.success = function () {
                //Global.isGoToPerson = true;
                //alert("发送给朋友成功===1"+Global.isGetReward);
            };
            bodyMenuShareAppMessage.cancel = function () {
                //alert('已取消');
            };
            /*bodyMenuShareAppMessage.fail = (res)=> {
             alert(JSON.stringify(res));
             };*/
            wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
            //分享到朋友圈
            var bodyMenuShareTimeline = new BodyMenuShareTimeline();
            bodyMenuShareTimeline.title = Global.shareTimelineTitle;
            bodyMenuShareTimeline.link = shareLink;
            bodyMenuShareTimeline.imgUrl = shareImg;
            bodyMenuShareTimeline.success = function () {
                //alert("分享成功");
                //Global.isGoToPerson = true;
            };
            wx.onMenuShareTimeline(bodyMenuShareTimeline);
        });
    };
    /**
     * 编码网址
     **/
    Global.LenEncodeUlr = function (url) {
        return encodeURIComponent(url).replace(/!/g, '%21').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    };
    /**场景皮肤文件夹路径*/
    Global.skinPath = "resource/skins/scene/";
    /**创建动画的工厂*/
    Global._mcFactory = new egret.MovieClipDataFactory();
    /**服务器地址*/
    Global.ServerUrl = "服务器地址";
    Global.shareTitle = "分享好友的标题";
    Global.shareContent = "分享好友的内容";
    Global.shareLink = "分享的链接";
    Global.shareImg = Global.ServerUrl + "share.png";
    Global.shareTimelineTitle = "分享朋友圈的标题";
    return Global;
}());
egret.registerClass(Global,'Global');
