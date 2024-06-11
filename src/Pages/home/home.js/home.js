import "./home";
import HomeHeader from "../../../componants/footer/header/header";
import "./home.css";
import HomeFooter from "../../../componants/footer/footer/footer";
import OurExperts from "../../../componants/footer/ourexperts/ourexperts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "../../../componants/ImageGallery/imagegallery";
import MapSection from "../../../componants/mapsection/map";
import Appointment from "../../../componants/bookappoinment/appointment";
import Ourservices from "../../../componants/ourServices/ourservices";


const Home = () => {

  return (
    <>
    <div className="bg_green">
 {/* Navigation Section */}
 <HomeHeader />

<Appointment/>
{/* Our Experts */}
<Ourservices/>
<OurExperts/>

<Gallery/>


<MapSection/>

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
