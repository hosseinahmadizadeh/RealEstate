import React from "react";

const Header = () => {
  return (
    <secrion className="h-wrapper">
      <div className="h-container">
        <img src="./Chico.png" alt="logo" width={100} />
        <div className="h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </secrion>
  );
};

export default Header;
