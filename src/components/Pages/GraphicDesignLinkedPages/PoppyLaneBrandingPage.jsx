import classes from "./PoppyLaneBrandingPage.module.css";

import BCard from "../../../assets/PoppyLane2/BCard.png";
import BrandingColors from "../../../assets/PoppyLane2/BRANDING COLORs.png";
import HEADER from "../../../assets/PoppyLane2/HEADER.png";
import LogoColors2 from "../../../assets/PoppyLane2/LogoColors.png";
import Secondary from "../../../assets/PoppyLane2/SECONDARY LOGO.png";
import Stationary from "../../../assets/PoppyLane2/Stationary Mockup.png";

function PoppyLaneBrandingPage() {
  return (
    <div className={classes.container}>
      {/* Row 1 */}

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={HEADER} alt="Primary Logo" />
        </div>

        <div className={classes.card}>
          <img src={BCard} alt="Primary Logo IMG" />
        </div>
      </div>

      {/* Row 2 */}

      <div className={classes.card}>
        <img src={Secondary} alt="Primary Logo" />
      </div>

      {/* Row 3 */}

      <div className={classes.card}>
        <img src={Stationary} alt="Primary Logo" />
      </div>

      <div className={classes.card}>
        <img src={LogoColors2} alt="Primary Logo" />
      </div>

    </div>
  );
}

export default PoppyLaneBrandingPage;
