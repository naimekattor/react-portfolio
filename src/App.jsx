import "./App.css";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import MyServices from "./components/MyServices1/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./Context";

function App() {
  const [loading, setLoading] = useState(true);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //loading App
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <div
      className="app"
      style={
        darkMode
          ? { background: "black", color: "#fff", zIndex: "-9" }
          : { color: "#000" }
      }
    >
      {loading ? (
        <div>
          <div className="loading">
            <div className="loading__letter">L</div>
            <div className="loading__letter">o</div>
            <div className="loading__letter">a</div>
            <div className="loading__letter">d</div>
            <div className="loading__letter">i</div>
            <div className="loading__letter">n</div>
            <div className="loading__letter">g</div>
            <div className="loading__letter">.</div>
            <div className="loading__letter">.</div>
            <div className="loading__letter">.</div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Intro />
          <MyServices />
          <Experience />
          <Works />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
