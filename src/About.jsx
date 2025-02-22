import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <div className="row">
                    <div className="col-lg-8 col-sm-12">
                      <strong className="text-center wltxt">
                        Welcome to DeepMind Hospital, where excellence in
                        healthcare meets compassionate care. Our dedicated team
                        is committed to providing comprehensive,
                        patient-centered services with a focus on innovation and
                        holistic well-being. We strive to deliver the highest
                        quality care and ensure that every patient receives
                        personalized attention and support throughout their
                        journey with us.
                      </strong>
                    </div>
                    <div className="col-lg-4">
                      <h1>About Us</h1>
                      <ol className="breadcrumb">
                        <li>
                          <Link to="/home">Home</Link>
                        </li>
                        <li className="active">About Us</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* med_tittle_section End */}
      {/*about us section start*/}
      <div className="about_us_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_img">
                <img
                  src="images/about_us_bg.jpg"
                  alt="Medical team providing care"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 med_toppadder70">
              <div className="abt_heading_wrapper abt_2_heading">
                <h1 className="med_bottompadder20">About Our Hospital</h1>
                <img
                  src="images/line.png"
                  alt="decorative line"
                  className="med_bottompadder20"
                />
              </div>
              <div className="abt_txt">
                <h3>Compassionate Care with Advanced Medicine</h3>
                <p className="med_toppadder20">
                  Our hospital is dedicated to providing top-quality medical
                  care with a personal touch. Our team of highly skilled
                  professionals works tirelessly to ensure each patient receives
                  the best treatment possible. We believe in a holistic approach
                  to healthcare, combining state-of-the-art technology with
                  compassionate care.
                </p>
              </div>
              <div className="abt_chk med_toppadder30">
                <div className="content">
                  <ul>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />
                      <span>Comprehensive Health Services</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />
                      <span>24/7 Emergency Services</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />
                      <span>Advanced Dental Care</span>
                    </li>
                    <li>
                      <i className="fa fa-check-square-o" aria-hidden="true" />
                      <span>Around-the-Clock Patient Support</span>
                    </li>
                  </ul>
                </div>
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
                  Our mission is to provide exceptional healthcare services that
                  meet the needs of our community. We strive to enhance the
                  well-being of our patients through innovative medical
                  practices, compassionate care, and a commitment to excellence.
                </p>
                <p className="med_toppadder10">
                  We are dedicated to fostering a supportive environment for
                  patients and their families, ensuring a positive experience
                  from the moment they walk through our doors. Our hospital
                  continuously works to improve and expand our services to
                  better serve our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*about us section end*/}
      {/* counter wrapper start*/}
      <div className="counter_section">
        <div className="counter_overlay">
          <section
            className="counter-section section-padding"
            data-stellar-background-ratio="0.5"
          >
            <div className="container text-center">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="icon">
                    <a href="#">
                      <img
                        src="images/png/patient.png"
                        alt="img"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="count-description">
                    <span className="timer">2340</span>
                    <h5 className="con1">Satisfied Patients</h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="icon">
                    <a href="#">
                      <img
                        src="images/png/doctor.png"
                        alt="img"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="count-description">
                    <span className="timer">335</span>
                    <h5 className="con2">doctor's team</h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="icon">
                    <a href="#">
                      <img
                        src="images/png/success.png"
                        alt="img"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="count-description">
                    <span className="timer">1305</span>
                    <h5 className="con2">success mission</h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="icon">
                    <a href="#">
                      <img
                        src="images/png/heart.png"
                        alt="img"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="count-description">
                    <span className="timer">1540</span>
                    <h5 className="con4">Successfull Surgeries</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* counter wrapper end*/}
      {/* abt service wrapper start*/}
      <div className="abt_service_section med_toppadder100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="team_heading_wrapper med_bottompadder50">
                <h1 className="med_bottompadder20">
                  Delivering Excellence in Healthcare
                </h1>
                <img
                  src="images/Icon_team.png"
                  alt="Decorative Line"
                  className="med_bottompadder20"
                />
                <p>
                  At DeepMind Hospital, we are dedicated to providing the
                  highest standard of medical care with compassion and
                  expertise. Our team of skilled professionals is committed to
                  your well-being and strives to deliver personalized and
                  effective treatments for every patient.
                  <br />
                  With a focus on excellence and patient-centered care, we aim
                  to support your health journey every step of the way, ensuring
                  that you receive the best care possible.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="abt_left_section med_bottompadder20">
                <img
                  src="images/abt_img_bg.jpg"
                  alt="Hospital Interior"
                  className="img-responsive"
                />
              </div>
              <div className="abt_txt">
                <p>
                  Welcome to DeepMind Hospital, where compassionate care meets
                  advanced medical technology. Our mission is to provide
                  exceptional healthcare services with a commitment to improving
                  the well-being of our community. With a dedicated team of
                  healthcare professionals and state-of-the-art facilities, we
                  strive to deliver personalized and effective treatment for all
                  our patients.
                </p>
                {/* <p className="med_toppadder10">
                  At DeepMind Hospital, we believe in a patient-centered
                  approach, where every individual receives the highest standard
                  of care tailored to their unique needs. Our values of
                  integrity, excellence, and compassion guide us in everything
                  we do, ensuring that each patient’s journey with us is both
                  comforting and reassuring. We are proud to offer a
                  comprehensive range of medical services, from routine
                  check-ups to advanced surgical procedures, all delivered with
                  the utmost professionalism and empathy.
                </p> */}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="sidebar_wrapper sidebar_right_abt">
                <div className="accordionFifteen">
                  <div
                    className="panel-group"
                    id="accordionFifteenLeft"
                    role="tablist"
                  >
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading desktop">
                        <h4 className="panel-title">
                          <a
                            className="collapsed active"
                            data-toggle="collapse"
                            href="#collapseEightLeftone"
                            aria-expanded="false"
                          >
                            - Global Health Specialists
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLeftone"
                        className="panel-collapse collapse show"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="true"
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              Our team of Global Health Specialists is dedicated
                              to providing comprehensive and advanced medical
                              care to patients from around the world. We offer
                              specialized services that address a wide range of
                              health concerns, ensuring that each patient
                              receives personalized and effective treatment
                              tailored to their needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading horn">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEightLefttwo"
                            aria-expanded="false"
                          >
                            - Who Has Access to My Health Records
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLefttwo"
                        className="panel-collapse collapse"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="false"
                        style={{ height: 0 }}
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              Your health records are kept confidential and are
                              only accessible to authorized medical personnel
                              involved in your care. We adhere to strict privacy
                              laws and regulations to ensure that your
                              information is secure. If you have any concerns
                              about your health records, please contact our
                              administration team for further assistance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading bell">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEightLeftthree"
                            aria-expanded="false"
                          >
                            - Obstetrics & Gynecology Services
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLeftthree"
                        className="panel-collapse collapse"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="false"
                        style={{ height: 0 }}
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              Our Obstetrics & Gynecology department offers a
                              full range of services to support women's health
                              through all stages of life. From prenatal care to
                              menopause management, our experienced specialists
                              provide comprehensive and compassionate care
                              tailored to each patient's needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading bell">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEightLeftfour"
                            aria-expanded="false"
                          >
                            - Oral & Maxillofacial Surgery
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLeftfour"
                        className="panel-collapse collapse"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="false"
                        style={{ height: 0 }}
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              Our Oral & Maxillofacial Surgery department
                              provides expert care for a variety of conditions
                              affecting the mouth, jaw, and face. Our skilled
                              surgeons are equipped with the latest techniques
                              and technology to ensure the best outcomes for our
                              patients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading bell">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEightLeftfive"
                            aria-expanded="false"
                          >
                            - What to Expect During Your Hospital Stay
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLeftfive"
                        className="panel-collapse collapse"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="false"
                        style={{ height: 0 }}
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              During your stay at our hospital, you will receive
                              attentive and personalized care from our dedicated
                              medical team. We provide a comfortable and
                              supportive environment to help you recover. Our
                              staff is available to answer any questions you may
                              have and to ensure that your stay is as pleasant
                              as possible.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                    <div className="panel panel-default sidebar_pannel">
                      <div className="panel-heading bell">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEightLeftsix"
                            aria-expanded="false"
                          >
                            - Patient Feedback and Concerns
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEightLeftsix"
                        className="panel-collapse collapse"
                        data-parent="#accordionFifteenLeft"
                        aria-expanded="false"
                        style={{ height: 0 }}
                        role="tabpanel"
                      >
                        <div className="panel-body">
                          <div className="panel_cont">
                            <p>
                              We value your feedback and are committed to
                              addressing any concerns you may have. Please let
                              us know about your experience or any issues you
                              encounter during your care. Our goal is to
                              continually improve and provide the highest level
                              of service.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.panel-default */}
                  </div>
                  {/*end of /.panel-group*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* abt service wrapper end*/}
      {/*top service wrapper start*/}
      {/* counter wrapper start*/}
      <div className="top_service_wrapper">
        <div className="top_serv_overlay">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                <div
                  className="team_heading_wrapper med_bottompadder50 wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <h1 className="med_bottompadder20">
                    We provide top services
                  </h1>
                  <img
                    src="images/Icon_team.png"
                    alt="line"
                    className="med_bottompadder20"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="cat_about top_serv_txt">
                  <div className="icon_wrapper">
                    <img
                      src="images/icon1.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_img">
                    <img
                      src="images/icon_11.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_txt">
                    <h1>Heart Surgery</h1>
                    <p>
                      At DeepMind Hospital, our heart surgery program offers
                      advanced care with expert cardiologists and surgeons for
                      precise treatments and personalized recovery.
                    </p>
                    <a href="/services/heart-surgery">
                      Learn More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="cat_about top_serv_txt">
                  <div className="icon_wrapper">
                    <img
                      src="images/icon2.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_img">
                    <img
                      src="images/icon_2.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_txt">
                    <h1>Emergency Care</h1>
                    <p>
                      At DeepMind Hospital, our Emergency Care unit delivers
                      24/7 expert treatment with rapid assessment and
                      compassionate care for optimal outcomes.
                    </p>
                    <a href="/services/emergency-care">
                      Learn More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="cat_about top_serv_txt">
                  <div className="icon_wrapper">
                    <img
                      src="images/icon3.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_img cat_img_3">
                    <img
                      src="images/icon_3.png"
                      alt="img"
                      className="img-responsive"
                    />
                  </div>
                  <div className="cat_txt">
                    <h1>Dental Care</h1>
                    <p>
                      At DeepMind Hospital, our Dental Care offers comprehensive
                      services with advanced technology for personalized,
                      high-quality, and comfortable treatment.
                    </p>
                    <a href="/services/dental-care">
                      Learn More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top service wrapper end*/}
      {/*event wrapper start*/}
      {/* <div className="event_wrapper med_toppadder100 med_bottompadder70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="choose_heading_wrapper">
                <h1 className="med_bottompadder20">Upcoming Events</h1>
                <img
                  src="images/line.png"
                  alt="title"
                  className="med_bottompadder60"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="event_slider_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-star-o" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/event_1.jpg"
                              alt="Healthcare Event"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Join Us for a Life-Changing Event</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  California, UK
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                24 Nov, 2022
                              </li>
                            </ul>
                            <p>
                              Join us for an inspiring event dedicated to
                              advancing healthcare and community well-being.
                              This event will feature expert speakers,
                              interactive sessions, and opportunities to connect
                              with others passionate about making a difference.
                              Don’t miss out on this chance to be a part of
                              something meaningful!
                            </p>
                          </div>
                        </div>

                        <div className="img_section">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-star-o" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/event_2.jpg"
                              alt="Community Health Seminar"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Making a Difference Together</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  California, UK
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                24 Nov, 2022
                              </li>
                            </ul>
                            <p>
                              Join us for a transformative seminar focused on
                              advancing community health and well-being. This
                              event will feature leading experts, engaging
                              discussions, and networking opportunities to
                              connect with like-minded individuals. Be part of a
                              collaborative effort to drive positive change in
                              healthcare.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-star-o" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/event_3.jpg"
                              alt="Healthcare Awareness Event"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">
                                Empowering Health Through Community
                              </a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  California, UK
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                24 Nov, 2022
                              </li>
                            </ul>
                            <p>
                              Join us for a pivotal event focused on enhancing
                              healthcare awareness and community engagement.
                              This event features insightful talks, interactive
                              sessions, and opportunities to connect with
                              healthcare professionals and community leaders.
                              Together, we can make a significant impact on
                              health and wellness.
                            </p>
                          </div>
                        </div>

                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-star-o" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/event_4.jpg"
                              alt="Health and Wellness Expo"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Uniting for Better Health</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  California, UK
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                24 Nov, 2022
                              </li>
                            </ul>
                            <p>
                              Join us for the Health and Wellness Expo, where we
                              bring together community members, healthcare
                              professionals, and wellness advocates to share
                              knowledge and resources. Experience engaging
                              workshops, informative talks, and valuable
                              networking opportunities aimed at promoting health
                              and well-being for all.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="img_section">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-heartbeat" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/health_fair.jpg"
                              alt="Health Fair"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Annual Health Fair</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  Downtown Community Center
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                15 Aug, 2024
                              </li>
                            </ul>
                            <p>
                              Join us for our Annual Health Fair, where we offer
                              free screenings, health education, and interactive
                              activities for all ages. This event aims to
                              promote community wellness and provide valuable
                              health resources.
                            </p>
                          </div>
                        </div>
                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-heartbeat" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/charity_run.jpg"
                              alt="Charity Run"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Charity Run for Cancer Research</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  Riverside Park
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                10 Sep, 2024
                              </li>
                            </ul>
                            <p>
                              Participate in our Charity Run to support cancer
                              research. Your participation helps fund vital
                              research and provides support to those affected by
                              cancer. Join us in making a difference in the
                              fight against cancer.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-heartbeat" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/wellness_workshop.jpg"
                              alt="Wellness Workshop"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Wellness Workshop: Healthy Living</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  Health Education Center
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                5 Oct, 2024
                              </li>
                            </ul>
                            <p>
                              Attend our Wellness Workshop focused on healthy
                              living practices. Learn from health professionals
                              about nutrition, exercise, and mental well-being.
                              This workshop is designed to help you improve your
                              overall health and quality of life.
                            </p>
                          </div>
                        </div>
                        <div className="img_section d-none d-sm-none d-md-none d-lg-block">
                          <div className="icon_wrapper_event">
                            <i className="fa fa-heartbeat" aria-hidden="true" />
                          </div>
                          <div className="img_wrapper1">
                            <img
                              src="images/blood_donation_drive.jpg"
                              alt="Blood Donation Drive"
                              className="img-responsive"
                            />
                          </div>
                          <div className="event_icon1">
                            <h2>
                              <a href="#">Blood Donation Drive</a>
                            </h2>
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  />
                                  Main Hospital Lobby
                                </a>
                              </li>
                              <li>
                                <i
                                  className="fa fa-calendar-o"
                                  aria-hidden="true"
                                />
                                22 Nov, 2024
                              </li>
                            </ul>
                            <p>
                              Contribute to saving lives by participating in our
                              Blood Donation Drive. Every donation can make a
                              significant impact on someone’s life. Join us in
                              this critical effort to support our community's
                              health.
                            </p>
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
      </div> */}
      {/* event wrapper end*/}
      {/*testimonial wrapper start*/}
      {/* <div className="testimonial_wrapper med_toppadder100">
        <div className="test_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="test_heading_wrapper">
                <h1 className="med_bottompadder20">
                  What Our Patients Are Saying
                </h1>
                <img
                  src="images/line.png"
                  alt="Decorative Line"
                  className="med_bottompadder60"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="test_slider_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="t_icon_wrapper">
                      <div className="t_client_cont_wrapper2">
                        <p>
                          “The care I received at DeepMind Hospital was
                          exceptional. From the moment I walked in, the staff
                          made me feel comfortable and well cared for. The
                          doctors were attentive and explained every step of my
                          treatment. I am grateful for their support and
                          expertise.”
                        </p>
                        <div className="client_img_abt">
                          <img
                            className="img-circle"
                            src="images/testi_img_2.png"
                            alt="Patient"
                            style={{ width: 90, height: 90 }}
                          />
                          <h5>- Emily Johnson</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="t_icon_wrapper">
                      <div className="t_client_cont_wrapper2">
                        <p>
                          “I had a wonderful experience at DeepMind Hospital.
                          The staff were incredibly caring and went above and
                          beyond to ensure I was comfortable during my stay.
                          Their professionalism and kindness made a significant
                          difference in my recovery.”
                        </p>
                        <div className="client_img_abt">
                          <img
                            className="img-circle"
                            src="images/testi_img_1.png"
                            alt="Patient"
                            style={{ width: 90, height: 90 }}
                          />
                          <h5>- Michael Smith</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="t_icon_wrapper">
                      <div className="t_client_cont_wrapper2">
                        <p>
                          “I can't thank DeepMind Hospital enough for the
                          outstanding care I received. The medical team was not
                          only skilled but also compassionate. They took the
                          time to answer all my questions and made sure I was
                          fully informed about my treatment.”
                        </p>
                        <div className="client_img_abt">
                          <img
                            className="img-circle"
                            src="images/testi_img_3.png"
                            alt="Patient"
                            style={{ width: 90, height: 90 }}
                          />
                          <h5>- Sarah Lee</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* testimonial wrapper end*/}
      {/*partner wrapper start*/}
      <div className="partner_wrapper med_bottompadder80 med_toppadder80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="partner_slider_img">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <img
                      src="images/partner_1.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_2.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_3.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_4.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_5.png"
                      className="img-responsive"
                      alt="story_img"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="images/partner_6.png"
                      className="img-responsive"
                      alt="story_img"
                    />
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