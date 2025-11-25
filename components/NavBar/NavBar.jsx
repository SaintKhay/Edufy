import logo from "../../src/assets/images/logo.svg";
import searchIcon from "../../src/assets/images/search-icon.svg";
import dropdown from "../../src/assets/images/dropdown-icon.svg";
import styles from "../../components/NavBar/NavBar.module.css";

export default function Navbar() {
  return (
    <header className="container">
      <nav>
        <img
          className={styles.logo}
          src={logo}
          alt="Edufy Logo"
          fetchPriority="high"
        />
        <ul className={styles.navlinks}>
          <li className="flex">
            <a href="#home">Demos</a>
            <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
          </li>
          <li className={styles.flex}>
            <a href="#about">CMS Pages</a>
            <img
              src={dropdown}
              alt="Dropdown Icon"
              className={styles.dropdownicon}
            />
          </li>
          <li className="flex">
            <a href="#services">Essential Pages</a>
            <img
              src={dropdown}
              alt="Dropdown Icon"
              className={styles.dropdownicon}
            />
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">About Us</a>
          </li>
        </ul>

        <span className={styles.signin}>
          <img
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchicon}
          />
          <button className={styles.loginbtn}>Join Our Course</button>
        </span>
      </nav>
    </header>
  );
}
