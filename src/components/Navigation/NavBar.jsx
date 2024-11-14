import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Poppy Lane Designs" className={styles.logo} />
      </div>

      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/digital-art"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              DIGITAL
              <br />
              <span style={{ textAlign: "center", display: "block" }}>ART</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/graphic-design"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              GRAPHIC
              <br />
              <span style={{ textAlign: "center", display: "block" }}>
                DESIGN
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fine-art"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              FINE
              <br />
              <span style={{ textAlign: "center", display: "block" }}>ART</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/freebies"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              FREEBIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              CONTACT/ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
