import heroImg from "../../src/assets/images/hero-img.svg";
import heroIcon from "../../src/assets/images/hero-icon1.svg";
import heroIcon2 from "../../src/assets/images/hero-icon2.svg";
import heroIcon3 from "../../src/assets/images/hero-icon3.svg";
import star2 from "../../src/assets/images/star-1.svg";
import star1 from "../../src/assets/images/star-2.svg";
import styles from "../../components/Hero/Hero.module.css";

export default function Hero() {
  const designContainer = [
    {
      src: heroIcon,
      alt: "hero-icons",
      className: `${styles.shape1} ${styles.shapes}`,
    },
    {
      src: heroIcon2,
      alt: "hero-icons",
      className: `${styles.shape2} ${styles.shapes}`,
    },
    {
      src: heroIcon3,
      alt: "hero-icons",
      className: `${styles.shape3} ${styles.shapes}`,
    },
  ];
  return (
    <section className={`${styles.hero}  container`}>
      <div>
        <h1 className={styles.headerprimary}>
          Study from home with our experts.
        </h1>
        <p className={styles.headersubtitle}>
          Studying from home has never been more effective or convenient, thanks
          to our team of experts. Our specialized online courses are designed to
          bring the classroom experience to you, no matter where you are.
        </p>
        <div className='btn-container'>
          <button className="btn">Get Started Now</button>
        </div>

        <div className={styles.designcontainer}>
          {designContainer.map((item, index) => (
            <img
              key={index}
              className={item.className}
              src={item.src}
              alt={item.alt}
            />
          ))}

          <img className={styles.star1} src={star1} alt="hero-icons" />
          <img className={styles.star2} src={star2} alt="hero-icons" />
        </div>
      </div>
      <img src={heroImg} alt="hero-img" className={styles.heroimage} />
    </section>
  );
}
