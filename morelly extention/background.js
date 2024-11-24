// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Morelly Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes("mail.google.com")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["contentScript.js"]
        });
    }
});
