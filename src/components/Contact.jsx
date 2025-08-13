import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#373737ff", color: "white" }}
    >
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Contact Me</h2>

        <div className="d-flex flex-column align-items-center gap-3">
          {/* Email */}
          <a
            href="mailto:shree150902@example.com"
            className="d-flex align-items-center text-decoration-none text-white"
          >
            <FaEnvelope size={24} className="me-2" />
            Shreenandhan
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nandhu02/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none text-white"
          >
            <FaLinkedin size={24} className="me-2" />
            Shreenandhan
          </a>
        </div>
      </div>
    </section>
  );
}
