import { useState } from "react";
import "./Certification.css";

import javaCert from "../../assets/Certificate/Java.jpg";
import journalCert from "../../assets/Certificate/Journal.jpg";
import embCert from "../../assets/Certificate/Embedded.jpg";
import nitCert from "../../assets/Certificate/nitConf.jpg";
import nptel from "../../assets/Certificate/NPTEL.jpg";
import python from "../../assets/Certificate/python.jpg";
import teachnook from "../../assets/Certificate/teachnook.jpg";
import ux1 from "../../assets/Certificate/UX_1.jpg";
import ux2 from "../../assets/Certificate/UX_2.jpg";
import ux3 from "../../assets/Certificate/UX_3.jpg";
import ux4 from "../../assets/Certificate/UX_4.jpg";

const certifications = [
  { id: 1, img: javaCert, name: "Java Full Stack Certification" },
  { id: 2, img: journalCert, name: "Publications" },
  { id: 3, img: embCert, name: "Embedded System" },
  { id: 4, img: nitCert, name: "NIT Conference" },
  { id: 5, img: nptel, name: "Programming in Java - NPTEL" },
  { id: 6, img: python, name: "Basic Python" },
  { id: 7, img: teachnook, name: "Teachnook - Web Development" },
  { id: 8, img: ux1, name: "Foundations of UX" },
  { id: 9, img: ux2, name: "Start the UX Design Process" },
  { id: 10, img: ux3, name: "Build Wireframes" },
  { id: 11, img: ux4, name: "Conduct UX Research" },
];

export default function CertificationCarousel() {
  const [modalImg, setModalImg] = useState(null);
  const allCertificates = [...certifications, ...certifications,...certifications];

  return (
    <>
      <div className="certificates-container">
        <div className="scroll-track">
          {allCertificates.map((cert, index) => (
            <div
              className="cert-item"
              key={index}
              onClick={() => setModalImg(cert.img)}
            >
              <img src={cert.img} alt={cert.name} />
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Certificate" className="modal-image" />
        </div>
      )}
    </>
  );
}
