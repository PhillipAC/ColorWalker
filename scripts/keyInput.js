var keys = [];
window.onkeydown = function(e){
	keys[e.keyCode] = true;
}
window.onkeyup = function(e){
	keys[e.keyCode] = false;
}

setInterval(function(){
	var text = "";
	for(var i = 0; i < keys.length; i++){
		if(keys[i]==true){
			text += i + ":"
		}
	}
	document.getElementById("textOutput").innerHTML = text;
}, 1000/60);