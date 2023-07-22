//try
chrome.runtime.sendMessage(
    "from content script",
    (response) => {
        console.log(response)
    }
)

