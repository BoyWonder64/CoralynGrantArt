import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsLetterSummary from "./components/Form/NewsLetterSummary";
import NewsLetterForm from "./components/Form/NewsLetterForm";
import ErrorPage from "./components/Error/Error";
import RootLayout from "./components/Pages/Root";
import AboutPage from "./components/Pages/About"
import DigitalArtPage from "./components/Pages/DigitalArt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NewsLetterSummary /> },
      { path: "digital-art", element: <DigitalArtPage /> },
      { path: "graphic-design", element: <AboutPage /> },
      { path: "fine-art", element: <AboutPage /> },
      { path: "freebies-art", element: <AboutPage /> },
      { path: "contact-about", element: <NewsLetterForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
