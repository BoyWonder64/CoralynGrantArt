import classes from "./ZinePage.module.css";

import Back1 from "../../../assets/Zine/Back1.jpg";
import Spread1 from "../../../assets/Zine/Spread1.jpg";
import Spread2 from "../../../assets/Zine/Spread2.jpg";
import Spread3 from "../../../assets/Zine/Spread3.jpg";
import Spread4 from "../../../assets/Zine/Spread4.jpg";
import Spread5 from "../../../assets/Zine/Spread5.jpg";
import Spread7 from "../../../assets/Zine/Spread7.jpg";
import Spread9 from "../../../assets/Zine/Spread9.jpg";
import HEADERIMAGE from "../../../assets/Zine/HEADERIMAGE.png";
import Text from "../../../assets/Zine/Text.png";

function ZinePage() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={HEADERIMAGE} alt="Front Of Zine" />
      </div>

      <div className={classes.card}>
        <img src={Text} alt="Front Of Zine" />
      </div>

      {/* List of Images */}
      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={Spread1} alt="Spread 1" />
        </div>

        <div className={classes.card}>
          <img src={Spread2} alt="Spread 2" />
        </div>

        <div className={classes.card}>
          <img src={Spread3} alt="Spread 3" />
        </div>

        <div className={classes.card}>
          <img src={Spread4} alt="Spread 4" />
        </div>

        <div className={classes.card}>
          <img src={Spread5} alt="Spread 5" />
        </div>

        <div className={classes.card}>
          <img src={Spread7} alt="Spread 7" />
        </div>

        <div className={classes.card}>
          <img src={Spread9} alt="Spread 9" />
        </div>

        <div className={classes.card}>
          <img src={Back1} alt="Back of Zine" />
        </div>
      </div>
    </div>
  );
}

export default ZinePage;
