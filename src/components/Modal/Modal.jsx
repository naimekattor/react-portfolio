import "./Modal.css";
import { ImCross } from "react-icons/im";
const Modal = ({ close, website, imgUrl, project }) => {
  return (
    <div
      className="row modal-main"
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,0.7)",
        position: "fixed",
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        overflowY: "hidden",
        zIndex: 11,
      }}
    >
      <div className="mod-content row">
        <h2 className="mod-heading ">Project Name</h2>
        <div className="modal-details row">
          <div className="md-left col-lg-6 col-sm-12">
            <span>Project : {project}</span>
            <br />
            <span>Language : Html,Css,Javascript,React Js</span>
          </div>
          <div className="md-right col-lg-6 col-sm-12">
            <span>Client : Freelancer.com</span>
            <br />
            <span>
              Preview :{" "}
              <a href={website} target="_blank">
                {website}
              </a>
            </span>
          </div>
        </div>
        <div className="modal-image">
          <img src={imgUrl} alt="" />
        </div>
        <button className="close-modal">
          <ImCross onClick={close} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
