import useInput from "../../hooks/useInput";
import classes from "./NewsLetterForm.module.css";
import logo from "../../assets/SiteLogo.png";

const NewsLetterForm = () => {
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

     } catch (error){
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
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Poppy Lane Designs" className={classes.logo} />
        </div>
        <h2>Sign Up For Our Newsletter</h2>
        <p>
          Sign up to get accesss to our monthy newsletter
          <br /> filed with inside scoops, freebies, & inspiration
        </p>
        <div className={firstNameInputClasses}>
          <div className={`${classes["form-control"]}`}>
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
        </div>

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
            <p className={classes["error-text"]}>Please enter your email</p>
          )}
        </div>

        <div className={classes["form-actions"]}>
          <button className={classes.button}>Sign Up</button>
        </div>
      </form>
      <p></p>
    </>
  );
};

export default NewsLetterForm;
