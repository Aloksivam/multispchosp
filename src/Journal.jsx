import React from "react";
import logo from './assets/images/journal/logo.jpg';
import journal_1 from './assets/images/journal/journal_1.png';
import journal1 from './assets/images/journal/journal1.jpg';
import Journal2 from './assets/images/journal/journal2.jpg';
import Journal3 from './assets/images/journal/journal3.jpg';
import Journal4 from './assets/images/journal/journal4.jpg';
import Journal5 from './assets/images/journal/journal5.png';
import Journal6 from './assets/images/journal/journal6.jpg';


export const Journal= () => {
    return (
      <>

<div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_neurology_section about_Anesthesiology_section">
      <a href="javascript:" id="return-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
      <div className="section_head">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder20_4">Journal</h1>
                <img src={logo} alt="line" className="med_bottompadder20_4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
            <div className="neurology_text_wrapper">
              <p>
                Welcome to our Journal page. Here you will find a collection of articles, stories, and experiences 
                shared by our community. We believe in the power of storytelling and knowledge sharing to inspire 
                and educate others. Our journal covers a wide range of topics including health, wellness, personal 
                growth, and more.
              </p>

              <p>
                We encourage you to explore our journal and engage with the content. Feel free to share your thoughts 
                and experiences in the comments section of each article. Together, we can create a vibrant and supportive 
                community where everyone can learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span>
      <img src={journal_1} alt="line" className="journal" />
      <h2 className="line">Research Journal</h2>
      </span>
    </div>

    <div className="about_Anesthesiology_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="Anesthesiology_text_wrapper">
                <h2>Journal Entry: Overview</h2>
                <p>
                  Today was a refreshing day as I visited the local park. The weather was perfect, with clear skies and a gentle breeze. I took a leisurely walk along the paths, enjoying the beauty of nature and the tranquility of the park.
                </p>
                <p>
                  As I strolled, I observed the various activities around me: children playing on the swings, families having picnics, and people jogging. It was heartwarming to see so many people enjoying the outdoors and spending quality time together.
                </p>
                <p>
                  The highlight of my day was sitting by the lake and watching the ducks swim gracefully. I found it calming and a great way to clear my mind. I also had the chance to read a few chapters from a book I've been meaning to finish.
                </p>
                <p>
                  Overall, it was a day well spent, and I felt a renewed sense of energy and positivity. I look forward to more days like this where I can disconnect from the hustle and bustle of daily life and reconnect with nature.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="benefits_accordion_wrapper">
                <h2>Journal Highlights</h2>
                <div className="panel-group" id="accordion_wrapperLeft">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftone"
                          aria-expanded="false"
                        >
                          Park Visit Experience
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftone"
                      className="panel-collapse collapse show"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          A detailed account of my visit to the park, including observations and personal reflections. It was a relaxing day filled with simple pleasures and moments of tranquility.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLefttwo"
                          aria-expanded="false"
                        >
                          Reflections on Nature
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLefttwo"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          Insights and thoughts on the calming effect of nature and how spending time outdoors can be rejuvenating. This section explores the mental and emotional benefits of connecting with nature.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftthree"
                          aria-expanded="false"
                        >
                          Favorite Moments
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftthree"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          A reflection on the most memorable parts of the day, including the time spent by the lake and the enjoyment of reading a book. This section highlights the day's most cherished moments.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftfour"
                          aria-expanded="false"
                        >
                          Lessons Learned
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftfour"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          Insights and lessons learned from the day's experience, including the importance of taking time for oneself and appreciating the simple things in life.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseEightLeftfive"
                          aria-expanded="false"
                        >
                          Future Plans
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseEightLeftfive"
                      className="panel-collapse collapse"
                      data-parent="#accordion_wrapperLeft"
                      aria-expanded="false"
                      role="tablist"
                    >
                      <div className="panel-body">
                        <p>
                          Plans for future outings and activities inspired by today's experience. This section includes ideas for upcoming adventures and ways to continue enjoying nature.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-default */}
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
                    <h2>Journal Entries</h2>
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
                        <img src={journal1} alt="Journal Entry 1" />
                      <div className="caption text-center">
                        <h4><a href="#">Solo Travel Journaling</a></h4>
                        <p>A reflection on the start of my journaling journey.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Journal2} alt="Journal Entry 2" />
                      <div className="caption text-center">
                      <h4><a href="#">Day in the Life</a></h4>
                        <p>Insights into a typical day and personal thoughts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Journal3} alt="Journal Entry 3" />
                      <div className="caption text-center">
                      <h4><a href="#">Reflections on Growth</a></h4>
                        <p>Reflections on personal and professional growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Journal4} alt="Journal Entry 4" />
                      <div className="caption text-center">
                      <h4><a href="#">Travel Memories</a></h4>
                        <p>Creating lifelong Memories and experiences from recent travels.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Journal5} alt="Journal Entry 5" />
                      <div className="caption text-center">
                      <h4><a href="#">Personal Achievements</a></h4>
                        <p>Highlights of recent personal achievements and milestones.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Journal6} alt="Journal Entry 6" />
                      <div className="caption text-center">
                      <h4><a href="#">Thoughts and Reflections</a></h4>
                        <p>Deep thoughts and reflections on various topics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner_wrapper med_bottompadder80_3 ortho_partner">
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

    )
}      