import React from 'react';
import './department.css'; // Assuming you have a CSS file for your styles

export const Department = () => {
  
  const departments = [
    {
        "title": "Pediatrics",
        "description": "Comprehensive medical care for infants, children, and adolescents."
      },
      {
        "title": "Gynaecology",
        "description": "Specialized care for women's health issues, including reproductive health and pregnancy."
      },
      {
        "title": "Dental Care",
        "description": "Full range of dental services, from routine check-ups to complex procedures."
      },
      {
        "title": "Eye Care",
        "description": "Comprehensive eye examinations and treatments for various eye conditions."
      },
      {
        "title": "ENT",
        "description": "Specialized care for ear, nose, and throat conditions and disorders."
      },
      {
        "title": "Cardiology",
        "description": "Comprehensive care for heart-related conditions and cardiovascular health."
      },
      {
        "title": "Neurology",
        "description": "Diagnosis and treatment of disorders of the nervous system, including brain and spine."
      },
      {
        "title": "Orthopedics",
        "description": "Treatment for musculoskeletal issues, including bones, joints, ligaments, and muscles."
      },
      {
        "title": "Laparoscopy",
        "description": "Minimally invasive surgical procedures using advanced laparoscopic techniques."
      },
      {
        "title": "Endocrinology",
        "description": "Diagnosis and treatment of hormonal disorders and gland-related issues."
      },
      {
        "title": "Nephrology",
        "description": "Comprehensive care for kidney-related conditions and diseases."
      },
      {
        "title": "Dermatology",
        "description": "Treatment and care for skin, hair, and nail conditions."
      }
  ];

  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Our Departments</h1>
                  <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Departments</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_wrapper med_toppadder100">
        <div className="container">
          <div className="row">
            {departments.map((dept, index) => (
              <div key={index} className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ${index % 3 === 0? 'd-none d-sm-none d-md-block' : ''}`}>
                <div className="cat_about ser_section department-container">
                  <div className="icon_wrapper">
                    <img src="images/icon1.png" alt="img" className="img-responsive" />
                  </div>
                  <div className="cat_img">
                    <img src="images/icon_2.png" alt="img" className="img-responsive" />
                  </div>
                  <div className="cat_txt">
                    <h1>{dept.title}</h1>
                    <p>{dept.description}</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
