import classes from "./Home.module.css";

//Photos in order
import venicePhoto from "../../assets/HomePage/VeniceSquare.jpg";

import hollyHocksPhoto from "../../assets/HomePage/Hollyhocks.png";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";
import formImage from "../../assets/HomePage/FormImage.png";

import bakinglifePhoto from "../../assets/HomePage/BakingLife.jpg"
import paintingPhoto from "../../assets/HomePage/PaintingPhoto.png"
import picnicBasketPhoto from "../../assets/HomePage/PicnicBasket.jpg"

/*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/


const Home = () => {
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


export default Home;
