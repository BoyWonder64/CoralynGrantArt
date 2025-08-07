import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import logo from "../../assets/SiteLogo.png";

/* 
  this navbar componet is what setups both the navigation and the 
  the logo at the top. If we need to add or remove pages it would be done here
  also notice that home isnt "/home" its "/"
*/

const NavBar = () => {
  return (
    <>
      <div className={classes.menu}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <img src={logo} alt="Poppy Lane Designs" className={classes.logo} />
        </NavLink>

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
              ILLUSTRATION
              <br />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fine-art"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              FINE ART
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coming-soon"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/graphic-design"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              GRAPHIC DESIGN
              {/* <span style={{ textAlign: "center", display: "block" }}>
                DESIGN
              </span> */}
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/coming-soon"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              SHOP
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
