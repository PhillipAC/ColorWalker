var showCrossSection = function(){
	var size = Math.pow(2,2);
	var rgCanvas = document.getElementById("redGreen").getContext("2d");
	var rbCanvas = document.getElementById("redBlue").getContext("2d");
	var bgCanvas = document.getElementById("blueGreen").getContext("2d");
	for(var i = 0; i < 256; i+=size){
		for(var j = 0; j < 256; j+=size){
			rgCanvas.fillStyle = new Color(i, j, backgroundColor.blue).toHex();
			rgCanvas.fillRect(i,j,size,size);
			
			rbCanvas.fillStyle = new Color(i, backgroundColor.green, j).toHex();
			rbCanvas.fillRect(i,j,size,size);
			
			bgCanvas.fillStyle = new Color(backgroundColor.red, j, i).toHex();
			bgCanvas.fillRect(j,i,size,size);
		}
	}
	rgCanvas.fillStyle = backgroundColor.toHex();
	rgCanvas.fillRect(backgroundColor.red - 2, backgroundColor.green - 2, 4, 4)
	rgCanvas.strokeRect(backgroundColor.red- 2, backgroundColor.green - 2, 4, 4)
	rbCanvas.fillStyle = backgroundColor.toHex();
	rbCanvas.fillRect(backgroundColor.red - 2, backgroundColor.blue - 2, 4, 4)
	rbCanvas.strokeRect(backgroundColor.red - 2, backgroundColor.blue - 2, 4, 4)
	bgCanvas.fillStyle = backgroundColor.toHex();
	bgCanvas.fillRect(backgroundColor.blue - 2, backgroundColor.green - 2, 4, 4)
	bgCanvas.strokeRect(backgroundColor.blue - 2, backgroundColor.green - 2, 4, 4)
}