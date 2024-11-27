import classes from "./DigitalArt.module.css";

import bakingLifePhoto from "../../assets/HomePage/BakingLife.jpg";
import picnicPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";




function DigitalArt() {
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Digital Art</h1>

      <div className={classes.row}>
        <div className={classes.column}>
          <img src={picnicPhoto} alt="Baking Life" />
          <img src={bakingLifePhoto} alt="Baking Life" />
        </div>
        <div className={classes.column}>
          <img src={vwBusPhoto} alt="Baking Life" />
        </div>


      </div>
    </div>
  );
}

export default DigitalArt;