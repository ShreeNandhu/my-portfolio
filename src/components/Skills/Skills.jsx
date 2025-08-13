import "./Skills.css";

export default function Skills() {
  const icons = [
    "/icons/after-effects.svg",
    "/icons/bootstrap.svg",
    "/icons/css.svg",
    "/icons/figma.svg",
    "/icons/html.svg",
    "/icons/java.svg",
    "/icons/linux.svg",
    "/icons/mongo.svg",
    "/icons/mysql.svg",
    "/icons/photoshop.svg",
    "/icons/react.svg",
    "/icons/spring.svg",
    "/icons/github.svg",
    "/icons/git.svg",
  ];

  const renderedIcons = [...icons, ...icons]; // duplicate for loop

  return (
    <section className="skills-marquee" aria-label="Skills marquee">
      <div className="marquee-track">
        {renderedIcons.map((src, i) => (
          <div className="marquee-item" key={`${src}-${i}`}>
            <img src={src} alt="" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
