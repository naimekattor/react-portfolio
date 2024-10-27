import React, { useContext } from "react";
import "./Works.css";
import Upwork from "./../../img/Upwork.png";
import Fiverr from "./../../img/fiverr.png";
import Amazon from "./../../img/amazon.png";
import Shopify from "./../../img/Shopify.png";
import Facebook from "./../../img/Facebook.png";
import { themeContext } from "../../Context";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works row">
      <div className="awesome col-lg-6 col-md-12 col-sm-12">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          rerum blanditiis facilis maxime et quidem aliquam unde id .
          <br />
          distinctio saepe harum ipsam dolorum aut accusamus tempore.
          <br />
          rerum blanditiis facilis maxime et quidem aliquam unde id .
        </span>
        <button className="button s-button">Download Cv</button>
      </div>
      <div className="w-right col-lg-6 col-md-12 col-sm-12">
        <div>
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
