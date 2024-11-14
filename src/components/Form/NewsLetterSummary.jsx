import classes from "./NewsLetterSummary.module.css";
import homePhoto from "../../assets/homePhoto.png";
const NewsLetterSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.homePhotoContainer}>
        <img
          src={homePhoto}
          alt="Coralyn Grant Art"
          className={classes.homePhoto}
        />
      </div>
      <h2>Hi &nbsp; There!</h2>
      <p>
        I am Coralyn Grant, a graphic designer and fine artist. I combine my
        love of
        <br />
        nature, history, and the beauty I find in the world around me into my
        artwork.
        <br /> If you like what you see, send me a message, I’d love to hear
        from you.
      </p>
    </section>
  );
};

export default NewsLetterSummary;
