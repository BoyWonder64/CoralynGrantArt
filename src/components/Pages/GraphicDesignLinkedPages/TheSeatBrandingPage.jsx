import classes from "./TheSeatBrandingPage.module.css";

import AnnualReport from "../../../assets/TheSeatBranding/AnnualReportFinal.jpg";
import BCseatback from "../../../assets/TheSeatBranding/BCseatback.jpg";
import BrochureMockup from "../../../assets/TheSeatBranding/BrochureMockup.jpg";
import folderBrandingMockup from "../../../assets/TheSeatBranding/folderBrandingMockup.jpg";
import SeatLogo from "../../../assets/TheSeatBranding/SeatLogo.png";

import AnnualReportFinal from "../../../assets/TheSeatBranding/AnnualReportFinal.jpg";

import AnnualReportHand1 from "../../../assets/TheSeatBranding/AnnualReportHand1.jpg";
import AnnualReportHand2 from "../../../assets/TheSeatBranding/AnnualReportHand2.jpg";
import AnnualReportHand3 from "../../../assets/TheSeatBranding/AnnualReportHand3.jpg";
import AnnualReportHand4 from "../../../assets/TheSeatBranding/AnnualReportHand4.jpg";

import Handback from "../../../assets/TheSeatBranding/IntermediateHandback.png";
import InsideSketch from "../../../assets/TheSeatBranding/InsideSketch.jpg";

function TheSeatBrandingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={SeatLogo} alt="Seat Logo" />
          <h2>The Seat Corporate Branding</h2>
        </div>

        <div className={classes.card}>
          <img src={BCseatback} alt="Seat Book w Logo" />
        </div>
      </div>
      <div className={classes.card}>
        <img src={folderBrandingMockup} alt="Seat Logo" />
      </div>
      <div className={classes.card}>
        <h3>BROCHURE</h3>
      </div>
      {/* Text card */}
      <div className={classes.card}>
        <h1>Challenge</h1>
        <p>
          Using the company’s new branding, The Seat requested a brochure mailer
          to announce their upcoming holiday open house which included a return
          postcard to help them build awareness in the community and their
          customer email list.
        </p>
      </div>
      <div className={classes.card}>
        <h1>Solution</h1>
        <p>
          Solution I created a brochure mailer that represented the upscale
          style of The Seat’s impeccable styling. This was the customer’s first
          exposure to their new store, so I communicated the custom design
          offerings, their commitment to the environment, and their upcoming
          holiday open house.
        </p>
      </div>
      <div className={classes.card}>
        <img src={BrochureMockup} alt="Seat Logo" />
      </div>
      <div className={classes.card}>
        <h3>Process Images</h3>
      </div>

      <div className={classes.imageGrid}>
        {/* Image cards */}
        <div className={classes.card}>
          <img src={InsideSketch} alt="Seat Logo" />
        </div>

        <div className={classes.card}>
          <img src={Handback} alt="Seat Book w Logo" />
        </div>
      </div>

      <div className={classes.card}>
        <h3>ANNUAL REPORT</h3>
      </div>
      {/* Text card */}
      <div className={classes.card}>
        <h1>Challenge</h1>
        <p>
          The Seat requested an annual report for their upcoming investors’
          meeting. This report needed to include a letter to investors, convey
          their company’s branding and culture, and report on their year end
          financial information.
        </p>
      </div>
      <div className={classes.card}>
        <h1>Solution</h1>
        <p>
          I designed and wrote a cohesive report that carried The Seat’s
          branding and corporate identity throughout. The client also wanted to
          convey their culture of giving back to the community. I created a
          visually pleasing and informative report that was beautifully
          designed. I used simple charts and iconography to communicate complex
          information and reported their financial information in an
          easy-to-read table.
        </p>
      </div>

      <div className={classes.card}>
        <img src={AnnualReport} alt="Seat Book w Logo" />
      </div>

      <div className={classes.card}>
        <h3>Process Images</h3>
      </div>

      <div className={classes.imageGrid}>
        <div className={classes.card}>
          <img src={AnnualReportHand1} alt="Seat Book w Logo" />
        </div>
        <div className={classes.card}>
          <img src={AnnualReportHand2} alt="Seat Book w Logo" />
        </div>
        <div className={classes.card}>
          <img src={AnnualReportHand3} alt="Seat Book w Logo" />
        </div>
        <div className={classes.card}>
          <img src={AnnualReportHand4} alt="Seat Book w Logo" />
        </div>
      </div>
    </div>
  );
}

export default TheSeatBrandingPage;
