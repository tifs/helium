chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
    chrome.tabs.executeScript(null, {file: "content.js"});
});