import classes from "./Home.module.css";

//Photos in order
import venicePhoto from "../../assets/HomePage/VeniceSquare.jpg";

import hollyHocksPhoto from "../../assets/HomePage/Hollyhocks.png";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";
import formImage from "../../assets/HomePage/FormImage.png";

import bakinglifePhoto from "../../assets/HomePage/BakingLife.jpg"
import paintingPhoto from "../../assets/HomePage/PaintingPhoto.png"
import picnicBasketPhoto from "../../assets/HomePage/PicnicBasket.jpg"

//This is broken into three sections the each section contains a row of images, to update them
// you will need to import them with a name, and a file path
// then use update the image you want to replace with a name
// the images animatons will remain

const NewsLetterSummary = () => {
  return (
    <div className={classes.mainPage}>
      <section className={classes.summary}>
        <div className={classes.content}>
          <h2>&nbsp;&nbsp;&nbsp; Hi &nbsp; There!</h2>
          <p className={classes.p}>
            I am Coralyn Grant, a graphic designer and
            fine artist. I combine my love of nature,
             and history, into my artwork.
             If you like what you see, sign up for my 
            monthly newsletter I’d love to hear from you!
          </p>
        </div>
        <div className={classes.homePhotoContainer}>
          <img
            src={venicePhoto}
            alt="home venice photo"
            className={classes.homePhoto}
          />
        </div>
      </section>
      <section>
        <div className={classes.imageRowContainer}>
          <div className={classes.imageRowContainer}>
            <img
              src={hollyHocksPhoto}
              alt="Coralyn Grant Art"
              className={classes.formImage}
            />
          </div>

          <div className={classes.imageRowContainer}>
            <img
              src={vwBusPhoto}
              alt="Coralyn Grant Art - VW Bus"
              className={classes.formImage}
            />
          </div>

          <div className={classes.imageRowContainer}>
            <img
              src={formImage}
              alt="Form Image"
              className={classes.formImage}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.imageRowContainer}>
          <div className={classes.imageRowContainer}>
            <img
              src={bakinglifePhoto}
              alt="Form Image"
              className={classes.formImage}
            />
          </div>

          <div className={classes.imageRowContainer}>
            <img
              src={paintingPhoto}
              alt="Coralyn Grant Art"
              className={classes.formImage}
            />
          </div>

          <div className={classes.imageRowContainer}>
            <img
              src={picnicBasketPhoto}
              alt="Coralyn Grant Art"
              className={classes.formImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};


export default NewsLetterSummary;
