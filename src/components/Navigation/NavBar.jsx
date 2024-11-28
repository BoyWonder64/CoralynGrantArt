import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import logo from "../../assets/logo.png";

/* 
  this navbar componet is what setups both the navigation and the 
  the logo at the top. If we need to add or remove pages it would be done here
  also notice that home isnt "/home" its "/"
*/

const NavBar = () => {
  return (
    <>
      <div className={classes.logoContainer}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <img src={logo} alt="Poppy Lane Designs" className={classes.logo} />
        </NavLink>
      </div>

      <div className={classes.menu}>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/digital-art"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
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
                isActive ? classes.active : undefined
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
                isActive ? classes.active : undefined
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
                isActive ? classes.active : undefined
              }
            >
              FREEBIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CONTACT & ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
