import  { useState } from "react";
import classes from "./FineArt.module.css";

// import florals from "../../assets/FineArt/florals.jpeg";
// import stilllife from "../../assets/FineArt/stilllife.jpg";
// import birds from "../../assets/FineArt/birds.jpeg";
// import seasonal from "../../assets/FineArt/seasonal.jpeg";
// import train from "../../assets/FineArt/Train.jpg";
// import travel from "../../assets/FineArt/travel.jpg";

import fineart1 from "../../assets/FineArt/NewFineArt/Fine Art 1.png"
import fineart2 from "../../assets/FineArt/NewFineArt/Fine Art 2.png";
import fineart3 from "../../assets/FineArt/NewFineArt/Fine Art 3.png";
import fineart4 from "../../assets/FineArt/NewFineArt/Fine Art 4.png";

function GraphicArt() {

  /*
  In order to add a new photo, you will need to import the file 
  then you will need to copy and paste a div that has the classes.column
  and then make sure to update the src with the name of the file import you added
*/

  return (
    <>
      <div className={classes.container}>
        <img src={fineart1} alt="Fine Art 1" />
      </div>
      <div className={classes.container}>
        <img src={fineart2} alt="Fine Art 2" />
      </div>
      <div className={classes.container}>
        <img src={fineart3} alt="Fine Art 3" />
      </div>
      <div className={classes.container}>
        <img src={fineart4} alt="Fine Art 4" />
      </div>
    </>
  );
}

export default GraphicArt;
