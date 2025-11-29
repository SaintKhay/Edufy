import React from "react";
import { useState } from "react";
import learnImg from ".//learn-img.svg";
import openIcon from ".//open-icon.svg";
import closeIcon from ".//close-icon.svg";
import styles from ".//Learn.module.css";
import { learnMarkUp } from "./learn.js";

export default function Learn() {
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
