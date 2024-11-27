import classes from "./DigitalArt.module.css";

import bakingLifePhoto from "../../assets/HomePage/BakingLife.jpg";
import picnicPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";
import utSticker from "../../assets/DigitalArt/UtahSticker.png";
import beachSticker from "../../assets/DigitalArt/12x12beach.png";
import morecomingsoonImage from "../../assets/HomePage/morecomingsoon.png"

/*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/

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
