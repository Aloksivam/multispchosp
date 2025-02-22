import React from "react";
import Image1 from '../../assets/images/department/surgical/Image1.png';
import Image2 from '../../assets/images/department/surgical/Image2.jpg';

export const Surgical= () => {
  return (
    <>
      {/*med_tittle_section*/}
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>SURGICAL DEPARTMENT</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about_dermatology_section">
        <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a>
        <div class="section_head">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
                    <div class="neurology_text_wrapper">
                       {/*<p> dermatology is a medical specialty dedicated to diagnosing and treating kidney diseases. This includes conditions like chronic kidney disease, kidney stones, and acute kidney injury. Nephrologists manage dialysis and kidney transplants, providing essential care for patients with severe kidney issues. They also help control high blood pressure and electrolyte imbalances, common in kidney disorders. By using advanced diagnostics and personalized treatments, dermatology focuses on maintaining kidney health and enhancing patients' overall well-being.
                        </p>*/}
                    </div>
                </div>
                
            </div>
        </div>
            <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                  <div class="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                        <h1 class="med_bottompadder20_4">About Surgical</h1>
                        < img  style={{height:100,width:100}} src={Image1} alt="line" class="med_bottompadder20_4" />
                        {<p>
                            The surgical department is a specialized division focused on performing surgeries to diagnose, treat, and manage medical conditions. It encompasses various subspecialties, including general surgery, cardiothoracic surgery, orthopedic surgery, and more. Key functions include preoperative care, surgical procedures, and postoperative care, often involving multidisciplinary teams. Facilities feature advanced operating theaters, recovery rooms, and ICUs. The department prioritizes patient safety, effective outcomes, and continuous innovation in surgical techniques. It plays a critical role in delivering essential healthcare services.</p> }
                    </div>
                </div>

                </div>
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
                    <h2>Surgical Services</h2>
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
                  <a href="#">Preoperative Assessments</a>
                </h4>
                <p> 
                Diagnostic tests, physical exams, and consultations to prepare patients for surgery.
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
                    <a href="#">Surgical Procedures</a>
                  </h4>
                  <p>
                  Elective and emergency surgeries across various specialties (e.g., general, orthopedic, cardiothoracic).
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
                    <a href="#">Postoperative Care</a>
                  </h4>
                  <p>
                  Monitoring, pain management, and rehabilitation following surgery.
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
                    <a href="#">Minimally Invasive Surgery</a>
                  </h4>
                  <p>Techniques like laparoscopic and robotic surgery for reduced recovery times.
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
                    <a href="#">Trauma Surgery</a>
                  </h4>
                  <p>
                  Immediate surgical interventions for traumatic injuries.
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
                    <a href="#">Specialized Clinics</a>
                  </h4>
                  <p>
                  Services such as wound care, burn treatment, and reconstructive surgery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_heading end */}

      <div className="about_dermatology_section"  style={{backgroundColor: "light grey"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="laparoscopic_text_wrapper">
                <h2>Overview</h2>
                <img
                  src={Image2}
                  className="img-responsive"
                  alt="slider_img"
                />

                <p style={{textAlign:"justify"}}>
                The surgical department is a crucial division within a hospital dedicated to diagnosing, treating, and managing a variety of medical conditions through surgical interventions. It comprises several subspecialties, including general surgery, orthopedic surgery, cardiothoracic surgery, neurosurgery, pediatric surgery, plastic surgery, and vascular surgery. Each specialty focuses on specific areas of the body or types of conditions, allowing for targeted and expert care.
                Key services provided by the surgical department include preoperative assessments, where patients undergo diagnostic tests, physical exams, and consultations to ensure they are ready for surgery. The department performs both elective and emergency surgeries using state-of-the-art operating theaters equipped with advanced medical technology and instruments. Minimally invasive techniques, such as laparoscopic and robotic surgeries, are also available, offering patients reduced recovery times and minimized complications.
                Postoperative care is a significant component, involving monitoring patients as they recover from anesthesia and surgery, managing pain, and providing rehabilitation services to support full recovery. Specialized clinics within the department offer services such as wound care, burn treatment, and reconstructive surgery. The department emphasizes patient safety, effective surgical outcomes, and continuous innovation in surgical techniques. Multidisciplinary teams of surgeons, anesthesiologists, nurses, and other healthcare professionals work collaboratively to ensure comprehensive and high-quality patient care, making the surgical department integral to the overall healthcare system.

                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="benefits_accordion_wrapper">
                <h2>Benefits</h2>
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
                          Comprehensive Care
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
                         Our Surgical Department provides all-encompassing care, ensuring thorough assessments, personalized treatment plans, and holistic management of surgical conditions. From preoperative consultations to postoperative recovery, we prioritize comprehensive and continuous care for our patients.
                         </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftthree"
                          aria-expanded="false"
                        >
                          Expert Medical Team
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
                         Our surgical team consists of board-certified surgeons and experienced healthcare professionals dedicated to delivering the highest standard of care. Their expertise and ongoing education ensure the best possible outcomes for our patients.
                     </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftfour"
                          aria-expanded="false"
                        >
                          Advanced Technology and Treatments
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
                        We utilize state-of-the-art technology and innovative treatments to ensure accurate diagnoses and effective management. Our department offers the latest surgical techniques, including minimally invasive procedures, to enhance patient outcomes and recovery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLefttwo"
                          aria-expanded="false"
                        >
                          Patient Education and Support
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
                        We empower patients with comprehensive education and support, offering informative sessions and materials to help them understand their conditions and treatment options. Our ongoing monitoring and follow-up care ensure patients feel secure and well-informed throughout their surgical journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
        <div class="container" >
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper blue_wrapper">
                        <a href="#"><i class="flaticon-heart-outline-with-a-plus-sign-inside"></i></a>
                        <h4>Minimally Invasive Surgery</h4>
                        <p style={{textAlign:"justify"}}>
                        Minimally invasive surgical techniques to reduce recovery time and minimize complications, ensuring patients safety.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper pink_wrapper">
                        <a href="#"><i class="flaticon-heart-beat"></i></a>
                        <h4>Robotic Surgery</h4>
                        <p style={{textAlign:"justify"}}>
                        Robotic surgery utilizes advanced systems for precise, controlled procedures, enhancing surgical accuracy and speeding patient recovery.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper green_wrapper">
                        <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                        <h4>Emergency Surgery</h4>
                        <p style={{textAlign:"justify"}}>
                            Our department is equipped to handle urgent and emergency surgeries, providing immediate and critical care for trauma and other emergency conditions.
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
                    <h2>Laparoscopic Procedures</h2>
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
                      <a href="#"><img src="images/neurology/img-1.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Cholecystectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src="images/neurology/img-2.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Appendectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src="images/neurology/img-3.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Adrenalectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src="images/neurology/img-1.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Cholecystectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src="images/neurology/img-2.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Appendectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src="images/neurology/img-3.jpg" alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Adrenalectomy</a></h4>
                        <p>Praesent dapibus eleifend augue, egeten sollicitudin velit malesuada eu. Aliqu blandit, diam ac venenatis feugiat odio malesuada.</p>
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
                    <h4><a href="#">Total Knee Replacement </a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img blue">
                    <i class="flaticon-foot-side-view-outline" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Foot and ankle surgeries</a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img green">
                    <i class="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Total Hip Replacement</a></h4>
                    <p>This is Photoshop's version of Lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="department_image_slider">
                <h2>Orthopaedics Gallery</h2>
                <div class="owl_box">
                  <div class="med_slider_img">
                    <div class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="images/orthopaedics/slide1.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/orthopaedics/slide4.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/orthopaedics/slide3.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/orthopaedics/slide2.jpg" class="img-responsive" alt="story_img" />
                      </div>
                      <div class="item">
                        <img src="images/orthopaedics/slide4.jpg" class="img-responsive" alt="story_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

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
                    <h2> Surgical Specialist's</h2>
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
                  <h5>(Cardiothoracic Anesthesia, Critical Care)</h5>
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
                  <h5>(Pediatric Anesthesia, Pain Management)</h5>
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
                  <h5>(Obstetric Anesthesia, Regional Anesthesia)</h5>
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
                    <a href="#">Dr. Justin Jackson</a>
                  </h4>
                  <h5>(General Anesthesia, Neuroanesthesia)</h5>
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
                    <a href="#">Dr. Dia Josaf</a>
                  </h4>
                  <h5>(General Anesthesia, Neuroanesthesia)</h5>
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
                    <a href="#">Dr. Mark Jacobson</a>
                  </h4>
                  <h5>(Obstetric Anesthesia, Regional Anesthesia)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>

    </>
  );
};
