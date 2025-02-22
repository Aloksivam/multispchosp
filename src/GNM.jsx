import React from "react";

const Gnm = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont ">
                  <h1>General Nursing and Midwifery (GNM)</h1>
                  <p className="gnm_subtitle text-center">
                  Comprehensive Nursing Education and Training
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About GNM Section */}
      <div className="about_gnm_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5 text-dark">
              <h2 className="text-dark">About GNM Program</h2>
              <p className="lead">
                The General Nursing and Midwifery (GNM) program is designed to
                provide students with the foundational knowledge and clinical
                skills necessary to excel in the field of nursing. This program
                covers a wide range of topics, including anatomy, physiology,
                patient care, and midwifery, preparing students to work in a
                variety of healthcare settings.
              </p>
              <p>
                Our GNM curriculum is tailored to meet the highest educational
                standards, ensuring that our graduates are well-equipped to meet
                the demands of the healthcare industry. Through a blend of
                classroom instruction and hands-on training, students gain
                practical experience that is crucial for their future careers.
              </p>
            </div>
            <div className="col-md-6 py-5 w-100 image">
              <img
                src="./images/gnm/nurshing.jpg"
                alt="Nursing Education"
                className="img-fluid rounded w-75"
                id="nurshing"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Info Section */}
      <div className="gnm_details_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="./images/gnm/hands_on_training.jpg"
                alt="Hands-On Training"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2 className="text-dark">Hands-On Training and Clinical Exposure</h2>
              <p>
                The GNM program emphasizes hands-on training and clinical
                exposure, allowing students to apply theoretical knowledge in
                real-world scenarios. Our students participate in clinical
                rotations at top healthcare facilities, where they learn from
                experienced professionals and interact with patients. This
                experience is invaluable in helping students develop the
                confidence and competence needed to provide high-quality care.
              </p>
              <p>
                Throughout the program, students are mentored by seasoned
                instructors who guide them through the complexities of patient
                care, ethics, and professional responsibility. By the time our
                students graduate, they are fully prepared to take on
                challenging roles in the healthcare industry.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8">
              <h2 className="text-dark">Comprehensive Curriculum</h2>
              <p>
                Our GNM curriculum includes courses on anatomy, physiology,
                pharmacology, and midwifery, providing a well-rounded education
                that prepares students for diverse roles in healthcare. Students
                also receive training in critical thinking, patient communication,
                and professional ethics, ensuring they are equipped to handle
                complex situations with confidence.
              </p>
              <p>
                We also offer specialized workshops and seminars on the latest
                advancements in nursing and midwifery, keeping our students at
                the forefront of medical knowledge. Our goal is to empower our
                graduates to lead and innovate in their chosen fields.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="./images/gnm/curriculum.jpg"
                alt="Curriculum"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta_section text-center">
        <div className="container">
          <h2 className="text-dark">Join the GNM Program</h2>
          <p>
            Ready to start your journey in nursing? Enroll in our GNM program
            today and take the first step toward a rewarding career.
          </p>
          <a href="#" className="btn btn-lg btn-primary">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gnm;
