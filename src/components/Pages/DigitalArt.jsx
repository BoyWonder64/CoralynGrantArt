import classes from "./DigitalArt.module.css";

import topPhoto from "../../assets/Illurstration/Illustration Page Top.png"
import bottomPhoto from "../../assets/Illurstration/Illustration Page Bottom.png";


function DigitalArt() {

  return (
    <>
      <div className={classes.container}>
     
        <img src={topPhoto} alt="Top Photo" />
      </div>
      <div className={classes.container}>
        <img src={bottomPhoto} alt="Bottom Photo" />
      </div>
    </>
  );
}

export default DigitalArt;
