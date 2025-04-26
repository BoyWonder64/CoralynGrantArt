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
import Words from "../../../assets/HemlockInk/BRIEF.png";

function HemlockInkPage() {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${PatternFinal})`,
        backgroundColor: "#89AEE3", // fallback color
        // backgroundSize: "40%",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "right top",
        backgroundSize: "auto",
      }}
    >
      {/*First row*/}
      <div className={classes.card + "" + classes.largerTopImg}>
        <img src={Main} alt="Main Logo" />
        <h2>Hemlock Ink Corporate Branding</h2>
      </div>
      {/*Second row*/}
      <div className={classes.card + " " + classes.leftShift}>
        <h3 className={classes.h3Left}>SECONDARY LOGO</h3>
        <img src={Secondary} alt="Secondary" />
      </div>
      {/*Third row*/}
      <div style={{ height: "90px" }}></div> {/*Spacer*/}
      <div className={classes.imageGrid}>
        <div className={classes.overlapWrapper + " " + classes.leftShift}>
          <img
            src={BCards}
            alt="Business Cards"
            className={classes.bcardsImg}
          />
          <img
            src={GDiamond}
            alt="Diamond Twinkle"
            className={classes.twinkleImg}
          />
        </div>

        {/*Fourth row*/}

        <div className={classes.cardWBack}>
          <h3>DESIGN BRIEF</h3>
          <img src={Words} alt="Word Description" />
        </div>
      </div>
      <div style={{ height: "90px" }}></div>
      <div className={classes.imageGrid}>
        <img
          src={brandcolors}
          alt="Brand Colors"
          className={classes.leftShift}
        />
        <div className={classes.card + " " + classes.leftShift}>
          <div className={classes.smallerGreenImg}>
            <img src={Reversed} alt="ReversedColor" />
          </div>

          <img src={Clearspace} alt="Clearspace" />
        </div>
      </div>
      {/*Fifth row*/}
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card + " " + classes.leftShift}>
          <h3>TYPEFACE</h3>
          <img src={FANG} alt="Secondary" />
        </div>
      </div>
    </div>
  );
}

export default HemlockInkPage;
