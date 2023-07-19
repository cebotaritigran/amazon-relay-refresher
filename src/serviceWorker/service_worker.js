var requestFilter = { urls: ["https://relay.amazon.com/*"] };
var extraInfoSpec = ['requestHeaders'];
let token;
var handler = function (details) {
    if (details.method = "POST") {
        token = details["requestHeaders"][2]
        token = token["value"]
        console.log(token)
    }
    console.log(details);
};

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);