import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo-clean3000.png`}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
