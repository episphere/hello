console.log('hello.js loaded')

window.onload=async _=>{
    let info = await (await fetch('https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe')).json()
    let h='<h2>About You</h2>'
    h += '<p>'
    h += `Full information below, with the details about your machine, your browser, the languages you command, your address (machine, postal address and maybe even <a href="https://www.google.com/maps?q=${info.aboutYou.headers['x-appengine-citylatlong']}" target="_blank" style="background-color:yellow">GPS coordinates</a>) under "headers" and "rawHeaders". See how much of this is noyt provided when you use the browser in incognito mode.`
    h += '</p>'
    h += '<pre id="rawInfo"></pre>'
    aboutYou.innerHTML=h
    rawInfo.innerHTML=JSON.stringify(info,null,3)
    debugger
}