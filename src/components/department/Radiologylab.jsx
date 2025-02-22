import React from 'react'
import './Radiologylab.css'

const Radiologylab = () => {
  return (
    <>
      <div class="med_tittle_section">
        <div class="med_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="med_tittle_cont_wrapper">
                <div class="med_tittle_cont">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div class="team_heading_wrapper med_bottompadder40">
                <h1 class="med_bottompadder20">About Our Radiology Lab</h1>
                <img src="images/Icon_team.png" alt="line" class="med_bottompadder20" />
                <p>Welcome to the Radiology Lab at DeepMind Hospital. Our lab is equipped with state-of-the-art technology to provide the highest quality imaging services.
                  <br></br>Radiology labs utilize advanced imaging techniques to visualize the inside of the human body. These images are crucial for diagnosing medical conditions, guiding treatment plans, and monitoring the progress of diseases.</p>
                <br></br>
                <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                  <div class="neurology_image_wrapper">
                    <img class="img-responsive" src="images/radiologylab/radiology7.jpg" alt="radiology-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about_us_section_2">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div class="team_heading_wrapper med_bottompadder40">
                <h1 class="med_bottompadder20">RADIOLOGY TESTS</h1>
                <img src="images/Icon_team.png" alt="line" class="med_bottompadder20" />
                <p>Radiology tests, such as X-rays, CT scans, MRI scans, ultrasound, and mammography, use different <br></br>technologies to image the body for diagnosis and monitoring.</p>
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="abt_txt">
                <h3><b>LIST OF RADIOLOGY TESTS</b></h3>
              </div>
              <div>
                <table className="radiology-table">
                  <thead>
                    <tr>
                      <th>Serial Number</th>
                      <th>Test Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>X-Ray</td>
                      <td>A quick and painless test for imaging bones.</td>
                      <td>₹750</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>MRI</td>
                      <td>Detailed imaging using magnetic fields and radio waves.</td>
                      <td>₹3750</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CT Scan</td>
                      <td>Cross-sectional body imaging with X-rays from different angles.</td>
                      <td>₹2250</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Ultrasound</td>
                      <td>High-frequency sound waves for internal imaging.</td>
                      <td>₹1125</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Mammography</td>
                      <td>Low-dose X-rays for early breast cancer detection.</td>
                      <td>₹1500</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>PET Scan</td>
                      <td>Functional imaging to reveal tissue and organ functions.</td>
                      <td>₹6000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="about_btn">
                <ul>
                  <li><a href="#">read more</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="our_Services_3 med_toppadder100_3">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div class="team_heading_wrapper_3 text-center med_bottompadder40_3 wow fadeInDown" data-wow-delay="0.5s" >
                <h1 class="med_bottompadder20_3">Radiology Tests Offered</h1>
                <img src="images/Icon_team.png" alt="line" class="med_bottompadder20_3" />
                <p>Our radiology services include ultrasound for real-time imaging, mammography for breast cancer screening, CT scans for detailed cross-sectional images,
                  <br></br>MRI for comprehensive body imaging, and X-rays for visualizing bones and organs. These tests provide essential insights for accurate diagnosis and treatment planning.</p>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="ourservices_slider_wrapper_3">
              <div class="owl-carousel owl-theme owl-loaded owl-drag">
                <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item cloned" ><div class="item">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-block d-lg-block">
                      <div class="hs_lest_news_box_wrapper img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology1.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">X Ray</a></h2>
                          <p>X-ray uses radiation electromagnetic to capture images of bones and organs.</p>
                          <tr>
                            <th>Process </th>
                            <td>Uses quick and painless procedure</td>
                          </tr>
                          <tr>
                            <th>Duration </th>
                            <td>A few minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4  col-lg-4 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                      <div class="hs_lest_news_box_wrapper  img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology4.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">MRI </a></h2>
                          <p>Uses magnetic fields and radio waves to produce detailed body images.</p>
                          <tr>
                            <th>Process:</th>
                            <td>Uses strong magnetic fields and radio waves</td>
                          </tr>
                          <tr>
                            <th>Duration:</th>
                            <td> 30-60 minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4  col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="hs_lest_news_box_wrapper  img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology5.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">CT Scan </a></h2>
                          <p>CT scan uses X-rays to create detailed cross-sectional images of the body.</p>
                          <tr>
                            <th>Process</th>
                            <td>Uses X-rays to make detailed pictures</td>
                          </tr>
                          <tr>
                            <th>Duration</th>
                            <td>10-30 minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                  </div><br></br>
                </div></div><div class="owl-item cloned" ><div class="item">
                  <div class="row">
                    <div class="col-xl-4  col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="hs_lest_news_box_wrapper  img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology2.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">Ultrasound </a></h2>
                          <p>Ultrasound uses sound waves to create real-time body images.</p>
                          <tr>
                            <th>Process</th>
                            <td>Uses high-frequency sound waves</td>
                          </tr>
                          <tr>
                            <th>Duration</th>
                            <td>15-45 minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-block">
                      <div class="hs_lest_news_box_wrapper  img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology6.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">Mammography </a></h2>
                          <p>
                            A mammography is a breast X-ray for detecting abnormalities.</p>
                          <tr>
                            <th>Process </th>
                            <td>Specific type of breast imaging for breast cancer.</td>
                          </tr>
                          <tr>
                            <th>Duration </th>
                            <td>A few minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-none d-sm-none d-md-none d-lg-block">
                      <div class="hs_lest_news_box_wrapper  img-effect zoom-slow">
                        <div class="hs_lest_news_img_wrapper">
                          <img src="/images/radiologylab/radiology3.jpg" alt="blog_img" />
                        </div>
                        <div class="lest_blog_wrapper">
                          <h2><a href="#">PET Scan </a></h2>
                          <p>uses radioactive tracers to visualize metabolic processes in the body.</p>
                          <tr>
                            <th>Process</th>
                            <td>Reveals how tissues and organs are functioning</td>
                          </tr>
                          <tr>
                            <th>Duration</th>
                            <td>30-60 minutes</td>
                          </tr><br></br>
                          <h4><a href="#">read more  <i class="fa fa-long-arrow-right"></i></a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Radiologylab;