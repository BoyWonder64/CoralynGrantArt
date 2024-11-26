import classes from "./NewsLetterSummary.module.css";
import outdoorPhoto from "../../assets/homePhoto.png";
import venicePhoto from "../../assets/HomePage/VeniceSquare.jpg";
import hollyHocksPhoto from "../../assets/HomePage/Hollyhocks.png";
import vwBusPhoto from "../../assets/HomePage/VWBus.jpg";

const NewsLetterSummary = () => {
  return (
    <div>
      <section className={classes.summary}>
        <div className={classes.content}>
          <h2>&nbsp;&nbsp;&nbsp; Hi &nbsp; There!</h2>
          <p className={classes.p}>
            I am Coralyn Grant, a graphic designer <br /> and fine artist. I
            combine my love of nature, and history, into my artwork. <br />
            If you like what you see, sign up for my <br />
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
        <div className={classes.imageRow}>
          <div className={classes.homePhotoContainer}>
            <img
              src={hollyHocksPhoto}
              alt="Coralyn Grant Art"
              className={classes.hollyHocksPhoto}
            />
          </div>

          <div className={classes.homePhotoContainer}>
            <img
              src={vwBusPhoto}
              alt="Coralyn Grant Art"
              className={classes.homePhoto}
            />
          </div>

          <div className={classes.homePhotoContainer}>
            <img
              src={outdoorPhoto}
              alt="Coralyn Grant Art"
              className={classes.homePhoto}
            />
          </div>
        </div>
      </section>

      <section>
        <div className={classes.imageRow}>
          <div className={classes.homePhotoContainer}>
            <img
              src={outdoorPhoto}
              alt="Coralyn Grant Art"
              className={classes.homePhoto}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetterSummary;
