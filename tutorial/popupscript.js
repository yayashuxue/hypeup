function hello() {
  chrome.tabs.executeScript({
    file: 'content.js'
  }); 
}

document.getElementById('click-me').addEventListener('click', hello);