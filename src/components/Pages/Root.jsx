import { Outlet } from "react-router-dom";
import MainNavigation from "../Navigation/NavBar";
import Banner from "../Banner/Banner";
import classes from "./Root.module.css";
 
/*
The purpose of this page is to establish the main layout of every page */
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Banner className={classes.main}/>
    </>
  );
}

export default RootLayout;
