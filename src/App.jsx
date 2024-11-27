import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import NewsLetterForm from "./components/Form/NewsLetterForm";
import ErrorPage from "./components/Error/Error";
import RootLayout from "./components/Pages/Root";
import DigitalArtPage from "./components/Pages/DigitalArt";
import GraphicArtPage from "./components/Pages/GraphicArt";
import FineArtPage from "./components/Pages/FineArt"
import Freebies from "./components/Pages/Freebies"


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
      { path: "graphic-design", element: <GraphicArtPage /> },
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
