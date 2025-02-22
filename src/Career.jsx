import React from "react";
import "./App.css";

const Career = () => {
  return (
    <>
     <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont"> 
                    <div className="col-lg-4 align-right">
                      <h1>Career portal</h1>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>          
      
      <section className="career-section">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                    <div className="about_heading_wraper_4  text-center med_bottompadder10 wow" data-wow-delay="0.5s">
                        <h1 className="med_bottompadder20_4">Joining process</h1>
                        <strong className="wltxt p-3">
                      Welcome to our career portal! Explore current job openings and find the position that best fits your skills and career goals.
                       Apply directly through our portal and join our team of dedicated professionals.
                      </strong>
                    </div>
                </div>
               <div className="career-box">
                    <div className="text">
                        <h3>As an Intern</h3>
                        <p>Join our internship program and gain valuable experience in your field of study.</p>
                        <ul>
                          <li>Nursing assistants intern</li>
                          <li>Medical receptionists intern</li>
                          <li></li>
                        </ul>
                    </div>
                    <img src="/images/Academics/intern.jpg" alt="Intern" />
               </div>
                       
                <div className="career-box">
                    <div className="text">
                        <h3>As a Full-Time Fresher</h3>
                        <p>Kickstart your career with us as a full-time fresher and grow with our team.</p>
                        <ul>
                          <li>Dental assistant</li>
                          <li>Physician assistant</li>
                          <li>Physical therapists</li>
                        </ul>
                    </div>
                    <img src="/images/Academics/fresher.jpg" alt="Full Time Fresher" />
                </div>
                       
                <div className="career-box">
                    <div className="text">
                        <h3>As an Experienced Professional</h3>
                        <p>Bring your expertise and experience to our team and contribute to our success.</p>
                        <ul>
                          <li>Surgical technologist</li>
                          <li>Psychologist</li>
                          <li>Physical therapists</li>
                        </ul>
                    </div>
                    <img src="/images/Academics/prof.jpg" alt="Experienced" />
                </div>
                        <button className="apply-button">Apply Now</button>
            </section>


     <section className="work-culture p-7 rounded-lg shadow-lg">
        <h2 className="med_bottompadder30">
          Work Culture and HR Team Contact Details
        </h2>
        <p>
          We are committed to maintaining a positive and inclusive work
          environment. Our team enjoys a range of benefits including flexible
          working hours, health insurance, and opportunities for professional
          development.
        </p>
        <div className="mt-9">
          <h3 className="mb-1">HR Team Contact Details</h3>
          <p>
            If you have questions or need further information, please reach out
            to our HR team:
          </p>
          <ul className="contact-list">
            <li>Email: hr@gmail.com</li>
            <li>Phone: +91234567889</li>
            <li>
              LinkedIn:{" "}
              <a href="#" className="text-blue-501 underline">
                Company LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Career;