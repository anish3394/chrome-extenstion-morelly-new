console.log('I am from background script')
console.log(this)
// the following line will start the morelly home page when the extention is refreshed or instelled 
chrome. runtime.onInstalled. addListener(() => {
    chrome. tabs.create({
    url: 'https://morelly.com.au/'})
    }
)