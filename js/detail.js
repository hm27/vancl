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
//吸顶效果
var heigth = 600;
$(function(){
	$(window).scroll(function(){
		//console.log(heigth);
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if(scrollTop > heigth){
			$(".det-headx-2").css({"display":"block","z-index":1000});
		}else{
			$(".det-headx-2").css({"display":"none"});
		}
	})
})