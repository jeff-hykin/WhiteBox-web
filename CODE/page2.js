import colors from "./colors.json"
import $ from "jquery"

// export this page as a function
export default function(body) {

    // 
    // side banner
    // 
        var banner = New("div")
        centerChildrenHorizontally(banner)
        banner.style = {
            height          : "400%",
            width           : "40%",
            position        : "absolute",
            left            : "0",         // put it on the left side with no gap
            backgroundColor : colors["off-black"],
            marginBottom    : "1.5rem",
            display         : "none",   // Start off invisible, let jQuery make it visible with "fadein"
        }



    //
    // 
    // Attach everything
    // 
    // 
        body.add(banner)


    //
    // Animate
    // 
        $(banner).fadeIn("slow")




}//end page2