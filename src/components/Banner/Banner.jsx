import classes from "./Banner.module.css"

import InstagramLogo from "../../assets/HomePage/instagramLogo.png"

function Banner(){
    return (
      <div>
        <div className={classes.bannerImg}>
          <a
            href="https://www.instagram.com/coralyngrant.art/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramLogo} alt="Banner" />
          </a>
        </div>
      </div>
    );
}

export default Banner;