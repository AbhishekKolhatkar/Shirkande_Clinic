import React from 'react';
import "./ourservice.css";
import { leaf, leaf_right, tooth } from '../../assets/images/images';
function Ourservices(props) {
    return (
        <section className="container margin-auto ">
            
        <div className="row justify-content-between">
        <img src={leaf_right } alt='leaf'  className='leaf-wd'/>
        <img src={tooth} alt='leaf'  className='tooth'/>
          <h3 className='mb-5'>OUR SERVICES</h3>
          <div className='col-lg-6'>
            <h6 className='name-hollow text-start'>AYURVEDA</h6>
            <div className='services-data-left'>
                <div>a</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
          <div className='col-lg-6'>
          <h6 className='name-hollow text-end'>DENTAL</h6>
            <div className='services-data-right'>
                <div>b</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Ourservices;