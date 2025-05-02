import classes from "./HemlockInkPage.module.css";

import BCards from "../../../assets/HemlockInk/BCards.jpg";
import brandcolors from "../../../assets/HemlockInk/brandcolors.png";
import Clearspace from "../../../assets/HemlockInk/Clearspace.png";
import FANG from "../../../assets/HemlockInk/FANG.png";
import GDiamond from "../../../assets/HemlockInk/GDiamond.png";
import Reversed from "../../../assets/HemlockInk/Reversed.png";
import Secondary from "../../../assets/HemlockInk/Secondary.png";
import Words from "../../../assets/HemlockInk/BRIEF.png";
import NewBack from "../../../assets/HemlockInk/WebPattern.png";

import LogoHeader from "../../../assets/HemlockInk/Logo Header.png";

function HemlockInkPage() {
  return (
    <div className={classes.twinkleBackground}>
      <div
        className={classes.container}
        style={{
          backgroundImage: `url(${NewBack})`,
          backgroundColor: "#89AEE3", // fallback color
          backgroundSize: "40%",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "right top",
          // backgroundSize: "auto",
        }}
      >
        {/*First row*/}
        <div className={classes.card + "" + classes.largerTopImg}>
          <img src={LogoHeader} alt="Main Logo" />
        </div>
        {/*Second row*/}
        <div className={classes.card + " " + classes.leftShift}>
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
            <div>
              <img
                src={Reversed}
                alt="ReversedColor"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  transform: "translateX(70px)", // string!
                }}
              />
              <img
                src={Clearspace}
                alt="Clearspace"
                style={{
                  width: "150%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
        {/*Fifth row*/}
        <div className={classes.imageGrid}>
          {/* Image cards */}
          <div className={classes.card + " " + classes.leftShift}>
            <img src={FANG} alt="Secondary"  style={{
                  width: "150%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HemlockInkPage;
