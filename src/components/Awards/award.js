import React from 'react';
import "./award.css" ;
import { tool,
    leaf_b} from "../../assets/images/images.js"

function Award() {
    return (
        <section className="container margin-auto award-section">
            <img src={leaf_b} alt='leaf' className="corner-image left-corner"/>
            <img src={tool} alt='tool' className="corner-image right-corner"/>
        <div className="row justify-content-between">
          <h3 className='awards-title'>AWARDS & RECOGNITIONS</h3>
          <div className='col-lg-3'>
          <div class="card-container">
  <div class="card-image"></div>
  <div class="card-content">
    <p class="card-date"><i class="fa fa-calendar"></i> February 20, 2024</p>
    <h2 class="card-title">xyzxyz xyz xyz</h2>
    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p>
    <a href="#" class="card-link">See more</a>
  </div>
</div>
          </div>
          <div className='col-lg-3'>
          <div class="card-container">
  <div class="card-image"></div>
  <div class="card-content">
    <p class="card-date"><i class="fa fa-calendar"></i> February 20, 2024</p>
    <h2 class="card-title">xyzxyz xyz xyz</h2>
    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p>
    <a href="#" class="card-link">See more</a>
  </div>
</div>
          </div>
          <div className='col-lg-3'>
          <div class="card-container">
  <div class="card-image"></div>
  <div class="card-content">
    <p class="card-date"><i class="fa fa-calendar"></i> February 20, 2024</p>
    <h2 class="card-title">xyzxyz xyz xyz</h2>
    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p>
    <a href="#" class="card-link">See more</a>
  </div>
</div>
            
          </div>
          <div className='col-lg-3'>
          <div class="card-container">
  <div class="card-image"></div>
  <div class="card-content">
    <p class="card-date"><i class="fa fa-calendar"></i> February 20, 2024</p>
    <h2 class="card-title">xyzxyz xyz xyz</h2>
    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...</p>
    <a href="#" class="card-link">See more</a>
  </div>
</div>

            
          </div>
        </div>
      </section>
    );
}

export default Award;