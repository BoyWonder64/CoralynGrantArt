import classes from "./DigitalIllustrationPAge.module.css";

import Bike from "../../../assets/DigitalIllustration/Bike w. flowers.jpg";
import German from "../../../assets/DigitalIllustration/German Village.jpg";
import Making from "../../../assets/DigitalIllustration/In The Making.jpg";

function DigitalIllustrationPAge() {
  return (
    <div className={classes.container}>
      {/* Image cards */}
      <div className={classes.card}>
        <img src={Bike} alt="Blue Ribbon Award Bike" />
        <h2>The Flower Peddler </h2>
        <p>Award Of Excellence, SLCC Student Art Showcase</p>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={German} alt="German Village" />
          <h2>German Christmas Village </h2>
        </div>

        {/* Text card */}
        <div className={classes.card}>
          <img src={Making} alt="Someones in the kitchen with Coralyn" />
          <h2>In the Making </h2>
        </div>
      </div>
    </div>
  );
}

export default DigitalIllustrationPAge;
