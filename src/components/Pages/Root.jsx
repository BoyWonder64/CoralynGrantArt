import { Outlet } from "react-router-dom";
import MainNavigation from "../Navigation/NavBar";
 
/*
The purpose of this page is to establish the main layout of the page */
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
