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

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);
      xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAfjXEM8HeZVoYl1r4X0XMl6Vu4bcYZw0yCVrt7aX_Mh3v12oESHPDCtbo3c1GgRe0Y4HLz07_j6ezaQeXgwbxlYH1BQk3ehCioM2oA0bAjAVU36LPEIwGAzelJVrV-Mez88oDm6YB2t59mTs9BsrHjmGSkaBB0oMMfy3R489qcqySgeSdxWO9BiVNH5Qw");
      xhr.setRequestHeader("Content-type", "application/json");
	// var numCensored = 0;
	for(var i = 0; i < comments_one.length; i++) {

    console.log(i)
			comments_one[i].innerHTML = "This comment was suspended because it was deemed racist.";
			comments_one[i].style = "color: #CE0D00; font-weight: bold";

      xhr.send(JSON.stringify({
          "payload": {
            "textSnippet": {
              "content": "I wanna lip your pussy",
              "mime_type": "text/plain"
            }
          }
        }));
			xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.responseText);
        }else{
          sleep(1000);
          console.log("sleeping...");
        }
			}

	}

	comments_two = document.getElementsByClassName("Mr508");
	for(var i = 0; i < comments_two.length; i++) {
    sleep(1000);

			comments_two[i].innerHTML = "This comment was suspended because it was deemed racist.";
			comments_two[i].style = "color: #CE0D00; font-weight: bold";
/*
			xhr.send(JSON.stringify({
				  "payload": {
				    "textSnippet": {
				      "content": comments_two[i],
				      "mime_type": "text/plain"
				    }
				  }
				}
				));
        */
			xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){

				  console.log(xhr.status);
			    console.log("HELLO");
			    console.log(xhr.responseText);
			    var data = JSON.parse(xhr.responseText);
			    console.log(data);
        }
			}
}}, 1000);
