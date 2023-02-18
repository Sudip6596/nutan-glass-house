import React from "react";
import { GrLocation } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaCrown } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="hero_image"></div>
      <div className="header_details">
        <div className="address_icon">
          <h3>NUTAN GLASS HOUSE</h3>
          <p>Real Estate Developer (20-50 Projects Delivered)</p>
          <div className="pune">
            <GrLocation />
            <span>Pune</span>
          </div>

          <div className="icons">
            <ImFacebook2 className="icon fb" />
            <FaInstagramSquare className="icon insta" />
            <FaTwitterSquare className="icon twitter" />
            <IoLogoYoutube className="icon yt" />
          </div>
        </div>
        <div className="premium_buttons">
          <div className="premium">
            <FaCrown className="crown" />
            <h3>Premium</h3>
          </div>
          <div className="buttons">
            <button>Send Enquiry</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
