import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience row" id="Experience">
      <div className="achievement col-lg-4 col-md-4 col-sm-4">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          8+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement col-lg-4 col-md-4 col-sm-4">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          20+
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement col-lg-4 col-md-4 col-sm-4">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          5+
        </div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
