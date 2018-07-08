import colors from "./colors.json"
import $ from "jquery"
export default (body)=>
{

    // 
    // side banner
    // 
        var banner = New("div")
        banner.addClass("center-content")
        banner.style = {
            height          : "400%",
            width           : "40%",
            position        : "absolute",
            left            : "0",
            backgroundColor : colors["off-black"],
            marginBottom    : "1.5rem",
            display         : "none",   // Start off invisible, let jQuery fade the banner in
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