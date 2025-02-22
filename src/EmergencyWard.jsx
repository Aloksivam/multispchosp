import React from "react";
import Emergency_Ward from './assets/images/emergency_ward/emergencyward.jpg';
import Slide_1 from './assets/images/emergency_ward/emergency_ward1.jpg';
import Slide_2 from './assets/images/emergency_ward/emergency_ward2.jpg';
import Slide_3 from './assets/images/emergency_ward/emergency_ward3.jpg';
import Slide_4 from './assets/images/emergency_ward/emergency_ward4.jpg';

const EmergencyWard = () => {
  return (
    <>

<div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_neurology_section about_Anesthesiology_section">
      <a href="javascript:" id="return-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
      <div className="section_head">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder20_4">Emergency Ward</h1>
                {/* <img src={logo} alt="line" className="med_bottompadder20_4"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
            <div className="neurology_text_wrapper">
              <p>
              Emergency Ward defines an emergency ward as a hospital facility that is staffed 24 hours a day, 
              7 days a week, and provides unscheduled outpatient services to patients whose condition requires immediate attention.
               With a competent emergency room team, many lives could have been saved under the guidance of an experienced physician 
               and aided by advanced medical equipment.
            The emergency ward Department is the first point of contact for any critically ill patient, needing immediate medical attention. 
            Modern Emergency ward Departments are managed by qualified Emergency Physicians and nurses, trained specifically for providing emergent care to save a life or limb.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span>
      <img src={Emergency_Ward} alt="line" className="ward" />
      </span>
    </div>

    <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <p>
                  <h2>Emergency Ward Overview</h2>
                  Our Emergency Ward is equipped with state-of-the-art facilities to handle a wide range of medical emergencies. 
                  Our team of highly skilled professionals is dedicated to providing immediate and comprehensive care to patients in critical conditions.
                  To conclude, emergency care is a crucial element in any healthcare institution that facilitates faster diagnostics, treatment, 
                  and eventually faster recovery of the patient. Emergency teams, with their expertise, promise hope and support for patients who come in with life-threatening circumstances.
                </p>
                <p>
                  The Emergency Ward operates 24/7 to ensure that all patients receive timely and effective treatment. 
                  Our approach is centered on rapid assessment, accurate diagnosis, and prompt treatment to stabilize patients and provide relief.
                  The emergency ward refers to the area of a hospital where patients receive immediate medical attention 
                  for acute conditions or injuries. It is characterized by a contrast to the caring environment of the ambulance,
                   as patients may feel a sense of being left alone and less secure in the emergency ward.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="benefits_accordion_wrapper">
                <h2>Our Emergency Services</h2>
                <div className="panel-group" id="accordion_wrapperLeft">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftone"
                          aria-expanded="false"
                        >
                          Trauma Care
                          </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftone"
                      className="panel-collapse collapse show"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                        Our trauma care unit is equipped to handle severe injuries resulting from accidents, falls, and other incidents. 
                        Our team provides rapid and effective treatment to stabilize and treat traumatic injuries.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLefttwo"
                          aria-expanded="false"
                        >
                          Cardiac Emergencies
                          </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLefttwo"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                        Our team is equipped to handle cardiac emergencies, including heart attacks and other acute cardiac conditions. 
                        We provide immediate care to stabilize patients and initiate treatment protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftthree"
                          aria-expanded="false"
                        >
                          Stroke Management
                          </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftthree"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                        Our emergency ward is equipped to handle stroke cases with rapid assessment and treatment to minimize brain damage and improve outcomes. 
                        We use advanced diagnostic tools and treatment protocols to provide the best care.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftfour"
                          aria-expanded="false"
                        >
                          Respiratory Emergencies
                          </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftfour"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                        Our team provides immediate care for respiratory emergencies, including severe asthma attacks, chronic obstructive pulmonary disease (COPD) exacerbations, and other breathing difficulties.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftfive"
                          aria-expanded="false"
                        >
                          Poisoning and Overdose
                          </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftfive"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                        We are equipped to manage cases of poisoning and drug overdose with rapid intervention and appropriate treatments to counteract the effects and stabilize the patient.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="emergency_ward_member_list">
                <h2>Emergency Ward Team Members</h2>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Name</th>
                      <th>Educational Qualification</th>
                      <th>Years of Experience</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dr. John Doe</td>
                      <td>MD, Emergency Medicine</td>
                      <td>15</td>
                      <td>Chief Emergency Physician</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Dr. Jane Smith</td>
                      <td>MBBS, MS</td>
                      <td>10</td>
                      <td>Senior Surgeon</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nurse Alice Johnson</td>
                      <td>BSc Nursing</td>
                      <td>8</td>
                      <td>Head Nurse</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Dr. Emily Brown</td>
                      <td>MD, Critical Care</td>
                      <td>12</td>
                      <td>Emergency Medicine Specialist</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Technician Mark Wilson</td>
                      <td>Diploma in Emergency Technology</td>
                      <td>5</td>
                      <td>Emergency Technician</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="orthopaedics_procedures_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="orthopaedics_procedures_wrapper">
                <h2>Emergency Treatments and Procedures</h2>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img red">
                    <i className="flaticon-ambulance" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_red">
                    <h4><a href="#">Trauma Care</a></h4>
                    <p>Immediate care for injuries resulting from accidents, falls, and more.</p>
                  </div>
                </div>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img blue">
                    <i className="flaticon-heartbeat" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Cardiac Emergencies</a></h4>
                    <p>Expert care for heart attacks and other acute cardiac conditions.</p>
                  </div>
                </div>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img green">
                    <i className="flaticon-brain" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Stroke Management</a></h4>
                    <p>Advanced treatment for stroke to minimize brain damage and improve outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="department_image_slider">
                <h2>Emergency Ward Gallery</h2>
                <div className="owl_box">
                  <div className="med_slider_img">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <img src={Slide_1} className="img-responsive" alt="emergency_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_2} className="img-responsive" alt="emergency_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_3} className="img-responsive" alt="emergency_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_4} className="img-responsive" alt="emergency_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="partner_wrapper med_bottompadder80_3 ortho_partner">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="partner_slider_img">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <img
                      src="images/partner_1.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_2.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_3.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_4.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_5.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_6.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EmergencyWard;

