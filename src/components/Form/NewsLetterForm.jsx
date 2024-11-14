import useInput from "../../hooks/useInput";
import styles from "./NewsLetterForm.module.css";
import logo from "../../assets/logo.png";

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

    window.location.reload();

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
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Poppy Lane Designs" className={styles.logo} />
      </div>
      <h2>Sign Up For Our Newsletter</h2>
      <p>
        Sign up to get accesss to our monthy newsletter
        <br /> filed with inside scoops, freebies, & inspiration
      </p>
      <div className={firstNameInputClasses}>
        <div className={`${styles["form-control"]}`}>
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
          <p className={styles["error-text"]}>Please enter your first name</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <div className={`${styles["form-control"]}`}>
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
          <p className={styles["error-text"]}>Please enter your email</p>
        )}
      </div>

      <div className={styles["form-actions"]}>
        <button className={styles.button}>Sign Up</button>
      </div>
    </form>
  );
};

export default NewsLetterForm;
