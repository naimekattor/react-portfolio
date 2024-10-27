import { useContext, useState } from "react";
import "swiper/css";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import { gallerydata } from "./../../galleryData";
import Modal from "../Modal/Modal";
const Portfolio = () => {
  const [data, setData] = useState(gallerydata);
  const [catagory, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [webUrl, setWebUrl] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [project, setProject] = useState("");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const filterItem = (categoryName) => {
    const updatedItems = gallerydata.filter(
      (curElem) => curElem.category === categoryName
    );
    setData(updatedItems);
  };
  //Modal popup
  const handleOpen = (id, weburl, imgUrl, project) => {
    setShowModal(true);
    setWebUrl(weburl);
    setimgUrl(imgUrl);
    setProject(project);
  };
  const handleClode = () => {
    setShowModal(false);
  };
  return (
    <div className="portfolio row" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>

      <div className="pTabs row">
        <ul className="col-lg-12 pListBtn">
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

        <div className="pImages col-lg-12">
          {data.map((curElem) => (
            <div className="pTabContent" key={curElem.id}>
              <img
                src={curElem.url}
                alt=""
                onClick={() => {
                  handleOpen(
                    curElem.id,
                    curElem.webUrl,
                    curElem.url,
                    curElem.project
                  );
                }}
              />
            </div>
          ))}
          {showModal && (
            <Modal
              close={handleClode}
              website={webUrl}
              imgUrl={imgUrl}
              project={project}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
