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
 
//用户名及其他文本框正则验证的功能
var $uname;
var $upwd;
$('#uname').blur(function(){
	$(this).css('color','#000');
	$uname = $(this).val();
	//console.log($uname);
	var reg = /^\w{1,18}|[\u4e00-\u9fa5]{1,18}$/;//1-18任意字符
	var res = reg.test($uname);
	//console.log(res);
	if($uname == ""){
		$(this).next().html("");
	}else if(res){
		$(this).next().html("");
	}
	if(!res){
		$(this).next().html("1-18任意字符");
		$(this).next().css({'color':'red','font-size':'12px'});
	}
})
$('#upwd').blur(function(){
	$(this).css('color','#000')
	$upwd = $(this).val();
	console.log($upwd);
	var reg = /^.{6,16}$/;//数字、字符、下划线6-16位
	var res = reg.test($upwd);
	//console.log(res);
	if($upwd == ""){
		$(this).next().html("");
	}else if(res){
		$(this).next().html("");
	}
	if(!res){
		$(this).next().html("6-16位字符, 可使用字母、数字或符号的组合");
		$(this).next().css({'color':'red','font-size':'12px'});
	}
})
$(".dl-1").click(function(){
	var res1 = $('#uname').next().html();
	var res2 = $('#upwd').next().html();
	if(res1 == res2){
		window.open("index.html");
	}else{
		return false;
	}
})
