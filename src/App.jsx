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
import PizzaCrustPage from "./components/Pages/GraphicDesignLinkedPages/PizzaCrustPage";
import PoppyLaneBrandingPage from "./components/Pages/GraphicDesignLinkedPages/PoppyLaneBrandingPage";
import TheSeatBrandingPage from "./components/Pages/GraphicDesignLinkedPages/TheSeatBrandingPage";
import DigitalIllustrationPage from "./components/Pages/GraphicDesignLinkedPages/DigitalIllustrationPage";
import ColorMyDreamPage from "./components/Pages/GraphicDesignLinkedPages/ColorMyDreamPage";
import HemlockInkPage from "./components/Pages/GraphicDesignLinkedPages/HemlockInkPage";
import ZinePage from "./components/Pages/GraphicDesignLinkedPages/ZinePage";

/*Here is where we setup the paths for each of the pages
the path name is from the Nav bar componet and the element is
the component that we imported. This is what ties everything together


ADDING A PAGE:

In order to add a page, you will need to import the page above, add
a path below, and then update the Graphic Design page to include the link

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
      {
        path: "graphic-design/seating-branding",
        element: <TheSeatBrandingPage />,
      },
      {
        path: "graphic-design/digital-illustration",
        element: <DigitalIllustrationPage />,
      },
      {
        path: "graphic-design/poppylanebranding",
        element: <PoppyLaneBrandingPage />,
      },
      { path: "graphic-design/color-my-dream", element: <ColorMyDreamPage /> },
      { path: "graphic-design/zine", element: <ZinePage /> },
      { path: "graphic-design/hemlockink", element: <HemlockInkPage /> },

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
