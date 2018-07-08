import colors from "./colors.json"
import loadPage2 from "./page2"
import setupGoodDom from "good-dom"
setupGoodDom()


// Get the body 
var body = document.body


// 
// innerBody
// 
    // put everything in an inner body so that everything can
    // dissapear when the "is that it" button is pressed 
    // (without deleting the actual body)
    var innerBody = New('div')
    innerBody.addClass("body")
    innerBody.style = {
        width: "100%"
    }


// 
// black banner
// 
    var banner = New("div")
    banner.addClass("center-content")
    banner.style = {
        width: "100%",
        backgroundColor: colors["off-black"],
        height : "35%",
        marginBottom : "1.5rem",
    }

// 
// banner title
// 
    var title = New("p")
    // make the size of the W and B bigger than the rest
    var bold_style_for_title = "style='font-size: 10.8rem'"
    var the_w = "<b "+bold_style_for_title+" >"  + "W" + "</b>"
    var the_b = "<b "+bold_style_for_title+" >"  + "B" + "</b>"
    title.innerHTML = the_w+"hite "+the_b+"ox"
    title.style = {
        color: "white",
        fontSize: "9rem",
        fontWeight: "100",
        fontFamily: "'Roboto', sans-serif",
    }



// 
// container for the Question and answer
// 
    var q1Container = New("div")
    q1Container.style = {
        maxWidth : "70%",
        marginBottom: "6rem",
    }

    // 
    // Create "What is a WhiteBox?" part
    // 
        var whatIsWhiteBox = New("h1")
        whatIsWhiteBox.innerHTML = "What is a WhiteBox?"
        whatIsWhiteBox.style = {
            fontSize: "2.5rem",
            fontWeight: "900",
            textDecoration: "underline",
            fontFamily: "Helvetica",
            color: "gray",
        }

    // 
    // create the Answer part
    // 
        var whiteBoxIs = New("p")
        whiteBoxIs.innerHTML = "A physcial box that lets you access your files from anywhere.<br>Kind of like Google Drive or Microsoft One Drive but <b>without the give-your-data-to-Google/Microsoft</b> part."
        // "flow-text" this is so that the text scales with the size of the screen
        whiteBoxIs.addClass("flow-text") 
        whiteBoxIs.style = {
            fontFamily: "Helvetica",
            fontSize: "1.5rem",
        }


// 
// "is that it" button
// 
    var nextBtn = New('a') // use the 'a' anchor tag as a button
    nextBtn.innerText = "Is that it?"
    // when the button is clicked, fade out the inner body, and load page2
    nextBtn.onclick = ()=>$(innerBody).fadeOut(()=>loadPage2(body))
    // give the button fancy effect from the materialize-css library
    nextBtn.addClass("waves-effect","waves-black","btn-flat","btn-large", "black-button")
    nextBtn.style = {
        textTransform: "revert", // prevent auto-full-caps (aka just use regular capitalization)
        fontSize: "1.3rem",
        borderBottom: `grey solid 2px`, // add the
    }
    // the hover effects are in the .sass files under "black-button:hover"


// 
// 
// Attach everything
// 
//
        banner.add(title)
    innerBody.add(banner)
        q1Container.add(whatIsWhiteBox)
        q1Container.add(whiteBoxIs)
    innerBody.add(q1Container)
    innerBody.appendChild(nextBtn)
body.add(innerBody)