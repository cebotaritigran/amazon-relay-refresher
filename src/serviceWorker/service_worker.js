var requestFilter = { urls: ["https://relay.amazon.com/*"] };
var extraInfoSpec = ['requestHeaders'];
var handler = function (details) {
    console.log(details);
};

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);