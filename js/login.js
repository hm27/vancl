//登录头部选项卡功能实现
$('.for-span-k').click(function(){
	//alert();
	$(this).css({"background":"#b42025","color":"#ecf1ff"});
	$(this).prev().css({"background":"#f5f5f5","color":"#656565"});
	$(this).parent().parent().find('.for-bot2').css("display","block").end().find('.for-bot1').css("display","none");
//	$(this).parent().parent().find('.for-bot1').css("display","none");
})
$('.for-span-p').click(function(){
	//alert();
	$(this).css({"background":"#b42025","color":"#ecf1ff"});
	$(this).next().css({"background":"#f5f5f5","color":"#656565"});
	$(this).parent().parent().find('.for-bot1').css("display","block").end().find('.for-bot2').css("display","none");
//	$(this).parent().parent().find('.for-bot2').css("display","none");
})
//登录按钮hover的效果
$('.dl-1,.dl-2').hover(function(){
	$(this).css("font-weight","900");
},function(){
	$(this).css("font-weight","100");
})

//验证码的功能
Code();
var code;
function Code(){
	code = "";
	var codeLength=6;//长度
	var codeStr = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');										
	for(var i = 0;i < codeLength;i ++){
		var codeRondom = Math.floor(Math.random()*62);
		code += codeStr[codeRondom];
	}
	$('.yan-spa').html(code);
}
//console.log(code);
//点击验证码刷新当前页面
$('.yan-spa2').click(function(){
	Code();
})

//hover看不清，换一张的效果
$('.yan-spa2').hover(function(){
	$(this).css({"color":"red","text-decoration":"underline"});
},function(){
	$(this).css({"color":"","text-decoration":"none"});
})
 
//hover验证码的效果
$('.phone-spa').hover(function(){
	$(this).css({"text-decoration":"underline","cursor":"pointer"});
},function(){
	$(this).css({"text-decoration":"none"});
})
 
 
 
 


//获取注册的信息
var crr = getCookie("username");
$('.dl-1').click(function(){
	for(var i = 0,len = crr.length;i < len; i ++){
		if($('#uname').val() == crr[i].uname){
			if($('#upwd').val() == crr[i].upwd){
				window.open("index.html");
			}else{
				alert("密码有误!");
				return false;
			}
		}
	}
})




//点击注册跳转页面
$('.lg-zc').click(function(){
	window.open("register.html");
})
