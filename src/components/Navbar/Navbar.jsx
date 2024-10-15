import React, { useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navToggle, setnavToggle] = useState(true);
  const handlenavBar = () => {
    setnavToggle(!navToggle);
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Naim</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className={navToggle ? "n-list" : "m-n-list"}>
          <ul style={{ listStyle: "none" }}>
            <Link
              to="Navbar"
              spy={true}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              to="Services"
              spy={true}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              to="Experience"
              spy={true}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              to="Portfolio"
              spy={true}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to="Testimonials"
              spy={true}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
          <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={handlenavBar}
          >
            {navToggle ? <FaBarsStaggered /> : <RxCross1 />}
          </div>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button n-button" id="">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
