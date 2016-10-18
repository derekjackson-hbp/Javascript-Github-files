
for (var num = 99; num >= 0; num--){
	if (num > 1){
		var num2 = num-1;
		console.log(num + " bottles of beer on the wall, " + num + " bottles of beer. Take one down and pass it around, " + num2 + " bottles of beer on the wall.");
	} else if (num === 1) {
		console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
	} else {
		console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
	}
}
