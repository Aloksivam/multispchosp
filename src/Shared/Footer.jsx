import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="container">
          <div className="box_1_wrapper">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="address_main">
                  <div className="footer_widget_add">
                    <a href="#">
                      <img
                        src="images/index_2_logo.png"
                        className="img-responsive"
                        alt="footer_logo"
                      />
                    </a>
                    <p>
                      Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auctor.
                    </p>
                    <a href="#">
                      Read More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="footer_box_add">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span>Address : </span>-512/fonia,canada
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span>Call us : </span>+61 5001444-122
                      </li>
                      <li>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <a href="#">
                          <span>Email :</span> dummy@example.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*footer_1*/}
          <div className="booking_box_div">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="footer_main_wrapper">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 gallary_response  d-md-none d-lg-block">
                      <div className="footer_heading">
                        <h1 className="med_bottompadder10">Instagram</h1>
                        <img
                          src="images/line.png"
                          className="img-responsive"
                          alt="img"
                        />
                      </div>
                      <div className="footer_gallary">
                        <div className="row">
                          <ul>
                            <li>
                              <img
                                src="images/footer_1.jpg"
                                alt="img"
                                className="img-responsive"
                              />
                            </li>
                            <li>
                              <img
                                src="images/footer_2.jpg"
                                alt="img"
                                className="img-responsive"
                              />
                            </li>
                            <li>
                              <img
                                src="images/footer_3.jpg"
                                alt="img"
                                className="img-responsive"
                              />
                            </li>
                            <li>
                              <img
                                src="images/footer_4.jpg"
                                alt="img"
                                className="img-responsive"
                              />{" "}
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/footer_5.jpg"
                                alt="img"
                                className="img-responsive"
                              />{" "}
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/footer_6.jpg"
                                alt="img"
                                className="img-responsive"
                              />{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 respons_footer_nav d-none d-sm-none d-md-block">
                      <div className="footer_heading footer_menu">
                        <h1 className="med_bottompadder10">Userful</h1>
                        <img
                          src="images/line.png"
                          className="img-responsive"
                          alt="img"
                        />
                      </div>
                      <div className="footer_ul_wrapper">
                        <ul>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />{" "}
                            <a href="#">home</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <a href="#">about us</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <a href="#">services</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <a href="#">doctors</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <a href="#">blog</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            <a href="#">contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 contact_last_div">
                      <div className="footer_heading">
                        <h1 className="med_bottompadder10">Opening Hours</h1>
                        <img
                          src="images/line.png"
                          className="img-responsive"
                          alt="img"
                        />
                      </div>
                      <div className="footer_cnct">
                        <p>
                          Monday – Friday ------<span>09:00-17:00</span>
                        </p>
                        <p>
                          Saturday -----------------<span>09:30-17:00</span>
                        </p>
                        <p>
                          Sunday -------------------<span>10:30-18:00</span>
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="footer_botm_wrapper">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="bottom_footer_copy_wrapper">
                        <span>
                          Copyright © 2024 - <a href="#">DEEPMIND</a>Designed by{" "}
                          <a href="https://www.instagram.com/kumar_alok_sinha/">Alok</a>
                        </span>
                      </div>
                      <div className="footer_btm_icon">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-youtube-play"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="up_wrapper">
              <a href="javascript:" id="return-to-top">
                <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
