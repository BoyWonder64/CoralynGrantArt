import classes from "./ColorMyDreamPage.module.css";

import Background from "../../assets/ColorMyDreamBox/Back.jpg";
import CMDLOGO from "../../assets/ColorMyDreamBox/CMDLOGO.png";
import CompositeWeb from "../../assets/ColorMyDreamBox/CompositeWeb.jpg";
import FrontCrayonsCropped from "../../assets/ColorMyDreamBox/FrontWCrayonsCropped.jpg";
import Side1 from "../../assets/ColorMyDreamBox/Side1.jpg";
import Side2 from "../../assets/ColorMyDreamBox/Side2.jpg";

function ColorMyDreamPage() {
    return (
      <div className={classes.container}>
        <img src={Background} alt="Background" className={classes.background} />
  
        <div className={classes.foreground}>
          <img src={CMDLOGO} alt="Logo" className={classes.image} />
          <img src={CompositeWeb} alt="Composite" className={classes.image} />
          <img
            src={FrontCrayonsCropped}
            alt="Crayons Front"
            className={classes.image}
          />
          <img src={Side1} alt="Side 1" className={classes.image} />
          <img src={Side2} alt="Side 2" className={classes.image} />
        </div>
      </div>
    );
  }

export default ColorMyDreamPage;
