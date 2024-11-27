import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsLetterSummary from "./components/Pages/Home";
import NewsLetterForm from "./components/Form/NewsLetterForm";
import ErrorPage from "./components/Error/Error";
import RootLayout from "./components/Pages/Root";
// import AboutPage from "./components/Pages/About"
import DigitalArtPage from "./components/Pages/DigitalArt";
import GraphicArtPage from "./components/Pages/GraphicArt";
import FineArtPage from "./components/Pages/FineArt"
import Freebies from "./components/Pages/Freebies"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NewsLetterSummary /> },
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
