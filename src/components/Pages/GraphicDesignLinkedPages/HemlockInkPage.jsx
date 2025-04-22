import classes from "./HemlockInkPage.module.css";

import PatternFinal from "../../../assets/HemlockInk/PatternFinal.png";
import BCards from "../../../assets/HemlockInk/BCards.jpg";
import brandcolors from "../../../assets/HemlockInk/brandcolors.png";
import Clearspace from "../../../assets/HemlockInk/Clearspace.png";
import FANG from "../../../assets/HemlockInk/FANG.png";
import GDiamond from "../../../assets/HemlockInk/GDiamond.png";
import Main from "../../../assets/HemlockInk/Main.png";
import Reversed from "../../../assets/HemlockInk/Reversed.png";
import Secondary from "../../../assets/HemlockInk/Secondary.png";

function HemlockInkPage() {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${PatternFinal})`,
        backgroundColor: "#89AEE3", // fallback color
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // makes it fill the screen height
      }}
    >
      <div className={classes.card}>
        <img src={Main} alt="Main Logo" />
        <h2>Hemlock Ink Corporate Branding</h2>
      </div>
      {/* <div className={classes.card}>
        <h3>Front Packaging</h3>
        <p>
          This is the final packaging with a clean, modern feel while preserving
          an artisan touch.
        </p>
      </div> */}

      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <h3>SECONDARY LOGO</h3>
          <img src={Secondary} alt="Secondary" />
        </div>
      </div>

      <div className={classes.imageGrid}>
         <img src={BCards} alt="Secondary" />
        <div className={classes.card}>
          <h3>Design Brief</h3>
        
        </div>
      </div>
    </div>
  );
}

export default HemlockInkPage;
