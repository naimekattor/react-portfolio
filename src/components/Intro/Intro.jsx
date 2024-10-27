import "./Intro.css";
import boy from "./../../img/naim4.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro row d-flex ">
      <div className="i-left col-lg-6 col-md-12 col-sm-12">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : {}}>Hi! i Am </span>
          <span>Naim</span>
          <span style={darkMode ? { color: "white" } : {}}>
            Passionate front end web designer and developer.
            <br /> Greetings! I am a front end Website Developer with 6+ years
            of professional work experience. I specialize in custom websites,
            dynamic web applications, and eCommerce solutions. Whether you need
            WordPress or a fully custom site using HTML, CSS, JavaScript,
            Bootstrap, React JS, I've got you covered! I also transform
            FIGMA/PSD designs into responsive websites. Your satisfaction is my
            top priority. I’m not just here for one-time projects—I’m committed
            to building long-term partnerships. Hire me today to take your
            project to the next level!
          </span>
        </div>
        <button className="i-button button">Hire me</button>
      </div>
      <div
        className={` i-right ${
          darkMode ? "top-corner-bg-dark" : "top-corner-bg"
        } col-lg-6 col-md-12 col-sm-12`}
      >
        <div className="profile-image">
          <div className="profile-circle">
            <img src={boy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
