import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className= "footerIcons">
      <a href="https://www.instagram.com/majestic.picnics/?hl=en">
        <i class="fab footerIcon fa-instagram"></i>
      </a>{" "}
      <a href="mailto:majesticpicnicss@gmail.com">
      <i class="far footerIcon fa-envelope"></i>
      </a>
      <a href="https://vm.tiktok.com/ZMdnvwgYK/">
      <i class="fab footerIcon fa-tiktok"></i>
      </a>
      </div>
      <div className="copyright">
        © Majestic Picnics
      </div>
      
    </div>
  );
};

export default Footer;
