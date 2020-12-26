import React, { useEffect, useState } from "react";
import "../../src/Nav.css";

const Nav = () => {
  const [show, handelShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });

    return () => {
      window?.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Netflix logo"
      ></img>
      <img
        className="nav_avtar"
        src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
        alt="Netflix logo"
      ></img>
    </div>
  );
};
export default Nav;
