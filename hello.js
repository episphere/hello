console.log('hello.js loaded')

window.onload=async _=>{
    let info = await (await fetch('https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe')).json()
    let h='<h2>About You, everytime you click on a link</h2>'
    h += '<p>'
    h += `Full information below, with the details about your machine, your browser, the languages you use when browsing, your address (machine, postal address and maybe even <a href="https://www.google.com/maps?q=${info.aboutYou.headers['x-appengine-citylatlong']}" target="_blank" style="background-color:yellow;color:red">GPS coordinates</a>) under "headers" and "rawHeaders". See how much of this is not provided when you use the browser in incognito mode. <b>In any case, no information you see in this page is stored or used by us</b>. The information about you stays in this page and is gone when you close it. <b>This site was created for education about technology, nothing else</b>.`
    h += '</p>'
    h += '<pre id="rawInfo"></pre>'
    h +=
    aboutYou.innerHTML=h
    rawInfo.innerHTML=JSON.stringify(info,null,3)
    //debugger
}