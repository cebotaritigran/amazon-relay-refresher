//try

// chrome.tabs.onActivated.addListener((tab) => {
//   console.log(tab)
//   chrome.tabs.get(tab.tabId, (CurrentTabData) => {
//     console.log(CurrentTabData)
//   })
// },)

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(message)
//   console.log(sender)

//   sendResponse("hi")
// })



//try
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "Popup") {
//     console.log("Got message from popupJS in background.");
//     console.log("Tab id: " + request.tabId);
//     chrome.tabs.executeScript(request.tabId, { file: "../getToken/getToken.js" });
//   }
// });








var requestFilter = { urls: ["https://relay.amazon.com/*"] };
var extraInfoSpec = ['requestHeaders'];
let token;
var handler = function (details) {
  if (details.method = "POST") {
    token = details["requestHeaders"][2]
    token = token["value"]
    console.log(token)

    //try
    sessionStorage.setItem("token", token);

  }
  console.log(details);
};
chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);


//try
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
  console.log(sender)

  sendResponse("from service worker")
})

// try to send token
// (async () => {
//   const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
//   const response = await chrome.tabs.sendMessage(tab.id, { greeting: token });
//   // do something with response here, not outside the function
//   console.log(response);
// })();

