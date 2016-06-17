/**
 * Created by liuwen on 16/6/4.
 */
class Global{
    /**场景皮肤文件夹路径*/
    public static skinPath = "resource/skins/scene/";
    /**创建动画的工厂*/
    public static _mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory();
    /**服务器地址*/
    public static ServerUrl:string = "服务器地址";
    public static shareTitle = "分享好友的标题";
    public static shareContent = "分享好友的内容";
    public static shareLink = "分享的链接";
    public static shareImg = Global.ServerUrl+"share.png";
    public static shareTimelineTitle = "分享朋友圈的标题";

    //初始化分享,调用一次就够了
    public static initShare():void {
        var localUrl = window.location.href;
        localUrl = localUrl.split("#")[0];
        var encode_url = Global.LenEncodeUlr(localUrl);
        //获取签名的地址
        var url = Global.ServerUrl+"interface.php?act=getSignPackage&shareUrl="+encode_url;
        var urlLoader = new egret.URLLoader();
        var req = new egret.URLRequest(url);
        urlLoader.load(req);
        req.method = egret.URLRequestMethod.POST;
        urlLoader.addEventListener(egret.Event.COMPLETE, (e)=> {
            var signPackage:SignPackage  = <SignPackage>JSON.parse(e.target.data);
            var bodyConfig = new BodyConfig();
            bodyConfig.debug = true;// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            bodyConfig.appId = signPackage.appId;// 必填，公众号的唯一标识
            bodyConfig.timestamp = signPackage.timestamp;// 必填，生成签名的时间戳
            bodyConfig.nonceStr = signPackage.nonceStr;// 必填，生成签名的随机串
            bodyConfig.signature = signPackage.signature;// 必填，签名，见附录1
            bodyConfig.jsApiList = [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2// 所有要调用的 API 都要加到这个列表中
                'checkJsApi',//判断当前客户端是否支持指定JS接口
                'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
                'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
                'onMenuShareQQ',//获取“分享到QQ”按钮点击状态及自定义分享内容接口
                'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
                'hideMenuItems',//批量隐藏功能按钮接口
                'showMenuItems',//批量显示功能按钮接口
                'hideAllNonBaseMenuItem',//隐藏所有非基础按钮接口
                'showAllNonBaseMenuItem',//显示所有功能按钮接口
                'translateVoice',//识别音频并返回识别结果接口
                'startRecord',//开始录音接口
                'stopRecord',//停止录音接口
                'playVoice',//播放语音接口
                'pauseVoice',//暂停播放接口
                'stopVoice',//停止播放接口
                'uploadVoice',//上传语音接口
                'downloadVoice',//下载语音接口
                'chooseImage',//拍照或从手机相册中选图接口
                'previewImage',//预览图片接口
                'uploadImage',//上传图片接口
                'downloadImage',//下载图片接口
                'getNetworkType',//获取网络状态接口
                'openLocation',//使用微信内置地图查看位置接口
                'getLocation',//获取地理位置接口
                'hideOptionMenu',//隐藏右上角菜单接口
                'showOptionMenu',//显示右上角菜单接口
                'closeWindow',//关闭当前网页窗口接口
                'scanQRCode',//调起微信扫一扫接口
                'chooseWXPay',//发起一个微信支付请求
                'openProductSpecificView',//跳转微信商品页接口
                'addCard',//批量添加卡券接口
                'chooseCard',//调起适用于门店的卡券列表并获取用户选择列表
                'openCard'//查看微信卡包中的卡券接口
            ];
            //alert("appId="+ bodyConfig.appId);
            wx.config(bodyConfig);
            wx.error(function (res) {
                console.log(res);
                //alert("验证失败");
            });
        }, this);
    }
    //分享的具体信息，改变信息后再调用一次
    public static setShareInfo():void{
        var shareTitle = Global.shareTitle;
        var shareContent = Global.shareContent;
        var shareLink = Global.shareLink;
        var shareImg = Global.shareImg;
        wx.ready(function(){
            //分享到朋友
            var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
            bodyMenuShareAppMessage.desc = shareContent;
            bodyMenuShareAppMessage.title = shareTitle;
            bodyMenuShareAppMessage.link = shareLink;
            bodyMenuShareAppMessage.imgUrl = shareImg;
            bodyMenuShareAppMessage.trigger = ()=> {
                //alert("用户点击发送给朋友1");
            };
            bodyMenuShareAppMessage.success = ()=> {
                //Global.isGoToPerson = true;
                //alert("发送给朋友成功===1"+Global.isGetReward);
            };
            bodyMenuShareAppMessage.cancel = ()=> {
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
            bodyMenuShareTimeline.success = ()=> {
                //alert("分享成功");
                //Global.isGoToPerson = true;
            };
            wx.onMenuShareTimeline(bodyMenuShareTimeline);


        });
    }
    /**
     * 编码网址
     **/
    private static LenEncodeUlr(url:string):string{
        return encodeURIComponent(url).replace(/!/g, '%21').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    }
}
interface SignPackage {
    appId:string;
    nonceStr:string;
    timestamp:number;
    signature:string;
    url:string;
}