
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
	    xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfJf-1csgX3BDFcr4AV2faslZnnbZRIJH-vWHmkvmOwlKdNdAJop-sZzkPF5TAPJ8-hLrZoJ0nJJv3PlvHA2fu9CXrfTi09ij75fFZkjNtf4aKSBmtUFo90hDwmffmnt7LBwQ_2XIf-EQlfevG_nGutVGWK9n0WyJuC1uhRSi3V197vc2oPrf15fzRIPA");
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
	    xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfAnz1KCMe2Oqm0yHFW7lBWD1wTKSZ7r47EPQMhjtfGtfOEaPhP_PiyacWDnjVHsYF4AGwmYRhkKHRQOjr5VuSVlNKFw_cp9-bG_VP6AARt8NGl-E4uqZ5tAV6LEW572-BxinrfT75qtTEzK0FWzAthM8dNqYGXUwn698_dWxLRhV2UpmEeJFEJkLkEzg");
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
