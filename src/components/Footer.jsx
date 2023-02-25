import React from "react";

let year = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
            <p>Copyright@{year}</p>
        </div>
    );
}

export default Footer;