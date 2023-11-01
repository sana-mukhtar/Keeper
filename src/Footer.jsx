import React from "react";

let curryear = new Date().getFullYear();
let cop = "Copyright";
function Footer(){
    return <div className="footer"> {cop} &copy; { "sana" + curryear}</div>
}
export default Footer;