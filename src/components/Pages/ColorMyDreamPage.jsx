import classes from "./ColorMyDreamPage.module.css";

import Back from "../../assets/ColorMyDreamBox/Back.jpg";
import CMDLOGO from "../../assets/ColorMyDreamBox/CMDLOGO.png";
import CompositeWeb from "../../assets/ColorMyDreamBox/CompositeWeb.jpg";
import FrontWCrayonsCropped from "../../assets/ColorMyDreamBox/FrontWCrayonsCropped.jpg";
import SandBackground from "../../assets/ColorMyDreamBox/SandBackground.jpg";
import Side1 from "../../assets/ColorMyDreamBox/Side1.jpg";
import Side2 from "../../assets/ColorMyDreamBox/Side2.jpg";
import MiniBack from "../../assets/ColorMyDreamBox/MiniBack.jpg";
import MiniFront from "../../assets/ColorMyDreamBox/MiniFront.jpg";


function ColorMyDreamPage() {
  return (
    <div className={classes.container} style={{ backgroundColor: "#D9EAEF" }}>
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={CMDLOGO} alt="Color Dream Logo" />
          <h2>Color MY Dreams Colorable Box Set</h2>
          <h2>GABLE BOX PACKAGE DESIGN</h2>
        </div>

        <div className={classes.card}>
          <img src={FrontWCrayonsCropped} alt="Front of Box" />
        </div>

        <div className={classes.card}>
          <img src={Side1} alt="Side 1 of Box" />
        </div>

        <div className={classes.card}>
          <img src={Side2} alt="Side 2 of Box" />
        </div>
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <h1>Challenge</h1>
        <p>
          Carson and Cole requested a gable box package design for their
          colorable children’s sleepwear line that was both functional and
          visually engaging. The package needed to clearly convey that the
          pajamas could be colored in by kids, while also embracing a fun,
          whimsical aesthetic which would appeal to a young audience.
        </p>
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <h1>Solution</h1>
        <p>
          I took a playful, colorful approach to the design in order to engage
          both children and their caregivers. By combining vibrant and fun
          colored images with black and white line art, I visually communicated
          that the pajama fabric could be colored. This highlighted the unique
          and exciting opportunity for kids to personalize their clothing.
        </p>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={MiniBack} alt="Black and White Mockup1" />
        </div>

        <div className={classes.card}>
          <img src={MiniFront} alt="Black and White Mockup2" />
        </div>
      </div>

      <div className={classes.card}>
        <h3>Hand Comps</h3>
      </div>

      <div className={classes.card}>
        <img src={CompositeWeb} alt="Composite Web Mockup" />
      </div>
    </div>
  );
}

export default ColorMyDreamPage;
