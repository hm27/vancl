//注册的验证码的功能
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
	$('.yzm-spa').html(code);
}
//console.log(code);
//点击验证码刷新当前页面
$('.yzm-spa').click(function(){
	Code();
})
//验证框输入是否正确
var _yzm;
$('#yzm').blur(function(){		
	if($(this).val() == ""){
		$('.yzm-spa').next().css({"display":"block","width":"108px","height":"20px","font-size":"12px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center","position":"relative"});
	}else if($(this).val() != code){
		$('.yzm-spa').next().html("验证码输入错误！");
	}else if($(this).val() == code){
		$('.yzm-spa').next().css("display","none");
	}	
	 _yzm = $(this).val() == code;
	//console.log( _yzm);
})

//手机号框的验证码
var _phone2;
$('.phone2-spa').hover(function(){
	$(this).css("text-decoration","underline");
},function(){
	$(this).css("text-decoration","none");
})
$("#phone2").focus(function(){	
	$(this).next().html("请填写真实手机号, 并进行验证");	
	$(this).next().css({"color":"#999999","border":0,"background":0})
})
var $phone2;
$("#phone2").blur(function(){
	$(this).css('color','#000');
	$phone2 = $(this).val();
	var reg = /^1[34578]\d{9}$/;
	var res = reg.test($phone2);
	//console.log(res);
	if($phone2 == ""){
		$(this).next().html("");
	}else if(!res){
		$(this).next().html("请输入有效的手机号");
		$(this).next().css({"display":"block","height":"20px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center"});
	}else if(res){
		$(this).next().html("");
	}
	_phone2 = res;
	//console.log(_phone2);
})
//console.log($phone2);
//用户名框的验证
var $zpe;
var _zpe;
$("#zpe").focus(function(){
	$(this).next().html("请填写容易记忆的用户名");	
	$(this).next().css({"color":"#999999","border":0,"background":0});
})
$("#zpe").blur(function(){
	$zpe = $(this).val();
	var reg = /^\w{1,18}|[\u4e00-\u9fa5]{1,18}$/;//1-18任意字符
	var res = reg.test($zpe);
	if($zpe == ""){
		$(this).next().html("用户名必须填写！");
		$(this).next().css({"display":"block","height":"20px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center"});		
	}else if(res){
		var flag = true;
		//判断用户名是否被注册
		for(var j = 0,len = brr.length;j < len;j ++){
			if($zpe == $arr[j].uname){
				$(this).next().html("此用户名已注册!");
				$(this).next().css({"display":"block","height":"20px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center"});
				flag = false;
			}
		}				
		if(flag){
			$(this).next().html("");
			_zpe = res;
		}		
	}
	
	
	
	
	
	
})
//初次填写密码
var $spwd;
var _spwd;
$("#spwd").focus(function(){
	$(this).next().html("6-16位字符, 可使用字母、数字或符号的组合");
	$(this).next().css({"color":"#999999","border":0,"background":0});
})
$("#spwd").blur(function(){
	$spwd = $(this).val();
	var reg = /^.{6,20}$/;
	var res = reg.test($spwd);
	if($spwd == ""){
		$(this).next().html("");
	}else if(res){
		$(this).next().html("");
	}else if(!res){
		$(this).next().html("密码必须大于6位,请重新输入");
		$(this).next().css({"display":"block","height":"20px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center"});
	}
	_spwd = res;
})
//console.log($spwd);
//再次填写密码
var $zspwd;
var _zspwd;
$("#zspwd").focus(function(){
	$(this).next().html("请再次输入登录密码, 两次输入必须一致");
	$(this).next().css({"color":"#999999","border":0,"background":0});
})
$("#zspwd").blur(function(){
	//console.log($spwd);
	$zspwd = $(this).val();
	if($zspwd == ""){
		$(this).next().html("");
	}else if($zspwd != $spwd){
		$(this).next().html("两次密码输入不一致, 请重新输入");
		$(this).next().css({"display":"block","height":"20px","color":"#a20000","background":"#f8f8f8","border":"1px solid #fcd4d5","z-index":99,"text-align":"center"});	
	}else if($zspwd == $spwd){
		$(this).next().html("");
	}	
	_zspwd = $zspwd == $spwd;
	//console.log($zpe);
})
//复选框是否被选中
var $cx;
$("#cx").click(function(){
	//验证所有文本框内容都正确的时候才可以点击协议
	if(_yzm && _phone2 && _spwd && _zpe && _zspwd){
		$(this).parent().next().toggleClass('active1');
	}else{
		alert("请正确填写以上内容！");
		return false;
	}
	
})
//协议的下划线
$(".for-spa-a,.zc-btn").hover(function(){
	$(this).css("text-decoration","underline");
},function(){
	$(this).css("text-decoration","none");
})

//点击登录，跳转
$('.zc-dl').click(function(){
	window.open("login.html");
})


//注册页的cookie使用
//创建一个空数组，放每次注册用户的信息
var $arr = [];
var brr = getCookie("username");
console.log(brr);
if(brr.length != 0){
	$arr = brr;
}
//console.log($arr[3].uname);
$('.zc-btn').click(function(){
	if($('#cx').prop("checked")){
		//创建一个json对象，存每个用户的完整信息				
		var json = {
				"phone": $phone2,
				"uname": $zpe,
				"upwd": $spwd
			}
		$arr.push(json);
		console.log($arr);
		setCookie( "username",JSON.stringify( $arr ) ,3 );
		alert("注册成功，可以去登录了!");
		return false;
	}else{
		alert("请认真阅读协议内容！");
		return false;
	}	
//	return false;
})
