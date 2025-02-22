import React from 'react';

// Advisory board members data
const advisoryMembers = [
  { id: 1, name: 'Dr. Swapnil Sharma', qualification: 'MBA Hospital Admin [Pursuing]', experience: '10 years' },
  { id: 2, name: 'Col Gulshanlal Sachdev, Retd', qualification: 'MBBS MD [CHA]', experience: '15 years' },
  { id: 3, name: 'Ms Harpreet Kaur', qualification: 'PGDHM', experience: '8 years' },
  { id: 4, name: 'Dr PGP Kainikkara', qualification: 'MBBS', experience: '12 years' },
  { id: 5, name: 'Dr Parul Madan', qualification: 'Pursuing PGDHA', experience: '7 years' },
];

const Advisory = () => {
  return (
    <div>
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1 classname="med_bottompadder20_4">Advisory Board</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Advisory Board</li>
                  </ol>
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
                    <h2>Our Advisory Board</h2>
                  </div>
                  <p className="mt-4">
                    Our advisory board comprises experienced professionals dedicated to providing guidance and insights to ensure the highest standards of healthcare. Their diverse backgrounds and expertise contribute to the excellence of our medical services.
                  </p>
                  <div className="about_us_wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about_img">
                            <img
                              src="images/advisory.jpg"
                              alt="Medical team providing care"
                              className="img-responsive"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 med_toppadder70">
                          <div className="abt_heading_wrapper abt_2_heading">
                            <h1 className="med_bottompadder20">About Advisory Services</h1>
                            <img
                              src="images/line.png"
                              alt="decorative line"
                              className="med_bottompadder20"
                            />
                          </div>
                          <div className="abt_txt">
                            <h3>Expert Guidance with Strategic Insight</h3>
                            <p className="med_toppadder20">
                            Our Advisory Services are committed to delivering top-tier, personalized guidance designed to empower your organization. Our team of seasoned professionals works diligently to ensure you receive the most effective strategies tailored to your specific needs. We emphasize a holistic approach, blending cutting-edge expertise with a deep understanding of industry dynamics to provide comprehensive and compassionate counsel.
                            </p>
                          </div>
                          <div className="abt_heading_wrapper abt_2_heading_mn">
                            <h1 className="med_bottompadder20">Our Mission</h1>
                            <img
                              src="images/line.png"
                              alt="decorative line"
                              className="med_bottompadder20"
                            />
                          </div>
                          <div className="abt_txt">
                            <p className="med_toppadder20">
                              Our mission is to deliver exceptional advisory services that address the unique challenges and opportunities facing your organization. We are dedicated to enhancing your operational and strategic effectiveness through innovative solutions, expert insights, and a steadfast commitment to excellence.
                            </p>
                            <p className="med_toppadder10">
                            We strive to foster a collaborative environment where our clients can thrive. From the moment you engage with our services, our priority is to create a positive impact, continuously refining our offerings to meet and exceed the evolving needs of those we serve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Name</th>
                          <th>Educational Qualification</th>
                          <th>Year of Experience</th>
                        </tr>
                      </thead>
                      <tbody>
                        {advisoryMembers.map((member, index) => (
                          <tr key={member.id}>
                            <td>{index + 1}</td>
                            <td>{member.name}</td>
                            <td>{member.qualification}</td>
                            <td>{member.experience}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="laparoscopic_procedures_wrapper">
        <div className="laparoscopic_procedures_overlay"></div>
        <div className="section_head">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div className="section_heading">
                    <h2>Our Members</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="thumbnail">
                      <a href="#">
                        <img src="images/members/m2.jpg" alt="membersImage" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                      <a href="#">
                        <img src="images/members/m1.jpg" alt="membersImage" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                      <a href="#">
                        <img src="images/members/m3.jpg" alt="membersImage" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Advisory;
