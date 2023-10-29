import "./Components/App.css";
import "./Components/partnerpage.css";
import "./Components/carousel.css";
import ContactUs from "./Components/ContactUs";
import LandingPage from "./Components/LandingPage";
import Meetteam from "./Components/Meetteam";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Partners from "./Components/Partners";
import ContactPage from "./Components/ContactPage";
import Navbar from "./Components/Navbar";
import "./Components/Portfolio.css";
import "./Components/meetteam.css";
import "./Components/services.css";
import "./Components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/landing.css";
import "./Components/navbar.css";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
      <Meetteam />
      <Portfolio />
      <Partners />
      <ContactPage />
      <ContactUs />;
    </>
  );
}

export default App;
