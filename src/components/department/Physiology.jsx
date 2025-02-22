import React from "react";
import Image1 from '../../assets/images/department/Physiology/Image1.png';
import Image2 from '../../assets/images/department/Physiology/image2.jpg';
import gastro from '../../assets/images/department/Physiology/gastro.jpg';
import endo from '../../assets/images/department/Physiology/endo.jpg';
import renal from '../../assets/images/department/Physiology/renal.jpg';
import cardio from '../../assets/images/department/Physiology/cardio.jpg';
import respi from '../../assets/images/department/Physiology/respi.jpg';
import neu from '../../assets/images/department/Physiology/neu.jpg';

export const Physiology= () => {
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
                  <h1>PHYSIOLOGY DEPARTMENT</h1>
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
                        {/*<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, a enim id quas, eos quis dolorum atque ex quaerat molestias architecto, distinctio quia laboriosam incidunt! Doloremque tempora ipsa vel? Ipsam.
                        </p> */}
                    </div>
                </div>
                
            </div>
        </div>
            <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                  <div class="about_heading_wraper_4  text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                        <h1 class="med_bottompadder20_4">About Physiology</h1>
                        < img  style={{height:100,width:100}} src={Image1} alt="line" class="med_bottompadder20_4" />
                        {<p>
                          A physiology department studies the functions and mechanisms of living systems, from cells to whole organisms. Key areas include human physiology, neurophysiology, and cellular physiology. It combines teaching and research, focusing on how organ systems, tissues, and cells function, and how these processes are altered in diseases. The department is crucial for advancing medical and biological understanding.
                        </p> }
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
                    <h2>Physiology Services</h2>
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
                  <a href="#">Diagnostic Testing</a>
                </h4>
                <p> 
                 ECGs, spirometry, and exercise stress tests for diagnosing and monitoring conditions.
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
                    <a href="#">Clinical Consultations</a>
                  </h4>
                  <p>
                   Expert evaluations and treatment plans for disorders like heart disease and respiratory issues.
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
                    <a href="#">Research Services</a>
                  </h4>
                  <p>
                   Facilities and expertise for physiological research, including lab studies and clinical trials.
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
                    <a href="#">Exercise Physiology Services</a>
                  </h4>
                  <p>
                    Exercise programs for health, rehabilitation, and performance, including VO2 max testing.
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
                    <a href="#">Education and Training</a>
                  </h4>
                  <p>
                    Training for students in physiological principles through lectures and lab experience.
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
                    <a href="#">Health and Wellness Programs</a>
                  </h4>
                  <p>
                   Programs for overall health improvement, like stress management, nutritional counseling, and lifestyle modifications.
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
                 A physiology department focuses on understanding the functions and mechanisms of living organisms, covering a range of topics from cellular processes to whole-body functions. Key areas of study include human physiology, which examines the operation of systems such as cardiovascular, respiratory, nervous, muscular, and endocrine; comparative physiology, which explores physiological processes across different species to understand evolutionary adaptations; and cellular and molecular physiology, which investigates the functions and interactions of cellular components like ion channels, receptors, and signaling pathways. Additional areas include exercise physiology, which looks at the effects of physical activity on body functions, health, and performance; neurophysiology, which explores the functioning of the nervous system, including brain activities and sensory-motor pathways; and pathophysiology, which focuses on how physiological processes are altered in diseases and disorders. The department combines education and research, training undergraduate, graduate, and medical students while conducting studies that advance medical and biological knowledge.
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
                        Comprehensive care in physiology integrates advanced diagnostics (e.g., ECGs, spirometry), personalized treatment plans, and multidisciplinary collaboration to manage and improve cardiovascular, respiratory, and metabolic health. It includes rehabilitation, patient education on lifestyle modifications, and ongoing monitoring to optimize health outcomes and prevent future complications.
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
                      An expert medical team in physiology comprises specialists across disciplines such as cardiology, pulmonology, endocrinology, and neurology, working collaboratively to provide advanced diagnostic evaluations, personalized treatment plans, and comprehensive care for conditions affecting cardiovascular, respiratory, metabolic, and neurological systems. They integrate cutting-edge research and technology to ensure precise diagnosis, effective treatment, and ongoing monitoring for optimal patient health outcomes.
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
                        Advanced technology in physiology includes MRI, CT scans, and robotic surgery for precise diagnostics and minimally invasive treatments. Personalized medicine through genetic testing and AI-driven analytics optimizes therapies, while telemedicine and remote monitoring enhance accessibility and continuous patient care, revolutionizing treatment approaches.
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
                        Patient education and support in physiology focuses on empowering individuals with clear information about their conditions, treatment options, and self-care practices. It includes teaching practical skills for managing health through medication adherence, dietary adjustments, and exercise routines, supplemented by emotional and social support to enhance overall well-being and treatment outcomes.
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
                        <h4>Cardiovascular Treatments</h4>
                        <p style={{textAlign:"justify"}}>
                          Procedures such as angioplasty, stent placement, and cardiac rehabilitation for heart disease.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper pink_wrapper">
                        <a href="#"><i class="flaticon-heart-beat"></i></a>
                        <h4>Respiratory Therapies</h4>
                        <p style={{textAlign:"justify"}}>
                           Treatments like bronchoscopy, pulmonary rehabilitation, and management of conditions like asthma and COPD.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper green_wrapper">
                        <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                        <h4>Exercise Therapy</h4>
                        <p style={{textAlign:"justify"}}>
                          Tailored exercise programs for rehabilitation, chronic disease management, and overall health improvement.
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
                    <h2>Physiology Procedures</h2>
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
                      <a href="#"><img src={cardio} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Cardiovascular</a></h4>
                        <p>
                          Angioplasty, stent placement, echocardiography, and electrophysiology studies.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={respi} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Respiratory</a></h4>
                        <p>Bronchoscopy, pulmonary function tests, and thoracentesis.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={endo} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Endocrine</a></h4>
                        <p>Glucose tolerance,thyroid function,insulin sensitivity tests.

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
                      <a href="#"><img src={neu} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Neurological</a></h4>
                        <p>Electroencephalography (EEG), electromyography (EMG), and nerve conduction studies.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={gastro} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Gastrointestinal</a></h4>
                        <p> Endoscopy, colonoscopy, and motility studies.It involve diagnostic and therapeutic interventions within the digestive tract.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={renal} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Renal </a></h4>
                        <p> Dialysis, renal biopsy, and urine analysis and encompass diagnostic,therapeutic interventions related to kidneys,urinary system.</p>
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
                    <h4><a href="#">Metabolic Disorder Management</a></h4>
                    <p> Interventions for diabetes, obesity, and thyroid disorders, including medication management and lifestyle changes.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img blue">
                    <i class="flaticon-foot-side-view-outline" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_blue">
                    <h4><a href="#">Rehabilitation Services</a></h4>
                    <p> Comprehensive plans for recovery from surgery, injury, or chronic conditions, including physical therapy and occupational therapy.</p>
                  </div>
                </div>
                <div class="orthopaedics_icon_wrapper">
                  <div class="orthopaedics_icon_img green">
                    <i class="flaticon-hip-twist-with-stretched-leg-position" aria-hidden="true"></i>
                  </div>
                  <div class="orthopaedics_icon_content icon_content_green">
                    <h4><a href="#">Nutritional Counseling</a></h4>
                    <p>Dietary planning and intervention for managing conditions like hypertension, diabetes, and obesity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="department_image_slider">
                <h2>Physiology Gallery</h2>
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
                    <h2> Physiology Specialist's</h2>
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
