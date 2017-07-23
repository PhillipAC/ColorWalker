var Color = function(red = Random.int(0,256), green = Random.int(0,256), blue = Random.int(0,256), delta = 1){
	this.red = red;
	this.green = green;
	this.blue = blue;
	this.delta = delta;
}
Color.prototype.toHex = function(){
	var red = Math.round(this.red).toString(16);
	var green = Math.round(this.green).toString(16);
	var blue  = Math.round(this.blue).toString(16);
	if(red.length == 1){
		red = "0" + red;
	}
	if(green.length == 1){
		green = "0" + green;
	}
	if(blue.length == 1){
		blue = "0" + blue;
	}
	return "#" + red + green + blue;
}
Color.prototype.approachValue = function(currentValue, targetValue, delta){
	if(currentValue + delta < targetValue){
		return currentValue + delta;
	}
	else if(currentValue - delta > targetValue){
		return currentValue - delta;
	}
	return targetValue;
}
Color.prototype.approachDirect = function(targetColor){
	var deltaRed = Math.abs(this.red - targetColor.red);
	var deltaBlue = Math.abs(this.blue - targetColor.blue);
	var deltaGreen = Math.abs(this.green - targetColor.green);
	var max = 0;
	if(deltaRed > deltaBlue){
		max = deltaRed;
	}else{
		max = deltaBlue;
	}
	if(deltaGreen > max){
		max = deltaGreen;
	}
	var percent = this.delta / max;
	this.red = this.approachValue(this.red, targetColor.red, percent*deltaRed);
	this.green = this.approachValue(this.green, targetColor.green, percent*deltaGreen);
	this.blue = this.approachValue(this.blue, targetColor.blue, percent*deltaBlue);
	
	if (this.red == targetColor.red && this.green == targetColor.green && this.blue == targetColor.blue){
		return true;
	}
	return false;
}
Color.prototype.approach = function(targetColor){
	this.red = this.approachValue(this.red, targetColor.red, this.delta);
	this.green = this.approachValue(this.green, targetColor.green, this.delta);
	this.blue = this.approachValue(this.blue, targetColor.blue, this.delta);
	
	if (this.red == targetColor.red && this.green == targetColor.green && this.blue == targetColor.blue){
		return true;
	}
	return false;
}