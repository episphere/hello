console.log('hello.js loaded')

window.onload=async _=>{
    let info = await (await fetch('https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe')).json()
    let h='<h2>About You, everytime you click on a link</h2>'
    h += '<p>'
    h += `Full information below, with the details about your machine, your browser, the languages you use when browsing, your address (machine, postal address and maybe even <a href="https://www.google.com/maps?q=${info.aboutYou.headers['x-appengine-citylatlong']}" target="_blank" style="background-color:yellow;color:red">GPS coordinates</a>) under "headers" and "rawHeaders". See how much of this is not provided when you use the browser in incognito mode <span style="color:blue">*</span>. <b>In any case, no information you see in this page is stored or used by us</b>. The information about you stays in this page and is gone when you close it. <b>This site was created for education about technology, nothing else</b>.`
    h += '</p>'
    h += '<pre id="rawInfo"></pre>'
    h += '<p><span style="color:blue">*</span> right ... not as much as you might have expected. Remember the information here is the one you provide when you click on a link, no information is being pulled from the browser itself, incognito or not. For example, the geolocation information is the one the url host gets from the <a href="https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe" target="_blank">call itself</a>, not from the browser location API. Even a completely nacked call in your command line, such as <span style="background-color:black;color:lime"> curl <a style="background-color:black;color:lime" href="https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe">&nbsp;https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/helloMe</a> </span>, or one from your favorite statistical computing software, has a footprint with plenty of machine and location information.</p>'
    aboutYou.innerHTML=h
    rawInfo.innerHTML=JSON.stringify(info,null,3)
    //debugger
}