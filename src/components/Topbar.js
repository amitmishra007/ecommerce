import React from "react";
import "../styles/topbar.scss";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-menu">
        <div className="primary-color ">Chat with us</div>
        <div>+420 336 775 664</div>
        <div>info@ecommerce.com</div>
      </div>
      <div className="right-menu">
        <div className="primary-color ">Blog</div>
        <div className="primary-color ">About us</div>
        <div className="primary-color ">Careers</div>
      </div>
    </div>
  );
};

export default Topbar;
