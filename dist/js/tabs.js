function Tabs(){
	var aItem = document.querySelectorAll(".con3-cm figure");
	var oLeft = document.getElementById("left1");
	var oRight = document.getElementById("right1");
	var oSpan = document.querySelectorAll(".con3-list span");
	
	var nowIndex = 0; //当前显示的下标；
	
	
	
	
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
		aItem[nowIndex].className = "active-x";
		oSpan[nowIndex].className = "active-x";
	}
}
Tabs();
