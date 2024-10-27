import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w5k858a", "template_t6i57u5", form.current, {
        publicKey: "ow5GcVRwarO7SjCPO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form row" id="Contact">
      <div className="c-left col-lg-3 col-sm-12">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-right col-lg-3 col-sm-12">
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            id=""
          />
          <input
            type="submit"
            value="Send"
            className="button Con-button"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
