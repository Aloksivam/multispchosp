import React from 'react';

const Faculty = () => {
  const cardStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '9px',
    height: '450px',
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const frameStyle = {
    border: '3px solid #ccc',
    padding: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  const facultyData = {
    MBBS: [
      {
        name: 'Dr. Alice Thompson',
        qualification: 'MBBS, MD (General Medicine)',
        experience: '15 years',
        imgSrc: 'images/founders/1.jpg',
      },
      {
        name: 'Dr. Jane Doe',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '12 years',
        imgSrc: 'images/founders/2.jpg',
      },
      {
        name: 'Dr. Robert Johnson',
        qualification: 'MBBS, MD (Pediatrics)',
        experience: '10 years',
        imgSrc: 'images/founders/3.jpg',
      },
      {
        name: 'Dr. Emily White',
        qualification: 'MBBS, MD (Dermatology)',
        experience: '8 years',
        imgSrc: 'images/founders/4.jpg',
      },
    ],
    ANM: [
      {
        name: 'Prof. Samuel Green',
        qualification: 'M.Sc. Nursing (Community Health)',
        experience: '18 years',
        imgSrc: 'images/founders/8.jpg',
      },
      {
        name: 'Ms. Olivia Brown',
        qualification: 'B.Sc. Nursing, M.Sc. Nursing (Pediatrics)',
        experience: '10 years',
        imgSrc: 'images/founders/7.jpg',
      },
      {
        name: 'Ms. Laura Blue',
        qualification: 'B.Sc. Nursing, Diploma in ANM',
        experience: '8 years',
        imgSrc: 'images/founders/6.jpg',
      },
      {
        name: 'Ms. Grace Turner',
        qualification: 'M.Sc. Nursing (Obstetrics)',
        experience: '12 years',
        imgSrc: 'images/founders/5.jpg',
      },
    ],
    GNM: [
      {
        name: 'Dr. John Smith',
        qualification: 'PhD in Nursing, M.Sc. Nursing (Mental Health)',
        experience: '14 years',
        imgSrc: 'images/founders/4.jpg',
      },
      {
        name: 'Ms. Emily Clark',
        qualification: 'B.Sc. Nursing, GNM',
        experience: '9 years',
        imgSrc: 'images/founders/1.jpg',
      },
      {
        name: 'Prof. Michael Brown',
        qualification: 'M.Sc. Nursing (Obstetrics and Gynecology)',
        experience: '22 years',
        imgSrc: 'images/founders/3.jpg',
      },
      {
        name: 'Ms. Sophia Johnson',
        qualification: 'B.Sc. Nursing, M.Sc. Nursing (Cardiac Care)',
        experience: '7 years',
        imgSrc: 'images/founders/2.jpg',
      },
    ],
    'B.Sc. Nursing': [
      {
        name: 'Dr. Sarah Black',
        qualification: 'PhD in Nursing, M.Sc. Nursing (Medical-Surgical)',
        experience: '20 years',
        imgSrc: 'images/founders/5.jpg',
      },
      {
        name: 'Prof. David White',
        qualification: 'M.Sc. Nursing (Critical Care)',
        experience: '19 years',
        imgSrc: 'images/founders/6.jpg',
      },
      {
        name: 'Ms. Amanda Blue',
        qualification: 'B.Sc. Nursing, M.Sc. Nursing (Pediatrics)',
        experience: '16 years',
        imgSrc: 'images/founders/7.jpg',
      },
      {
        name: 'Dr. Rachel Green',
        qualification: 'PhD in Nursing, M.Sc. Nursing (Community Health)',
        experience: '22 years',
        imgSrc: 'images/founders/8.jpg',
      },
    ],
  };

  return (
    <div>
      {/* Header Section */}
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Faculty Members</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Faculty Members</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Faculty Section */}
        <div className="container ">
        <div className="row">
            <div className="col-12">
            <div style={{marginTop: '20px'}}>
                <h2 style={{ color: 'black', fontSize: '2rem',}}>Our Faculty</h2>
            </div>
            <p>
                Our institution is proud to be home to a distinguished team of medical professionals dedicated to providing exceptional patient care and advancing the field of medicine. Our faculty members are renowned experts in their respective specialties, bringing a wealth of knowledge and experience to our patients. 

                Committed to academic excellence, our faculty are actively involved in research, teaching, and community outreach. They are passionate about staying at the forefront of medical advancements and sharing their expertise with future generations of healthcare providers. 

                With a patient-centric approach, our faculty members strive to create a compassionate and supportive environment for all those we serve.
            </p>
            </div>
        </div>
        </div>


      {/* Faculty Sections */}
      <div className="container mt-4">
        {Object.keys(facultyData).map((course, idx) => (
          <div key={idx} className="mb-5">
            <h2 style={{ color: 'black', fontSize: '2rem'}}>{course}</h2>
            <div className="row">
              {facultyData[course].map((faculty, index) => (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                  <div style={cardStyle}>
                    <img src={faculty.imgSrc} alt={faculty.name} className="card-img-top" style={frameStyle} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: 'black', fontSize: '1.2em' }}>{faculty.name}</h5>
                      <p className="card-text"><strong>Qualification:</strong> {faculty.qualification}</p>
                      <p className="card-text"><strong>Experience:</strong> {faculty.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
