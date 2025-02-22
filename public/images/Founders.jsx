import React from 'react';

const FounderMembers = () => {
  const cardStyle = {
    border: '2px solid #ccc',  // Border around each card
    borderRadius: '10px',      // Rounded corners
    padding: '9px',           // Space inside the card
   // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a lifted effect
    height: '450px',
    display: 'flex',
    backgroundColor: '#fff',   // White background for the card
    flexDirection: 'column',   // Column layout
    justifyContent: 'space-between', // Space between image and text
    height: '100%', 
  };

  const frameStyle = {
    border: '3px solid #ccc',  // Border around the image
    //borderRadius: '10px',      // Rounded corners for the image
    padding: '5px',            // Space between the image and the border
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for the image
    width: '100%',             // Image width
    height: 'auto',
    objectFit: 'cover',
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
                  <h1>Founder Members</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Founder Members</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders' Introduction Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div><h4>hi</h4></div>
            <p>
              Our hospital was founded by a group of visionary medical professionals dedicated to providing exceptional healthcare services to the community. Each founder, a leader in their respective field, shared a common goal: to create an institution that upholds the highest standards of medical excellence, compassion, and innovation. With a deep commitment to patient care and well-being, they envisioned a place where cutting-edge technology meets personalized care, ensuring every patient receives the best possible treatment. Guided by a mission to be a trusted healthcare partner, the hospital offers comprehensive, multidisciplinary services in a healing environment. The founders' dedication to continuous improvement, research, and education remains at the heart of our operations, as we strive to advance in medicine and contribute to the health and wellness of our community.
            </p>
          </div>
        </div>
      </div>

      {/* Founders' Photos and Descriptions Grid */}
      <div className="container mt-4">
        <div className="row">
          {[
            {
              name: 'Dr. Allen White',
              description: 'Cardiologist with 20 years of experience, specializing in advanced heart disease treatment.',
              imgSrc: 'images/founders/1.jpg',
            },
            {
              name: 'Dr. Jane Smith',
              description: 'Renowned neurologist, pioneering treatments for neurological disorders.',
              imgSrc: 'images/founders/2.jpg',
            },
            {
              name: 'Dr. Alan Brown',
              description: 'Orthopedic surgeon, expert in minimally invasive joint replacement techniques.',
              imgSrc: 'images/founders/3.jpg',
            },
            {
              name: 'Dr. Alex Harper',
              description: 'Pediatrician dedicated to improving child health outcomes through compassionate care.',
              imgSrc: 'images/founders/4.jpg',
            },
            {
              name: 'Dr. Coleen Green',
              description: 'Oncologist with a focus on personalized cancer treatment plans.',
              imgSrc: 'images/founders/5.jpg',
            },
            {
              name: 'Dr. Sarah Black',
              description: 'Endocrinologist known for her work in managing complex hormonal disorders.',
              imgSrc: 'images/founders/6.jpg',
            },
            {
              name: 'Dr. Robert Blue',
              description: 'Pulmonologist with expertise in respiratory diseases and critical care medicine.',
              imgSrc: 'images/founders/7.jpg',
            },
            {
              name: 'Dr. Mark Grey',
              description: 'Dermatologist specializing in advanced skin treatments and cosmetic procedures.',
              imgSrc: 'images/founders/8.jpg',
            },
          ].map((founder, index) => (
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
              <div style={cardStyle}>
                <img src={founder.imgSrc} alt={founder.name} className="card-img-top" style={frameStyle} />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'black', fontSize: '1'}}>{founder.name}</h5>
                  <p className="card-text">{founder.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderMembers;
