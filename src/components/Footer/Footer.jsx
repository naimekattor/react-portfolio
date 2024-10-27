import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content row">
        <div className="col-lg-3 col-md-6">
          <div>
            <h3>About Us</h3>
            <span>
              Welcome to my professional web development service! Complete
              Website Development from Hand Code to Live.
            </span>
            <div className="f-icons">
              <Insta color="black" size="3rem" className="insta" />
              <Facebook color="black" size="3rem" className="facebook" />
              <Github color="black" size="3rem" className="github" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div>
            <h3>Recommemnded</h3>
            <span>Web Design</span>
            <br />
            <span>Web Developement</span>
            <br />
            <span>React Developement</span>
            <br />
            <span>Mern Stack</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          {" "}
          <div>
            <h3>Legal</h3>
            <span>Privacy Policy</span>
            <br />
            <span>Terms & Conditions</span>
            <br />
            <span>Refund Policy</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div>
            <h3>
              Subscribe <br /> Now
            </h3>
            <span>Hi,thanks for</span>
            <br />
            <span>subcribe with us</span>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ border: "1px solid gray" }} />
        <div style={{ marginLeft: "3.5rem" }}>
          2024. Be Expert with Naim - All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
