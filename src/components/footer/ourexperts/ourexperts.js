import { dr_abhi, dr_ankita, dr_prashant, dr_sapana } from "../../../assets/images/images";
import "./ourexperts.css";

function OurExperts() {
  return (
    <section className="container margin-auto">
      <div className="row">
        <h3 className="heading_main">OUR EXPERTS</h3>
        <div className="col-lg-6 margin-t">
          <div className="row">
            <div className="col-lg-6">
                <div className="profile_container">
                    <div  className="profile_container-bg"><img src={dr_abhi} alt="dr abhi"/></div>
                    
                    <div className="profile_container-info">
                        <h6>Dr.Abhijeet Shirkande</h6>
                        <p>M.D. (Ayurved), Ph.D</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
            <div className="profile_container">
                    <div  className="profile_container-bg bg-purpal"><img src={dr_ankita} alt="dr abhi"/></div>
                    
                    <div className="profile_container-info">
                        <h6>Dr.Abhijeet Shirkande</h6>
                        <p>M.D. (Ayurved), Ph.D</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 margin-t">
        <div className="row">
            <div className="col-lg-6">
                <div className="profile_container">
                    <div  className="profile_container-bg"><img src={dr_sapana } alt="dr abhi"/></div>
                    
                    <div className="profile_container-info">
                        <h6>Dr.Abhijeet Shirkande</h6>
                        <p>M.D. (Ayurved), Ph.D</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
            <div className="profile_container">
                    <div  className="profile_container-bg bg-purpal"><img src={dr_prashant} alt="dr abhi"/></div>
                    
                    <div className="profile_container-info">
                        <h6>Dr.Abhijeet Shirkande</h6>
                        <p>M.D. (Ayurved), Ph.D</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExperts;
