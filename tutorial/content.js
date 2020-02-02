
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
	    xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAe3tQ4aHIm4j5UO1fKWhzckncukA6qrJ1CzrWAbCG-2cZEpcHJafziwAMveAlyG3ynEFDfM3VYBq_OD_y8VoPA0L71aufo2I5PdHvCaxGuskjekSnFI1qp95VLmrSh8zzj6mt-sqLgmPkDnC__pnn4IKKwnVOMUyIFeoOUTgP8HEUEv89TE9Ccd2oogvQ");
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
		comments_two[i].style = "color: #CE0D00; font-weight: bold";

		var xhr = new XMLHttpRequest();
	    xhr.withCredentials = false;
	    xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", false);
		xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAe3tQ4aHIm4j5UO1fKWhzckncukA6qrJ1CzrWAbCG-2cZEpcHJafziwAMveAlyG3ynEFDfM3VYBq_OD_y8VoPA0L71aufo2I5PdHvCaxGuskjekSnFI1qp95VLmrSh8zzj6mt-sqLgmPkDnC__pnn4IKKwnVOMUyIFeoOUTgP8HEUEv89TE9Ccd2oogvQ");
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
			var type2 = json.payload[1].displayName;
			var score2 = json.payload[1].classification.score;
			console.log(type1 + " " + score1);
			console.log(type2 + " " + score2);
			
		}
		else
		{
			console.log("error: in callback function");
			console.log(xhr.responseText)
			sleep(1000);
		}
	}
	
}, 1000);
