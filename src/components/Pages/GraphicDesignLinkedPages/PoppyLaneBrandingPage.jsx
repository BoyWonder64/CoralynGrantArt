import classes from "./PoppyLaneBrandingPage.module.css";
import Adelle from "../../../assets/PoppyLane/Adelle.png";
import BigCaslon from "../../../assets/PoppyLane/Big Caslon.png";
import BRANDMARKS from "../../../assets/PoppyLane/BRANDMARKS.png";
import BRANDING from "../../../assets/PoppyLane/BRANDING COLORS.png";
import BusinessCard from "../../../assets/PoppyLane/Business Card CROPPED.jpg";
import ColoredFlower from "../../../assets/PoppyLane/Colored Flower Only.png";
import FlowerOnly from "../../../assets/PoppyLane/Flower only Reversed.png";
import Hori from "../../../assets/PoppyLane/Horizontal Logo.png";
import LogoColors from "../../../assets/PoppyLane/LOGO COLORS.png";
import Neato from "../../../assets/PoppyLane/Neato.png";
import PLLOGO from "../../../assets/PoppyLane/PL Logo.png";
import PrimaryLogo from "../../../assets/PoppyLane/PRIMARY LOGO.png";
import SecondaryLogo from "../../../assets/PoppyLane/SECONDARY LOGO.png";
import StationMock from "../../../assets/PoppyLane/Stationary MockUp.jpg";
import TYPEFACES from "../../../assets/PoppyLane/TYPEFACES.png";

function PoppyLaneBrandingPage() {
  return (
    <div className={classes.container}>
      {/* Row 1 */}
      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={PrimaryLogo} alt="Primary Logo" />
          <img src={PLLOGO} alt="Primary Logo IMG" />
          <p>
            Inspired by the California Poppy flower, the Poppy Lane logo was
            created to reflect our company’s emphasis on beautiful, creative and
            innovative designs.
          </p>
        </div>

        <div className={classes.card}>
          <img src={BusinessCard} alt="Business Logo" />
        </div>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={SecondaryLogo} alt="Secondary Logo" />
          <img src={Hori} alt="Horizontal Logo" />
        </div>

        <div className={classes.card}>
          <img src={StationMock} alt="Business Logo" />
        </div>
      </div>
      {/* Row 2 */}
      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={BRANDMARKS} alt="Business Logo" />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <img
              src={ColoredFlower}
              alt="Colored Flower"
              style={{ width: "150px", height: "auto" }}
            />
            <img
              src={FlowerOnly}
              alt="Flower Only"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div className={classes.imageGrid}>
        <img src={TYPEFACES} alt="Typefaces Overview" />
        <div className={classes.card}>
          <img src={Neato} alt="Neato Font" />
          <img src={BigCaslon} alt="Big Caslon Font" />
          <img src={Adelle} alt="Adelle Font" />
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
    </div>
  );
}

export default PoppyLaneBrandingPage;
