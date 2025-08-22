import HeaderTitle from "../Component/HeaderTitle";
import NavBar from "../Component/NavBar";
import HeroSection from "../Component/Homepage/HeroSection";
import AboutSection from "../Component/Homepage/AboutSection";
import PortfolioSection from "../Component/Homepage/PortfolioSection";
import ContactSection from "../Component/Homepage/ContactSection";
import Footer from "../Component/Homepage/Footer";

const Homepage = () => {
  return (
    <>
      <HeaderTitle title="Surya | Portfolio" />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Homepage;
