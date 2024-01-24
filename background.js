
console.log("Background script loaded");

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message);
  });

/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("hi im working");
    if (request.action === "redirect" && request.url) {
       
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.create({ url: request.url });
      });
    }
  });

/*document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
  
    // Initialize the button state based on the extension's status
    chrome.runtime.sendMessage({ action: 'getExtensionStatus' }, function (response) {
      toggleButton.innerText = response.enabled ? 'Disable Extension' : 'Enable Extension';
    });
  
    // Toggle the extension state when the button is clicked
    toggleButton.addEventListener('click', function() {
      chrome.runtime.sendMessage({ action: 'toggleExtensionStatus' }, function (response) {
        toggleButton.innerText = response.enabled ? 'Disable Extension' : 'Enable Extension';
      });
    });
  });*/

/*let extensionEnabled = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getExtensionStatus') {
    sendResponse({ enabled: extensionEnabled });
  } else if (request.action === 'toggleExtensionStatus') {
    extensionEnabled = !extensionEnabled;
    sendResponse({ enabled: extensionEnabled });
  }
});*/