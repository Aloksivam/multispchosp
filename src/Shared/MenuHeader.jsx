import React from "react";
import { Link } from "react-router-dom";

export const MenuHeader = () => {
  return (
    <>
      <div className="menu_wrapper header-area hidden-menu-bar stick">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-1 col-md-3 col-sm-2 col-xs-12 wow bounceInDown" data-wow-delay="0.6s">
              <div className="header_logo">
                <Link to={"/"} className="hidden-xs">
                  <img
                    src="images/logo2.png"
                    alt="logo"
                    title="logo"
                    height={84}
                    width={84}
                    className="img-responsive d-none d-sm-none d-md-block d-lg-block"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-11 col-md-10 col-sm-10 col-xs-12">
              <div className="kv_navigation_wrapper">
                <div className="et_navbar_search_wrapper d-none d-sm-none d-md-block d-lg-block ">
                  <div id="search_open" className="et_search_box">
                    <input type="text" placeholder="Search here" />
                    <button>
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mainmenu  d-xl-block d-lg-block d-md-block d-sm-none d-none">
                  <ul className="main_nav_ul">
                    <li className="has-mega gc_main_navigation">
                      <Link to={"/"} className="gc_main_navigation hover_color"
                      
                      >
                        Home
                      </Link>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <Link
                        to={"/about"}
                        className="gc_main_navigation hover_color"
                      >
                        About
                      </Link>
                      {/* <ul>
                      <li className="parent">
                          <Link to={"/about/policies"}>Policies</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="has-mega gc_main_navigation">
                    <Link to={"/management"} className="gc_main_navigation hover_color" >Management</Link>
                      <ul>
                        <li className="parent">
                          <Link to={"/Members"}>Hospital Admin</Link>
                        </li>
			                  {/* <li className="parent">
                          <Link to={"#"}>Patient Guest List</Link>
                        </li> */}
			                  <li className="parent">
                          <Link to={"/emergencyward"}>Emergency Ward</Link>
                        </li>
		                  </ul>
                      
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <Link to={"/department"} className="gc_main_navigation hover_color" >Department</Link>
                      <ul>
                        <li className="parent">
                          <Link to={"/department/general-medicine"}>General Medicine</Link>
                        </li>
                        <li className="parent">
                          <Link to={"/dental"}>Dental Care</Link>
                        </li>
                        {/* <li className="parent">
                          <Link to={"/endocrinology"}>Endocrinology</Link>
                        </li> */}
                        {/* <li className="parent">
                          <Link to={"/ent"}>ENT</Link>
                        </li> */}
                        {/* <li className="parent">
                          <Link to={"/cardiology"}>Cardiology</Link>
                        </li> */}
                        <li className="parent">
                          <Link to={"/orthopaedics"}>Orthopaedics</Link>
                        </li>
                        {/* <li className="parent">
                          <Link to={"/dermatology"}>Dermatology</Link>
                        </li> */}
                        <li className="parent">
                          <Link to={"/nephrology"}>Nephrology</Link>
                        </li>
                        <li className="parent">
                          <Link to={"/paediatrics"}>Paediatrics</Link>
                        </li>
                        {/* <li>
                          <Link to={"/dermatology"}>Dermatology</Link>
                        </li> */}
                        {/* <li className="parent">
                          <Link to={"/physiology"}>Physiology</Link>
                        </li> */}
                        {/* <li className="parent">
                          <Link to={"/surgical"}>Surgical</Link>
                        </li> */}
                      </ul>
                    </li>
                    
                    <li className="has-mega gc_main_navigation">
                    <Link to={"/academics"} className="gc_main_navigation hover_color" >ACADEMICS</Link>
                      <ul>
                        {/* <li className="parent">
                          <Link to={"#"}>MBBS</Link>
                        </li>
			                  <li className="parent">
                          <Link to={"#"}>ANM</Link>
                        </li> */}
			                  <li className="parent">
                          <Link to={"/gnm"}>GNM</Link>
                        </li>
                        <li className="parent">
                          <Link to={"/career"}>Career</Link>
                        </li>
                        <li className="parent">
                          <Link to={"/alumnicell"}>Alumni Cell</Link>
                        </li>
		                  </ul>
                      
                    </li>
                    <li className="has-mega gc_main_navigation">
                     <Link to={"/facilities"} className="gc_main_navigation hover_color">Facilities</Link>
                     <ul>
                        <li className="parent">
                          <Link to={"GuestHouse"}>Guest House</Link>
                        </li>
                        <li className="parent">
                          <Link to={"FoodSupply"}>Food Supply</Link>
                        </li>
                        <li className="parent">
                          <Link to={"Dietician"}>Dietician</Link>
                        </li>
                        <li className="parent">
                          <Link to={"equipment"}>Equipment</Link>
                        </li>
			                  <li className="parent">
                          <Link to={"Banking"}>Banking</Link>
                        </li>
			                  <li className="parent">
                          <Link to={"Bloodcentre"}>Blood Centre </Link>
                        </li> 
		                  </ul>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <Link to={"/activities"} className="gc_main_navigation hover_color" >Activities</Link>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <Link
                        to={"/research"}className="gc_main_navigation hover_color">Research</Link>
                        <ul>
                          <li className="parent" >
                            <Link to={"/journal"}> Journal </Link>
                          </li>
                          <li className="parent" >
                            <Link to={"/Webinar"}> Webinar </Link>
                          </li>
                        </ul>
                    </li>
                  </ul>
                </div>
                {/* mainmenu end */}
              </div>
            </div>
            <div className="rp_mobail_menu_main_wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none">
              <div className="row">
                <div className="col-xl-6">
                  <div className="gc_logo logo_hidn d-block d-sm-block d-md-none d-lg-none d-xl-none">
                    <a href="#">
                      <img
                        src="images/logo.png"
                        className="img-responsive"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6  d-block d-sm-block d-md-none d-lg-none d-xl-none">
                  <div id="toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.177 31.177"
                      style={{ enableBackground: "new 0 0 31.177 31.177" }}
                      xmlSpace="preserve"
                      width="25px"
                      height="25px"
                    >
                      <g>
                        <g>
                          <path
                            className="menubar"
                            d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                            fill="#2ec8a6"
                          />
                        </g>
                        <g>
                          <path
                            className="menubar"
                            d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                            fill="#2ec8a6"
                          />
                        </g>
                        <g>
                          <path
                            className="menubar"
                            d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                            fill="#2ec8a6"
                          />
                        </g>
                        <g>
                          <path
                            className="menubar"
                            d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                            fill="#2ec8a6"
                          />
                        </g>
                        <g>
                          <path
                            className="menubar"
                            d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                            fill="#2ec8a6"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="sidebar">
              <h1>
                DEEP<span>MIND</span>
              </h1>
              <div id="toggle_close">×</div>
              <div id="cssmenu" className="wd_single_index_menu">
                <ul>
                  <li className="has-sub">
                    <a href="#">index</a>
                    <ul>
          
                      
                      <li>
                        <a href="index_hospital.html">Hospital</a>
                      </li>
                      <li>
                        <a href="index_gynecologycal.html">
                          Gynecologycal
                        </a>
                      </li>
                      <li>
                        <a href="index_dental.html">Dental</a>
                      </li>
                      <li>
                        <a href="index_eye.html">Eye</a>
                      </li>
                      <li>
                        <a href="index_ent.html">Ent </a>
                      </li>
                      <li>
                        <a href="index_Anaesthesiology.html">
                          Anaesthesiology
                        </a>
                      </li>
                      <li>
                        <a href="index_neurology.html">Neurology</a>
                      </li>
                      <li>
                        <a href="index_laparoscopic.html">
                          Laparoscopic{" "}
                        </a>
                      </li>
                      <li>
                        <a href="index_cardiology.html">Cardiology</a>
                      </li>

                      <li>
                        <a href="index_bariatric.html">Bariatric</a>
                      </li>
                      <li>
                        <Link to={"/endo"}>Endocrinology</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about_us.html">about us</a>
                  </li>
                  <li className="has-sub">
                    <a href="#">services</a>
                    <ul>
                      <li>
                        <a href="services.html">services</a>
                      </li>
                      <li>
                        <a href="event.html">events</a>
                      </li>
                      <li>
                        <a href="pricing.html">pricing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="#">doctors</a>
                    <ul>
                      <li>
                        <a href="doctor.html">doctor single</a>
                      </li>
                      <li>
                        <a href="our_doctors.html">our doctors</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="#">gallery</a>
                    <ul>
                      <li>
                        <a href="gallery_2.html">gallery 2</a>
                      </li>
                      <li>
                        <a href="gallery_3.html">gallery 3</a>
                      </li>
                      <li>
                        <a href="gallery_4.html">gallery 4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="#">blog</a>
                    <ul>
                      <li>
                        <a href="blog_category.html">blog category</a>
                      </li>
                      <li>
                        <a href="blog_single.html">blog single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="#">contact</a>
                    <ul>
                      <li>
                        <a href="contact_us.html">contact us</a>
                      </li>
                      <li>
                        <a href="appointment.html">appointment </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login_register.html">Log In / Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
