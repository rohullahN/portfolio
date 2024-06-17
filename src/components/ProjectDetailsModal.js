import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
  if (props.data) {
    const technologies = props.data.technologies;
    const images = props.data.images;
    const title = props.data.title;
    const description = props.data.description;
    const sourceCodeUrl = props.data.sourceCodeUrl;
    const liveDemoUrl = props.data.liveDemoUrl;

    const tech = technologies
      ? technologies.map((icons, i) => (
          <li className="list-inline-item" key={i}>
            <span>
              <div className="text-center">
                <i className={icons.class} style={{ fontSize: "260%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        ))
      : null;

    const img = images
      ? images.map((elem, i) => <div key={i} data-src={elem} />)
      : null;

    return (
      <Modal {...props} size="lg" centered className="modal-inside">
        <span onClick={props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <div
              className="d-flex align-items-center"
              style={{ padding: "5px 5px 0 5px" }}
            >
              <h3 className="flex-grow-1">{title}</h3>
              <ul className="list-inline mb-0">{tech}</ul>
            </div>
            <p className="modal-description">{description}</p>
            <div
              className="col-md-12 text-center mb-4"
              style={{ height: "50px" }}
            >
              {sourceCodeUrl && (
                <a
                  href={sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary mx-2`}
                  style={{ fontSize: "1.5rem" }}
                >
                  Source Code
                </a>
              )}
              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary mx-2`}
                  style={{ fontSize: "1.5rem" }}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return null;
};

export default ProjectDetailsModal;
