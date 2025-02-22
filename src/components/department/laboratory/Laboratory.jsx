import React from "react";
import LabTestsTable from './LabTestsTable'; 
import labTestData from './lab_test.json';

const Laboratory = () => {
  return (
    <>
      {/* Preloader Start */}
      {/* <div id="preloader">
        <div id="status">
          <img src="images/preloader.gif" id="preloader_image" alt="loader" />
        </div>
      </div> */}

      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Laboratory Department</h1>
                  {/* <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Services</li>
                  </ol> */}
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
                    {/* <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div class="text-center">
                            <div class="section_heading">
                                <h2>About Laboratory Department</h2>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                    <div className="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                        <h1 className="med_bottompadder20_4">About Laboratory Department</h1>
                        <img src="images/Laboratory/L1.png" alt="line" className="med_bottompadder20_4"/>
                        {/* <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            <br></br>nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p> */}
                    </div>
                </div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
                    <div className="neurology_text_wrapper">
                        <p>The Laboratory Department serves as a critical partner in your healthcare journey. Utilizing advanced technology, our team meticulously analyzes a range of samples, providing vital insights that guide your physician towards accurate diagnoses and personalized treatment plans.  This comprehensive analysis empowers informed decisions about your health.</p></div>
                </div>
                {/* <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div class="neurology_image_wrapper">
                        <img class="img-responsive" src="images/neurology/neurology.jpg" alt="neurology-img"/>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-xs-12 col-sm-12">
                    <div class="neurology_infobox_wrapper">
                        <h4>Brain &amp; Spine Injurie</h4>
                        <p>Praesent dapibus eleifend augue, egeten velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor.</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-xs-12 col-sm-12">
                    <div class="neurology_infobox_wrapper">
                        <h4>Brain Tumor Removal</h4>
                        <p>Praesent dapibus eleifend augue, egeten velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor.</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-xs-12 col-sm-12">
                    <div class="neurology_infobox_wrapper">
                        <h4>Functional MRI</h4>
                        <p>Praesent dapibus eleifend augue, egeten velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor.</p>
                    </div>
                </div> */}
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
                    data-wow-delay="0.5s">
                    <h2><c>Medical Laboratory Services </c></h2>
                    <LabTestsTable data={labTestData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
     



      {/* About Lab Section Start */}
      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <h2>Department Overview</h2>
                <p>The Diagnostic Laboratory plays a vital role in patient care by providing accurate and timely laboratory testing. Our highly skilled team, including certified laboratory professionals and technicians, utilizes advanced equipment to perform a wide range of tests. These tests analyze blood, tissues, and other samples to identify various conditions, monitor health, and track treatment progress. We are committed to delivering reliable results and supporting healthcare providers in making informed decisions for optimal patient outcomes.</p></div>
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
                          Comprehensive Laboratory Services 
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
                        Our Diagnostic Laboratory provides a comprehensive menu of tests, from routine blood work and analyses to advanced molecular diagnostics. We leverage cutting-edge technology to deliver in-depth information on various conditions. This empowers physicians with the data they need to make accurate diagnoses and tailor treatment plans for optimal patient outcomes. </p>
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
                          Cutting-Edge Technology
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
                          Our Department of Laboratory utilizes advanced technology, including digital microscopy, immunohistochemistry, and molecular diagnostics. These tools enable us to perform precise and comprehensive analyses, leading to accurate diagnoses and effective treatment plans.
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
                          Patient-First Philosophy
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
                        Our department prioritizes patient care by ensuring accurate and timely diagnoses. We collaborate closely with physicians to provide clear communication and support informed treatment decisions for optimal patient outcomes.
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
      {/* About Pathology Section End */}

      <div class="cardiology_procedure_section">
    <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a>
    <div class="section_head">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div class="text-center">
                        <div class="section_heading">
                            <h2>Laboratory Services</h2>
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
                    <a href="#"><i class="flaticon-immunology"></i></a>
                    <h4>Immunoserology</h4>
                    <p>Tests antibodies and immune system functions to diagnose autoimmune diseases and allergies.</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="procedure_wrapper pink_wrapper">
                    <a href="#"><i class="flaticon-urinalysis"></i></a>
                    <h4>Urinalysis</h4>
                    <p>Analyzes urine to detect abnormalities like diabetes, kidney disease, and urinary tract infections.</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="procedure_wrapper green_wrapper">
                    <a href="#"><i class="flaticon-cytology"></i></a>
                    <h4>FNAC </h4>
                    <p>Diagnoses and investigates palpable mass lesions by examining cells from organs that don't shed spontaneously.</p>
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
                            <h2>Laboratory Services</h2>
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
                                <a href="#"><img src="images/laboratory/general.png" alt="General Lab Tests" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">General Lab Tests</a></h4>
                                    <p>Standard lab tests to assess general health and screen for common conditions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/laboratory/LaboratoryTests.png" alt="Specialized Testing" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">Specialized Testing</a></h4>
                                    <p>Tests for specific medical conditions, including genetic testing, cancer diagnostics, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/laboratory/biopsy.png" alt="Biopsy Analysis" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">Biopsy Analysis</a></h4>
                                    <p>Biopsies involve removing tissue for detailed examination & disease diagnosis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            


<div class="orthopaedics_procedures_section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div class="orthopaedics_procedures_wrapper">
            <h2><b>Laboratory Services</b></h2>
            <div class="orthopaedics_icon_wrapper">
              <div class="orthopaedics_icon_img red">
                <i class="flaticon-lab" aria-hidden="true"></i>
              </div>
              <div class="orthopaedics_icon_content icon_content_red">
                <h4><a href="#">General Lab Tests</a></h4>
                <p>This section covers a broad range of standard lab tests to assess general health and screen for common conditions.</p>
              </div>
            </div>
            <div class="orthopaedics_icon_wrapper">
              <div class="orthopaedics_icon_img blue">
                <i class="flaticon-microscope" aria-hidden="true"></i>
              </div>
              <div class="orthopaedics_icon_content icon_content_blue">
                <h4><a href="#">Specialized Testing</a></h4>
                <p>Offers specialized tests for specific medical conditions, including genetic testing, cancer diagnostics, and more.</p>
              </div>
            </div>
            <div class="orthopaedics_icon_wrapper">
              <div class="orthopaedics_icon_img green">
                <i class="flaticon-test-tube" aria-hidden="true"></i>
              </div>
              <div class="orthopaedics_icon_content icon_content_green">
                <h4><a href="#">Biopsy Analysis</a></h4>
                <p>Provides detailed analysis of tissue samples obtained through biopsy procedures to diagnose diseases accurately.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div class="department_image_slider">
            <h2> <b>Laboratory Gallery</b></h2>
            <div class="owl_box">
              <div class="med_slider_img">
                <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src="images/laboratory/L2.png" class="img-responsive" alt="story_img" />
                  </div>
                  <div class="item">
                    <img src="images/laboratory/L3.png" class="img-responsive" alt="story_img" />
                  </div>
                  <div class="item">
                    <img src="images/laboratory/L4.png" class="img-responsive" alt="story_img" />
                  </div>
                  <div class="item">
                    <img src="images/laboratory/L5.png" class="img-responsive" alt="story_img" />
                  </div>
                  <div class="item">
                    <img src="images/laboratory/L6.png" class="img-responsive" alt="story_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>



      
      {/* Appointment Section Start */}
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
                  {/* end of /.row */}
                </form>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="appointment_timing_wrapper">
                <h4>Appointment Hours</h4>
                <ul className="working-hours">
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Jhon Parker:</strong>
                    </span>
                    <span className="docters_timing">8:00 am - 10.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Martina Colliys:</strong>
                    </span>
                    <span className="docters_timing">9:00 am - 11.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Dia Josaf:</strong>
                    </span>
                    <span className="docters_timing">10:00 am - 11.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Justin Doe:</strong>
                    </span>
                    <span className="docters_timing">10:00 am - 03.00 pm</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Justin Jackson:</strong>
                    </span>
                    <span className="docters_timing">12:00 am - 02.00 pm</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Mark Jacobson:</strong>
                    </span>
                    <span className="docters_timing">8:00 am - 04.00 pm</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Jhon Parker:</strong>
                    </span>
                    <span className="docters_timing">8:00 am - 10.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Martina Colliys:</strong>
                    </span>
                    <span className="docters_timing">9:00 am - 11.00 am</span>
                  </li>
                  <li>
                    <span className="docters_name">
                      <strong>Dr. Dia Josaf:</strong>
                    </span>
                    <span className="docters_timing">10:00 am - 11.00 am</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Section End */}

      {/* Team Section Start */}
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
                    <h2>Laboratory Technicians</h2>
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
                    <a href="#">Dr. Jhoana Parker</a>
                  </h4>
                  <h5>(Phlebotomist: collects blood samples)</h5>
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
                  <h5>(Cytotechnologist: screens body fluids for precancerous cells)</h5>
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
                    <a href="#">Dr. Justin Doe</a>
                  </h4>
                  <h5>(Anatomic Pathology Technician: Works specifically with tissue samples.)</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              
            </div>
          </div>
          
        </div>
      </div>
      {/* Team Section End */}
      
      {/* Partner Wrapper Start */}
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
      {/* Partner Wrapper End */}

      {/* News Wrapper Start */}
      {/* News Wrapper End */}
      
      {/* Footer Wrapper Start */}
      {/* Footer Wrapper End */}
      
      {/* Main JS Files */}
      {/* JS Code */}
      {/* Slider Custom JS End */}
    </>
  );
};

export default Laboratory;
