import React from 'react';
import './alumnicell.css'; // Assuming you will create a CSS file for styling

const alumniData = [
    {
        name: 'Dr. John Doe',
        achievement: 'Cardiologist at Mayo Clinic',
        year: '2018',
        image: 'pp.jpg', // Ensure the image is placed in the correct folder
        linkedin: 'https://www.linkedin.com/in/johndoe/' // Add the LinkedIn profile URL here
    },
    {
        name: 'Dr. Jane Smith',
        achievement: 'Neurosurgeon at Johns Hopkins Hospital',
        year: '2019',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/janesmith/'
    },
    {
        name: 'Dr. Mike Johnson',
        achievement: 'Pediatrician at Boston Children\'s Hospital',
        year: '2020',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/mikejohnson/'
    },
    {
        name: 'Dr. Emily Brown',
        achievement: 'Research Scientist at National Institutes of Health (NIH)',
        year: '2021',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/emilybrown/'
    },
    {
        name: 'Dr. John Doe',
        achievement: 'Cardiologist at Mayo Clinic',
        year: '2018',
        image: 'pp.jpg', // Ensure the image is placed in the correct folder
        linkedin: 'https://www.linkedin.com/in/johndoe/' // Add the LinkedIn profile URL here
    },
    {
        name: 'Dr. Jane Smith',
        achievement: 'Neurosurgeon at Johns Hopkins Hospital',
        year: '2019',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/janesmith/'
    },
    {
        name: 'Dr. Mike Johnson',
        achievement: 'Pediatrician at Boston Children\'s Hospital',
        year: '2020',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/mikejohnson/'
    },
    {
        name: 'Dr. Emily Brown',
        achievement: 'Research Scientist at National Institutes of Health (NIH)',
        year: '2021',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/emilybrown/'
    },
    {
        name: 'Dr. John Doe',
        achievement: 'Cardiologist at Mayo Clinic',
        year: '2018',
        image: 'pp.jpg', // Ensure the image is placed in the correct folder
        linkedin: 'https://www.linkedin.com/in/johndoe/' // Add the LinkedIn profile URL here
    },
    {
        name: 'Dr. Jane Smith',
        achievement: 'Neurosurgeon at Johns Hopkins Hospital',
        year: '2019',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/janesmith/'
    },
    {
        name: 'Dr. Mike Johnson',
        achievement: 'Pediatrician at Boston Children\'s Hospital',
        year: '2020',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/mikejohnson/'
    },
    {
        name: 'Dr. Emily Brown',
        achievement: 'Research Scientist at National Institutes of Health (NIH)',
        year: '2021',
        image: 'pp.jpg',
        linkedin: 'https://www.linkedin.com/in/emilybrown/'
    }
    
];

const AlumniCell = () => {
    return (
        <div className="alumni-cell">
              <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Alumni Cell</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_head">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder10_4">DEEPMIND HOSPITAL Alumni Cell</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
            <h2>Alumni Achievements</h2>
            <p>
                Our alumni have made significant contributions in various fields. Below is a list of some of our most
                distinguished graduates and their accomplishments.
            </p>
            <p>
                We are proud of our alumni who have excelled in their careers and continue to contribute to society. Their
                achievements inspire current students to strive for excellence.
            </p>
            
            <div className="alumni-list">
                {alumniData.map((alumni, index) => (
                    <div className="alumni-item" key={index}>
                        {/* <img 
                            src={require(`./assets/images/Academics/AlmuniCell/${alumni.image}`).default} 
                            
                            alt={`${alumni.name} - ${alumni.achievement}`} 
                            className="alumni-image" 
                        /> */}
                        <img src={require(`./assets/images/Academics/AlmuniCell/${alumni.image}`)} alt={alumni.name} className="alumni-image" />
                        <h2>{alumni.name}</h2>
                        <p><strong style={{color:'green'}}>Achievement:</strong> {alumni.achievement}</p>
                        <p><strong style={{color:'green'}}>Year of Passing:</strong> {alumni.year}</p>
                        <p>
                            <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                Connect on LinkedIn
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlumniCell;
