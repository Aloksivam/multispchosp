import React from "react";
import Admission from "./assets/images/Dischargeinfo/admission.jpg";
import AdmissionProcess from "./assets/images/Dischargeinfo/admission_process.jpg";
import Discharge from "./assets/images/Dischargeinfo/discharge.jpg";

export const Dischargeinfo = () => {
  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_neurology_section about_Anesthesiology_section">
        <a href="/" id="return-to-top">
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
                  <h1 className="med_bottompadder20_4">
                    Admission Process and Charges
                  </h1>
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
                  The admission process at our facility is streamlined to ensure
                  a hassle-free experience for our patients and their families.
                  Upon arrival, patients are required to complete a registration
                  form and provide valid identification. A preliminary medical
                  assessment will be conducted to determine the appropriate
                  level of care.
                </p>
                <p>
                  Different charges may apply depending on the type of room
                  selected, the severity of the condition, and any additional
                  services required. Patients will receive a detailed breakdown
                  of the charges at the time of admission.
                </p>
              </div>
              <h2 className="admission-heading">Admission Process</h2>
              <ol>
                <li>
                  <strong>Registration:</strong> Upon arrival, patients are
                  required to complete a registration form with personal and
                  insurance details. Valid identification and insurance
                  information should be provided at this time.
                </li>
                <li>
                  <strong>Medical Assessment:</strong> A preliminary medical
                  assessment will be conducted by our healthcare professionals
                  to determine the appropriate level of care and the specific
                  needs of the patient.
                </li>
                <li>
                  <strong>Room Allocation:</strong> Based on the medical
                  assessment and patient preference, a suitable room will be
                  allocated. We offer a range of rooms from general wards to
                  private suites, each with different charges.
                </li>
                <li>
                  <strong>Consent Forms:</strong> Patients or their guardians
                  will be required to sign consent forms for treatment and
                  procedures, acknowledging their understanding and agreement.
                </li>
                <li>
                  <strong>Admission Confirmation:</strong> Once all formalities
                  are completed, the patient will be officially admitted, and
                  the treatment plan will commence.
                </li>
              </ol>
              <span>
                <img src={AdmissionProcess} alt="line" className="admission" />
              </span>

              <h3 className="admission-heading">Room and Service Charges</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Charge per Day (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>General Ward</td>
                    <td>4170</td>
                  </tr>
                  <tr>
                    <td>Shared Room</td>
                    <td>8350</td>
                  </tr>
                  <tr>
                    <td>Private Room</td>
                    <td>12530</td>
                  </tr>
                  <tr>
                    <td>Deluxe Suite</td>
                    <td>16715</td>
                  </tr>
                </tbody>
              </table>
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
                    <h2>Services and Test Charges</h2>
                  </div>

                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-12">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Service/Test</th>
                              <th>Charge (₹)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Blood Test</td>
                              <td>500</td>
                            </tr>
                            <tr>
                              <td>X-Ray</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>MRI Scan</td>
                              <td>2000</td>
                            </tr>
                            <tr>
                              <td>CT Scan</td>
                              <td>4000</td>
                            </tr>
                            <tr>
                              <td>Ultrasound</td>
                              <td>3500</td>
                            </tr>
                            <tr>
                              <td>ECG</td>
                              <td>1500</td>
                            </tr>
                            <tr>
                              <td>Physical Therapy Session</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>Consultation Fee</td>
                              <td>2000</td>
                            </tr>
                          </tbody>
                        </table>
                        <img src={Admission} alt="line" className="picture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
              <img src={Discharge} alt="line" className="discharge" />
              </div>
            </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="benefits_accordion_wrapper">
          <h2>Charge Settlement and Discharge Process</h2>
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
                    Settlement of Charges
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
                    Prior to discharge, all outstanding charges must be settled.
                    Our billing department will provide a comprehensive
                    statement detailing all services availed during the hospital
                    stay. Payments can be made via cash, credit/debit card, or
                    through applicable insurance coverage.
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
                    Discharge Summary
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
                    After settling charges, a discharge summary will be
                    provided. This includes medical instructions, follow-up
                    appointments, and any necessary prescriptions. Our staff
                    will ensure that patients and their families fully
                    understand the post-discharge care instructions.
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
                    Follow-Up Care
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
                    We emphasize the importance of follow-up care to ensure the
                    patient's continued recovery and health. Patients will
                    receive detailed instructions on when and how to schedule
                    follow-up appointments.
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
    </>
  );
};
