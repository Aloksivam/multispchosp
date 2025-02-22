import React from "react";
import Inquiry from "./Inquiry";

const Helpdesk = () => {
  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Help Desk</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_orthopaedics_section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="benefits_accordion_wrapper">
                <h2 className="mt-5">FAQs</h2>
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
                          What are the hospital's visiting hours?
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
                          Visiting hours vary by department, but generally, they
                          are from 9:00 AM to 9:00 PM. Specific visiting times
                          for ICU and maternity wards may differ. Please check
                          with the specific department for detailed information.
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
                          How can I schedule an appointment?
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
                          Appointments can be scheduled online through our
                          website, via our mobile app, or by calling our
                          appointment hotline at [hospital phone number].
                          Walk-ins are also welcome, but scheduling in advance
                          is recommended to reduce wait times.
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
                          Does the hospital accept my insurance?
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
                          We accept most major insurance plans. Please contact
                          our billing department at [billing phone number] or
                          check our website for a full list of accepted
                          insurance providers. We also offer financial
                          counseling to assist with any billing or insurance
                          questions.
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
                          What should I bring with me for my hospital stay?
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
                          Please bring a valid ID, insurance card, current
                          medications, and any relevant medical records.
                          Personal items such as toiletries, comfortable
                          clothing, and a list of emergency contacts are also
                          recommended. Avoid bringing valuables.
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
                          href="#collapseEightLeftThree"
                          aria-expanded="false"
                        >
                          Are there any dining options available for visitors?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftThree"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          Yes, our hospital has a cafeteria offering a variety
                          of meals and snacks, as well as vending machines
                          available 24/7. Additionally, there are nearby
                          restaurants and cafes within walking distance.
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
                          href="#collapseEightLeftFour"
                          aria-expanded="false"
                        >
                          What services are available for non-English speaking
                          patients?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftFour"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          We offer translation services for a variety of
                          languages to ensure clear communication and
                          understanding. Please notify us in advance if you
                          require these services, so we can make the necessary
                          arrangements.
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
                          href="#collapseEightLeftFive"
                          aria-expanded="false"
                        >
                          What safety measures are in place for infection
                          control?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftFive"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          Our hospital follows strict infection control
                          protocols, including regular sanitation, use of
                          personal protective equipment (PPE), and social
                          distancing practices. We have implemented enhanced
                          measures for COVID-19, such as screening at entrances,
                          visitor restrictions, and dedicated isolation areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src="images/faq/01.webp" alt="faq" className="p-5" />
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
                  <div className="section_heading">
                    <h2>Services We Provide</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="wrapper">
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Emergency Care</a>
                  </h4>
                  <p>
                  Our 24/7 emergency department is equipped to handle all types of medical emergencies, from minor injuries to life-threatening conditions. With state-of-the-art facilities and a team of experienced emergency physicians, nurses, and specialists, we provide rapid and effective treatment to ensure the best possible outcomes for our patients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="wrapper">
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Maternity Services:</a>
                  </h4>
                  <p>
                  We offer comprehensive maternity care, including prenatal, childbirth, and postnatal services. Our experienced obstetricians, midwives, and nurses provide personalized care in a comfortable and supportive environment. Our facilities include modern labor and delivery rooms, a neonatal intensive care unit (NICU), and a variety of prenatal and parenting classes to support families every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
              <div className="wrapper">
                <div className="department_icon_content">
                  <h4>
                    <a href="#">Outpatient Services:</a>
                  </h4>
                  <p>
                  Our outpatient department offers a variety of services for patients who do not require an overnight stay. This includes specialist consultations, diagnostic tests, minor surgical procedures, and rehabilitation therapies. With convenient appointment scheduling and a focus on patient-centered care, our outpatient services are designed to provide efficient and high-quality care for a wide range of medical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_head">
          <div className="container d-flex justify-content-center flex-column align-items-center">
            <div className="row mb-5">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div className="section_heading">
                    <h2>Need More Help?</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Inquiry/>
    </>
  );
};

export default Helpdesk;
