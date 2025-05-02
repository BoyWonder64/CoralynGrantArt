import classes from "./PatternDesign.module.css";

import Collection from "../../../assets/PatternDesign/Collection.png";
import MockUps from "../../../assets/PatternDesign/MockUps.png";

function PatternDesign() {
  return (
    <div className={classes.container}>
      {/* Image cards */}
      <div className={classes.card}>
        <img src={Collection} alt="Collection" />
      </div>

      <div className={classes.card}>
        <img src={MockUps} alt="Mock up" />
      </div>
    </div>
  );
}

export default PatternDesign;
