var backgroundColor = new Color(200,100,200,0.1);

var targetColor = new Color();

setInterval(function(){
	var walkerCanvas = document.getElementById("walker").getContext("2d");
	var reachedColor = backgroundColor.approachDirect(targetColor);
	
	if(reachedColor){
		targetColor = new Color();
	}
	
	walkerCanvas.fillStyle = backgroundColor.toHex();
	walkerCanvas.fillRect(0,0,400,400);
	showCrossSection();
}, 1000/60);
