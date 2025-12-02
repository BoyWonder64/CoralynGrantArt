import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import logo from "../../assets/SiteLogo.png";

const NavBar = () => {
  return (
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

        {/* SERVICES DROPDOWN */}
        <li className={classes.dropdown}>
          <NavLink
            to="/digital-art"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SERVICES
          </NavLink>

          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="/graphic-design">Graphic Design</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </li>

        {/* ART & ILLUSTRATION DROPDOWN */}
        <li className={classes.dropdown}>
          <NavLink
            to="/fine-art"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            ART & ILLUSTRATION
          </NavLink>

          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="/fine-art">Fine Art</NavLink>
            </li>
            <li>
              <NavLink to="/digital-art">Illustrations</NavLink>
            </li>
          </ul>
        </li>

        {/* ABOUT DROPDOWN */}
        <li className={classes.dropdown}>
          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            ABOUT
          </NavLink>

          <ul className={classes.dropdownMenu}>
            <li>
              <a href="https://poppylaneus.wordpress.com/" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <NavLink to="/aboutme">My Bio</NavLink>
            </li>
          </ul>
        </li>

        {/* SHOP (no dropdown, unless you want one) */}
        <li>
          <NavLink
            to="https://www.etsy.com/shop/poppylanedesignsus/?etsrc=sdt"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SHOP
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
