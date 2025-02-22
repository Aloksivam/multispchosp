import React from "react";
import image1 from '../../assets/images/department/dermatology/image1.png';
import image2 from '../../assets/images/department/dermatology/image2.jpg';

export const Dermatology= () => {
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
                  <h1>DERMATOLOGY DEPARTMENT</h1>
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
                        <h1 class="med_bottompadder20_4">About dermatology</h1>
                        < img  style={{height:100,width:100}} src={image1} alt="line" class="med_bottompadder20_4" />
                        {<p>
                          The Dermatology Department specializes in diagnosing, treating, and preventing skin, hair, and nail disorders. Our expert team of board-certified dermatologists offers comprehensive care, including medical, cosmetic, and surgical services. We address conditions like acne, eczema, psoriasis, and skin cancer, utilizing advanced technology and innovative treatments. Patient education and personalized care plans are integral to our approach, ensuring optimal outcomes and enhanced well-being for all our patients. </p> }
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
                    <h2>Dermatology Services</h2>
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
                  <a href="#">Knee Replacement</a>
                </h4>
                <p> 
                    Surgical procedure to replace a damaged knee joint with an artificial implant, improving mobility and reducing pain.
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
                    <a href="#">Foot and Ankle Surgeries</a>
                  </h4>
                  <p>
                    A range of surgical interventions to address deformities, injuries, and conditions affecting the foot and ankle, enhancing function and comfort.
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
                    <a href="#">Hip Replacement</a>
                  </h4>
                  <p>
                  Surgery to replace a worn-out or damaged hip joint with a prosthetic implant, restoring movement and relieving pain.
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
                    <a href="#">Shoulder Replacement</a>
                  </h4>
                  <p>Surgical replacement of the shoulder joint with an artificial component, aimed at improving range of motion and reducing pain.

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
                    <a href="#">Sports Person Screening</a>
                  </h4>
                  <p>
                  Comprehensive health evaluations for athletes, including physical exams and diagnostic tests to assess fitness and prevent injuries.
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
                    <a href="#">Knee Arthroscopy</a>
                  </h4>
                  <p>
                  A minimally invasive surgical procedure using a small camera to diagnose and treat problems inside the knee joint, promoting quicker recovery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_two">
                  <i className="flaticon-knee" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Acne Treatment</a>
                  </h4>
                  <p>
                  Comprehensive care to manage and reduce acne breakouts using topical medications, oral medications, and other therapies.
                   </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_three">
                  <i className="flaticon-knee" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Skin Allergy Testing</a>
                  </h4>
                  <p>
                  Identifying allergens responsible for skin reactions through patch tests and other diagnostic methods to guide effective treatment plans.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_four">
                  <i className="flaticon-knee" aria-hidden="true" />  
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Chemical Peels</a>
                  </h4>
                  <p>
                    Procedures that use chemical solutions to exfoliate and improve the texture and appearance of the skin.
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
                  src={image2}
                  className="img-responsive"
                  alt="slider_img"
                />

                <p style={{textAlign:"justify"}}>
                The Dermatology Department is dedicated to diagnosing, treating, and preventing skin, hair, and nail disorders.
                Our team of board-certified dermatologists and specialized healthcare professionals provides high-quality, patient-centered care. 
                We offer services ranging from medical dermatology to cosmetic and surgical procedures. We address common conditions like acne, 
                eczema, psoriasis, and rosacea, as well as complex diseases such as autoimmune skin disorders and infections. Our experts conduct 
                thorough skin cancer screenings, ensuring early detection and effective treatment.
                Cosmetic dermatology services include Botox, dermal fillers, laser therapy, and chemical peels to help patients achieve their 
                aesthetic goals. We also offer advanced laser treatments for unwanted hair, sun damage, and vascular lesions. In surgical 
                dermatology, we perform procedures like mole removals, cyst excisions, and Mohs micrographic surgery with minimal scarring. 
                Our department uses state-of-the-art technology to deliver cutting-edge treatments and therapies.
                We emphasize patient education, developing personalized treatment plans tailored to individual needs. 
                Our commitment to research and continuing education keeps us at the forefront of dermatological advancements. 
                Overall, we strive to enhance our patients' health and well-being through exceptional care, compassionate service, 
                and dedication to excellence.
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
                        Our Dermatology Department offers a holistic approach to the diagnosis, treatment, and management of skin, hair, and nail disorders. By providing comprehensive care, we ensure that all aspects of a patient's condition are addressed, leading to better health outcomes. Our services include thorough assessments using advanced diagnostic tools, personalized treatment plans that consider each patient's unique needs and conditions, and a multidisciplinary approach through collaboration with other specialists to provide integrated care.
                        
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
                        Our team of board-certified dermatologists and experienced healthcare professionals is dedicated to providing the highest standard of care. The specialized knowledge and extensive experience in managing skin conditions enable our team to offer the best possible treatment. Continuous education ensures our professionals stay current with the latest medical advancements. Our patient-centered care approach prioritizes patient comfort and well-being, making sure each patient feels supported and understood throughout their treatment journey.
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
                        We utilize state-of-the-art technology and innovative treatments to ensure accurate diagnoses and effective management of skin conditions. Our department boasts cutting-edge diagnostics, providing access to the latest imaging and laboratory technologies for precise assessment. Modern therapies and the newest treatment protocols and medications are implemented to offer the most effective care. Minimally invasive procedures are available, which reduce recovery time and improve patient outcomes, ensuring that our patients receive the most advanced and efficient care possible.
                       
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
                          Empowering patients with knowledge and support is a cornerstone of our department. We provide comprehensive patient education programs, offering informative sessions and materials to help patients understand their conditions and treatment options. Support groups give patients opportunities to connect with others facing similar health challenges, fostering a sense of community and mutual support. Ongoing monitoring and follow-up are provided to adjust treatment plans as needed and ensure optimal health management, helping patients feel secure and informed about their health journey.
                       
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
                        <h4>Laser Therapy</h4>
                        <p style={{textAlign:"justify"}}>Our laser therapy effectively treat a variety of skin conditions such as acne scars, sun damage, unwanted hair, using state-of-the-art technology for optimal results.</p>
                        </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper pink_wrapper">
                        <a href="#"><i class="flaticon-heart-beat"></i></a>
                            <h4>Chemical Peels</h4>
                        <p style={{textAlign:"justify"}}>Chemical peels improve skin texture and tone by removing damaged outer layers, reducing wrinkles, fine lines, and age spots, and promoting a rejuvenated appearance.</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div class="procedure_wrapper green_wrapper">
                        <a href="#"><i class="flaticon-lifeline-in-a-heart-outline"></i></a>
                            <h4>Botox and Fillers</h4>
                        <p style={{textAlign:"justify"}}>Our Botox and dermal filler treatments reduce the appearance of wrinkles and add volume to facial features, offering a more youthful and refreshed look.</p>
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
                    <h2>Dermatology Procedures</h2>
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
                <h2>Dermatology Gallery</h2>
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
                    <h2> Dermatology Specialist's</h2>
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
