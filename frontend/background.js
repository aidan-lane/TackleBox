// TackleBox 2022
// Runs in background of extension

// Defaults
let color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Default background color set to %cgreen", `color: ${color}`);
});

var baseURL = "http://localhost:8080/api/score/";

// User-set score threshold
var threshold = 1;

/**
 * Determines whether the given link is malicious using the given threshold.
 *
 * @access private
 *
 * @param {String} url    url to be scored
 * @param {Number} thresh user-set security threshold value (1-3) with 3 being the most strict
 *
 * @return {Boolean}
 */
function isMalicious(url, thresh=3) {
    let realThresh = 0;
    if (thresh === 3) realThresh = 75;
    else if (thresh === 2) realThresh = 85;
    else if (thresh === 1) realThresh = 100;

    return fetch(baseURL + encodeURIComponent(url))
        .then(response => response.json())
        .then(data => {
            if (data.score >= realThresh) {
                return true;
            }
            return false
        })
        .catch((_) => { return false; })
}

var curURL;  // Keep track of the current page

var timer = null;
var waitTime = 500;
var wait = false;

// Hook to get the current page's full URL
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0]; 
    curURL = tab.url;
});

// Hook executed before page is loaded
chrome.webRequest.onBeforeRequest.addListener((details) => {
    // Load page if we aren't reloading within wait-time, the type is not main_frame,
    // the url is not the same as the last url, and the link is not malicious.
    if (wait || details.type !== "main_frame" || details.url === curURL || 
            !isMalicious(details.url)) {
        return {cancel: false};
    }

    if (confirm("We found this website to possibly be malicious. Do you wish to continue?")) {
        return {cancel: false};
    }

    // Prevent triggering this event twice
    wait = true;
    clearInterval(timer);
    timer = setInterval(function () {
        wait = false;
    }, waitTime);

    return {redirectUrl: curURL};
    
}, {urls: ["<all_urls>"]}, ["blocking"]);
