import React from "react";
import { useState } from "react";
import learnImg from ".//learn-img.svg";
import learnIcon1 from ".//learn-icon1.svg";
import learnIcon2 from ".//learn-icon2.svg";
import learnIcon3 from ".//learn-icon3.svg";
import openIcon from ".//open-icon.svg";
import closeIcon from ".//close-icon.svg";
import TextType from "../../src/animations/TextType.jsx";
import styles from ".//Learn.module.css";

export default function Learn() {
  const learnMarkUp = [
    {
      heading: "Create Your Account",
      description:
        "Create your free Edux account and browse through our form in extensive catalog of courses. Use filters and personalized to the recommendations to find the perfect courses.",
      image: learnIcon1,
      isTrue: false,
    },
    {
      heading: "Enroll in a Course",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: learnIcon2,
      isTrue: false,
    },
    {
      heading: "Start Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur alias odit assumenda voluptas, velit cupiditate magni tempore perferendis, dolorum in nihil distinctio quibusdam, ullam aliquid magnam ratione!",
      image: learnIcon3,
      isTrue: false,
    },
  ];

  const [items, setItems] = useState(learnMarkUp);

  function toggle(index) {
    setItems((prev) =>
      prev.map((items, i) =>
        i === index ? { ...items, isTrue: !items.isTrue } : items
      )
    );
  }
  return (
    <section className={`${styles.learncontainer}`}>
      <div className={`container  ${styles.learncontent}`}>
        <div className={styles.learntxtcontent}>
          <h1 className={`${styles.learntitle} secondary-header`}>
            Learn in 3 simple steps on Edux.
          </h1>

          <div className={`aboutussubcontent  ${styles.learnsubcontent}`}>
            {items.map((item, index) => (
              <div
                className={`aboutussubsection ${styles.learnsubsec} `}
                key={index}
              >
                <img
                  className="aboutusimage"
                  src={item.image}
                  alt="about-us-icon"
                />

                <div>
                  <div className={styles.learnheadspan}>
                    <h3 className={`aboutussubhead ${styles.paddingbottom}`}>
                      {item.heading}
                    </h3>
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={item.isTrue}
                      className={styles.toggleButton}
                    >
                      <img
                        className={styles.toggleicon}
                        src={item.isTrue ? closeIcon : openIcon}
                        alt={item.isTrue ? "Close" : "Open"}
                      />
                    </button>
                  </div>
                  <p
                    className={`aboutussubtext page-text ${
                      styles.learnDescription
                    }  ${!item.isTrue ? styles.closed : ""}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          loading="lazy"
          src={learnImg}
          alt="learn-img"
          className={styles.learnimage}
        />
      </div>
    </section>
  );
}
