//面向对象编程；
function WaterFall(){}
$.extend(WaterFall.prototype,{
	init:function(){
		//设置页数；
		this.page=1;
		//结构外包围；
		this.main = $("#wrap2");
		
		//是否在加载中；
		this.loading = false;
		this.loadJson()
		.done(function(res){
			//deferred 的 done 回调 this 指向的都是 deferred 对象本身；
			//console.log(res,this);

			this.renderPage(res);
		})
		this.bindEvent();
	},
	loadJson:function(){
		var opt={
		url:"http://www.wookmark.com/api/json/popular",
		dataType:"jsonp",
		data:{page:this.page},
		//this指向实例化对象；
		context:this
		}
		return $.ajax(opt);
	},
	renderPage:function(json){
		//console.log(json);
		var html="";
		for(var i = 0;i<json.length;i++){
			var height = 400;
			if(isNaN(height)) continue;
			html+=`
					<div class="box" style="height:${height}px">
						<img src="${json[i].image}" alt=""/>
						<span>￥1,930</span>
						<em>法国总统夫人之选 法国优雅时尚腕表品牌：Michel Herbelin赫柏林-Classiques经典系列 12443/P08GO </em>
						<i>加入购物车</i>
					</div>
				  `
		}
		this.main.html(this.main.html()+html);
		
		this.sortPage();
	},
	sortPage:function(){
		var aBox = this.main.children();
		//console.log(aBox);

		var heightArray=[];
		for(var i = 0;i<aBox.length;i++){
			//第一排设置基准；
			if(i<4){
				heightArray.push(aBox.eq(i).height());
			}
		}
		this.loading = false;
	},
	bindEvent:function(){
		$(window).on("scroll",this.ifLoad.bind(this));
	},
	ifLoad(){
		//console.log(1);
		//scrollTop;
		//最后一张图片；
		//当前屏幕的高度；、
		var scrollTop = $("html,body").scrollTop();
		var clientHeight = $("html")[0].clientHeight;
		var lastBox = this.main.children(":last");
		//console.log(scrollTop,clientHeight,lastBox.offset());
		if(scrollTop+clientHeight>lastBox.offset().top){
			//加载数据；
			if(this.loading){
				return 0;
			}
			this.loading=true;
			//console.log("加载");
			this.page++;
			this.loadJson()
			.done(function(res){
			//deferred 的 done 回调 this 指向的都是 deferred 对象本身；
			//console.log(res,this);

			this.renderPage(res);
		})
		}
	}
})
var waterfall = new WaterFall();
waterfall.init();
		