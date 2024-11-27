import  { useState } from "react";
import classes from "./FineArt.module.css";

import florals from "../../assets/FineArt/florals.jpeg";
import stilllife from "../../assets/FineArt/stilllife.jpg";
import birds from "../../assets/FineArt/birds.jpeg";
import seasonal from "../../assets/FineArt/seasonal.jpeg";
import train from "../../assets/FineArt/Train.jpg";
import travel from "../../assets/FineArt/travel.jpg";

function GraphicArt() {

  const [showInfo, setShowInfo] = useState(false);


  const handleImageClick = () => {
    setShowInfo(true); 
  };

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={florals} alt="Florals" onClick={handleImageClick} />
            <label>Florals</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={stilllife} alt="Still Life" onClick={handleImageClick} />
            <label>Still Life</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={birds} alt="Birds" onClick={handleImageClick} />
            <label>Birds</label>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={seasonal} alt="Seasonal" onClick={handleImageClick} />
            <label>Seasonal</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={train} alt="Landscape" onClick={handleImageClick} />
            <label>Landscape</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={travel} alt="Travel" onClick={handleImageClick} />
            <label>Travel</label>
          </div>
        </div>
      </div>

      {showInfo && (
        <p className={classes.p}>
          Please contact me at{" "}
          <a href="mailto:corgrant5@gmail.com">corgrant5@gmail.com</a> if you are
          interested in original art or prints. All gallery-wrapped canvas are
          giclee prints. Paper prints are on fine art textured paper.
        </p>
      )}
    </div>
  );
}

export default GraphicArt;
