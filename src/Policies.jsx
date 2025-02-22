import React from "react";
import logo from "./assets/images/policies/logo.png";
import PolicyImage from "./assets/images/policies/PolicyImage.jpg";
import InternPolicy from "./assets/images/policies/intern_policy.jpg";
import FresherPolicy from "./assets/images/policies/fresher_policy.jpg";
import ExperiencePolicy from "./assets/images/policies/professional_policy.jpg";

const Policies = () => {
  return (
    <>
      <div class="med_tittle_section">
        <div class="med_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="med_tittle_cont_wrapper">
                <div class="med_tittle_cont">
                  <h1>Hospital Policies</h1>
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
                <div
                  className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown"
                  data-wow-delay="0.5s"
                >
                  <h1 className="med_bottompadder20_4"> About Hospital Policies</h1>
                  <img src={logo} alt="line" class="med_bottompadder20_4" />
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
                  Welcome to our hospital's policy page. Here, we outline the
                  rules and guidelines that ensure the safety, comfort, and
                  well-being of our patients, visitors, and staff. Our policies
                  are designed to provide a clear understanding of our
                  procedures and to promote a harmonious environment.
                  <br></br>
                  Our hospital's policies are designed to maintain a safe,
                  respectful, and efficient environment for everyone. Below, we
                  outline key policies that all patients, visitors, and staff
                  must adhere to in order to ensure the best possible care and
                  experience.
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
                    <h2>Key Hospital Policies</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="department_icon_wrapper">
                <div className="department_icon_img icon_one">
                  <i className="flaticon-knee" aria-hidden="true" />
                </div>
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Patient Confidentiality</a>
                  </h4>
                  <p>
                    We ensure that all patient information is kept confidential
                    and secure.
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
                    <a href="#">Visitor Regulations</a>
                  </h4>
                  <p>
                    Visiting hours are from 10 AM to 8 PM, and all visitors must
                    check in at reception.
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
                    <a href="#">Emergency Procedures</a>
                  </h4>
                  <p>
                    Comprehensive emergency procedures are in place for patient
                    and staff safety.
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
                    <a href="#">Infection Control</a>
                  </h4>
                  <p>
                    Our hospital follows strict infection control protocols to
                    prevent the spread of diseases.
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
                    <a href="#">Security Measures</a>
                  </h4>
                  <p>
                    We have security protocols in place to ensure the safety of
                    all individuals within the hospital.
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
                    <a href="#">Feedback and Complaints</a>
                  </h4>
                  <p>
                    We welcome feedback and have procedures in place to address
                    any complaints or concerns.
                  </p>
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
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div
                    className="section_heading wow fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    <h2>Additional Policies</h2>
                  </div>

                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Policy</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Smoking Policy</td>
                              <td>
                                Smoking is strictly prohibited within the
                                hospital premises.
                              </td>
                            </tr>
                            <tr>
                              <td>Medication Policy</td>
                              <td>
                                All medications must be administered by hospital
                                staff. Patients are not allowed to take
                                medications on their own.
                              </td>
                            </tr>
                            <tr>
                              <td>Discharge Policy</td>
                              <td>
                                Patients will be provided with a discharge
                                summary and instructions for home care before
                                leaving the hospital.
                              </td>
                            </tr>
                            <tr>
                              <td>Personal Belongings Policy</td>
                              <td>
                                The hospital is not responsible for personal
                                belongings. Patients are advised to keep their
                                valuables at home.
                              </td>
                            </tr>
                            <tr>
                              <td>Electronic Devices Policy</td>
                              <td>
                                The use of electronic devices is allowed but
                                should not interfere with medical equipment or
                                disturb other patients.
                              </td>
                            </tr>
                            <tr>
                              <td>Noise Policy</td>
                              <td>
                                Maintaining a quiet environment is essential for
                                patient recovery. Visitors and patients are
                                requested to keep noise levels to a minimum.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={PolicyImage} alt="Additional Policies" className="privacy" />
      </div>

      <section
        className="team_wrapper med_toppadder100"
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">Hospital Policies</h1>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      {/* <img src="images/confidentiality_icon.png" alt="Confidentiality" className="img-responsive" /> */}
                    </div>
                    <div className="cat_img">
                      {/* <img src="images/icon_policy1.png" alt="Confidentiality Policy" className="img-responsive" /> */}
                    </div>
                    <div className="cat_txt">
                      <h1>Cell Phones</h1>
                      <p>
                      Cell phones and other wireless communications devices are allowed in most areas of our hospitals, 
                      except in specific patient care areas. 
                      </p>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      {/* <img src="images/visitor_icon.png" alt="Visitor Policy" className="img-responsive" /> */}
                    </div>
                    <div className="cat_img">
                      {/* <img src="images/icon_policy2.png" alt="Visitor Policy" className="img-responsive" /> */}
                    </div>
                    <div className="cat_txt">
                      <h1>Visitation Policy</h1>
                      <p>
                      We may restrict visitation privileges to ensure the health and safety of patients, staff and visitors.
                      </p>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      {/* <img src="images/infection_control_icon.png" alt="Infection Control" className="img-responsive" /> */}
                    </div>
                    <div className="cat_img cat_img_3">
                      {/* <img src="images/icon_policy3.png" alt="Infection Control Policy" className="img-responsive" /> */}
                    </div>
                    <div className="cat_txt">
                      <h1>Patient Complaints</h1>
                      <p>
                      You have the right to express concerns or complaints about your care with the assurance that the quality 
                      of your care or future access to care will not be compromised.
                      </p>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="career-section">

  <div className="career-box">
    <div className="text">
      <h3>Internship Program Policy</h3>
      <p>Our internship program is designed to provide students and recent graduates with practical experience in their chosen field. The policy outlines eligibility, application procedures, and the terms of the internship.</p>
      <ul>
        <li>Eligibility Criteria</li>
        <li>Application Process</li>
        <li>Internship Duration and Terms</li>
      </ul>
    </div>
    <img src={InternPolicy} alt="Intern Policy" />
  </div>

  <div className="career-box">
    <div className="text">
      <h3>Fresher Recruitment Policy</h3>
      <p>Our fresher recruitment policy ensures a fair selection process for recent graduates seeking full-time positions. This policy details the recruitment stages, evaluation criteria, and onboarding procedures.</p>
      <ul>
        <li>Selection Process</li>
        <li>Evaluation Criteria</li>
        <li>Onboarding and Training</li>
      </ul>
    </div>
    <img src={FresherPolicy} alt="Fresher Recruitment Policy" />
  </div>

  <div className="career-box">
    <div className="text">
      <h3>Experienced Professional Hiring Policy</h3>
      <p>This policy governs the recruitment of experienced professionals, focusing on ensuring that the hiring process is thorough and transparent. It includes guidelines on experience requirements, interviews, and contract terms.</p>
      <ul>
        <li>Experience and Skill Requirements</li>
        <li>Interview Process</li>
        <li>Contract and Employment Terms</li>
      </ul>
    </div>
    <img src={ExperiencePolicy} alt="Experienced Professional Policy" />
  </div>
</section>

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

export default Policies;
