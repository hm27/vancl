//商品详情，左边的移入移出效果
//移入功能
$(".det-f-lt span").mouseenter(function(){
	$(this).css({"border":"2px solid #a10000","padding":0});
	var $index = $(this).index();
	var index1 = $(this).siblings().index();//除了移入的其他的兄弟的下标
	$('.det-f-rt>div:eq(' + $index + ')').css({"display":"block"});
	$('.det-f-rt>div:eq(' + index1 + ')').css({"display":"none"});
})
//移出功能
$(".det-f-lt span").mouseleave(function(){
	$(this).css({"border":"1px solid #b4b4b4","padding":"1px"});
})

//移入大图的时候实现放大镜的效果

$('.det-f-rt>div .mark,.mark1').mouseenter(function(){
	$(this).next().css({"display":"block"});
	$(this).parent().find('.bigpic').css({"display":"block"});
})

$('.det-f-rt>div .mark,.mark1').mouseleave(function(){
	$(this).next().css({"display":"none"});
	$(this).parent().find('.bigpic').css({"display":"none"});
})
//在遮罩上的移动事件
$('.mark,.mark1').mousemove(function(evt){
	var e = evt || window.event;
	var left = e.pageX - $(this).offset().left - Math.floor($('.float').outerWidth() / 2);
	var top = e.pageY - $(this).offset().top - Math.floor($('.float').outerHeight() / 2);
	if(left <= 0){
		left = 0;
	}else if(left >= $(this).width() - $('.float').width()){
		left = $(this).width() - $('.float').width();
	}
	if(top <= 0){
		top = 0;
	}else if(top >= $(this).height() - $('.float').height()){
		top = $(this).height() - $('.float').height();
	}
	$('.float').css({"left":left,"top":top});
	//比列计算
	var pX = left / ($('.mark').width() - $('.float').width());
	var pY = top / ($('.mark',).height() - $('.float').height());
	//大图的坐标
	$('.big_pic').css({
		left : -($('.big_pic').width() - $('.bigpic').width()) * pX,
		top : -($('.big_pic').height() - $('.bigpic').height()) * pY
	})
	$('.big_pic1').css({
		left : - ($('.big_pic1').width() - $('.bigpic').width()) * pX,
		top :-($('.big_pic1').height() - $('.bigpic').height()) * pY
	})
})

//放大镜的小图选项
$(".xys").click(function(){
//	alert();
	//$(this).css("border","1px solid #a10000");
	$(this).addClass("xys5");
	$(this).siblings().removeClass("xys5");
	var val = $(this).html();
	$('.yxys').find('span').eq(0).html(val);
	
})

$('.cc').click(function(){
	$(this).addClass("cc1");
	$(this).siblings().removeClass("cc1");
	var res = $(this).find('b').html();
//	console.log(res);
	$('.yxys').find('span').eq(1).css('display',"inline-block");
	$('.yxys').find('span').eq(1).html(", "+ res);
})




//吸顶效果
var heigth = 600;
$(function(){
	$(window).scroll(function(){
		//console.log(heigth);
		var scrollTop = $(window).scrollTop();
		//console.log(scrollTop);
		if(scrollTop > heigth){
			$(".det-headx-2").css({"display":"block","z-index":1000});
		}else{
			$(".det-headx-2").css({"display":"none"});
		}
		if(scrollTop < 900){
			$('.det-headx-2 .det-headx-r').find('a').eq(0).css("color","");
		}else if(scrollTop >=900 && scrollTop < 18200){
			$('.det-headx-2 .det-headx-r').find('a').eq(0).css("color","#a10000");
			$('.det-headx-2 .det-headx-r').find('a').eq(0).siblings().css("color","");
		}else if(scrollTop >= 18200 && scrollTop < 18600){
			$('.det-headx-2 .det-headx-r').find('a').eq(1).css("color","#a10000");
			$('.det-headx-2 .det-headx-r').find('a').eq(1).siblings().css("color","");
		}else if(scrollTop >= 18600 && scrollTop < 19200){
			$('.det-headx-2 .det-headx-r').find('a').eq(2).css("color","#a10000");
			$('.det-headx-2 .det-headx-r').find('a').eq(2).siblings().css("color","");
		}
	})
})


//楼梯
$('.det-headx-2 .det-headx-r').find('a').eq(0).click(function(){
	//console.log($(this));
	$("html,body").scrollTop(900);
	$(this).css("color","#a10000");
	$(this).siblings().css("color","");
})
$('.det-headx-2 .det-headx-r').find('a').eq(1).click(function(){
	//console.log($(this));
	$("html,body").scrollTop(18300);
	$(this).css("color","#a10000");
	$(this).siblings().css("color","");
})
$('.det-headx-2 .det-headx-r').find('a').eq(2).click(function(){
	//console.log($(this));
	$("html,body").scrollTop(18700);
	$(this).css("color","#a10000");
	$(this).siblings().css("color","");
})

//点击加入购物车
$('.gm .gm-last').click(function(){
	$('.carshop').css('display','block');
})
$('.carshop .cha').click(function(){
	$('.carshop').css("display","none");
})
$('.xsl select').mouseup(function(){
	var res = $(this).find("option:selected").html();
	$('.number-1').text(res);
	var res2 = parseFloat(res * 328.00);
	$('.number-2').text(res2);
})


