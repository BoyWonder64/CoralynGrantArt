import classes from "./AboutMe.module.css";

import useInput from "../../hooks/useInput";
import BioTop from "../../assets/AboutMe/NewAboutMe/BioIntro.png";
import Van from "../../assets/AboutMe/NewAboutMe/Van.png";
import leafIllustration from "../../assets/HomePage/NewHomePage/Leaf Illustration.png";

const AboutMe = () => {
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
    <>
      <div className={classes.container}>
        <img src={BioTop} alt="Bio Top" />
      </div>

      {/* Row 4 */}
      <section>
        <div className={classes.imageRow}>
          <a
            href="https://www.etsy.com/shop/poppylanedesignsus/?etsrc=sdt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Van}
              alt="Join Monthy Newsletter"
              className={classes.rightImageText}
            />
          </a>

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
        </div>
      </section>
      <br />
      <br />
      <p className={classes.bottomText}>Want to say hello or collaborate?</p>
      <p className={`${classes.bottomText} ${classes.hoverText}`}>
        Email directly at{" "}
        <span
          className={classes.greenEmail}
          onClick={() => {
            navigator.clipboard.writeText("info.poppylanedesigns@gmail.com");
            alert("Email copied to your clipboard!");
          }}
        >
          info.poppylanedesigns@gmail.com
        </span>
      </p>
    </>
  );
};

export default AboutMe;
