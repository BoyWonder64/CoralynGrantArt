import classes from "./Banner.module.css"

import InstagramLogo from "../../assets/HomePage/instagramLogo.png";
import EtsyLogo from "../../assets/HomePage/NewHomePage/EtsyLogo.png";

function Banner() {
    return (
      <div>
        <div className={classes.bannerImg}>
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/coralyngrant.art/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramLogo} alt="Instagram" />
          </a>

          {/* Etsy Link */}
          <a
            href="https://www.etsy.com/shop/poppylanedesignsus/?etsrc=sdt" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={EtsyLogo} alt="Etsy Shop" />
          </a>
        </div>
      </div>
    );
}

export default Banner;