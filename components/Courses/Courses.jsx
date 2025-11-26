import course1 from "./course-img1.svg";
import course2 from "./course-img2.svg";
import course3 from "./course-img3.svg";
import course4 from "./course-img4.svg";
import course5 from "./course-img5.svg";
import course6 from "./course-img6.svg";
import courseIcon from "./course-icon.svg";
import styles from "../../components/Courses/Courses.module.css";

export default function Courses() {
  const coursesData = [
    {
      title: "UI/UX",
      header: "Mastering UI/UX design from fundamentals to advanced",
      text: "Starting with the core principles of design the course delves into research",
      image: course1,
    },
    {
      title: "Web Design",
      header: "Creative Web Design: Crafting Visually Stunning Websites",
      text: "Design Beautiful, User-Friendly Websites with Projects and Expert-Led Lessons",
      image: course2,
    },
    {
      title: "Web Development",
      header:
        "Mastering Web Development: From Fundamentals to Advanced Feature",
      text: "Build Responsive Websites.Applications with HandsOn Projects and Experties",
      image: course3,
    },
    {
      title: "Digital Marketing",
      header: "Digital Marketing Mastery: Strategies for Success Online",
      text: "Unlock the Power of Digital Marketing with Proven  Practical  Expert Insights",
      image: course4,
    },
    {
      title: "App Development",
      header: "App Development: Building Innovative Mobile Solutions",
      text: "Create High-Performance Mobile Apps with Expert Guidance",
      image: course5,
    },
    {
      title: "UI/UX",
      header: "UI/UX Design: Crafting Engaging User Experiences",
      text: "Master UI/UX Design with Comprehensive Techniques for Users",
      image: course6,
    },
  ];

  return (
    <section className={`courses   ${styles.coursessection}`}>
      <div className="container">
        <div className={styles.coursestextcontent}>
          <h2 className={styles.coursestitle}>Our popular courses</h2>
          <p className={styles.coursessubtitle}>
            Our popular courses are designed to meet the diverse needs and
            interests of our students,
            <br /> providing top-notch education and practical skills.
          </p>
        </div>

        <div className={styles.coursecardcontainer}>
          {coursesData.map((course, index) => (
            <div className={styles.coursecardsubcontent1} key={index}>
              <div>
                <p className={styles.course}>{course.title}</p>
                <h3 className={styles.courseheader}>{course.header}</h3>
                <img
                  src={course.image}
                  alt="course-icon"
                  className={styles.courseimage}
                />
                <p className={styles.coursetext}>{course.text}</p>
              </div>

              <div className={styles.coursecardsubcontent}>
                <img src={courseIcon} alt="course-icon" />
                <p className={styles.seemore}>12 Lessons</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
