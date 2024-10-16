import { useContext, useState } from "react";
import "swiper/css";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import { gallerydata } from "./../../galleryData";
const Portfolio = () => {
  const [data, setData] = useState(gallerydata);
  const [catagory, setCategory] = useState("All");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const filterItem = (categoryName) => {
    const updatedItems = gallerydata.filter(
      (curElem) => curElem.category === categoryName
    );
    setData(updatedItems);
  };
  /* useEffect(() => {
    () => {
      category === "All"
        ? setData(gallerydata)
        : setData(gallerydata.filter((curelem) => curelem.category));
    };
  }, [category]); */
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>

      <div className="p-tabs">
        <ul>
          <li
            className={catagory == "All" ? "active" : ""}
            onClick={() => {
              setData(gallerydata);
              setCategory("All");
            }}
          >
            All
          </li>
          <li
            className={catagory == "LOGO" ? "active" : ""}
            onClick={() => {
              filterItem("logo");
              setCategory("LOGO");
            }}
          >
            LOGO
          </li>
          <li
            className={catagory == "VIDEO" ? "active" : ""}
            onClick={() => {
              filterItem("video");
              setCategory("VIDEO");
            }}
          >
            VIDEO
          </li>
          <li
            className={catagory == "WEB DESIGN" ? "active" : ""}
            onClick={() => {
              filterItem("web design");
              setCategory("WEB DESIGN");
            }}
          >
            WEB DESIGN
          </li>
          <li
            className={catagory == "WEB DEVELOPEMENT" ? "active" : ""}
            onClick={() => {
              filterItem("web developement");
              setCategory("WEB DEVELOPEMENT");
            }}
          >
            WEB DEVELOPEMENT
          </li>
        </ul>

        <div className="p-images">
          {data.map((curElem) => (
            <div className="p-tab-content" key={curElem.id}>
              <img src={curElem.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
