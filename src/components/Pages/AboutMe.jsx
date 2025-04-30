import classes from "./AboutMe.module.css";

import BioTop from "../../assets/AboutMe/BioIntro.png";
import Plant from "../../assets/AboutMe/Plant.png";

function AboutMe() {
  return (
    <div className={classes.container}>
      {/* Image cards */}
      <div className={classes.card}>
        <img src={BioTop} alt="Bio Top" />
      </div>

      <div className={classes.card}>
        <img src={Plant} alt="Bio Top" />
      </div>
    </div>
  );
}

export default AboutMe;
