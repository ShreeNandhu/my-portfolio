import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Remote Village App",
      desc: "A digital learning platform empowering 10th and 12th grade students in remote villages with study materials, online exams, and evaluation — inspiring confidence to excel in competitive exams.",
      gitLink: "https://github.com/ShreeNandhu/Remote-Village-App.git",
      liveLink: "https://remotevillage2023-25.web.app/",
      images: [
        "/src/assets/ProjectImg/RVA/image1.png",
        "/src/assets/ProjectImg/RVA/image2.png",
        "/src/assets/ProjectImg/RVA/image3.png",
        "/src/assets/ProjectImg/RVA/image4.png",
        "/src/assets/ProjectImg/RVA/image5.png",
        "/src/assets/ProjectImg/RVA/image6.png",
      ],
      techStack: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Firebase", icon: "icons/firebase.svg" },
      ],
    },
    {
      title: "Airline Management",
      desc: "Airline Management — book tickets, cancel tickets, view tickets, and select seats.",
      gitLink: "https://github.com/ShreeNandhu/AMS.git",

      images: [
        "/src/assets/ProjectImg/AMS/img1.png",
        "/src/assets/ProjectImg/AMS/img2.png",
        "/src/assets/ProjectImg/AMS/img3.png",
        "/src/assets/ProjectImg/AMS/img4.png",
        "/src/assets/ProjectImg/AMS/img5.png",
        "/src/assets/ProjectImg/AMS/img6.png",
        "/src/assets/ProjectImg/AMS/img7.png",
        "/src/assets/ProjectImg/AMS/img8.png",
        "/src/assets/ProjectImg/AMS/img9.png",
      ],
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
      images: [
        "/src/assets/ProjectImg/IC/1.png",
        "/src/assets/ProjectImg/IC/2.png",
        "/src/assets/ProjectImg/IC/3.png",
        "/src/assets/ProjectImg/IC/4.png",
      ],
      techStack: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Firebase", icon: "icons/firebase.svg" },
      ],
    },
    {
      title: "Weather App",
      desc: "Weather App — view current conditions, forecasts, and search by location with live updates.",
      gitLink: "https://github.com/ShreeNandhu/weather-forecast.git",

      images: [
        "/src/assets/ProjectImg/WA/1.png",
        "/src/assets/ProjectImg/WA/2.png",
      ],
      techStack: [{ name: "React", icon: "/icons/react.svg" }],
    },
    {
      title: "Recipe App",
      desc: "Recipe App — browse, search, and save recipes with ingredients and step-by-step instructions.",
      gitLink: "https://github.com/ShreeNandhu/recipe-app.git",
      images: [
        "/src/assets/ProjectImg/RA/1.png",
        "/src/assets/ProjectImg/RA/2.png",
        "/src/assets/ProjectImg/RA/3.png",
        "/src/assets/ProjectImg/RA/4.png",
      ],
      techStack: [{ name: "React", icon: "/icons/react.svg" }],
    },
    // ...other projects
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
                  src="./src/assets/folder.svg"
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

      {/* Modal */}
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

                {/* Links */}
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
                        : "#6b7280", // green if active, gray if disabled
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

                {/* Image Carousel */}
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

                {/* Tech stack */}
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

      {/* Styles */}
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
              overflow-x: hidden; /* Hide horizontal scroll */
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
