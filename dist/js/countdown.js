
function time(){
	var now =new Date() 
	var end = new Date("2018/10/31 10:41:00")
	var  reduceS = (end.getTime()-now.getTime()) / 1000;
	if(reduceS > 0){
	    var nDay = parseInt(reduceS /60/60/24);
	    var nHour = parseInt(reduceS / 60/60 % 24);
	    var nMinute = parseInt(reduceS / 60 % 60);
	    var nSecond = parseInt(reduceS % 60)
	    if(nDay < 10){
	            nDay = "0" + nDay;
	    }
	    if(nHour < 10){
	            nHour = "0" + nHour;
	    }
	    if(nMinute < 10){
	        nMinute = "0" + nMinute;
	    }
	    if(nSecond < 10){
	        nSecond = "0" + nSecond;
	    }
	    day.innerHTML = nDay
	    hour.innerHTML = nHour
	    minute.innerHTML = nMinute
	    second.innerHTML = nSecond
	}else{
	    console.log("活动结束")
	}
}
setInterval(function(){
        time()
}, 1000)
time();