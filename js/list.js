//列表页的banner部分
$.fn.extend({
	fnInit : function(id,lbtn,rbtn){
		this.oBigBox = $("#" + id);
		this.ullis = this.oBigBox.find('.ban2 li');
		this.num = this.ullis.length;
		//console.log(this.num)
		this.indexA = 0;
		this.lBtn = $("." + lbtn);
		this.rBtn = $("." + rbtn);
		this.slider();
		this.addEvent();
	},
	slider : function(){
		this.ullis.each(function(index){
			this.ullis.css("display","none");
		}.bind(this));
		this.ullis.eq(this.indexA).css("display","block");
	},
	addEvent : function(){
		this.lBtn.click(function(){
			this.indexA --;
			if(this.indexA == -1){
				this.indexA = this.num - 1;
			}
			this.slider();
		}.bind(this))
		this.rBtn.click(function(){
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slider();
		}.bind(this))
	}
})
$("#banner-list").fnInit("banner-list","lbtn2","rbtn2");
//夹克部分的请求
$.ajax({
	type:"get",
	url:"jiake.json",
	async:true,
	success : function(arr){
		//console.log(arr.length)
		for(var i = 0,len = 103;i < len;i ++){
			let str = `
				<li class="jiake-li">
					<img src="${arr[i].src}"/>
					<a href="#" title="${arr[i].name}">${arr[i].name}</a>
					<span>${arr[i].price}</span>
					<img class="jiake-new" src="img/list/new3323.png" alt="" />
				</li>
			`;
			$('.jiake').append(str);
		}
		for(var j = 103,len = arr.length;j < len;j ++){
			//console.log(arr[1].src)
			let conStr =  `
				<li class="jiake-li kaishan-li">
					<img src="${arr[j].src}"/>
					<a href="#" title="${arr[j].name}">${arr[j].name}</a>
					<span>${arr[j].price}</span>
					<img class="jiake-new" src="img/list/new3323.png" alt="" />
				</li>
			`;			
			$('.kaishan').append(conStr);
			 //console.log(conStr)
		}
		var kst = `
			<li class="jiake-li kaishan-li kaishan-li2">
				<img src="img/list/wtpd-xfdy.jpg"/>
				<a href="#" ></a>
			</li>
		`;
		$('.kaishan').append(kst);
	}
})

//羊毛大衣的请求
$.ajax({
	type:"get",
	url:"my.json",
	async:true,
	success : function(arr){
		//console.log(arr);
		for(var i = 0,len = arr.length;i < len;i ++){
			let str = `
				<li class="jiake-li ym-li">
					<img src="${arr[i].src}"/>
					<a href="#" title="${arr[i].name}">${arr[i].name}</a>
					<span>${arr[i].price}</span>
					<img class="jiake-new" src="img/list/new3323.png" alt="" />
				</li>
			`;
			$('.ym').append(str);
		}
		var kst = `
			<li class="jiake-li ym-li ym-li2">
				<img src="img/list/wtyrf.jpg"/>
				<a href="#" ></a>
			</li>
		`;
		$('.ym').append(kst);
	}	
})
//加厚款ajax的请求
$.ajax({
	type:"get",
	url:"jhk.json",
	async:true,
	success : function(arr){
		for(var i = 0,len = arr.length;i < len;i ++){
			let str = `
				<li class="jiake-li jhk-li">
					<img src="${arr[i].src}"/>
					<a href="#" title="${arr[i].name}">${arr[i].name}</a>
					<span>${arr[i].price}</span>
					<img class="jiake-new" src="img/list/new3323.png" alt="" />
				</li>
			`;
			$('.jhk').append(str);
		}
		var kst = `
			<li class="jiake-li jhk-li jhk-li2">
				<img src="img/list/cplb.jpg"/>
				<a href="#" ></a>
			</li>
		`;
		$('.jhk').append(kst);
	}
})
//皮肤衣的ajax请求
$.ajax({
	type:"get",
	url:"pfy.json",
	async:true,
	success : function(arr){
		for(var i = 0,len = arr.length;i < len;i ++){
			let str = `
					<li class="jiake-li pf-li">
						<img src="${arr[i].src}"/>
						<a href="#" title="${arr[i].name}">${arr[i].name}</a>
						<span>${arr[i].price}</span>
					</li>
				`;
			$('.pf').append(str);
		}
	}
})	

//图片阴影
//$('.jk-p').hover(function(){
//	$(this).css({"box-shadow":"0px 15px 30px rgba(0,0,0,0.1)","transform":"translateY(-2px)","transition":"0.2s"});
//},function(){
//	$(this).css({"box-shadow":"0","transform":0,"transition":"0"})
//})
//回到顶部的事件
$(window).scroll(function(){
	$('.hui-list').css("display","block");
})
//点击回到顶部按钮，回到顶部事件
$('.hui-list').click(function(){
	$('html,body').animate({"scrollTop":0},50);
})


