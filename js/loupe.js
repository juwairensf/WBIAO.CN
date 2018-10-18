// 放大镜
var oSmall=document.querySelector(".min_img");
var oSmallImg=document.querySelector(".img_show");
var oFrame=document.querySelector(".min_quare");
var oBig=document.querySelector(".max_img");
var oBigImg=oBig.children[0];

// console.log(oSmall,oSmallImg,oFrame,oBig,oBigImg)
oSmall.onmouseenter=function(){
    // 小框和大图都显示出来
    oBig.style.display="block";
    oFrame.style.display="block";
    oSmallImg.style.opacity= 0.3;
}
oSmall.onmouseleave=function(){
    // 小框和大图都隐藏
    oBig.style.display="none";
    oFrame.style.display="none";
    oSmallImg.style.opacity=1;
}
oSmall.onmousemove=function(event){
    console.log(1);
    // 1、获取定位的x,y值
    var e=event || window.event;
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    // 2、给元素设置left值和top值
    var nLeft=offsetX-50;
    var nTop=offsetY-50;
    // console.log(nLeft,nTop)
    // 边界检测：  最大值  最小值
        // 最小值
    nLeft = nLeft < 0 ? 0 : nLeft;
    nTop = nTop < 0 ? 0 : nTop;

        // 最大值
    var maxLeft=oSmall.offsetWidth-oFrame.offsetWidth;
    var maxTop=oSmall.offsetHeight-oFrame.offsetHeight;

    nLeft=nLeft>maxLeft?maxLeft:nLeft;
    nTop=nTop>maxTop?maxTop:nTop;

    oFrame.style.left=nLeft+"px";
    oFrame.style.top=nTop+"px";

    // 边界检测
    var propX=oBig.offsetWidth / oFrame.offsetWidth;
    var propY=oBig.offsetHeight / oFrame.offsetHeight;


    oBigImg.style.left=-nLeft*propX+"px";
    oBigImg.style.top=-nTop*propY+"px";

    oFrame.style.backgroundPosition=`${-nLeft}px ${-nTop}px`
}
