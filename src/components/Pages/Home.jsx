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
//import leafIllustration from "../../assets/HomePage/LeafIllustration.png"; //Duplicate

import bakinglifePhoto from "../../assets/HomePage/BakingLife.jpg";
import paintingPhoto from "../../assets/HomePage/PaintingPhoto.png";
import picnicBasketPhoto from "../../assets/HomePage/PicnicBasket.jpg";
import useInput from "../../hooks/useInput";

//New Page Photos
import fourStripPhoto from "../../assets/HomePage/NewHomePage/4 photo strip.png";
import ArtBoardMag from "../../assets/HomePage/NewHomePage/Artboard Mag Photo.png";
import bakingStillLife from "../../assets/HomePage/NewHomePage/Baking Still Life Square.jpg";
import bikeWFlowers from "../../assets/HomePage/NewHomePage/Bike W. Flowers.png";
import bottomPhotoStrip from "../../assets/HomePage/NewHomePage/Bottom photo strip.png";
import constructionCupcakes from "../../assets/HomePage/NewHomePage/Construction Cupcake Toppers.jpg";
import embroidedHats from "../../assets/HomePage/NewHomePage/Embroidered Hats.jpg";
import etsyLogo from "../../assets/HomePage/NewHomePage/EtsyLogo.png";
import featureArtBoard from "../../assets/HomePage/NewHomePage/Featured in Artboard Mag.png";
import flower150 from "../../assets/HomePage/NewHomePage/Flower only 150.png";
import flowerPowerBanner from "../../assets/HomePage/NewHomePage/Flower Power Banner.jpg";
import headshotnIntro from "../../assets/HomePage/NewHomePage/Headshot & Intro.png";
import hollyHockPainting from "../../assets/HomePage/NewHomePage/Hollyhock Painting.png";
import hollyHocks from "../../assets/HomePage/NewHomePage/Hollyhocks.png";
import horizontal from "../../assets/HomePage/NewHomePage/Horizontal 150dpi.png";
import joinNewsLetter from "../../assets/HomePage/NewHomePage/Join My Newsletter Text.png";
import leafIllustration from "../../assets/HomePage/NewHomePage/Leaf Illustration.png";
import redBird from "../../assets/HomePage/NewHomePage/redBird.jpeg";

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

  // return (
  //   <div className={classes.mainPage}>
  //     <section className={classes.summary}>
  //       <div className={classes.content}>
  //         <h2>Hi There!</h2>
  //         <p className={classes.p}>
  //           I am Coralyn Grant, a graphic designer and fine artist. I combine my
  //           love of travel, nature, and history into my artwork.
  //           <br /> If you like what you see, sign up for my monthly newsletter
  //           I’d love to hear from you!
  //         </p>
  //       </div>
  //       <div className={classes.homePhotoContainer}>
  //         <img
  //           src={venicePhoto}
  //           alt="home venice photo"
  //           className={classes.homePhoto}
  //         />
  //       </div>
  //     </section>
  //     <section>
  //       <div className={classes.imageRowContainer}>
  //         <div className={classes.imageRowContainer}>
  //           <img src={hollyHocksPhoto} alt="Coralyn Grant Art" />
  //         </div>

  //         <div className={classes.formContainer}>
  //           <div className={classes.formHeader}>
  //             <img src={leafIllustration} alt="LeafIllustration" />
  //             <div className={classes.headerTextContainer}>
  //               <h3>Sign Up for My Newsletter</h3>
  //               <p>
  //                 Sign up to get access to our newsletter filled with
  //                 inspiration, freebies, printables and more!
  //               </p>
  //             </div>
  //           </div>

  //           <form className={classes.form} onSubmit={formSubmissionHandler}>
  //             <div className={firstNameInputClasses}>
  //               <div className={`${classes["form-control"]}`}>
  //                 <label htmlFor="name"></label>
  //                 <input
  //                   type="text"
  //                   id="firstName"
  //                   placeholder="Name:"
  //                   onChange={firstNameChangedHandler}
  //                   onBlur={firstNameBlurHandler}
  //                   value={enteredFirstName}
  //                 />
  //               </div>
  //               {firstNameInputHasError && (
  //                 <p className={classes["error-text"]}>
  //                   Please enter your first name
  //                 </p>
  //               )}
  //               <div className={emailInputClasses}>
  //                 <div className={`${classes["form-control"]}`}>
  //                   <input
  //                     type="email"
  //                     id="email"
  //                     onChange={emailChangeHandler}
  //                     onBlur={emailBlurHandler}
  //                     value={enteredEmail}
  //                     placeholder="Email:"
  //                   />
  //                 </div>
  //                 {emailInputHasError && (
  //                   <p className={classes["error-text"]}>
  //                     Please enter your email
  //                   </p>
  //                 )}
  //               </div>
  //             </div>
  //             <div className={classes["form-actions"]}>
  //               <button type="submit">Sign Up</button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </section>
  //     <section>
  //       <div className={classes.imageRowContainer}>
  //         <div className={classes.imageRowContainer}>
  //           <img src={bakinglifePhoto} alt="Form Image" />
  //         </div>

  //         <div className={classes.imageRowContainer}>
  //           <img src={paintingPhoto} alt="Coralyn Grant Art" />
  //         </div>

  //         <div className={classes.imageRowContainer}>
  //           <img src={picnicBasketPhoto} alt="Coralyn Grant Art" />
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );

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
        <div
          className={`${classes.homePhotoContainer} ${classes.photoStripSpacer}`}
        >
          <img
            src={fourStripPhoto}
            alt="4 Photo Strip"
            className={classes.homePhoto}
          />
        </div>
      </section>

      {/* Row 3 */}
 
        <div className={classes.imageRowContainer}>
          <img
            src={featureArtBoard}
            alt="Art Board Photo Mag"
            className={classes.moveUp}
          />
          <img
            src={ArtBoardMag}
            alt="Art Board Photo Mag"
            className={classes.artBoardMag}
          />
        </div>
    
      {/* Row 4 */}
      <section>
        <div className={classes.formImageRowContainer}>
          <div className={classes.formContainer}>
            <div className={classes.formHeader}>
              <img src={leafIllustration} alt="LeafIllustration" />
              <div className={classes.headerTextContainer}>
                <h3>Sign Up for My Newsletter</h3>
                <p>
                  Sign up to get access to our newsletter filled with
                  inspiration, freebies, printables and more!
                </p>
              </div>
            </div>

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

          <div className={classes.imageRowContainer}>
            <img src={joinNewsLetter} alt="Join Monthy Newsletter" />
          </div>
        </div>
      </section>

      {/* Row 5 */}
      <section className={classes.bikeWimageRowContainer}>
        <div>
          <img src={bikeWFlowers} alt="Bike With Flowers" />
        </div>
      </section>

      {/* Row 6 */}
      <section>
        <div
          className={`${classes.homePhotoContainer} ${classes.photoStripSpacer}`}
        >
          <img
            src={bottomPhotoStrip}
            alt="bottom 4 Photo Strip"
            className={classes.homePhoto}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
