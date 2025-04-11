/*import classes from "./GraphicArt.module.css";

import annualMockup from "../../assets/GraphicDesign/AnnualReportMockup.png";
import brochureMockup from "../../assets/GraphicDesign/BrochureMockup.png";
import corporatebranding from "../../assets/GraphicDesign/stationarykit.png";
import poppysquare from "../../assets/GraphicDesign/PoppySquare.png";
import newsLetter from "../../assets/GraphicDesign/NewsletterCropped.jpg";


/*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/

/*

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
            <label>Package Design</label>
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
*/
import classes from "./GraphicArt.module.css";

import pizzaCrustFig from "../../assets/GraphicDesign/NewPage/CylinderThumbnailFinal.jpg";
import digitalBikeWinner from "../../assets/GraphicDesign/NewPage/BikewFlowersThumbnail.jpg";
import phoneCase from "../../assets/GraphicDesign/NewPage/PhoneCasePinkThumbnail.jpg";
import Brochure from "../../assets/GraphicDesign/NewPage/BrochureThumbnailFinal.jpg";

import BedThumbnail from "../../assets/GraphicDesign/NewPage/BedThumbnailFinal.jpg";
import HemlockInk from "../../assets/GraphicDesign/NewPage/HemlockInkThumbnail.jpg";
import StickerSheet from "../../assets/GraphicDesign/NewPage/StickerSheetThumbnail.jpg";
import GableBox from "../../assets/GraphicDesign/NewPage/GableBoxThumbnail.jpg";

import AnnualReport from "../../assets/GraphicDesign/NewPage/AnnualReportThumbnail.jpg";
import Baking from "../../assets/GraphicDesign/NewPage/BakingIllustrationThumbnail.jpg";
import PoppyLane from "../../assets/GraphicDesign/NewPage/PoppyLaneBranding.jpg";
import BabyShirt from "../../assets/GraphicDesign/NewPage/BabyShirtThumbnail.jpg";

import Zine from "../../assets/GraphicDesign/NewPage/ZineThumbnail.jpg";
import Dress from "../../assets/GraphicDesign/NewPage/Dress.jpg";
import Barn from "../../assets/GraphicDesign/NewPage/Barn3DThumbnail.jpg";
import Village from "../../assets/GraphicDesign/NewPage/WinterVillageThumbnail.jpg";

function GraphicArt() {
  const graphics = [
    { src: pizzaCrustFig, alt: "Crust", label: "Marco’s Artisan Pizza Crust Mix" },
    { src: digitalBikeWinner, alt: "Digital Bike", label: "The Flower Peddler" },
    { src: phoneCase, alt: "Phone Case", label: "iPhone Case Design" },
    { src: Brochure, alt: "Brochure", label: "The Seat Brochure" },

    { src: BedThumbnail, alt: "Bed", label: "Apple Blossom Collection" },
    { src: HemlockInk, alt: "Hemlock Ink", label: "Hemlock Ink Branding" },
    { src: StickerSheet, alt: "Stickers", label: "Sticker Sheet" },
    { src: GableBox, alt: "Gable Box", label: "Color My Dreams Pajama Box" },

    { src: AnnualReport, alt: "Annual Report", label: "The Seat Annual Report" },
    { src: Baking, alt: "Baking Illustration", label: "In The Making" },
    { src: PoppyLane, alt: "Branding", label: "Personal Branding" },
    { src: BabyShirt, alt: "Baby Shirt", label: "Apple Blossom Collection" },

    { src: Zine, alt: "Zine", label: "Zine" },
    { src: Dress, alt: "Dress", label: "Apple Blossom Collection" },
    { src: Barn, alt: "Barn", label: "3D Barn Box " },
    { src: Village, alt: "Village", label: "German Christmas Village" },
  ];

  return (
    <div className={classes.grid}>
      {graphics.map((item, index) => (
        <div key={index} className={classes.item}>
          <img src={item.src} alt={item.alt} />
          <label>{item.label}</label> {/* Add label here */}
        </div>
      ))}
    </div>
  );
}

export default GraphicArt;