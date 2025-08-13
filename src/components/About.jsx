import CertificationCarousel from "./Certication/Certification";
import Skills from "./Skills/Skills";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0d0d0d",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
      }}
    >
      
      {/* About Me Text */}
      <div className="container pt-5" style={{ maxWidth: "960px" }}>
        <h2 className="mb-4 text-center fw-bold">About Me</h2>
        <p
          className="text-center mb-5"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          I am an MCA student skilled in <strong>React</strong>,{" "}
          <strong>Java</strong>, <strong>SQL</strong>, and{" "}
          <strong>UI/UX design</strong>. I enjoy building modern web
          applications and constantly learning new technologies to improve my
          craft.
        </p>

        {/* Education & Internship Row */}
        <div className="row justify-content-center g-4">
          {/* Education */}
          <div className="col-md-4 col-sm-6 col-12">
            <div
              className="p-4 rounded shadow-sm h-100 section-card"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <h4 className="fw-bold mb-3" style={{ color: "#1a6c4a" }}>
                🎓 Education
              </h4>
              <div className="d-flex align-items-center mb-3">
                <img
                  src="./anna.jpg"
                  alt="Anna University"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <strong>MCA</strong>
                  <br />
                  <span>Anna University</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src="./bishop.jpg"
                  alt="Bishop Heber College"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <strong>B.Com CA</strong>
                  <br />
                  <span>Bishop Heber College</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div className="col-md-4 col-sm-6 col-12">
            <div
              className="p-4 rounded shadow-sm h-100 section-card"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <h4 className="fw-bold mb-3" style={{ color: "#1a6c4a" }}>
                💼 Internship
              </h4>
              <ul className="list-unstyled">
                <li>
                  <strong>React Developer Intern</strong> – Rencata
                </li>
                <li>Built responsive React applications.</li>
                <li>Improved UI/UX design and optimized performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div style={{ width: "100%", marginTop: "3rem" }}>
        <h2 className="text-center mb-4" style={{ color: "white" }}>
          Certifications
        </h2>
        <CertificationCarousel />
      </div>
      
      {/* Skills Section */}
      <div style={{ width: "100%", marginTop: "3rem" }}>
        <h2 className="text-center mb-4" style={{ color: "white" }}>
          Skills
        </h2>
        <Skills />
      </div>

      {/* Styles */}
      <style>
        {`
          .section-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .section-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(26, 108, 74, 0.6);
          }
          @media (max-width: 767px) {
            .section-card {
              margin-bottom: 1.5rem;
            }
          }
        `}
      </style>
    </section>
  );
}
