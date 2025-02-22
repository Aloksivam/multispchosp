import React from "react";
import logo from '../../assets/images/paediatrics/logo.png';
import RoutineCheckup from '../../assets/images/paediatrics/routine_checkup.jpg';
import Vaccination from '../../assets/images/paediatrics/vaccination.jpg';
import GrowthMonitoring from '../../assets/images/paediatrics/growth_monitoring.jpg';
import NewbornCare from '../../assets/images/paediatrics/newborn_care.jpg';
import Allergy from '../../assets/images/paediatrics/allergy_testing.jpg';
import Nutrition from '../../assets/images/paediatrics/nutrition_counseling.jpg';
import Slide_1 from '../../assets/images/paediatrics/slide_1.jpg';
import Slide_2 from '../../assets/images/paediatrics/slide_2.jpg';
import Slide_3 from '../../assets/images/paediatrics/slide_3.jpg';
import Slide_4 from '../../assets/images/paediatrics/slide_4.jpg';
import Slide_5 from '../../assets/images/paediatrics/slide_5.jpg';


export const Paediatrics= () => {
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
        <a href="javascript:" id="return-to-top"><i className="fa fa-angle-up"></i></a>
        <div className="section_head">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                <div className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                  <h1 className="med_bottompadder20_4">About Paediatrics</h1>
                  <img src={logo} alt="line" className="med_bottompadder20_4"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
              <div className="neurology_text_wrapper">
                <p>Paediatrics is a branch of medicine that involves the medical care of infants, children, 
                    and adolescents. At Apollo Clinic's Paediatrics Department, we are dedicated to providing 
                    comprehensive healthcare for children, from newborns to teenagers. Our team of experienced 
                    pediatricians and nurses are committed to ensuring the well-being and health of your child.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="department_services_section">
        <div className="section_head">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div
                    className="section_heading wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h2>Paediatrics Services</h2>
                  </div>
                </div>
              </div>
              {/* section_heading end */}
            </div>
          </div>
        </div>
        {/* section_heading strat */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_one">
                  <i className="flaticon-knee" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Newborn Care</a>
                  </h4>
                  <p>
                    Comprehensive care for newborns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i className="flaticon-foot-side-view-outline" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Vaccinations</a>
                  </h4>
                  <p>
                    Immunization services for children.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_three">
                  <i className="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Routine Check-ups</a>
                  </h4>
                  <p>
                    Regular health check-ups for children.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_four">
                  <i className="flaticon-user" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Chronic Illness Management</a>
                  </h4>
                  <p>
                    Managing chronic conditions in children.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_five">
                  <i className="flaticon-monitoring" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Specialized Care</a>
                  </h4>
                  <p>
                    Specialized care for children with complex health needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_six">
                  <i className="flaticon-knee" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Developmental Assessments</a>
                  </h4>
                  <p>
                    Assessments to monitor and support child development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about_Paediatrics_section start */}

      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <p>
                  <h2>Department Overview</h2>
                  Our Department of Paediatrics is dedicated to providing exceptional care for infants, children, and adolescents.
                  Our team of experienced paediatricians and healthcare professionals offers comprehensive services tailored to meet the unique needs of young patients.
                  Paediatrics is a medical specialty focused on the comprehensive health and medical care of infants, children, and adolescents. 
                  <br></br> <br></br>The department of Paediatrics addresses a broad spectrum of health aspects, including preventive health measures, diagnosis, treatment, 
                  and management of various conditions and illnesses that specifically affect younger populations.
                </p>
                <p>
                  We focus on preventive care, early detection of health issues, and management of acute and chronic conditions to ensure the optimal health and development of children.
                  Our child-friendly environment and compassionate approach help make medical care a positive experience for both children and their families.
                  The Paediatrics department comprises highly trained and experienced paediatricians, nurses, and support staff who are dedicated to providing compassionate and comprehensive care.
                  They work closely with families to ensure that children receive the best possible medical attention and support.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="benefits_accordion_wrapper">
                <h2>Our Treatments</h2>
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
                          Well-Child Visits
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
                          Regular well-child visits are essential for monitoring growth and development, 
                          administering vaccinations, and providing guidance on nutrition, safety, and overall health.
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
                          Acute Illness Management
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
                          We provide prompt and effective treatment for a wide range of acute illnesses, 
                          from common colds and infections to more serious conditions. Our goal is to help children 
                          recover quickly and comfortably.
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
                          Chronic Disease Management
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
                          For children with chronic conditions such as asthma, diabetes, or allergies, 
                          we offer comprehensive management plans to help manage their health and improve their 
                          quality of life.
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
                          Developmental Screenings
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
                          Early detection of developmental delays or disorders is crucial. We provide thorough 
                          screenings and, if necessary, referrals to specialists for further evaluation and intervention.
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
                          Nutritional Counseling
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
                          Proper nutrition is vital for a child's growth and development. Our nutritional counseling 
                          services help families make healthy dietary choices to support their children's health.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about_Paediatrics_section end */}

          {/* Paediatrics_procedures_section start */}
          <div className="cardiology_procedure_section">
        <a href="javascript:" id="return-to-top"><i className="fa fa-angle-up"></i></a>
        <div className="section_head">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div className="section_heading">
                    <h2>Treatment and Procedures</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="procedure_wrapper blue_wrapper">
                <a href="#"><i className="flaticon-heart-outline-with-a-plus-sign-inside"></i></a>
                <h4>Child Wellness</h4>
                <p> <br></br> Comprehensive health check-ups and wellness programs for children.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="procedure_wrapper pink_wrapper">
                <a href="#"><i className="flaticon-heart-beat"></i></a>
                <h4>Vaccination</h4>
                <p> <br></br> Administering essential vaccinations to prevent childhood diseases.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="procedure_wrapper green_wrapper">
                <a href="#"><i className="flaticon-lifeline-in-a-heart-outline"></i></a>
                <h4>Growth and Development</h4>
                <p>Monitoring and supporting the healthy growth and development of children.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="laparoscopic_procedures_wrapper">
        <div class="laparoscopic_procedures_overlay"></div>
        <div class="section_head">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div class="text-center">
                  <div class="section_heading">
                    <h2>Pediatric Procedures</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={RoutineCheckup} alt="Routine Checkup" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Routine Checkup</a></h4>
                        <p>Regular health checkups to monitor growth and development.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Vaccination} alt="Vaccinations" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Vaccinations</a></h4>
                        <p>Essential vaccinations to protect against various diseases.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={GrowthMonitoring} alt="Growth Monitoring" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Growth Monitoring</a></h4>
                        <p>Tracking and ensuring proper growth and development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={NewbornCare} alt="Newborn Care" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Newborn Care</a></h4>
                        <p>Specialized care for newborns to ensure a healthy start.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Allergy} alt="Allergy Testing" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Allergy Testing</a></h4>
                        <p>Comprehensive testing for various allergies and tailored treatment plans.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Nutrition} alt="Nutrition Counseling" /></a>
                      <div class="caption text-center">
                        <h4><a href="#">Nutrition Counseling</a></h4>
                        <p>Personalized nutrition plans and counseling for healthy living.</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <h2>Treatment and Procedures</h2>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img red">
                    <i className="flaticon-knee" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_red">
                    <h4><a href="#">Neonatology </a></h4>
                    <p>Comprehensive care for newborn infants, especially the ill or premature.</p>
                  </div>
                </div>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img blue">
                    <i className="flaticon-foot-side-view-outline" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Child Psychology</a></h4>
                    <p>Expert care for mental health and developmental disorders in children.</p>
                  </div>
                </div>
                <div className="orthopaedics_icon_wrapper">
                  <div className="orthopaedics_icon_img green">
                    <i className="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true"></i>
                  </div>
                  <div className="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Pediatric Cardiology</a></h4>
                    <p>Advanced treatment and care for heart conditions in children.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="department_image_slider">
                <h2>Paediatrics Gallery</h2>
                <div className="owl_box">
                  <div className="med_slider_img">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <img src={Slide_1} className="img-responsive" alt="story_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_2} className="img-responsive" alt="story_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_3} className="img-responsive" alt="story_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_4} className="img-responsive" alt="story_img" />
                      </div>
                      <div className="item">
                        <img src={Slide_5} className="img-responsive" alt="story_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Paediatrics_procedures_section end*/}


             {/* department_appointment_section start */}
      <div className="department_appointment_section">
        <div className="department_appointment_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="appointment_form_section">
                <h4>Send Message Us</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Name</label>
                        <input
                          type="text"
                          className="form-control require"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Email</label>
                        <input
                          type="email"
                          className="form-control require"
                          name="email"
                          placeholder="Your Email"
                          data-valid="email"
                          data-error="Email should be valid."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Phone</label>
                        <input
                          type="text"
                          className="form-control require"
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Date</label>
                        <input
                          type="text"
                          className="form-control require"
                          name="date"
                          id="datepicker"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Time</label>
                        <input
                          className="form-control required"
                          name="time"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="sr-only">Subject</label>
                        <input
                          type="email"
                          className="form-control required"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="sr-only">Message</label>
                        <textarea
                          className="form-control"
                          required=""
                          rows={7}
                          placeholder="Write Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="submitForm btn btn-primary"
                    >
                      Send Message
                    </button>
                    <div className="response" style={{ color: "#fff" }} />
                  </div>
                  {/*end of /.row*/}
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="appointment_timing_wrapper">
                <h4>Appointment Hours</h4>
                <ul className="working-hours">
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Sarah Johnson:</strong>
                    </span>
                    <span className="docters_timing">8:00 am - 10.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Michael Brown:</strong>
                    </span>
                    <span className="docters_timing">9:00 am - 11.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Emily Davis:</strong>
                    </span>
                    <span className="docters_timing">10:00 am - 11.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. James Smith:</strong>
                    </span>
                    <span className="docters_timing">10:00 am - 03.00 pm</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Lisa Martinez:</strong>
                    </span>
                    <span className="docters_timing">12:00 am - 02.00 pm</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Robert Wilson:</strong>
                    </span>
                    <span className="docters_timing">8:00 am - 04.00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* department_appointment_section end */}

      {/* department_team_wrapper start */}
      <div className="department_team_wrapper">
        <a href="javascript:" id="return-to-top">
          <i className="fa fa-angle-up" />
        </a>
        <div className="section_head">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div
                    className="section_heading wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h2>Paediatrics Specialists</h2>
                  </div>
                </div>
              </div>
              {/* section_heading end */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-1.png"
                    className="img-responsive"
                    alt="team1_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. Emily Davis</a>
                  </h4>
                  <h5>(Pediatric Neurology)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-2.png"
                    className="img-responsive"
                    alt="team2_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. Martina Colliys</a>
                  </h4>
                  <h5>(Pediatric Cardiology)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-3.png"
                    className="img-responsive"
                    alt="team3_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. Sarah Johnson</a>
                  </h4>
                  <h5>(Pediatric Oncology)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-4.png"
                    className="img-responsive"
                    alt="team4_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. James Smith</a>
                  </h4>
                  <h5>(Pediatric Infectious Diseases)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-5.png"
                    className="img-responsive"
                    alt="team5_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. Robert Wilson</a>
                  </h4>
                  <h5>(Pediatric Gastroenterology)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_team_members">
                <div className="department_member_image">
                  <img
                    src="images/team-images/team-6.png"
                    className="img-responsive"
                    alt="team6_img"
                  />
                </div>
                <div className="department_member_content">
                  <h4>
                    <a href="#">Dr. Lisa Martinez</a>
                  </h4>
                  <h5>(Pediatric Hematology)</h5>
                </div>
              </div>
            </div>
          </div>
          {/* <a href="#" className="btn_more">
            <i className="fa fa-refresh" />
            Load More
          </a> */}
        </div>
      </div>
      {/* department_team_wrapper end */}

      {/*partner wrapper start*/}
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
