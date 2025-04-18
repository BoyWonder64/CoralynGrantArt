//////////////////////////////////////////
//                                      //
//           Poppy Lane Webpage         //
//                                      //
//////////////////////////////////////////

// Main pages present from Home

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import NewsLetterForm from "./components/Form/NewsLetterForm";
import ErrorPage from "./components/Error/Error";
import RootLayout from "./components/Pages/Root";
import DigitalArtPage from "./components/Pages/DigitalArt";
import GraphicArt from "./components/Pages/GraphicArt";
import FineArtPage from "./components/Pages/FineArt";
import Freebies from "./components/Pages/Freebies";

// Pages linked from GraphicArtPage
import PizzaCrustPage from "./components/Pages/PizzaCrustPage";
import PoppyLaneBrandingPage from "./components/Pages/PoppyLaneBrandingPage";
import TheSeatBrandingPage from "./components/Pages/TheSeatBrandingPage";
import DigitalIllustrationPage from "./components/Pages/DigitalIllustrationPage";
import ColorMyDreamPage from "./components/Pages/ColorMyDreamPage";



/*Here is where we setup the paths for each of the pages
the path name is from the Nav bar componet and the element is
the component that we imported. This is what ties everything together
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "digital-art", element: <DigitalArtPage /> },
      
      //Graphic Art Page
      { path: "graphic-design", element: <GraphicArt /> },
      { path: "graphic-design/pizza-crust", element: <PizzaCrustPage /> },
      { path: "graphic-design/poppy-lane", element: <PoppyLaneBrandingPage /> },
      { path: "graphic-design/seating-branding", element: <TheSeatBrandingPage /> },
      { path: "graphic-design/digital-illustration", element: <DigitalIllustrationPage /> },
      { path: "graphic-design/color-my-dream", element: <ColorMyDreamPage /> },



      { path: "fine-art", element: <FineArtPage /> },
      { path: "freebies", element: <Freebies /> },
      { path: "contact-about", element: <NewsLetterForm /> },
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
