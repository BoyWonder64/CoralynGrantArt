import classes from "./Home.module.css";

/*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/

//Previous Page Photos
//Photos in order
import venicePhoto from "../../assets/HomePage/VeniceSquare.jpg";

import hollyHocksPhoto from "../../assets/HomePage/Hollyhocks.png";

import bakinglifePhoto from "../../assets/HomePage/BakingLife.jpg";
import paintingPhoto from "../../assets/HomePage/PaintingPhoto.png";
import picnicBasketPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import useInput from "../../hooks/useInput";

//New Page Photos

import ArtBoardMag from "../../assets/HomePage/NewHomePage/Artboard Mag Photo.png";
import bakingStillLife from "../../assets/HomePage/NewHomePage/Baking Still Life Square.jpg";
import bikeWFlowers from "../../assets/HomePage/NewHomePage/Bike W. Flowers.png";
import constructionCupcakes from "../../assets/HomePage/NewHomePage/Construction Cupcake Toppers.jpg";
import embroidedHats from "../../assets/HomePage/NewHomePage/Embroidered Hats.jpg";
import featureArtBoard from "../../assets/HomePage/NewHomePage/Featured in Artboard Mag.png";
import flowerPowerBanner from "../../assets/HomePage/NewHomePage/Flower Power Banner.jpg";
import headshotnIntro from "../../assets/HomePage/NewHomePage/Headshot & Intro.png";
import hollyHockPainting from "../../assets/HomePage/NewHomePage/Hollyhock Painting.png";
import hollyHocks from "../../assets/HomePage/NewHomePage/Hollyhocks.png";
import joinNewsLetter from "../../assets/HomePage/NewHomePage/Join My Newsletter Text.png";
import leafIllustration from "../../assets/HomePage/NewHomePage/Leaf Illustration.png";
import redBird from "../../assets/HomePage/NewHomePage/redBird.jpeg";
import strawberry from "../../assets/HomePage/NewHomePage/Strawberries.png";

const Home = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const formData = {
      name: enteredFirstName,
      email: enteredEmail,
    };

    try {
      await fetch(
        "https://coralyngrantart-8055d-default-rtdb.firebaseio.com/Customers.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error("Error saving data!: ", error);
    }

    resetFirstNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";


  return (
    <div className={classes.mainPage}>
      {/* Row 1 */}
      <section className={classes.homePhotoContainer}>
        <img
          src={headshotnIntro}
          alt="Headshot & Intro"
          className={classes.homePhoto}
        />
      </section>

      {/* Row 2 */}
      <section>
        <div className={classes.fourImageRowContainer}>
          <a
            href="https://www.etsy.com/listing/4337380251/celebrate-banner-birthday-banner-party"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={flowerPowerBanner} alt="Flower Banner" />
          </a>
          <a
            href="https://www.instagram.com/reel/DLwCvQqAhda/?utm_source=ig_web_copy_link&igsh=MjEwemthM3BkbDVk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hollyHockPainting} alt="Hollyhocks Paintings" />
          </a>
          <a
            href="https://www.etsy.com/listing/4333536171/construction-party-dump-truck-party"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={constructionCupcakes} alt="Construction Cupcakes" />
          </a>
          <a
            href="https://poppylane.us/graphic-design/digital-illustration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bakingStillLife} alt="Baking Construction" />
          </a>
        </div>
      </section>

      {/*Row 3 */}
      <div className={classes.imageRow}>
        <img
          src={featureArtBoard}
          alt="Left Image"
          className={classes.leftImage}
        />
        <a
          href="https://uad.education/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ArtBoardMag}
            alt="Right Image"
            className={classes.rightImage}
          />
        </a>
      </div>

      {/* Row 4 */}
      <section>
          
        <div className={classes.imageRow}>
          <div className={classes.formContainer}>
            
            <div className={classes.formHeader}>
              <img src={leafIllustration} alt="LeafIllustration" />
              <div className={classes.headerTextContainer}>
                <h3>Sign Up for My Newsletter</h3>
              </div>
            </div>
            <p>
              Sign up to get access to our newsletter filled with inspiration,
              freebies, printables and more!
            </p>

            <form className={classes.form} onSubmit={formSubmissionHandler}>
              <div className={firstNameInputClasses}>
                <div className={`${classes["form-control"]}`}>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Name:"
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler}
                    value={enteredFirstName}
                  />
                </div>
                {firstNameInputHasError && (
                  <p className={classes["error-text"]}>
                    Please enter your first name
                  </p>
                )}
                <div className={emailInputClasses}>
                  <div className={`${classes["form-control"]}`}>
                    <input
                      type="email"
                      id="email"
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      value={enteredEmail}
                      placeholder="Email:"
                    />
                  </div>
                  {emailInputHasError && (
                    <p className={classes["error-text"]}>
                      Please enter your email
                    </p>
                  )}
                </div>
              </div>
              <div className={classes["form-actions"]}>
                <button type="submit">Sign Up</button>
              </div>
            </form>
            
          </div>
        <div >
       
          </div>
               <img
              src={joinNewsLetter}
              alt="Join Monthy Newsletter"
              className={classes.rightImageText}
            />
        </div>
        
      </section>

      {/* Row 5 */}
      <section>
        <div className={classes.imageRowContainerSingle}>
          <a
            href="https://poppylane.us/graphic-design/digital-illustration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bikeWFlowers} alt="Bike with Flowers" />
          </a>
        </div>
      </section>

      {/* Row 6 */}
      <section>
        <div className={classes.fourImageRowContainer}>
          <a
            href="https://www.instagram.com/reel/DLwCvQqAhda/?utm_source=ig_web_copy_link&igsh=MjEwemthM3BkbDVk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hollyHocks} alt="Happy Painting" />
          </a>
          <a
            href="https://www.etsy.com/listing/4332893404/baby-shower-banner-baby-shower"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={strawberry} alt="Strawberries" />
          </a>
          <a
            href="https://www.instagram.com/reel/DL3T1uESNlA/?utm_source=ig_web_copy_link&igsh=MWlnM3Y2eTdlbWZodQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={embroidedHats} alt="Hats" />
          </a>
          <a
            href="https://poppylane.us/fine-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={redBird} alt="Like a Red Bird" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
