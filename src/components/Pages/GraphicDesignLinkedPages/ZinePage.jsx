import classes from "./ZinePage.module.css";

import Back1 from "../../../assets/Zine/Back1.jpg";
import Spread1 from "../../../assets/Zine/Spread1.jpg";
import Spread2 from "../../../assets/Zine/Spread2.jpg";
import Spread3 from "../../../assets/Zine/Spread3.jpg";
import Spread4 from "../../../assets/Zine/Spread4.jpg";
import Spread5 from "../../../assets/Zine/Spread5.jpg";
import Spread7 from "../../../assets/Zine/Spread7.jpg";
import Spread9 from "../../../assets/Zine/Spread9.jpg";
import ZineMockCover from "../../../assets/Zine/ZINEMockupCoverCropped.jpg";

function ZinePage() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={ZineMockCover} alt="Front Of Zine" />
        <h2>A Suburban Mom’s Survival Guide</h2>
        <h2>ZINE</h2>
      </div>

      <div className={classes.card}>
        <h1>Challenge</h1>
        <p>
          To share my experience during the Covid-19 pandemic in a zine format
        </p>

        <h1>Solution</h1>
        <p>
          I wanted to share my experiences and a few of the things I learned in
          surviving the pandemic so I created a guide with stories and tips that
          helped me mentally survive this challenging time of my life. I used
          clear, consistent formatting and colors throughout to emphasize the
          survival theme.
        </p>
      </div>

      <div className={classes.imageGrid}>
        {/* Image cards */}
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
