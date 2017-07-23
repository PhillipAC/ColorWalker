var Random = {
	int: function(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	},
	double: function(min, max) {
		return Math.random()*(max-min)+min; //The maximum and the minimum are inclusive
	}
}