import React from "react";

const Management = () => {


  return (
    <>
      <section className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1 className="mt-5">MANAGEMENT</h1>
                  <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team_wrapper med_toppadder100" style={{ marginBottom: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">Hospital Management Departments</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      <img src="images/icon1.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_img">
                      <img src="images/icon_11.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_txt">
                      <h1>Hospital Members</h1>
                      <p>Our dedicated hospital members, including doctors, nurses, and support staff, ensure top-notch healthcare services.</p>
                      <a href="#" onClick={(e) => e.preventDefault()}>Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      <img src="images/icon1.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_img">
                      <img src="images/icon_11.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_txt">
                      <h1>Emergency Ward</h1>
                      <p>The emergency ward provides immediate care for urgent and life-threatening conditions, available 24/7.</p>
                      <a href="#" onClick={(e) => e.preventDefault()}>Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="cat_about ser_section">
                    <div className="icon_wrapper">
                      <img src="images/icon1.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_img cat_img_3">
                      <img src="images/icon_11.png" alt="img" className="img-responsive" />
                    </div>
                    <div className="cat_txt">
                      <h1>Outpatient Department</h1>
                      <p>Our outpatient department offers various medical consultations, diagnostics, and treatments without requiring an overnight stay.</p>
                      <a href="#" onClick={(e) => e.preventDefault()}>Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_us_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_img">
                <img
                  src="images/single_doc.jpg"
                  alt="Medical team providing care"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 med_toppadder70" >
            <div className="abt_heading_wrapper abt_2_heading">
                <h1 className="med_bottompadder20">FROM OUR MANAGEMENT TEAM</h1>
              </div>
              <div className="abt_txt">
                <p >
                  Our management team is composed of experienced leaders committed to driving our hospital towards excellence. We focus on strategic initiatives that enhance patient care, operational efficiency, and staff development.
                </p>
                <p>
                  Our hospital envisions becoming a pioneer in healthcare innovation, prioritizing patient-centric care through advanced technologies and evidence-based practices. We aim to adapt our care model to meet the evolving needs of our community, ensuring accessible, affordable, and personalized healthcare for all. Committed to quality and safety, we strive to blend technology with compassion, aiming to redefine healthcare delivery and exceed expectations in clinical excellence and community engagement.
                </p>
              </div>              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Management;
