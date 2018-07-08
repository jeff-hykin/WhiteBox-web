import "hammerjs"
import "materialize-css"
import colors from "./colors.json"
import loadPage2 from "./page2"



var outerBody = document.body
var body = document.createElement('div')
body.classList.add("body")
body.style.width = "100%"
outerBody.appendChild(body)
// add a banner
var banner = document.createElement("div")
banner.classList.add("center-content")
banner.style.width = "100%"
banner.style.backgroundColor = colors["off-black"]
banner.style.height = "35%"
banner.style.marginBottom = "1.5rem"
// add text to banner 
var title = document.createElement("p")
var title_bold_style = "style='font-size: 10.8rem'"
title.innerHTML = `<b ${title_bold_style} >W</b>hite <b ${title_bold_style}>B</b>ox`
title.style.color = "white"
title.style.fontSize = "9rem"
// title.style.fontVariant = "small-caps"
title.style.fontWeight = "100"
title.style.fontFamily = "'Roboto', sans-serif"
banner.appendChild(title)
body.appendChild(banner)



// Question container
var q1Container = document.createElement("div")
q1Container.style.maxWidth = "70%"
q1Container.style.marginBottom = "6rem"

// Create whatIsWhiteBox
var whatIsWhiteBox = document.createElement("h1")
whatIsWhiteBox.innerHTML = "What is a WhiteBox?"
whatIsWhiteBox.style.fontSize = "2.5rem"
whatIsWhiteBox.style.fontWeight = "900"
whatIsWhiteBox.style.textDecoration = "underline"
whatIsWhiteBox.style.fontFamily = "Helvetica"
whatIsWhiteBox.style.color = "gray"
q1Container.appendChild(whatIsWhiteBox)

// Answer
var whiteBoxIs = document.createElement("p")
whiteBoxIs.innerHTML = "A physcial box that lets you access your files from anywhere.<br>Kind of like Google Drive or Microsoft One Drive but <b>without the give-your-data-to-Google/Microsoft</b> part."
whiteBoxIs.classList.add("flow-text")
whiteBoxIs.style.fontFamily = "Helvetica"
whiteBoxIs.style.fontSize = "1.5rem"
q1Container.appendChild(whiteBoxIs)

body.appendChild(q1Container)


// Next button
var nextBtn = document.createElement('a')
nextBtn.classList.add("waves-effect")
nextBtn.classList.add("waves-black")
nextBtn.classList.add("btn-flat")
nextBtn.classList.add("btn-large")
nextBtn.classList.add("black-button")
nextBtn.style.textTransform = "revert"
nextBtn.style.fontSize = "1.3rem"
nextBtn.style.borderBottom = `grey solid 2px`
nextBtn.innerText = "Is that it?"
nextBtn.onclick = ()=>$(body).fadeOut(()=>loadPage2(outerBody))
body.appendChild(nextBtn)