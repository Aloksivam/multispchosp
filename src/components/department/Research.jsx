import React from "react";
import Image1 from '../../assets/images/department/Research/image1.png';
import Image2 from '../../assets/images/department/Research/Image2.jpg';
import qua from '../../assets/images/department/Research/qua.jpg';
import consent from '../../assets/images/department/Research/consent.jpg';
import col from '../../assets/images/department/Research/col.avif';
import Image3 from '../../assets/images/department/Research/image3.jpg';
import Ethics from '../../assets/images/department/Research/ethics.jpg';
import management from '../../assets/images/department/Research/management.jpg';

export const Research= () => {
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
                  <h1>RESEARCH DEPARTMENT</h1>
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
                        <h1 class="med_bottompadder20_4">About Research</h1>
                        < img  style={{height:100,width:100}} src={Image1} alt="line" class="med_bottompadder20_4" />
                        {<p>
                          The research department is dedicated to advancing knowledge through rigorous investigation and innovative methodologies. It fosters an environment of intellectual curiosity and collaborative inquiry among researchers and scholars. By leveraging state-of-the-art facilities and diverse expertise, the department aims to address complex problems and contribute to academic and societal progress. Its commitment to excellence drives impactful discoveries and groundbreaking developments across various fields.
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
                    <h2>Research Services</h2>
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
                  <a href="#">Consulting and Advisory</a>
                </h4>
                <p> 
                Expert guidance on research design, methodology, and analysis.
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
                    <a href="#">Data Collection and Analysis</a>
                  </h4>
                  <p>
                  Comprehensive support for gathering and interpreting data using advanced tools.
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
                    <a href="#">Grant Writing and Funding Support</a>
                  </h4>
                  <p>
                  Assistance in identifying funding opportunities and crafting competitive grant proposals.
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
                    <a href="#">Workshops and Training</a>
                  </h4>
                  <p>
                  Educational programs to enhance research skills and knowledge across various disciplines.
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
                    <a href="#">Publication Assistance</a>
                  </h4>
                  <p>
                  Support with manuscript preparation, editing, and submission to academic journals.
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
                    <a href="#">Collaborative Projects</a>
                  </h4>
                  <p>
                  Facilitation of interdisciplinary research collaborations and partnerships with industry and academic institutions.
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
                The research department is a hub of intellectual pursuit and innovation, dedicated to advancing knowledge across diverse fields. It fosters a vibrant environment where curiosity and rigorous inquiry thrive, encouraging researchers to push the boundaries of their disciplines. Equipped with state-of-the-art facilities and cutting-edge technology, the department supports a wide range of research activities, from fundamental studies to applied research with real-world impact.Our team of expert researchers and scholars collaborates across disciplines, leveraging their diverse expertise to address complex challenges and drive progress. The department is committed to providing comprehensive services, including consulting, data analysis, grant writing support, and publication assistance, ensuring researchers have the resources they need to succeed. Through workshops, training programs, and collaborative projects, we enhance research skills and facilitate meaningful partnerships with industry and academic institutions.By prioritizing excellence and innovation, the research department contributes to significant discoveries and developments, striving to make a lasting impact on both academia and society.
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
                        Comprehensive care is a holistic approach that integrates physical, emotional, and social aspects of well-being, providing continuous and coordinated healthcare. It emphasizes personalized care, preventive measures, and interdisciplinary collaboration to improve overall health outcomes.
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
                      An expert medical team consists of highly skilled and specialized healthcare professionals dedicated to providing top-quality patient care. Their collaborative approach ensures comprehensive treatment, leveraging each member's expertise for the best health outcomes.
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
                        Advanced technology and treatment involve the use of cutting-edge medical equipment and innovative therapeutic methods to diagnose, manage, and cure diseases. This approach enhances precision, effectiveness, and patient outcomes, staying at the forefront of medical advancements.
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
                        Patient education and support involve providing individuals with the knowledge, resources, and guidance needed to manage their health effectively. This empowers patients to make informed decisions, adhere to treatment plans, and maintain a proactive role in their healthcare journey.
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
                        <h4>Diagnosis</h4>
                        <p style={{textAlign:"justify"}}>
                        Identifying the medical condition through tests and evaluations.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper pink_wrapper">
                        <a href="#"><i class="flaticon-heart-beat"></i></a>
                        <h4>Medication</h4>
                        <p style={{textAlign:"justify"}}>
                        Prescribing and managing medications to address symptoms and underlying causes.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper green_wrapper">
                        <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                        <h4>Monitoring</h4>
                        <p style={{textAlign:"justify"}}>
                        Regularly assessing progress and adjusting the treatment plan as needed.
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
                    <h2>Research Procedures</h2>
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
                      <a href="#"><img src={Image3} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Study Protocol Development</a></h4>
                        <p>
                        Creating detailed plans for research studies, including objectives, methodology, and ethical considerations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={Ethics} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Ethics Review and Approval</a></h4>
                        <p>Submitting research proposals to an Institutional Review Board or Ethics Committee to ensure compliance with ethical standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={consent} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Recruitment and Consent</a></h4>
                        <p> Recruiting participants and obtaining informed consent to ensure they understand the study's purpose and their rights.

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
                      <a href="#"><img src={qua} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Compliance and Quality Assurance</a></h4>
                        <p>Regularly auditing,monitoring to ensure regulations, policies,research protocols for maintaining research integrity and quality.
                       </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={col} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Data Collection</a></h4>
                        <p>  Implementing procedures for collecting clinical data, patient information, or other research-related data while maintaining confidentiality and accuracy.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="thumbnail">
                      <a href="#"><img src={management} alt="Image" />
                      </a>
                      <div class="caption text-center">
                        <h4><a href="#">Data Management and Analysis </a></h4>
                        <p>Organizing, storing, and analyzing data using appropriate statistical methods to draw meaningful conclusions.</p>
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
                <h2>Research Gallery</h2>
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
                    <h2>Research Specialist's</h2>
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
