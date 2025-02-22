import React from "react";

const Pathology = () => {
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
                  <h1>Department of Pathology</h1>
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
                                <h2>About Pathology Department</h2>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                    <div className="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                        <h1 className="med_bottompadder20_4">About Pathology</h1>
                        <img src="images/pathology/p1.png" alt="line" className="med_bottompadder20_4"/>
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
                        <p>Our Department of Pathology acts as your unseen partner in diagnosis. Utilizing advanced technology, we delve into the microscopic world, analyzing tissues and fluids to pinpoint the root cause of your health concerns. Our insights guide your physician in crafting precise diagnoses and personalized treatment plans. Let us collaborate for optimal healthcare. </p>
                    </div>
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
              {/* section_heading start */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div
                    className="section_heading wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h2>Pathology: Uncovering the Cause of Illness </h2>
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
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_one">
                  <i className="flaticon-tooth" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Histopathology</a>
                  </h4>
                  <p>
                  Examination of tissue samples under a microscope to diagnose diseases.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i className="flaticon-dental-care" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Cytopathology</a>
                  </h4>
                  <p>
                  Study of individual cell samples to detect cancer and other conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_three">
                  <i className="flaticon-dentist" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Hematopathology</a>
                  </h4>
                  <p>
                  Analysis of blood, bone marrow, and lymph nodes to diagnose blood disorders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_four">
                  <i className="flaticon-orthodontics" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Molecular Pathology</a>
                  </h4>
                  <p>
                  Use of genetic and molecular testing to identify disease markers and mutations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i className="flaticon-dental-care" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Neuropathology</a>
                  </h4>
                  <p>
                  Examination of nervous system tissue to diagnose neurological disorders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_five">
                  <i className="flaticon-tooth-1" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Forensic Pathology</a>
                  </h4>
                  <p>
                  Investigation of the cause and manner of death through autopsies and postmortem examinations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_six">
                  <i className="flaticon-dental-implant" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Clinical Pathology</a>
                  </h4>
                  <p>
                  Laboratory analysis of bodily fluids, including blood, urine, and cerebrospinal fluid, to diagnose diseases.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i className="flaticon-dental-care" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Dermatopathology</a>
                  </h4>
                  <p>
                  Study of skin diseases through the examination of skin biopsies.
                  </p>
                </div>
              </div>
            </div>
	    <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_five">
                  <i className="flaticon-tooth-1" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Renal Pathology</a>
                  </h4>
                  <p>
                  Specialized analysis of kidney tissue to diagnose renal diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        



      {/* About Pathology Section Start */}
      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <h2>Department Overview</h2>
                <p>
                Our Department of Pathology is committed to providing the highest standard of diagnostic excellence. Our mission is to ensure accurate and timely diagnosis of diseases through comprehensive histopathological, cytopathological, and molecular pathology services. We strive to advance the field of pathology through cutting-edge research, state-of-the-art technology, and exceptional patient care.</p>
                <p>
                Our team of board-certified pathologists, laboratory technologists, and support staff work collaboratively to deliver precise and reliable diagnostic services tailored to each patient’s unique needs. Whether you require routine blood work, tissue biopsies, or advanced molecular testing, you can trust our expertise and dedication to accurate diagnosis and patient well-being.</p>
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
                          Comprehensive Pathology Services 
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
                        Our Department of Pathology offers a comprehensive range of diagnostic services, from routine biopsies and analyses to advanced molecular testing. We utilize cutting-edge technology to provide detailed insights into disease processes, enabling physicians to make precise diagnoses and personalized treatment plans for optimal patient care.
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
                          Our Department of Pathology utilizes advanced technology, including digital microscopy, immunohistochemistry, and molecular diagnostics. These tools enable us to perform precise and comprehensive analyses, leading to accurate diagnoses and effective treatment plans.
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
                            <h2> Diagnostic Services </h2>
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
                    <h4>Histopathology</h4>
                    <p>Examination of tissue samples under a microscope to diagnose diseases.</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="procedure_wrapper pink_wrapper">
                    <a href="#"><i class="flaticon-heart-beat"></i></a>
                    <h4>Cytopathogy</h4>
                    <p>Study of individual cell samples to detect cancer and other conditions.</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="procedure_wrapper green_wrapper">
                    <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                    <h4>Clinical Pathology</h4>
                    <p>Comprehensive body fluid analysis for accurate diagnoses </p>
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
                            <h2>Pathology Procedures</h2>
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
                                <a href="#"><img src="images/pathology/hematopathology.jpg" alt="Image" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">Hematopathology</a></h4>
                                    <p>Analysis of blood, bone marrow, and lymph nodes to diagnose blood disorders.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/pathology/Molecular.jpg" alt="Appendectomy" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">Molecular Pathology</a></h4>
                                    <p>Use of genetic and molecular testing to identify disease markers and mutations. </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/pathology/p11.jpg" alt="Adrenalectomy" /></a>
                                <div class="caption text-center">
                                    <h4><a href="#">Histopathology</a></h4>
                                    <p>Examination of tissue samples under a microscope to diagnose diseases.</p>
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
                <h2><b>Pathology Procedures</b></h2>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img red">
                    <i class="flaticon-knee" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_red">
                    <h4><a href="#">Hematopathology </a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img blue">
                    <i class="flaticon-foot-side-view-outline" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Clinical Pathoogy</a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img green">
                    <i class="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Neuropathology</a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="department_image_slider">
                <h2> <b>Pathology Gallery</b></h2>
                <div class="owl_box">
                  <div class="med_slider_img">
                    <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img src="images/pathology/p2.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/pathology/p3.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/pathology/p6.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/pathology/p4.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/pathology/p8.jpg" class="img-responsive" alt="story_img" />
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
                    <h2>Pathology Technicians</h2>
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

export default Pathology;


