import React from "react";
import plus_1 from "../../assets/images/department/general_medicine/plus_1.jpg";
import RoutineCheckup from "../../assets/images/department/general_medicine/routine_checkup.jpg";
import DiabetesManagement from "../../assets/images/department/general_medicine/diabetes_management.jpg";
import Hypertension from "../../assets/images/department/general_medicine/hypertension_management.jpg";
import Vaccination from "../../assets/images/department/general_medicine/vaccinations.jpg";
import Allergy from "../../assets/images/department/general_medicine/allergy_testing.jpg";
import Nutrition from "../../assets/images/department/general_medicine/nutrition_counseling.jpg";
import Slide_1 from "../../assets/images/department/general_medicine/slide_1.jpg";
import Slide_2 from "../../assets/images/department/general_medicine/slide_2.jpg";
import Slide_3 from "../../assets/images/department/general_medicine/slide_3.jpg";
import Slide_4 from "../../assets/images/department/general_medicine/slide_4.jpg";
import Slide_5 from "../../assets/images/department/general_medicine/slide_5.jpg";

export const Cardiology = () => {
  return (
    <>
      <div class="med_tittle_section">
        <div class="med_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="med_tittle_cont_wrapper">
                <div class="med_tittle_cont">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about_neurology_section about_Anesthesiology_section">
        <a href="javascript:" id="return-to-top">
          <i class="fa fa-angle-up"></i>
        </a>
        <div class="section_head">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                <div
                  class="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown"
                  data-wow-delay="0.5s"
                >
                  <h1 class="med_bottompadder20_4">About Cardiology</h1>
                  <img src={plus_1} alt="line" class="med_bottompadder20_4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
              <div class="neurology_text_wrapper">
                <p>
                  Cardiology is a medical specialty focused on diagnosing and
                  treating diseases and conditions of the heart and blood
                  vessels (the cardiovascular system). Here’s an overview of the
                  types of treatments, procedures, and specialists in cardiology
                </p>
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
                    <h2>Cardiology Services</h2>
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
                    <a href="#">Electrocardiogram (ECG or EKG):</a>
                  </h4>
                  <p>
                    Records the electrical activity of the heart to detect
                    irregularities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i
                    className="flaticon-foot-side-view-outline"
                    aria-hidden="true"
                  />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Echocardiogram</a>
                  </h4>
                  <p>
                    Uses ultrasound to create images of the heart, assessing its
                    structure and function.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_three">
                  <i
                    className="flaticon-hip-twist-with-stretched-leg-position"
                    aria-hidden="true"
                  />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#"> Stress Testing</a>
                  </h4>
                  <p>
                    Measures heart function under physical stress, often using a
                    treadmill or medication to stimulate the heart.
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
                    <a href="#">Holter Monitoring</a>
                  </h4>
                  <p>
                    Continuous ECG recording over 24-48 hours to detect
                    intermittent arrhythmias.
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
                    <a href="#">Cardiac Catheterization</a>
                  </h4>
                  <p>
                    Involves inserting a catheter into the heart's blood vessels
                    to diagnose and treat heart conditions.
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
                    <a href="#">CT Coronary Angiography</a>
                  </h4>
                  <p>
                    A non-invasive imaging technique to visualize coronary
                    arteries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_heading end */}

      {/* about_Cardiology_section start */}

      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <p>
                  <h2>Department Overview</h2>A cardiology department
                  specializes in diagnosing, treating, and preventing heart and
                  vascular diseases. It is typically staffed by a
                  multidisciplinary team of healthcare professionals, including
                  cardiologists, cardiac surgeons, nurses, technicians, and
                  support staff, all working together to provide comprehensive
                  cardiovascular care. Here's an overview of a typical
                  cardiology department
                </p>
                <p>
                  In addition to diagnostic and therapeutic services, the
                  cardiology department emphasizes preventive care and patient
                  education. This includes risk assessment and management for
                  conditions such as hypertension, diabetes, and high
                  cholesterol, along with lifestyle counseling on diet,
                  exercise, smoking cessation, and stress management. Cardiac
                  rehabilitation programs are also provided to help patients
                  recover and improve their heart health after cardiac events.
                  The department may also be involved in clinical research and
                  training programs to advance the field of cardiology and
                  educate future healthcare professionals.
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
                          Angioplasty and Stenting
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
                          Angioplasty: A procedure to open narrowed or blocked
                          coronary arteries using a balloon.
                          <br />
                          Stenting: Insertion of a small wire mesh tube to keep
                          the artery open after angioplasty.
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
                          Pacemaker and ICD Implantation
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
                          Pacemakers: Devices implanted to regulate slow heart
                          rhythms.
                          <br />
                          Implantable Cardioverter Defibrillators (ICDs):
                          Devices that detect and correct life-threatening
                          arrhythmias.
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
                          Coronary Artery Bypass Grafting (CABG)
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
                          A surgical procedure that improves blood flow to the
                          heart by diverting blood around blocked arteries using
                          grafts.
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
                          Heart Valve Repair or Replacement
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
                          Surgical or minimally invasive procedures to repair or
                          replace malfunctioning heart valves, restoring proper
                          blood flow.
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
                          Catheter Ablation
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
                          A procedure that destroys small areas of heart tissue
                          causing abnormal heart rhythms (arrhythmias) using
                          radiofrequency energy or cryotherapy.
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
      {/* about_Cardiology_section end*/}
      {/* Cardiology_procedures_section start*/}

      <div class="cardiology_procedure_section">
        <a href="javascript:" id="return-to-top">
          <i class="fa fa-angle-up"></i>
        </a>
        <div class="section_head">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div class="text-center">
                  <div class="section_heading">
                    <h2> Treatment and Procedures </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="procedure_wrapper blue_wrapper">
                <a href="#">
                  <i class="flaticon-heart-outline-with-a-plus-sign-inside"></i>
                </a>
                <h4>Diagnostic Procedure</h4>
                <p>
                  An ECG records the heart's electrical activity to diagnose
                  arrhythmias, heart attacks, and other cardiovascular issues.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="procedure_wrapper pink_wrapper">
                <a href="#">
                  <i class="flaticon-heart-beat"></i>
                </a>
                <h4>Interventional Procedure</h4>
                <p>
                  Angioplasty and stenting involve opening narrowed or blocked
                  arteries with a balloon and placing a stent to maintain blood
                  flow.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="procedure_wrapper green_wrapper">
                <a href="#">
                  <i class="flaticon-lifeline-in-a-heart-outline"></i>
                </a>
                <h4>Surgical <br/>Procedure</h4>
                <p>
                  CABG surgery creates a new pathway for blood flow around
                  blocked arteries using a healthy vessel from another body
                  part.
                </p>
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
                    <h2>Cardiology Procedures</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {/* <div class="laparoscopic_procedures_slider">
                        <div class="owl-carousel owl-theme"> */}
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={RoutineCheckup} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Routine Checkup</a>
                        </h4>
                        <p>
                          Comprehensive routine health checkups for early
                          diagnosis and prevention.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={DiabetesManagement} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Diabetes Management</a>
                        </h4>
                        <p>
                          Specialized care and management plans for diabetes
                          patients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={Hypertension} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Hypertension Management</a>
                        </h4>
                        <p>
                          Effective management and treatment plans for
                          hypertension.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={Vaccination} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Vaccinations</a>
                        </h4>
                        <p>
                          Providing essential vaccinations for children and
                          adults.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={Allergy} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Allergy Testing</a>
                        </h4>
                        <p>
                          Comprehensive testing for various allergies and
                          tailored treatment plans.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={Nutrition} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4>
                          <a href="#">Nutrition Counseling</a>
                        </h4>
                        <p>
                          Personalized nutrition plans and counseling for
                          healthy living.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div>
                    </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="orthopaedics_procedures_section">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="orthopaedics_procedures_wrapper">
                <h2>Treatment and Procedures</h2>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img red">
                    <i class="flaticon-knee" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_red">
                    <h4>
                      <a href="#">Cardiology </a>
                    </h4>
                    <p>
                      Comprehensive cardiac care and management of heart
                      diseases.
                    </p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img blue">
                    <i
                      class="flaticon-foot-side-view-outline"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_blue">
                    <h4>
                      <a href="#">Pulmonology</a>
                    </h4>
                    <p>
                      Expert care for respiratory conditions and lung diseases.
                    </p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img green">
                    <i
                      class="flaticon-hip-twist-with-stretched-leg-position"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_green">
                    <h4>
                      <a href="#">Neurology</a>
                    </h4>
                    <p>
                      Advanced treatment and care for neurological disorders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="department_image_slider">
                <h2>Cardiology Gallery</h2>
                <div class="owl_box">
                  <div class="med_slider_img">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img
                          src={Slide_1}
                          class="img-responsive"
                          alt="story_img"
                        />
                      </div>
                      <div class="item">
                        <img
                          src={Slide_2}
                          class="img-responsive"
                          alt="story_img"
                        />
                      </div>
                      <div class="item">
                        <img
                          src={Slide_3}
                          class="img-responsive"
                          alt="story_img"
                        />
                      </div>
                      <div class="item">
                        <img
                          src={Slide_4}
                          class="img-responsive"
                          alt="story_img"
                        />
                      </div>
                      <div class="item">
                        <img
                          src={Slide_5}
                          class="img-responsive"
                          alt="story_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cardiology_procedures_section end*/}

      {/* department_appointment_section start*/}
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
      {/* department_appointment_section end*/}
      {/* department_team_wrapper start*/}
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
                    <h2>Cardiology Specialists</h2>
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
                  <h5>(Interventional Cardiology)</h5>
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
                  <h5>(Pediatric Cardiology )</h5>
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
                  <h5>(Cardiac Electrophysiology)</h5>
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
                  <h5>(Heart Failure and Transplantation)</h5>
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
                  <h5>(Preventive Cardiology)</h5>
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
                  <h5>(Cardiovascular Surgery)</h5>
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
      {/* department_team_wrapper end*/}
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
      {/*partner wrapper end*/}
      {/*news wrapper start*/}

      {/*news wrapper end*/}
      {/* footer wrapper start*/}

      {/*footer wrapper end*/}
      {/*main js files*/}
      {/*js code*/}
      {/* slider custom js End */}
    </>
  );
};
