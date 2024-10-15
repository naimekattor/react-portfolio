import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "./../../img/heartemoji.png";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
const MyServices = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left side */}
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : {}}>My Awesome</span>
        <span>Services</span>
        <span>Crafting stories through design and innovation</span>
        <button className="button s-button">Download Cv</button>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem", top: "2rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Web Design"
            detail={
              "Creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look using coding languages like HTML, CSS, and JavaScript."
            }
          />
        </div>
        {/* 2nd card  */}
        <div style={{ top: "12rem", left: "-5rem" }}>
          <Card
            emoji={Glasses}
            heading="Web Developement"
            detail={
              "Develops World Wide Web applications using a client–server model.Create, build, and customize your website"
            }
          />
        </div>
        {/* 3rd card  */}
        <div style={{ top: "23rem", left: "14rem" }}>
          <Card
            emoji={Humble}
            heading="Web solution"
            detail={
              "Top Rated Web Design & Development Agency. We are an experienced and talented team of passionate developers who lives and breathe in web design and development."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyServices;
