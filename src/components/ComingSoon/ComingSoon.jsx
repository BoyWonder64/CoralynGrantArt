import styles from "./comingsoon.module.css";
import gear from "../../assets/ComingSoon/pixelWorker.gif"

function ComingSoon() {
  return (
    <>
      <main className={styles.container}>
        <img
          className={styles.gear}
          src={gear}
          alt="Spinning gear"
        />
        <h1>Coming Soon</h1>
        <p>We are still working on this page</p>
      </main>
    </>
  );
}

export default ComingSoon;
