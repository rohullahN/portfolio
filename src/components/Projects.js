import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = (props) => {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [deps, setDeps] = useState({});

  const handleProjectClick = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const detailsModalClose = () => setDetailsModalShow(false);
  if (props.resumeProjects && props.resumeBasicInfo) {
    var projects = props.resumeProjects.map(function (project) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => handleProjectClick(project)}>
              <div>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
