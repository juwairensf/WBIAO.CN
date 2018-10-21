function Banner(){
	var aItem = document.querySelectorAll(".banner li");
	var oLeft = document.getElementById("left");
	var oRight = document.getElementById("right");
	var oSpan = document.querySelectorAll("#btnlist span");
	
	var nowIndex = 0; //当前显示的下标；
	
	//1、手动循环；
	//0~3；
	
	
	//右侧按钮点击 是 下标自增；
	//左侧按钮点击 是 下标自减；
	//自增自减都有头；
	
	oRight.onclick = function() {
		if (nowIndex == aItem.length - 1) {
			nowIndex = 0;
		} else {
			nowIndex++;
		}
		animate();
	}
	oLeft.onclick = function() {
		if (nowIndex == 0) {
			nowIndex = aItem.length - 1;
		} else {
			nowIndex--;
		}
		animate();
	}
	for (let i = 0; i < oSpan.length; i++) {
		oSpan[i].onmouseover = function() {
			nowIndex = i;
			animate();
		}
	}
	
	function animate() {
		//动画效果；
		for (var i = 0; i < aItem.length; i++) {
			aItem[i].className = "";
			oSpan[i].className = "";
		}
		aItem[nowIndex].className = "active";
		oSpan[nowIndex].className = "active";
	}
	//自动播放；
	timer=setInterval(oRight.onclick, 5000);
}	
Banner();