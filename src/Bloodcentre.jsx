import React from 'react';

const BloodCentre = () => {
  return (
    <>

      {/* Title Section */}
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Blood Centre</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Our Blood Centre */}
      <div className="team_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">About Our Blood Centre </h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                <p>
                  Our blood centre is dedicated to providing safe and reliable blood transfusions.
                  We collect, test, and distribute blood to hospitals and clinics in the area.
                  Blood groups are classified based on the presence or absence of antigens and antibodies in the blood.
                  The main blood groups are A, B, AB, and O.
                </p>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="neurology_image_wrapper">
                <img className="img-fluid" src="images/bloodcentre/img11.jpg" alt="blood-centre-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">Blood Group Systems</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                <p>Understanding blood groups is crucial for safe medical practices and emergency care.
                </p>
              </div>
            </div>
          </div>
          <div class="container my-5">

            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100 border-0 shadow-sm bg-light bg-opacity-50">
                  <div class="card-body">
                    <h4 class="card-title text-dark fw-bolder">ABO Blood Group System</h4>
                    <ul class="list-unstyled">
                      <li><strong>A:</strong> Donates to A, AB; receives from A, O.</li>
                      <li><strong>B:</strong> Donates to B, AB; receives from B, O.</li>
                      <li><strong>AB:</strong> Universal recipient; donates to AB.</li>
                      <li><strong>O:</strong> Universal donor; receives from O.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100 border-0 shadow-sm bg-light bg-opacity-50">
                  <div class="card-body">
                    <h4 class="card-title text-dark fw-bolder">Rh Blood Group System</h4>
                    <ul class="list-unstyled">
                      <li><strong>Rh+:</strong> Has the Rh antigen. Can receive Rh+ and Rh- blood.</li>
                      <li><strong>Rh-:</strong> Lacks the Rh antigen. Can receive only Rh- blood.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100 border-0 shadow-sm bg-light bg-opacity-50">
                  <div class="card-body">
                    <h4 class="card-title text-dark fw-bolder">Combine ABO & Rh Systems</h4>
                    <ul class="list-unstyled">
                      <li><strong>A+:</strong> A antigens present, Rh antigen present.</li>
                      <li><strong>O-:</strong> No A or B antigens, no Rh antigen (universal donor).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* List of Blood Centres */}
      <div className="about_us_section_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">LIST OF BLOOD CENTRES</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                <p>Here are some blood centers in Delhi along with their addresses.<br></br>These blood centers are well-known and provide essential blood donation and transfusion services in Delhi.</p>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="abt_txt">
                <h3><b>BLOOD CENTRES</b></h3>
              </div>
              <div>
                <table className="table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Serial Number</th>
                      <th>Blood Centre Name</th>
                      <th>Address</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>AIIMS Blood Bank</td>
                      <td>Ansari Nagar, New Delhi - 110029</td>
                      <td>+91-11-26594438</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Rotary Blood Bank</td>
                      <td>56-57, Tughlakabad Institutional Area, New Delhi - 110062</td>
                      <td>+91-11-29871896</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Lions Blood Bank</td>
                      <td>Mata Sundri Road, New Delhi - 110002</td>
                      <td>+91-11-23232429</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Apollo Hospital Blood Bank</td>
                      <td>Apollo Hospitals, Sarita Vihar, Mathura Road, New Delhi - 110076</td>
                      <td>+91-11-26925858</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Indian Red Cross Society Blood Bank</td>
                      <td>1, Red Cross Road, New Delhi - 110001</td>
                      <td>+91-11-23711551</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Safdarjung Hospital Blood Bank</td>
                      <td>Safdarjung Hospital, Ring Road, New Delhi - 110029</td>
                      <td>+91-11-26167706</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="about_btn">
                <ul>
                  <li><a href="#">read more</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Blood Centres Section */}
      <div className="our_Services_3 med_toppadder100_3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper_3 text-center med_bottompadder40_3 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder20_3">Blood Centres Gallery</h1>
                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20_3" />
                <p>Here are some images of blood centers, each providing essential blood donation and transfusion services in various locations across the city.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="images/bloodcentre/img2.jpg" className="img-fluid" alt="Blood Centre 1" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="images/bloodcentre/img7.jpg" className="img-fluid" alt="Blood Centre 2" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="images/bloodcentre/img3.jpg" className="img-fluid" alt="Blood Centre 3" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BloodCentre;
