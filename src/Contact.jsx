import React from 'react'

export const Contact = () => {
  return (
    <>      

            {/* med_tittle_section*/}
  <div className="med_tittle_section">
    <div className="med_img_overlay" />
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="med_tittle_cont_wrapper">
            <div className="med_tittle_cont">
              <h1>Contact Us</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* med_tittle_section End*/}
  {/*contact us section start */}
  <div className="contact_us_section med_toppadder100 med_bottompadder70">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="choose_heading_wrapper med_bottompadder30">
            <h1 className="med_bottompadder20">Contact us</h1>
            <img
              src="images/line.png"
              alt="title"
              className="med_bottompadder20"
            />
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
            </p>
          </div>
          <form>
            <div className="cont_main_section">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contect_form1 dc_cont_div">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      className="require"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contect_form1 dc_cont_div">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="require"
                      data-valid="email"
                      data-error="Email should be valid."
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contect_form1 dc_cont_div">
                    <input
                      type="text"
                      name="contact_no"
                      placeholder="Phone"
                      className="require"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contect_form1 dc_cont_div">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="contect_form4 dc_cont_div">
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Message"
                      className="require"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="response" />
                  <div className="contact_btn_wrapper med_toppadder30">
                    <button type="button" className="submitForm">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*contact us section end*/}
  {/* dc category section start*/}
  <div className="category_wrapper">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="cat_about cont_cat_abt">
            <div className="icon_wrapper dc_icon_section">
              <img
                src="images/icon_map.png"
                alt="img"
                className="img-responsive"
              />
            </div>
            <div className="cat_txt cont_cat_txt">
              <h1>22, margatnet. 2022</h1>
              <p>Marylebone,London</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="cat_about cont_cat_abt">
            <div className="icon_wrapper dc_icon_section">
              <img
                src="images/icon_call.png"
                alt="img"
                className="img-responsive"
              />
            </div>
            <div className="cat_txt cont_cat_txt">
              <h1>+1800 1256-12365</h1>
              <p>Mon-Fri 8:30am - 9:30pm</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="cat_about cont_cat_abt">
            <div className="icon_wrapper dc_icon_section">
              <img
                src="images/icon_envelope.png"
                alt="img"
                className="img-responsive"
              />
            </div>
            <div className="cat_txt cont_cat_txt cont_last_child">
              <a href="#">
                <h1>dummy@exmaple.com</h1>
              </a>
              <p>24 / 7online help support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="map_main_wrapper cont_dc_map">
      <div id="map" style={{ width: "100%", float: "left", height: 600 }} />
    </div>
  </div>
  {/* dc category section end*/}
    
    </>
  )
}
