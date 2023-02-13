let p = document.getElementById('testo')

function aggiorna(){
    navigator.clipboard.readText().then(
        (clipText) => {
            clipText = clipText.replace("&#x27;", "'").replace("&gt;", ">").replace("&lt;", "<")
            //console.log(clipText)
            last = p.innerHTML.split('<br>')[p.innerHTML.split('<br>').length - 1].replace("&#x27;", "'").replace("&gt;", ">").replace("&lt;", "<")
            //console.log(last)
            //console.log(p.innerHTML.split('<br>')[p.innerHTML.split('<br>').length - 1])
            if(last !== clipText){
                p.innerHTML += '<br>' + clipText
            }        
        }
        
        )
        
}

browser.alarms.create({delayInMinutes: 0.08})

browser.alarms.onAlarm.addListener(() => {
  //console.log("Hello, world!") 
  aggiorna()
  browser.alarms.create({delayInMinutes: 0.08})
});