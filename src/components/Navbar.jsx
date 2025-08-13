import { useState, useEffect } from "react";

export default function Navbar() {
  const [brandName, setBrandName] = useState("Nandhu");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBrandName((prev) =>
          prev === "Nandhu" ? "Shreenandhan" : "Nandhu"
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "50px",
        margin: "10px auto",
        maxWidth: "90%",
        padding: "8px 20px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="container-fluid">
        {/* Brand Name with Fade Animation */}
        <a
          className={`navbar-brand fw-bold text-white ${fade ? "fade-in" : "fade-out"}`}
          href="#"
          style={{
            transition: "opacity 0.5s ease-in-out",
            fontSize: "1.5rem", // scalable font
          }}
        >
          {brandName}
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: "invert(1) brightness(2)", // make icon white
            }}
          ></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link mx-2 fw-medium"
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "white",
                    transition: "color 0.3s",
                    fontSize: "1rem", // adjust size for mobile
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#60fabaff")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
