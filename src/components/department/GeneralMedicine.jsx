import React from "react";
import plus_1 from '../../assets/images/department/general_medicine/plus_1.jpg';
import RoutineCheckup from '../../assets/images/department/general_medicine/routine_checkup.jpg';
import DiabetesManagement from '../../assets/images/department/general_medicine/diabetes_management.jpg';
import Hypertension from '../../assets/images/department/general_medicine/hypertension_management.jpg';
import Vaccination from '../../assets/images/department/general_medicine/vaccinations.jpg';
import Allergy from '../../assets/images/department/general_medicine/allergy_testing.jpg';
import Nutrition from '../../assets/images/department/general_medicine/nutrition_counseling.jpg';
import Slide_1 from '../../assets/images/department/general_medicine/slide_1.jpg';
import Slide_2 from '../../assets/images/department/general_medicine/slide_2.jpg';
import Slide_3 from '../../assets/images/department/general_medicine/slide_3.jpg';
import Slide_4 from '../../assets/images/department/general_medicine/slide_4.jpg';
import Slide_5 from '../../assets/images/department/general_medicine/slide_5.jpg';


export const GeneralMedicine = () => {
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
        <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a>
        <div class="section_head">
            <div class="container">
                <div class="row">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                    <div class="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                        <h1 class="med_bottompadder20_4">About General Medicine</h1>
                        <img src={plus_1} alt="line" class="med_bottompadder20_4"/>
                    </div>
                </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
                    <div class="neurology_text_wrapper">
                    <p>The role of General Medicine in our daily lives cannot be emphasised enough. Today, most people face health issues such as arthritis, 
                  diabetes, asthma, cold and flu, hypertension and heart diseases and other recurring issues which can only be treated with medicines. 
                  At Apollo Clinic’s General Medicine Department, we understand that illnesses and injuries are uncertain and thus, are committed to 
                  supporting, protecting and providing you with the best treatment possible.</p>                   
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
                    <h2>General Medicine Services</h2>
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
                    <a href="#">Primary Care</a>
                  </h4>
                  <p>
                  Comprehensive primary care services for all age groups.
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
                    <a href="#">Chronic Disease Management</a>
                  </h4>
                  <p>
                  Management of chronic conditions such as diabetes, hypertension, and asthma.
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
                    <a href="#"> Preventive Care</a>
                  </h4>
                  <p>
                  Routine check-ups, immunizations, and screenings.
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
                    <a href="#">Geriatric Care</a>
                  </h4>
                  <p>
                  Specialized care for older adults.
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
                    <a href="#">Inpatient Care</a>
                  </h4>
                  <p>
                  Comprehensive care for hospitalized patients.
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
                    <a href="#">Diagnostic Services</a>
                  </h4>
                  <p>
                  Comprehensive diagnostic evaluations and tests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_heading end */}

            {/* about_GeneralMedicine_section start */}

      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <p>
                  <h2>Department Overview</h2>
                  Our Department of General Medicine is committed to providing comprehensive care for a wide range of medical 
                  conditions. Our team of highly skilled physicians and healthcare professionals work collaboratively to ensure
                   each patient receives personalized and effective treatment. We focus on preventive care, early diagnosis, and 
                   management of chronic diseases to improve overall health and well-being.
                </p>
                <p>
                  From routine check-ups to complex medical care, our department is equipped to handle all aspects of internal medicine.
                   We believe in a patient-centered approach, ensuring that every patient is treated with compassion, respect, and dignity.
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
                          Comprehensive Primary Care
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
                        Our primary care services include routine check-ups, preventive care, and management of chronic conditions. Our experienced physicians provide personalized care tailored to each patient's unique needs.
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
                          Specialized Consultations
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
                        We offer specialized consultations for various medical conditions, ensuring expert advice and treatment plans. Our specialists work closely with primary care physicians to provide coordinated care.

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
                          Chronic Disease Management
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
                        We provide comprehensive management for chronic diseases such as diabetes, hypertension, and cardiovascular diseases. Our goal is to help patients manage their conditions effectively and improve their quality of life.

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
                          Preventive Health Screenings
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
                        We offer a range of preventive health screenings to detect early signs of illness and promote overall wellness. These screenings are crucial for early intervention and effective treatment.

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
                          Patient Education and Support
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
                        We believe in empowering patients through education and support. Our team provides valuable information and resources to help patients make informed decisions about their health.

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
      {/* about_GeneralMedicine_section end*/}
      {/* GeneralMedicine_procedures_section start*/}



      <div class="cardiology_procedure_section">
        <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a>
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
                        <a href="#"><i class="flaticon-heart-outline-with-a-plus-sign-inside"></i></a>
                        <h4>Primary Care</h4>
                        <p>Providing comprehensive primary care services, including routine check-ups and preventive care.</p>
                        </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper pink_wrapper">
                        <a href="#"><i class="flaticon-heart-beat"></i></a>
                        <h4>Chronic Disease Management</h4>
                        <p>Expert management of chronic conditions such as diabetes, hypertension, and asthma.</p>
                        </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper green_wrapper">
                        <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                        <h4>Preventive Screenings</h4>
                        <p>Offering a range of preventive health screenings to detect early signs of illness.</p>
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
                    <h2>General Medicine Procedures</h2>
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
                      <a href="#"><img src={RoutineCheckup} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Routine Checkup</a></h4>
                        <p>Comprehensive routine health checkups for early diagnosis and prevention.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={DiabetesManagement} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Diabetes Management</a></h4>
                        <p>Specialized care and management plans for diabetes patients.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Hypertension} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Hypertension Management</a></h4>
                        <p>Effective management and treatment plans for hypertension.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Vaccination} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Vaccinations</a></h4>
                        <p>Providing essential vaccinations for children and adults.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Allergy} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Allergy Testing</a></h4>
                        <p>Comprehensive testing for various allergies and tailored treatment plans.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Nutrition} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Nutrition Counseling</a></h4>
                        <p>Personalized nutrition plans and counseling for healthy living.</p>
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
                    <h4><a href="#">Cardiology </a></h4>
                    <p>Comprehensive cardiac care and management of heart diseases.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img blue">
                    <i class="flaticon-foot-side-view-outline" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Pulmonology</a></h4>
                    <p>Expert care for respiratory conditions and lung diseases.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img green">
                    <i class="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Neurology</a></h4>
                    <p>Advanced treatment and care for neurological disorders.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="department_image_slider">
                <h2>General Medicine Gallery</h2>
                <div class="owl_box">
                  <div class="med_slider_img">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src={Slide_1} class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src={Slide_2} class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src={Slide_3} class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src={Slide_4} class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src={Slide_5} class="img-responsive" alt="story_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* GeneralMedicine_procedures_section end*/}

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
                    <h2>General Medicine Specialists</h2>
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
                  <h5>(Internal Medicine, Endocrinology)</h5>
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
                  <h5>(Geriatrics, Pulmonology)</h5>
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
                  <h5>(Cardiology, Nephrology)</h5>
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
                  <h5>(Rheumatology, Infectious Diseases)</h5>
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
                  <h5>(Gastroenterology, Hepatology)</h5>
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
                  <h5>(Hematology, Oncology)</h5>
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

