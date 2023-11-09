import React from "react";
import logo from "../../assets/logo_footer.svg";
import "../../styles/footer/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <img src={logo} alt="copyright" />
        <p>&copy; 2020 Kasa. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
