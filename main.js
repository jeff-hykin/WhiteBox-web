import colors from "./colors.json"
import $ from "jquery"
import loadPage2 from "./page2"
import setupGoodDom from "good-dom"
setupGoodDom()

// 
// body
//
    var body = document.body
    centerChildrenHorizontally(body)

// 
// innerBody
// 
    // put everything in an inner body so that everything can
    // dissapear when the "is that it" button is pressed 
    // (without deleting the actual body)
    var innerBody = New('div')
    centerChildrenHorizontally(innerBody)
    innerBody.addClass("body")
    innerBody.style = {
        width: "100%"
    }


// 
// black banner
// 
    var banner = New("div")
    centerChildren(banner)
    banner.style = {
        width: "100%",
        backgroundColor: colors["off-black"],
        height : "37%",
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
        fontSize: "8rem",
        fontWeight: "100",
        fontFamily: "'Roboto', sans-serif",
        margin: 0,
    }

// 
// Subtitile
// 
    var subtitle = New("p")
    subtitle.innerHTML = "Take Back Your Data"
    subtitle.style = {
        color: "white",
        fontSize: "2rem",
        fontWeight: "100",
        fontFamily: "'Helvetica', sans-serif",
        marginTop: -25,
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
            fontSize: "2rem",
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
            fontSize: "1.1rem",
        }


// 
// "is that it" button
// 
    var nextBtn = New('a') // use the 'a' anchor tag as a button
    nextBtn.innerText = "Is that it?"
    // when the button is clicked
    nextBtn.onclick = function()
        {
            // create a function for loading the next page
            function loadPage2WithBody() 
                {
                    loadPage2(body)
                }
            // fadeout the innerBody, and once its done, run the loadPage2WithBody() function
            $(innerBody).fadeOut(loadPage2WithBody)
        }
    // give the button fancy effects from the materialize-css library
    // the hover effects are in the .sass file under "black-button:hover"
    nextBtn.addClass("waves-effect","waves-black","btn-flat","btn-large", "black-button")
    nextBtn.style = {
        textTransform: "revert", // prevent auto-full-caps (aka just use regular capitalization)
        fontSize: "1.1rem",
        borderBottom: `grey solid 2px`, // add the
    }


// 
// 
// Attach everything
// 
//
        banner.add(title)
        banner.add(subtitle)
    innerBody.add(banner)
        q1Container.add(whatIsWhiteBox)
        q1Container.add(whiteBoxIs)
    innerBody.add(q1Container)
    innerBody.appendChild(nextBtn)
body.add(innerBody)