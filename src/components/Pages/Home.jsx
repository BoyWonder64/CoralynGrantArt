import classes from "./Home.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

/* New New Home page */

import introPhoto from "../../assets/HomePage/NewNewHomePage/My Photo & Intro.png";

import train from "../../assets/HomePage/NewNewHomePage/train.jpg";
import bird from "../../assets/HomePage/NewNewHomePage/bird.jpg";
import camera from "../../assets/HomePage/NewNewHomePage/camera.jpg";

import wreath from "../../assets/HomePage/NewNewHomePage/wreath.jpg";
import bike from "../../assets/HomePage/NewNewHomePage/bike.jpg";
import baking from "../../assets/HomePage/NewNewHomePage/baking.jpg";

import letsworktogether from "../../assets/HomePage/NewNewHomePage/Lets Work Together.png";
import letsconnect from "../../assets/HomePage/NewNewHomePage/Lets Connect.png";

import germanVillageMagazine from "../../assets/HomePage/NewNewHomePage/Magazine Cover.jpg";

/* New New Home page Rotating */
import annualReportThumbRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Annual Report Thumbnail.jpg";
import annualReportRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator1.Annual Report.jpg";
import zineRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator2.Zine.jpg";
import poppyRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR//Image Rotator3.Poppy BC.jpg";
import marcosRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator4.Marcos.jpg";
import hemlockRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator5.Hemlock BC.jpg";
import brochureRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator6.Brochure.jpg";
import seatRotator from "../../assets/HomePage/NewNewHomePage/IMAGES FOR ROTATOR/Image Rotator7.The Seat BC.jpg";

const Home = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const imageList = [
    annualReportThumbRotator,
    annualReportRotator,
    zineRotator,
    poppyRotator,
    marcosRotator,
    hemlockRotator,
    brochureRotator,
    seatRotator,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 2500); // 4 seconds
    return () => clearInterval(interval);
  }, []);

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
    <div>
      {/* Row 1 */}
      <div className={classes.fullWidthBackground}>
        <section className={classes.homePhotoContainer}>
          <img
            src={introPhoto}
            alt="Headshot & Intro"
            className={classes.homePhoto}
          />
        </section>
      </div>

      {/* Row 2 */}
      <section>
        <div className={classes.fullWidthBackground2}>
          <div className={classes.topRow}>
            <div className={classes.textLeft}>
              <p className={classes.sectionTitle}>GRAPHIC DESIGN</p>
              <p className={classes.sectionText}>
                I provide graphic design services that help small businesses
                show up with confidence and clarity. Whether you're looking for
                a full brand identity or support with marketing materials, my
                goal is to help you get seen and connect with your audience.
              </p>
            </div>

            <div className={classes.imageRotator}>
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="graphic work"
                  className={`${classes.crossfadeImage} ${
                    index === currentImage ? classes.active : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className={classes.bottomImageContainer}>
            <Link to="/contact">
              <img
                src={letsworktogether}
                alt="lets work together"
                className={classes.clickableImage}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Row 3 */}
      <div className={classes.fullWidthBackground3}>
        <div className={classes.textContainer + " " + classes.artLeft}>
          {" "}
          <p className={classes.sectionTitle2}>ART & ILLUSTRATION</p>{" "}
          <p className={classes.sectionText2}>
            {" "}
            My art reflects my love for the everyday objects, the outdoors,
            nature, and traveling. <br/>What speaks to my heart hopefully resonates
            with yours. <br /> Click on an image to view my work.{" "}
          </p>{" "}
        </div>
        <div
          className={`${classes.imageRowSmall} ${classes.fullWidthBackground3}`}
        >
          <Link to="/fine-art">
            <img
              src={train}
              alt="I like trains"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
          <Link to="/fine-art">
            <img
              src={bird}
              alt="bird is the word"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
          <Link to="/fine-art">
            <img
              src={camera}
              alt="say cheese"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
        </div>
        <div
          className={`${classes.imageRowSmall} ${classes.fullWidthBackground3}`}
        >
          <Link to="/digital-art">
            <img
              src={wreath}
              alt="wreath"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
          <Link to="/digital-art">
            <img
              src={bike}
              alt="bike"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
          <Link to="/digital-art">
            <img
              src={baking}
              alt="baking"
              className={`${classes.clickableImage} ${classes.uniformImage}`} // Apply uniformImage here
            />
          </Link>
        </div>
      </div>

      {/* Row 4 */}
      <div className={classes.fullWidthBackground4}>
        <div className={classes.photoContainerWrapper}>
          <div className={classes.topRow}>
            <div className={classes.textLeft}>
              <p className={classes.sectionTitle3}>ARTBOARD MAGAZINE</p>
              <p className={classes.sectionText3}>
                My German Christmas Village illustration is Featured on the Fall
                2025 cover of Artboard Magazine
              </p>
            </div>

            <div className={classes.rightImageContainer}>
              <a href="https://uad.education/pages/artboard">
                <img
                  src={germanVillageMagazine}
                  alt="German Village Magazine"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <section>
        <div className={classes.bottomImageContainer2}>
          <Link to="/contact">
            <img
              src={letsconnect}
              alt="lets Connect"
              className={classes.clickableImage}
            />
          </Link>
        </div>

        <div className={classes.imageRow}>
          <div className={classes.formContainer}>
            <div className={classes.formHeader}>
              <img src={leafIllustration} alt="LeafIllustration" />
              <div className={classes.headerTextContainer}>
                <h3>Sign Up for My Newsletter</h3>
              </div>
            </div>
            <p>
              Sign up to get access to my newsletter filled with inspiration,
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
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
