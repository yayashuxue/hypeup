setInterval(function() {
	comments = document.getElementById("content-text");
	// var numCensored = 0;
	for(var i = 0; i < comments.length; i++) {
        comments[i].innerHTML =  "This comment was suspended because it was deemed racist. Found a variation of: \"" + racism[j] + "\"";
        comments[i].style = "color: #CE0D00; font-weight: bold";
		// var censoredYet = 0;
		// if(rBool == 1) {
		// 	for(var j = 0; j < racism.length; j++) {
		// 		if(comments[i].innerHTML.toLowerCase().indexOf(racism[j]) != -1) {
		// 			censoredYet = 1;
		// 			comments[i].innerHTML = "This comment was suspended because it was deemed racist. Found a variation of: \"" + racism[j] + "\"";
		// 			comments[i].style = "color: #CE0D00; font-weight: bold";
		// 		}
		// 	}
        // }
    }
});