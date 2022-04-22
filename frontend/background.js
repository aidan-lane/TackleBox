// TackleBox 2022
// Runs in background of extension

// Change backend API url based on if we're in devlopment or not
const IS_DEV_MODE = !("update_url" in chrome.runtime.getManifest());
var baseURL = "";

if (false) {
    baseURL = "http://localhost:8080/api/score/";
} else {
    baseURL = "https://tacklebox-server.herokuapp.com/api/score/";
}

/**
 * Determines whether the given link is malicious using the given threshold.
 *
 * @access private
 *
 * @param {String} url    url to be scored
 * @param {Number} thresh user-set security threshold value (1-3) with 3 being the most strict
 *
 * @return {Boolean}
 **/

function isMalicious(url, thresh) {
    let realThresh = 0;
    if (thresh === 3) realThresh = 75;
    else if (thresh === 2) realThresh = 85;
    else if (thresh === 1) realThresh = 100;

    let result;

    $.ajax({
        url : baseURL + encodeURIComponent(url),
        type : "get",
        async: false,
        success : function(data) {
            result = data.score >= realThresh;
        },
        error: function() {}
     });
    
    return result;
}

var curURL;  // Keep track of the current page

var timer = null;
var waitTime = 500;
var wait = false;
// Load threshold from storage.
let thresh = 1;
setInterval(() => {
    chrome.storage.sync.get(["thresh"], function(result) {
        thresh = parseInt(result.thresh) + 1;
    });
}, 1000);

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
            details.url.includes("localhost") || details.url.includes("popup.html") || 
            !isMalicious(details.url, thresh)) {
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
