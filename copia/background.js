function start(){
    browser.tabs.create({"url": "page.html"})
}
browser.browserAction.onClicked.addListener(start)
//console.log('hi')