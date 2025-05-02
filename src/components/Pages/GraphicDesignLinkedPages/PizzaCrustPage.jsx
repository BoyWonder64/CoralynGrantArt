import classes from "./PizzaCrustPage.module.css";
import backgroundGrunge from "../../../assets/PizzaCrust/grunge-wall.jpg";
import FrontCan from "../../../assets/PizzaCrust/Front.png";
import CylSide1 from "../../../assets/PizzaCrust/CylinderSide1.jpg";
import CylSide2 from "../../../assets/PizzaCrust/CylinderSide2.jpg";
import Brainstorming from "../../../assets/PizzaCrust/Brainstorming.jpg";
import Brainstorming2 from "../../../assets/PizzaCrust/S&D.jpg";
import Mockup from "../../../assets/PizzaCrust/FullSized.jpg";
import CylinderComposite from "../../../assets/PizzaCrust/CylinderComposite.jpg";

import Header from "../../../assets/PizzaCrust/Header.png";
import CynText from "../../../assets/PizzaCrust/CynText.png";

function PizzaCrustPage() {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundGrunge})` }}
    >
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={Header} alt="Marco's Logo" />
        </div>

        <div className={classes.card}>
          <img src={FrontCan} alt="Front of Can" />
        </div>

        <div className={classes.card}>
          <img src={CylSide1} alt="Side 1 of Can" />
        </div>

        <div className={classes.card}>
          <img src={CylSide2} alt="Side 2 of Can" />
        </div>
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <img src={CynText} />
      </div>

      <div className={classes.card}>
        <h3>Process Images</h3>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={Brainstorming} alt="Brainstorming Session" />
        </div>

        <div className={classes.card}>
          <img src={Brainstorming2} alt="Other Brainstorming Session" />
        </div>
      </div>

      <div className={classes.card}>
        <img src={Mockup} alt="Other Brainstorming Session" />
      </div>

      <div className={classes.card}>
        <img src={CylinderComposite} alt="Final Product" />
      </div>
    </div>
  );
}

export default PizzaCrustPage;
