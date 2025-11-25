import joinImg from "../../src/assets/images/join-img.svg";
import joinImg2 from "../../src/assets/images/join-img2.svg";
import styles from "../../components/JoinUs/JoinUs.module.css";

export default function Join() {
  return (
    <section className={styles.joinsection}>
      <div className={styles.joincontainer}>
        <h1 className={styles.joinhead}>Join our free workshop</h1>
        <p className={styles.jointext}>
          Join our free workshops to unlock a world of learning and growth
          opportunities! Our workshops <br /> are designed to cater to a diverse
          range of interests and skill levels.
        </p>
      </div>

      <div className={styles.joinsubcontainer}>
        <img src={joinImg} className={styles.joinimage}></img>
        <div className={styles.joinsub}>
          <span>
            <h2 className={styles.joinsubhead}>
              Trusted by the 20,000+ happy students and online users since 1994
            </h2>
            <div className={styles.joinbtndiv}>
              <button className={styles.joinbtn}>Join Our Community</button>
            </div>
          </span>
          <div>
            <div className={styles.joinsubsection}>
              <span>
                <h2 className={styles.joinsubhead}>9.8/10</h2>
                <p className={styles.joinsubtext}>
                  <strong>Course approved score</strong> <br /> Achieving a
                  complete course <br /> approval score is significant
                </p>
              </span>
              <span>
                styles.
                <h2 className={styles.joinsubhead}>13k</h2>
                <p className={styles.joinsubtext}>
                  <strong>Satisfied students worldwide</strong> <br /> Satisfied
                  students worldwide <br /> share a common thread of happiness
                </p>
              </span>
            </div>
            <div className={styles.joinsubsection2}>
              <img
                src={joinImg2}
                className={styles.joinimg2}
                alt="Edufy Tutor"
              />
              <p>
                "All courses are incredibly to help people to achieve their
                goals"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
