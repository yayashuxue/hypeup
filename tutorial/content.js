
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

	// YouTube comment filter
	comments_one = document.getElementsByClassName("expander-exp");
	for(var i = 0; i < comments_one.length; i++)
	{
	    var xhr = new XMLHttpRequest();
	    xhr.withCredentials = false;
	    xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", false);
	    xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfCGXAXBPSr1R1h0NwkPbhmpPNrAaPAVfWMjL_YY6DZ3o7dsVQGdO94UG-sY-82V4uigWazK8rVUAN8tI_8C-9L8cOFqZqa2YPCEnadCkcNHubaz9MsdbMvhQ0uPw9d7VEG8TfGnRgLTYaChXo13jkyEzFcNTav8T9fXv6pxMcpZmGezTQu9-fw-3_NAg");
	    xhr.setRequestHeader("Content-type", "application/json");

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

		if (xhr.status === 200 && xhr.responseText.length > 0)
		{
			console.log("in callback function");
			console.log(xhr.responseText);
		}
		else
		{
			console.log("error: in callback function");
			console.log(xhr.responseText);
			sleep(1000);
		}	
	}

	// Instagram comment filter --- complete
	comments_two = document.getElementsByClassName("Mr508");
	console.log("Number of comments: " + comments_two.length);
	for(var i = 0; i < comments_two.length; i++) 
	{
    	console.log("Comment NO. " + i);
    	var arr = comments_two[i].getElementsByTagName("span");
    	console.log(typeof(arr))
    	console.log(arr);
    	var list = [].slice.call(arr);
    	console.log(list)
    	console.log(list[0].innerHTML) //pass this value to model
		// comments_two[i].style = "color: #00ff00; font-weight: bold";

		var xhr = new XMLHttpRequest();
	    xhr.withCredentials = false;
	    xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", false);
		xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfYfWT8ay-GZSi_TRlJAbUeS_e2Mo3ih74zYbhY-euFuFnuQ2gAyqxDOBM7w5SK-N1rQX0X04rKmH5bPMM2UKQYZg7FpLxmTAtoXj9lw_tmEm0kueQsLaDEn2Ym19-CyIImqwwgHvl0M2EWoXBlUhkbJzPe-rQ2HN8y_z-kshJci2yyVk9qT1xAabEljQ");
	    xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify({
				  "payload": {
				    "textSnippet": {
				      "content": list[0].innerHTML,
				      "mime_type": "text/plain"
				    }
				  }
				}
		));

		if (xhr.status === 200 && xhr.responseText.length > 0)
		{
			console.log("in callback function");
			console.log(xhr.responseText)
			console.log(typeof(xhr.responseText))
			var json = JSON.parse(xhr.responseText)
			var type1 = json.payload[0].displayName;
			var score1 = json.payload[0].classification.score;
			var s1 = Math.round( score1* 10) / 10
			var type2 = json.payload[1].displayName;
			var score2 = json.payload[1].classification.score * 100;
			var s2 = Math.round( score2* 10) / 10
			console.log(type1 + " " + s1);
			console.log(type2 + " " + s2);
			if (score2 > 50) {
				comments_two[i].innerHTML = "A potential offensive comment with a score of " + s2 + " out of 100";
				comments_two[i].style = "color: #CE0D00; font-weight: bold";
			}
			
		}
		else
		{
			console.log("error: in callback function");
			console.log(xhr.responseText)
			sleep(1000);
		}
	}
	
}, 1000);
