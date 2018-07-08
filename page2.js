import colors from "./colors.json"
export default (body)=>
{

// side banner
var banner = document.createElement("div")
banner.classList.add("center-content")
banner.style.height = "400%"
banner.style.width = "40%"
banner.style.position = "absolute"
banner.style.left = 0
banner.style.backgroundColor = colors["off-black"]
banner.style.marginBottom = "1.5rem"
banner.style.display = "none"
body.appendChild(banner)
$(banner).fadeIn("slow")





}//end page2