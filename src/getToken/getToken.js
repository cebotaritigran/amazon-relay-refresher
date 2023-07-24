//try
// chrome.runtime.sendMessage(
//     "from content script",
//     (response) => {
//         console.log(response)
//     }
// )

let authToken = '';

function getToken() {


    chrome.storage.local.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
        authToken = result.key
    });


    console.log(chrome.storage.local);
    console.log(authToken)



    // //try 
    // browser.cookie.get({ name: 'https://relay.amazon.com/loadboard/search', name: 'X-Csrf-Token' })
    //     .then(function (cookie) {
    //         console.log(cookie); // {..., value: "bearer-token-value" }
    //         var token = cookie.value;
    //         // send message to background script to store cookie globally
    //         // continue rendering successfully
    //     })
    //     .catch(function (error) {
    //         console.error(error);
    //         // handle not logged in
    //     })

};

