import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";
const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card s-card"
      style={darkMode ? { background: "white", color: "black" } : {}}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
