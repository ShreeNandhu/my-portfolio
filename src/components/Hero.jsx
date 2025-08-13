import { ReactTyped } from "react-typed";
import NandhuImg from './src/assets/Nandhu.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* LEFT: Introduction */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold display-5 display-md-4">
              Hi, I'm{" "}
              <ReactTyped
                strings={["Shreenandhan", "Nandhu"]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </h1>
            <h4 className="mt-2">Software Developer</h4>
            <p className="lead mt-3">
              I’m a passionate <strong>Software Developer</strong> dedicated to
              crafting clean, modern, and functional web applications. I
              specialize in building user-friendly interfaces, turning ideas
              into interactive digital experiences.
            </p>
            <a
              href="#projects"
              className="btn btn-lg px-4 py-2 mt-3"
              style={{
                borderRadius: "50px",
                backgroundColor: "#1a6c4a",
                border: "none",
                color: "white",
              }}
            >
              View My Work
            </a>
          </div>

          {/* RIGHT: Circular Image */}
          <div className="col-md-6 text-center">
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                border: "5px solid white",
                boxShadow: "0 0 30px rgba(255,255,255,0.3)",
              }}
              className="mx-auto"
            >
              <img
                src={NandhuImg}
                alt="Nandhu"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
