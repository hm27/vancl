//首页head的内容
$('.top ul li:eq(4),li:eq(5)').hover(function(){
	$(this).find('a').css('color','#b71c20');
},function(){
	$(this).find('a').css('color',"");
})
$('.top ul li:last span:eq(0)').hover(function(){
	$(this).find('.wxer')
		   .css("display","block");
},function(){
	$(this).find('.wxer')
		   .css("display","none");
})

//主导航功能
$('.navbar li').each(function(){
	$(this).hover(function(){
		$(this).find('a').css("color","#b71c22");
		//console.log($(this).find('.erji'))
		$(this).find('a div.erji').slideDown(500);		
	},function(){
		$(this).find('a').css("color","");
		$(this).find('a div.erji').slideUp(500);
	})
})
//banner部分
$.extend({
	fnInit : function(id){			
		//获取大盒子
		this.oBigBox = $(id);
		//获取所有的大图
		this.ullis = this.oBigBox.children('.ban').find('li');
		console.log(this.ullis);
		//获取大图的数量
		this.num = this.ullis.length;
		//console.log(this.num);
		//创建ol
		this.ollis = this.createEle();
		//console.log(this.ollis);
		//设置当前的下标
		this.indexA = 0;
		this.slider();
		this.addEvent();
		
		this.timer = null;
		this.autoPlay();
		
	},
	createEle : function(){
		var ol = $("<ol class='ol'></ol>");
		var arr = [];
		// str = "";
		for(var i = 0;i < this.num;i ++){
			var str = `<li class='ollis'></li>`;											
			ol.append(str);
			arr.push(str);
		}
		this.oBigBox.append(ol);
		return arr;
	},
	addEvent : function(){
		//按钮事件
		$('#lbtn').click(function(){
			this.indexA --;
			if(this.indexA == -1){
				this.indexA = this.num - 1;
			}
			this.slider();
		}.bind(this));
		$('#rbtn').click(function(){
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slider();
			
		}.bind(this));
		//小圆点移入事件
		var that = this;
		$(".ollis").mouseenter(function(){
			//alert( $(this).index() )
			that.indexA = $(this).index();
			//console.log(this.indexA);
			that.slider();
		});		
	},
	slider : function(){
		//alert()
		//设置样式
		this.ullis.each(function(index){
			this.ullis.css("display","none");
			//console.log(this.ollis);
		}.bind(this))
		$(".ollis").each(function(index){
			$(this).css("background","#dddddf");
		});
		//console.log(this.ullis[0]);
		this.ullis.eq(this.indexA).css("display","block");
		$('.ollis').eq(this.indexA).css("background","#cf0006");
	},
	autoPlay : function(){
		clearInterval(this.timer);
		var that = this;
		this.timer = setInterval(()=>{
			this.indexA ++;
			console.log(this.indexA)
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slider();
		},2000);
		//console.log(this.oBigBox)
		this.oBigBox.mouseenter(function(){
			clearInterval(this.timer);
		}.bind(this))
		this.oBigBox.mouseleave(function(){
			this.autoPlay();
		}.bind(this))
//		this.oBigBox.hover(function(){
//			//alert()
//			clearInterval(that.timer);
//		},function(){
//			this.autoPlay()
//		}.bind(this))
	}
})
$.fnInit('#banner');


//回到顶部部分
$('.hui .hui-last').click(function(){
	$('html,body').animate({"scrollTop":0},2000);
})
//优先推荐部分使用ajax请求
$.ajax({
		type:"get",
		url:"tpic.json",
		async:true,
		success : function(arr){
			//console.log(arr[0]);
			var str= `
				<p>
					<a href="#">
						<img src="${arr[0]}" alt="" />
					</a>
				</p>
			`;
			$('.y-t1').prepend(str);
		}
	})
//下装推荐ajax请求
$.ajax({
	type:"get",
	url:"zpic.json",
	async:true,
	success : function(arr){
		var brr = [];
		for(var i = 0,len = arr.length;i < len;i ++){
			console.log(arr);
			var str= `
				<p>
					<a href="#">
						<img src="${arr[i]}" alt="" />
					</a>
				</p>
			`;
			brr.push(str);					
		}
		$('.x-z2').prepend(brr[0]);
		$('.x-z3').prepend(brr[1]);
		$('.x-z4').prepend(brr[2]);
		$('.x-z1').prepend(brr[3]);
		//console.log(brr[0]);				
	}
})
