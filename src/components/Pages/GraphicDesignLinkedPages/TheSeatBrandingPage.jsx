import classes from "./TheSeatBrandingPage.module.css";

import AnnualReport from "../../../assets/TheSeatBranding/AnnualReportFinal.jpg";
import BCseatback from "../../../assets/TheSeatBranding/BCseatback.jpg";
import BrochureMockup from "../../../assets/TheSeatBranding/BrochureMockup.jpg";
import folderBrandingMockup from "../../../assets/TheSeatBranding/folderBrandingMockup.jpg";
import SeatLogo from "../../../assets/TheSeatBranding/HEADER.png";

import BrochureText from "../../../assets/TheSeatBranding/BrochureText.png";
import BrochureHand from "../../../assets/TheSeatBranding/BROCHUREHAND.png";

import AReportText from "../../../assets/TheSeatBranding/AReportText.png";
import AReportHands from "../../../assets/TheSeatBranding/AReportHands.png";



function TheSeatBrandingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.customCard}>
          <img src={SeatLogo} alt="Seat Logo" />
        </div>

        <div className={classes.card}>
          <img src={BCseatback} alt="Seat Book w Logo" />
        </div>
      </div>
      <div className={classes.card}>
        <img src={folderBrandingMockup} alt="Seat Logo" />
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <img src={BrochureText} alt="Seat Logo" />
      </div>

      <div className={classes.card}>
        <img src={BrochureMockup} alt="Seat Logo" />
      </div>

      <div className={classes.card}>
        <img src={BrochureHand} alt="Seat Logo" />
      </div>

      <div className={classes.card}>
        <img src={AReportText} alt="Annual Report Text" />
      </div>

      <div className={classes.card}>
        <img src={AnnualReport} alt="Seat Book w Logo" />
      </div>

      <div className={classes.card}>
        <img src={AReportHands} alt="Drawings of Process" />
      </div>
    </div>
  );
}

export default TheSeatBrandingPage;
