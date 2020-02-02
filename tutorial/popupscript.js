function hello() {
  document.getElementById('alert').innerHTML = "Our test has been run, you are in the safe space now";
  document.getElementById('alert').style.color = "#306754";
  document.getElementById('alert').style.fontStyle = "strong";
  document.getElementById('click-me').innerHTML = "Safe Mode";
   
  // console.log(document.getElementsByTagName("h3").innerHTML);
  chrome.tabs.executeScript({
    file: 'content.js'
  }); 
}

document.getElementById('click-me').addEventListener('click', hello);
// document.getElementById('click-me').onclick() = function(){
//   document.getElementsByTagName("h3").innerHTML = "Our test has been run, you are in the safe space now"; 
// };