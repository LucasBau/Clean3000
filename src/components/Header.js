import React from "react";
import { useNavigate } from "react-router";

const Header = ({ isHome = false }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        <div className="logo">
          {!isHome ? (
            <p id="return" onClick={() => goToHome()}>
              Retour
            </p>
          ) : (
            ""
          )}
          <img
            src={`${process.env.PUBLIC_URL}/img/logo-clean3000-transparent.png`}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
