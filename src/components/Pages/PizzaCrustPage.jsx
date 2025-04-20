import classes from "./PizzaCrustPage.module.css";
import backgroundGrunge from "../../assets/PizzaCrust/grunge-wall.jpg";
import MarcosLogo from "../../assets/PizzaCrust/MarcosLogo.png";
import FrontCan from "../../assets/PizzaCrust/Front.png";
import CylSide1 from "../../assets/PizzaCrust/CylinderSide1.jpg";
import CylSide2 from "../../assets/PizzaCrust/CylinderSide2.jpg";
import recipe from "../../assets/PizzaCrust/Brainstorming.jpg";

function PizzaCrustPage() {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundGrunge})` }}
    >
      <div className={classes.card}>
        <h3>Front Packaging</h3>
        <p>
          This is the final packaging with a clean, modern feel while preserving
          an artisan touch.
        </p>
      </div>


      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={MarcosLogo} alt="Marco's Logo" />
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

        {/* Text card */}
        <div className={classes.card}>
          <h1>Something would go here</h1>
          <p>Howdy partners this is the wildest ride in the wilderness</p>
        </div>

        {/* More images */}
        <div className={classes.card}>
          <img src={MarcosLogo} alt="Marco's Logo" />
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
    </div>
  );
}

export default PizzaCrustPage;
