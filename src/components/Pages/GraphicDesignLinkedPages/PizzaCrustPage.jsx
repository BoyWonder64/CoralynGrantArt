import classes from "./PizzaCrustPage.module.css";
import backgroundGrunge from "../../../assets/PizzaCrust/grunge-wall.jpg";
import MarcosLogo from "../../../assets/PizzaCrust/MarcosLogo.png";
import FrontCan from "../../../assets/PizzaCrust/Front.png";
import CylSide1 from "../../../assets/PizzaCrust/CylinderSide1.jpg";
import CylSide2 from "../../../assets/PizzaCrust/CylinderSide2.jpg";
import Brainstorming from "../../../assets/PizzaCrust/Brainstorming.jpg";
import Brainstorming2 from "../../../assets/PizzaCrust/S&D.jpg";
import Mockup from "../../../assets/PizzaCrust/FullSized.jpg";
import CylinderComposite from "../../../assets/PizzaCrust/CylinderComposite.jpg";

function PizzaCrustPage() {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundGrunge})` }}
    >
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={MarcosLogo} alt="Marco's Logo" />
          <h2>Marcos Artisan Pizza Crust Mix</h2>
          <h2>PACKAGE DESIGN</h2>
        </div>

        <div className={classes.card}>
          <img src={FrontCan} alt="Front of Can" />
        </div>

        <div className={classes.card}>
          <img src={CylSide1} alt="Side 1 of Can" />
        </div>

        <div className={classes.card}>
          <img src={CylSide2} alt="Side 2 of Can" />
        </div>
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <h1>Challenge</h1>
        <p>
          Huffington Hughes, Inc. requested a cylinder package design for their
          new artisan pizza crust mix. The face of the package was to reflect
          their Florentine family heritage and entice the buyer with an image of
          the product used to create a delicious pizza.
        </p>
      </div>

      {/* Text card */}
      <div className={classes.card}>
        <h1>Solution</h1>
        <p>
          For the face of the package, I used illustrations to create some of
          the beautiful landmarks of Florence, including the iconic statue of
          David. I used a little humor here to appeal to the customer and create
          a moment that would entice them to linger longer on the package. I
          created a cohesive design that communicated their traditions of food
          and family.
        </p>
      </div>

      <div className={classes.card}>
        <h3>Process Images</h3>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={Brainstorming} alt="Brainstorming Session" />
        </div>

        <div className={classes.card}>
          <img src={Brainstorming2} alt="Other Brainstorming Session" />
        </div>
      </div>

      <div className={classes.card}>
        <img src={Mockup} alt="Other Brainstorming Session" />
      </div>

      <div className={classes.card}>
        <img src={CylinderComposite} alt="Final Product" />
      </div>
    </div>
  );
}

export default PizzaCrustPage;
