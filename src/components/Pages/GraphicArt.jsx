
import classes from "./GraphicArt.module.css";
import { Link } from "react-router-dom";

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
    {
      src: pizzaCrustFig,
      alt: "Crust",
      label: "Marco’s Artisan Pizza Crust Mix",
      link: "/graphic-design/pizza-crust",
    },
    {
      src: digitalBikeWinner,
      alt: "Digital Bike",
      label: "The Flower Peddler",
    },
    { src: phoneCase, alt: "Phone Case", label: "iPhone Case Design" },
    { src: Brochure, alt: "Brochure", label: "The Seat Brochure" },

    { src: BedThumbnail, alt: "Bed", label: "Apple Blossom Collection" },
    {
      src: HemlockInk,
      alt: "Hemlock Ink",
      label: "Hemlock Ink Branding",
      link: "/graphic-design/hemlockink",
    },
    { src: StickerSheet, alt: "Stickers", label: "Sticker Sheet" },
    {
      src: GableBox,
      alt: "Gable Box",
      label: "Color My Dreams Pajama Box",
      link: "/graphic-design/color-my-dream",
    },

    {
      src: AnnualReport,
      alt: "Annual Report",
      label: "The Seat Annual Report",
    },
    { src: Baking, alt: "Baking Illustration", label: "In The Making" },
    { src: PoppyLane, alt: "Branding", label: "Personal Branding" },
    { src: BabyShirt, alt: "Baby Shirt", label: "Apple Blossom Collection" },

    {
      src: Zine,
      alt: "Zine",
      label: "Zine",
      link: "/graphic-design/zine",
    },
    { src: Dress, alt: "Dress", label: "Apple Blossom Collection" },
    { src: Barn, alt: "Barn", label: "3D Barn Box " },
    { src: Village, alt: "Village", label: "German Christmas Village" },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.gallery}>
        {graphics.map((item, index) =>
          item.link ? (
            <Link
              to={item.link}
              key={index}
              className={classes.item}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={item.src} alt={item.alt} />
              <label>{item.label}</label>
            </Link>
          ) : (
            <div key={index} className={classes.item}>
              <img src={item.src} alt={item.alt} />
              <label>{item.label}</label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GraphicArt;