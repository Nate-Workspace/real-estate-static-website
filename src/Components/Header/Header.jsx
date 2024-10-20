import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    return { right: !menuOpened && "-100%", transition: "all 200ms ease-in " };
  };
  return (
    <section className="h-wrapper ">
      <div className=" flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyle(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon">
          <BiMenuAltRight
            size={30}
            onClick={() => setMenuOpened((previous) => !previous)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
