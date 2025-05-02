import classes from "./ColorMyDreamPage.module.css";

import CompositeWeb from "../../../assets/ColorMyDreamBox/CompositeWeb.jpg";
import FrontWCrayonsCropped from "../../../assets/ColorMyDreamBox/FrontWCrayonsCropped.jpg";
import Side1 from "../../../assets/ColorMyDreamBox/Side1.jpg";
import Side2 from "../../../assets/ColorMyDreamBox/Side2.jpg";
import Header from "../../../assets/ColorMyDreamBox/Header.png";
import Back from "../../../assets/ColorMyDreamBox/Back.jpg";
import HandComp from "../../../assets/ColorMyDreamBox/HandComps.png";
import BoxText from "../../../assets/ColorMyDreamBox/BoxText.png";

function ColorMyDreamPage() {
  return (
    <div className={classes.container} style={{ backgroundColor: "#D9EAEF" }}>
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img
            src={Header}
            alt="Color Dream Logo"
            style={{ transform: "translateY(30px)" }}
          />
        </div>
        <div className={classes.card}>
          <div style={{ height: "60px" }}></div> {/*Spacer*/}
          <img src={FrontWCrayonsCropped} alt="Front of Box" />
        </div>

        <div className={classes.card}>
          <img src={Side1} alt="Side 1 of Box" />
        </div>

        <div className={classes.card}>
          <img src={Side2} alt="Side 2 of Box" />
        </div>
      </div>


      {/* Text card */}
      <div className={classes.card}>
        <img src={BoxText} alt="Side 2 of Box" />
      </div>

      <div>
        <img src={HandComp} alt="Black and White Mockup2" style={{}} />
      </div>

      <div className={classes.card}>
        <img src={CompositeWeb} alt="Composite Web Mockup" />
      </div>
    </div>
  );
}

export default ColorMyDreamPage;
