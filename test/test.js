// log-To-Stackdriver.js
// ------------------------------------------------------------------
//
// Send a POST to stackdriver without waiting for a response.
//
// created: Wed Feb 15 16:28:55 2017
// last saved: <2017-February-15 18:43:10>
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.open('POST', "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict", true);

xhr.setRequestHeader('Authorization', "Bearer ya29.c.Ko4BvAdZ8p9GRFql9hCWKp-IqFc5CwVoV1zjiGItx9xDTFyst-IT-0SvZ6ApbR83dWQpr91WBky5H6lf44EQ7GewMZLE3epaAn13M_R6lOqTF784X0W1ML5_jvlNJhc7qRs9nUhhXzpBYIcX2QriEObHgWz7MKZCPjpcBDEKa55IR7pmUiLijNp4QY9JoZE5TA");
xhr.setRequestHeader("Content-type", "application/json");
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
    console.log("HELLO")
    console.log(xhr.responseText);
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }

//xhr.onreadystatechange = processRequest;


/*
$.ajax
({
  type: "POST",
  url: "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict",
  dataType: 'json',
  headers: {
    "Authorization": "Bearer ya29.c.Ko4BvAdZ8p9GRFql9hCWKp-IqFc5CwVoV1zjiGItx9xDTFyst-IT-0SvZ6ApbR83dWQpr91WBky5H6lf44EQ7GewMZLE3epaAn13M_R6lOqTF784X0W1ML5_jvlNJhc7qRs9nUhhXzpBYIcX2QriEObHgWz7MKZCPjpcBDEKa55IR7pmUiLijNp4QY9JoZE5TA" )
  },
  data: '{ "comment" }',
  success: function (){
    document.write('Thanks for your comment!');
  }
});

axios({
  method: 'post',
  url: "https://automl.googleapis.com/v1/projects/17710422603/locations/us-central1/models/TCN62430270225121280:predict",
  data: {
    "payload": {
      "textSnippet": {
        "content": "I wanna lip your pussy",
        "mime_type": "text/plain"
      }
    }
  },
  headers: { 'authorization': `Bearer ya29.c.Ko4BvAdZ8p9GRFql9hCWKp-IqFc5CwVoV1zjiGItx9xDTFyst-IT-0SvZ6ApbR83dWQpr91WBky5H6lf44EQ7GewMZLE3epaAn13M_R6lOqTF784X0W1ML5_jvlNJhc7qRs9nUhhXzpBYIcX2QriEObHgWz7MKZCPjpcBDEKa55IR7pmUiLijNp4QY9JoZE5TA` }
});
*/
document.write('succeed');
