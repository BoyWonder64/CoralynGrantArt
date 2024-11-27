import classes from "./DigitalArt.module.css";

import bakingLifePhoto from "../../assets/HomePage/BakingLife.jpg";
import picnicPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";
import utSticker from "../../assets/DigitalArt/UtahSticker.png";
import beachSticker from "../../assets/DigitalArt/12x12beach.png";
import morecomingsoonImage from "../../assets/HomePage/morecomingsoon.png"

function DigitalArt() {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.column}>
          <img src={picnicPhoto} alt="Picnic photo" />
        </div>
        <div className={classes.column}>
          <img src={bakingLifePhoto} alt="Baking Life" />
        </div>
        <div className={classes.column}>
          <img src={utSticker} alt="Utah Sticker" />
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <img src={vwBusPhoto} alt="VW Bus" />
        </div>
        <div className={classes.column}>
          <img src={beachSticker} alt="Beach Sticker" />
        </div>
        <div className={classes.column}>
          <img src={morecomingsoonImage} alt="more coming soon image" />
        </div>
      </div>

      
    </div>
  );
}

export default DigitalArt;
