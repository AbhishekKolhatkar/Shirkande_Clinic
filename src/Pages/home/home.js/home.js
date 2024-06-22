import "./home";
import HomeHeader from "../../../components/footer/header/header";
import "./home.css";
import HomeFooter from "../../../components/footer/footer/footer";
import OurExperts from "../../../components/footer/ourexperts/ourexperts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "../../../components/ImageGallery/imagegallery";
import MapSection from "../../../components/mapsection/map";
import Appointment from "../../../components/bookappoinment/appointment";
import Ourservices from "../../../components/ourServices/ourservices";
import Award from "../../../components/Awards/award";
import Testimonials from "../../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className="bg_green">
        {/* Navigation Section */}
        <HomeHeader />

        <Appointment />
        {/* Our Experts */}
        <Ourservices />
        <OurExperts />
        <Award />

        <Gallery />

        <Testimonials />
        <MapSection />

        {/* Trusted Partner Section */}
        {/* <TrustedPartner /> */}

        {/* Ai enhance Section */}
        {/* <AIEnhance /> */}

        {/* Hiring Process Section */}
        {/* <HiringProcess /> */}

        {/* Benefits Section */}
        {/* <Benefits /> */}

        {/* quick step section */}
        {/* <QuickSetup /> */}

        {/* Future Hiring */}
        {/* <FutureHiring /> */}

        {/* Pricing Section */}
        {/* <Pricing /> */}

        {/* Footer Section */}
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
