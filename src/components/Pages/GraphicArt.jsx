import classes from "./GraphicArt.module.css";

import annualMockup from "../../assets/GraphicDesign/AnnualReportMockup.png";
import brochureMockup from "../../assets/GraphicDesign/BrochureMockup.png";
import corporatebranding from "../../assets/GraphicDesign/stationarykit.png";
import poppysquare from "../../assets/GraphicDesign/PoppySquare.png";
import newsLetter from "../../assets/GraphicDesign/NewsletterCropped.jpg";

function GraphicArt() {
  return (
    <div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={corporatebranding} alt="Corporate Branding" />
            <label>Corporate Branding</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={poppysquare} alt="Poppy Design" />
            <label>Poppy Design</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={newsLetter} alt="Newsletter" />
            <label>Newsletter</label>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.item}>
            <img src={annualMockup} alt="Annual Report" />
            <label>Annual Report</label>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.item}>
            <img src={brochureMockup} alt="Brochure" />
            <label>Brochure</label>
          </div>
        </div>
      </div>
      </div>

  );
}

export default GraphicArt;
