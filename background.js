var toggle = false;

chrome.browserAction.onClicked.addListener(function(activeTab) {
  toggle = !toggle;
    if(toggle){
      chrome.browserAction.setIcon({path: "helium_logo_19_on.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
      chrome.tabs.executeScript(null, {file: "content.js"});
    }
    else{
      chrome.browserAction.setIcon({path: "helium_logo_19_off.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "clear.js"});
    }
});
