// Entry point for frontend

// Defaults
let color = '#3aa757';
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

var waitTime = 1000;
var wait = false;

// Hook on before page load
chrome.webRequest.onBeforeRequest.addListener((details) => {
    if (wait) return;

    shouldCancel = true;

    console.log("test!!!!!!!!" + details.url);
    if (confirm("We found this website to possibly be malicious. Do you want to continue?")) {
        should_cancel = false;
    }

    wait = true
    setTimeout(function () {
        wait = false;
    }, waitTime);

    return {cancel: shouldCancel};
    
}, {urls: ["<all_urls>"]}, ["blocking"]);