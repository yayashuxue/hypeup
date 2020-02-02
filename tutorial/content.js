/*function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
*/
// var comments, rBool, pBool, hBool, sBool, vBool;
// var racism = ["nigg", "chink", "redneck", "gypsy", "redskin"];
// var profanity = ["fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "hell", "retard", "inbred"];
// var homophobia = ["fag", "dyke", "transvestite", "tranny", "sodomite", "homo"];
// var sexism = ["feminazi", "femenazi", "bitch", "slut", "cunt", "whore", "hoe"];
// var violence = ["kill", "death", "blood", "flesh", "gore"];

// rBool = 1;
// pBool = 1;
// hBool = 1;
// sBool = 1;
// vBool = 1;
function sleep(milliseconds) {
	let timeStart = new Date().getTime();
	while (true) {
		let elapsedTime = new Date().getTime() - timeStart;
		if (elapsedTime > milliseconds) {
		  break;
		}
	}
}

setInterval(function() {
/*	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;
	xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);
  xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAcPXSswQD6qt-R5MlZaSxRzgJIdEHj3_ezk-kPhoHEpYIsAI6ZRiypkLV87F58zJUDpYUh5-iENy6TW3Xo5FkVQgA27yVVi9dnxcjyJmqr4rSjxWqLQl-IB73lqZA_VAKE2H0q966unkGmiMbebWUPsmQtt1G0MfwGPe_JJUyF8c2XoxavLdpbY2khGCA");
	xhr.setRequestHeader("Content-type", "application/json");
*/
	comments_one = document.getElementsByClassName("expander-exp");
	// var numCensored = 0;
	for(var i = 0; i < comments_one.length; i++) {
    //console.log(i)

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);
    xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfjXEM8HeZVoYl1r4X0XMl6Vu4bcYZw0yCVrt7aX_Mh3v12oESHPDCtbo3c1GgRe0Y4HLz07_j6ezaQeXgwbxlYH1BQk3ehCioM2oA0bAjAVU36LPEIwGAzelJVrV-Mez88oDm6YB2t59mTs9BsrHjmGSkaBB0oMMfy3R489qcqySgeSdxWO9BiVNH5Qw");
    xhr.setRequestHeader("Content-type", "application/json");

		// var censoredYet = 0;
		// if(rBool == 1) {
			// censoredYet = 1;
			comments_one[i].innerHTML = "This comment was suspended because it was deemed racist.";
			comments_one[i].style = "color: #CE0D00; font-weight: bold";

			xhr.send(JSON.stringify({
				  "payload": {
				    "textSnippet": {
				      "content": "I wanna lip your pussy",
				      "mime_type": "text/plain"
				    }
				  }
				}
			));
			xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText);
          console.log(i);
        }else{
          sleep(1000);
          console.log("sleeping...");
        }
			}
	}


	// COMMENT TWO WORKS:))))
	comments_two = document.getElementsByClassName("Mr508");
	console.log("Number of comments: " + comments_two.length);
	// var numCensored = 0;
	for(var i = 0; i < comments_two.length; i++) {
    	sleep(1000);

    	console.log("Comment NO. " + i);
    	var arr = comments_two[i].getElementsByTagName("span");
    	console.log(typeof(arr))
    	console.log(arr);
    	var list = [].slice.call(arr);
    	console.log(list)
    	console.log(list[0].innerHTML) //pass this to model!!!!!!!!!
		//comments_two[i].innerHTML = "This comment was suspended because it was deemed racist.";
		comments_two[i].style = "color: #CE0D00; font-weight: bold";

		var xhr = new XMLHttpRequest();
	    xhr.withCredentials = false;
	    //xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);
	    xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", false);
		xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfjXEM8HeZVoYl1r4X0XMl6Vu4bcYZw0yCVrt7aX_Mh3v12oESHPDCtbo3c1GgRe0Y4HLz07_j6ezaQeXgwbxlYH1BQk3ehCioM2oA0bAjAVU36LPEIwGAzelJVrV-Mez88oDm6YB2t59mTs9BsrHjmGSkaBB0oMMfy3R489qcqySgeSdxWO9BiVNH5Qw");
	    xhr.setRequestHeader("Content-type", "application/json");

		// var censoredYet = 0;
		// if(rBool == 1) {
		// 	censoredYet = 1;
		xhr.send(JSON.stringify({
				  "payload": {
				    "textSnippet": {
				      "content": comments_two[i].innerHTML,
				      "mime_type": "text/plain"
				    }
				  }
				}
		));

		if (xhr.status === 200 && xhr.responseText.length > 0)
		{
			console.log("in callback function");
			console.log(xhr.responseText)
			console.log(i);
		}
		else
		{
			console.log("error: in callback function");
			console.log(xhr.responseText);
			console.log(xhr.status)
			console.log(i);
		}

		// xhr.onreadystatechange = function() {
		// 	console.log("in callback function");
	 //        if (xhr.readyState === 4 && xhr.status === 200) {
		// 		console.log(xhr.status);
		// 	    //console.log(i);
			    
		// 	    //var data = JSON.parse(xhr.responseText);
		// 	    //console.log(data);
	 //        }
	 //        else {
	 //        	console.log("error!!!")
	 //        }
		// }
		// }
		// if(pBool == 1) {
		// 	for(var j = 0; j < profanity.length; j++) {
		// 		if(comments[i].innerHTML.toLowerCase().indexOf(profanity[j]) != -1) {
		// 			censoredYet = 1;
		// 			comments[i].innerHTML = "This comment was suspended because it was deemed profane. Found a variation of: \"" + profanity[j] + "\"";
		// 			comments[i].style = "color: #CE0D00; font-weight: bold";
		// 		}
		// 	}
		// }
		// if(hBool == 1) {
		// 	for(var j = 0; j < homophobia.length; j++) {
		// 		if(comments[i].innerHTML.toLowerCase().indexOf(homophobia[j]) != -1) {
		// 			censoredYet = 1;
		// 			comments[i].innerHTML = "This comment was suspended because it was deemed homophobic. Found a variation of: \"" + homophobia[j] + "\"";
		// 			comments[i].style = "color: #CE0D00; font-weight: bold";
		// 		}
		// 	}
		// }
		// if(sBool == 1) {
		// 	for(var j = 0; j < sexism.length; j++) {
		// 		if(comments[i].innerHTML.toLowerCase().indexOf(sexism[j]) != -1) {
		// 			censoredYet = 1;
		// 			comments[i].innerHTML = "This comment was suspended because it was deemed sexist. Found a variation of: \"" + sexism[j] + "\"";
		// 			comments[i].style = "color: #CE0D00; font-weight: bold";
		// 		}
		// 	}
		// }
		// if(vBool == 1) {
		// 	for(var j = 0; j < violence.length; j++) {
		// 		if(comments[i].innerHTML.toLowerCase().indexOf(violence[j]) != -1) {
		// 			censoredYet = 1;
		// 			comments[i].innerHTML = "This comment was suspended because it was deemed violent. Found a variation of: \"" + violence[j] + "\"";
		// 			comments[i].style = "color: #CE0D00; font-weight: bold";
		// 		}
		// 	}
		// }
		// if(censoredYet == 1) {
		// 	numCensored++;
		// }
	}
	// if(numCensored != 0) {
	// 	document.title = "CENSORED: " + numCensored;
	// }

	// var xhr = new XMLHttpRequest();
	// xhr.withCredentials = false;
	// xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);

	// xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAdZ8p9GRFql9hCWKp-IqFc5CwVoV1zjiGItx9xDTFyst-IT-0SvZ6ApbR83dWQpr91WBky5H6lf44EQ7GewMZLE3epaAn13M_R6lOqTF784X0W1ML5_jvlNJhc7qRs9nUhhXzpBYIcX2QriEObHgWz7MKZCPjpcBDEKa55IR7pmUiLijNp4QY9JoZE5TA");
	// xhr.setRequestHeader("Content-type", "application/json");
	// xhr.send(JSON.stringify({
	//   "payload": {
	//     "textSnippet": {
	//       "content": "I wanna lip your pussy",
	//       "mime_type": "text/plain"
	//     }
	//   }
	// }
	// ));
	// xhr.onreadystatechange = function() {
	// 	console.log(xhr.status)
	//     console.log("HELLO")
	//     console.log(xhr.responseText);
	//     var data = JSON.parse(xhr.responseText);
	//     console.log(data);
	// }

}, 1000);
