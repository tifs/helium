var toggle = false;

chrome.browserAction.onClicked.addListener(function(activeTab) {
  // chrome.browserAction.setIcon(object details, function callback)
  toggle = !toggle;
    if(toggle){
      chrome.browserAction.setIcon({path: "helium_32_on.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
      chrome.tabs.executeScript(null, {file: "content.js"});
    }
    else{
      chrome.browserAction.setIcon({path: "helium_32_off.png", tabId:activeTab.id});
      // var elem = document.getElementsByTagName("script");
      // elem[0].src = "";
      chrome.tabs.executeScript(null, {file: "clear.js"});
    }
});
