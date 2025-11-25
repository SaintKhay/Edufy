import aboutIcon1 from "../src/assets/images/icon-about1.svg";
import aboutIcon2 from "../src/assets/images/icon-about2.svg";
import aboutIcon3 from "../src/assets/images/icon-about3.svg";

export default function About() {
  const aboutData = [
    {
      title: "Learn anywhere",
      content:
        "Learning from anywhere has become a transform aspect of modern education, allowing individuals.",
      image: aboutIcon1,
    },
    {
      title: "Expert Mentors",
      content:
        "Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge and.",
      image: aboutIcon2,
    },
    {
      title: "Learn in demand skills",
      content:
        "In today's rapidly evolving job market, learning in demand skills is crucial for career advancement.",
      image: aboutIcon3,
    },
  ];
  return (
    <section className="about-section">
      <div className="about-container container">
        {aboutData.map((section, index) => {
          return (
            <span className="about-sub" key={index}>
              <img src={section.image} alt="Monitor Icon" />
              <h4 className="about-head">{section.title}</h4>
              <p className="about-text">{section.content}</p>
            </span>
          );
        })}
      </div>
    </section>
  );
}
