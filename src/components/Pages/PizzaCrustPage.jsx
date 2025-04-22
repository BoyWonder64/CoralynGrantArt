import classes from "./PizzaCrustPage.module.css";
import backgroundGrunge from "../../assets/PizzaCrust/grunge-wall.jpg";
import MarcosLogo from "../../assets/PizzaCrust/MarcosLogo.png";
import FrontCan from "../../assets/PizzaCrust/Front.png";
import CylSide1 from "../../assets/PizzaCrust/CylinderSide1.jpg";
import CylSide2 from "../../assets/PizzaCrust/CylinderSide2.jpg";
import recipe from "../../assets/PizzaCrust/Brainstorming.jpg";

function PizzaCrustPage() {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundGrunge})` }}
    >
      {/* <div className={classes.card}>
        <h3>Front Packaging</h3>
        <p>
          This is the final packaging with a clean, modern feel while preserving
          an artisan touch.
        </p>
      </div> */}


      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={MarcosLogo} alt="Marco's Logo" />
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
          <p>Huffington Hughes, Inc. requested a cylinder package design for 
            their new artisan pizza crust mix. The face of the package was to 
            reflect their Florentine family heritage and entice the buyer with 
            an image of the product used to create a delicious pizza. 
            </p>
        </div>

               {/* Text card */}
               <div className={classes.card}>

            <h1>Solution</h1>
          <p>For the face of the package, I used illustrations to create some 
            of the beautiful landmarks of Florence, including the iconic statue of
             David. I used a little humor here to appeal to the customer and create a
              moment that would entice them to linger longer on the package. I created a
               cohesive design that communicated their traditions of food and family.  
            </p>
        </div>


        <div className={classes.imageGrid}>
        {/* Image cards */}

        <div className={classes.card}>
          <img src={CylSide1} alt="Side 1 of Can" />
        </div>

        <div className={classes.card}>
          <img src={CylSide2} alt="Side 2 of Can" />
        </div>

      </div>
     


      <div className={classes.card}>
        <h3>Front Packaging</h3>
        <p>
          This is the final packaging with a clean, modern feel while preserving
          an artisan touch.
        </p>
      </div>
    </div>
  );
}

export default PizzaCrustPage;
