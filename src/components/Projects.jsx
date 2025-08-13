import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images from assets (so Vite processes them)
import RVA1 from "/src/assets/ProjectImg/RVA/image1.png";
import RVA2 from "/src/assets/ProjectImg/RVA/image2.png";
import RVA3 from "/src/assets/ProjectImg/RVA/image3.png";
import RVA4 from "/src/assets/ProjectImg/RVA/image4.png";
import RVA5 from "/src/assets/ProjectImg/RVA/image5.png";
import RVA6 from "/src/assets/ProjectImg/RVA/image6.png";

import AMS1 from "/src/assets/ProjectImg/AMS/img1.png";
import AMS2 from "/src/assets/ProjectImg/AMS/img2.png";
import AMS3 from "/src/assets/ProjectImg/AMS/img3.png";
import AMS4 from "/src/assets/ProjectImg/AMS/img4.png";
import AMS5 from "/src/assets/ProjectImg/AMS/img5.png";
import AMS6 from "/src/assets/ProjectImg/AMS/img6.png";
import AMS7 from "/src/assets/ProjectImg/AMS/img7.png";
import AMS8 from "/src/assets/ProjectImg/AMS/img8.png";
import AMS9 from "/src/assets/ProjectImg/AMS/img9.png";

import IC1 from "/src/assets/ProjectImg/IC/1.png";
import IC2 from "/src/assets/ProjectImg/IC/2.png";
import IC3 from "/src/assets/ProjectImg/IC/3.png";
import IC4 from "/src/assets/ProjectImg/IC/4.png";

import WA1 from "/src/assets/ProjectImg/WA/1.png";
import WA2 from "/src/assets/ProjectImg/WA/2.png";

import RA1 from "/src/assets/ProjectImg/RA/1.png";
import RA2 from "/src/assets/ProjectImg/RA/2.png";
import RA3 from "/src/assets/ProjectImg/RA/3.png";
import RA4 from "/src/assets/ProjectImg/RA/4.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Remote Village App",
      desc: "A digital learning platform empowering 10th and 12th grade students in remote villages with study materials, online exams, and evaluation — inspiring confidence to excel in competitive exams.",
      gitLink: "https://github.com/ShreeNandhu/Remote-Village-App.git",
      liveLink: "https://remotevillage2023-25.web.app/",
      images: [RVA1, RVA2, RVA3, RVA4, RVA5, RVA6],
      techStack: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
      ],
    },
    {
      title: "Airline Management",
      desc: "Airline Management — book tickets, cancel tickets, view tickets, and select seats.",
      gitLink: "https://github.com/ShreeNandhu/AMS.git",
      images: [AMS1, AMS2, AMS3, AMS4, AMS5, AMS6, AMS7, AMS8, AMS9],
      techStack: [
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Spring Boot", icon: "/icons/spring.svg" },
        { name: "Angular", icon: "/icons/angular.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
      ],
    },
    {
      title: "Instagram Clone",
      desc: "Instagram Clone — share photos, like posts, comment, follow users, and view feeds in real-time.",
      gitLink: "https://github.com/ShreeNandhu/Insta-Clone.git",
      images: [IC1, IC2, IC3, IC4],
      techStack: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
      ],
    },
    {
      title: "Weather App",
      desc: "Weather App — view current conditions, forecasts, and search by location with live updates.",
      gitLink: "https://github.com/ShreeNandhu/weather-forecast.git",
      images: [WA1, WA2],
      techStack: [{ name: "React", icon: "/icons/react.svg" }],
    },
    {
      title: "Recipe App",
      desc: "Recipe App — browse, search, and save recipes with ingredients and step-by-step instructions.",
      gitLink: "https://github.com/ShreeNandhu/recipe-app.git",
      images: [RA1, RA2, RA3, RA4],
      techStack: [{ name: "React", icon: "/icons/react.svg" }],
    },
  ];

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
      }}
    >
      <div className="container pt-5" style={{ maxWidth: "1200px" }}>
        <h2 className="mb-4 text-center fw-bold">Projects</h2>

        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="p-4 rounded shadow-sm h-100 section-card"
                style={{ backgroundColor: "#1a1a1a", cursor: "pointer" }}
                onClick={() => openProject(project)}
              >
                <img
                  src="/icons/folder.svg"
                  alt={project.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    marginBottom: "1rem",
                  }}
                />
                <h4 className="fw-bold mb-2" style={{ color: "#1a6c4a" }}>
                  {project.title}
                </h4>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal show fade"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.8)",
            overflowY: "hidden",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <p>{selectedProject.desc}</p>

                <div className="mb-3 d-flex flex-wrap justify-content-center gap-2">
                  <a
                    href={selectedProject.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#059669",
                    }}
                  >
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>

                  <a
                    href={selectedProject.liveLink || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.liveLink) e.preventDefault();
                    }}
                    className="btn d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: selectedProject.liveLink
                        ? "#059669"
                        : "#6b7280",
                      pointerEvents: selectedProject.liveLink ? "auto" : "none",
                      opacity: selectedProject.liveLink ? 1 : 0.5,
                    }}
                  >
                    <img
                      src="/icons/external-link.svg"
                      alt="Live Demo"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </a>
                </div>

                <div className="position-relative d-inline-block w-100">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt="images"
                    className="img-fluid"
                    style={{
                      maxHeight: "60vh",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <button
                    className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                    style={{ opacity: 0.7 }}
                    onClick={handlePrevImage}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                    style={{ opacity: 0.7 }}
                    onClick={handleNextImage}
                  >
                    ❯
                  </button>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  {selectedProject.techStack.map((tech, i) => (
                    <div key={i} className="text-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <small className="d-block">{tech.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .section-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }
          .section-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(26, 108, 74, 0.6);
          }
          @media (max-width: 576px) {
            .modal-dialog {
              max-width: 95% !important;
              margin: auto;
            }
            .modal-body {
              overflow-x: hidden;
            }
            .modal-body img {
              width: 100% !important;
              height: auto !important;
            }
            .btn {
              font-size: 14px;
              padding: 6px 12px;
            }
          }
        `}
      </style>
    </section>
  );
}
