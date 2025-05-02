import classes from "./ColorMyDreamPage.module.css";

import CompositeWeb from "../../../assets/ColorMyDreamBox/CompositeWeb.jpg";
import FrontFinal from "../../../assets/ColorMyDreamBox/FrontFinal.jpg";
import Header from "../../../assets/ColorMyDreamBox/Header.png";
import Angles from "../../../assets/ColorMyDreamBox/Angles.png";
import HandComp from "../../../assets/ColorMyDreamBox/HandComps.png";
import BoxText from "../../../assets/ColorMyDreamBox/BoxText.png";

function ColorMyDreamPage() {
  return (
    <div className={classes.container} style={{ backgroundColor: "#D9EAEF" }}>
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={Header} alt="Color Dream Logo" />
        </div>

        <div className={classes.card}>
          <img src={FrontFinal} />
        </div>
      </div>

      <div className={classes.card}>
        <img src={Angles} />
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
