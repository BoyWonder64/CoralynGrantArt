import classes from "./DigitalArt.module.css";

import bakingLifePhoto from "../../assets/HomePage/BakingLife.jpg";
import picnicPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";
import utSticker from "../../assets/DigitalArt/UtahSticker.png";
import beachSticker from "../../assets/DigitalArt/12x12beach.png";

function DigitalArt() {
  /*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={beachSticker} alt="Paper Collections" />
            <label>Paper Collections</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={bakingLifePhoto} alt="Illustrations" />
            <label>Illustrations</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.vwBusPhoto}>
            <img src={vwBusPhoto} alt="Illustrations" />
            <label>.SVG Files</label>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={utSticker} alt="Stickers" />
            <label>Stickers</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={picnicPhoto} alt="Clip Art" />
            <label>Clip Art</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalArt;
