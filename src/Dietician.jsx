import React from 'react';

const Dietician = () => {
  const dietTips = [
    {
      title: "Eat a variety of foods",
      description: "Include fruits, vegetables, lean proteins, whole grains, and healthy fats in your diet.",
      image: "/images/dietician/image_1.jpg"
    },
    {
      title: "Limit processed foods",
      description: "Choose whole, unprocessed foods whenever possible to maximize nutrient intake.",
      image: "/images/dietician/image_2.jpg"
    },
    {
      title: "Stay hydrated",
      description: "Drink plenty of water throughout the day to maintain proper hydration.",
      image: "/images/dietician/image_3.jpg"
    },
    {
      title: "Control portion sizes",
      description: "Use smaller plates and be mindful of serving sizes to avoid overeating.",
      image: "/images/dietician/image_4.jpg"
    },
    {
      title: "Eat more fiber",
      description: "Include high-fiber foods like fruits, vegetables, and whole grains in your diet.",
      image: "/images/dietician/image_5.jpeg"
    },
    {
      title: "Limit added sugars",
      description: "Reduce intake of sugary drinks and snacks to maintain a healthy weight.",
      image: "/images/dietician/image_6.jpeg"
    },
    {
      title: "Include healthy fats",
      description: "Incorporate sources of healthy fats like avocados, nuts, and olive oil.",
      image: "/images/dietician/image_7.jpeg"
    },
    {
      title: "Plan your meals",
      description: "Prepare meals in advance to ensure a balanced diet throughout the week.",
      image: "/images/dietician/image_8.jpeg"
    },
    {
      title: "Monitor your salt intake",
      description: "Be mindful of your sodium consumption by reducing salt in your diet and choosing low-sodium options.",
      image: "/images/dietician/image_9.jpeg"
    }
  ];


  return (
    <div className="container mt-100 ">
      <div className="team_wrapper med_toppadder100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div
                className="team_heading_wrapper med_bottompadder40 wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <h1 className="med_bottompadder20">MEET OUR Dietician</h1>
                <img
                  src="images/Icon_team.png"
                  alt="line"
                  className="med_bottompadder20"
                />
                <p>
                  A dietitian is a healthcare professional specializing in nutrition and dietetics. They are experts in food and nutrition science, providing personalized dietary advice and plans to help individuals achieve their health goals, manage chronic diseases, or improve their overall well-being. Dietitians work in various settings, including hospitals, clinics, community health centers, schools, and private practice. They assess patients' nutritional needs, develop and implement nutrition programs, educate clients on healthy eating habits, and monitor progress to ensure optimal health outcomes. With their extensive knowledge of nutrition, dietitians play a crucial role in promoting health, preventing disease, and enhancing quality of life through informed dietary choices.
                </p>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_slider_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_1.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_2.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer2"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_3.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer3"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_4.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
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
                  <div className="item">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer4"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_1.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer5"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_2.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer6"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_3.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer7"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_4.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
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
                  <div className="item">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer17"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_1.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer8"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_2.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer9"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_3.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className="team_about">
                          <div className="team_icon_wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Layer0"
                              x="0px"
                              y="0px"
                              viewBox="0 0 300.346 300.346"
                              style={{
                                enableBackground: "new 0 0 300.346 300.346",
                              }}
                              xmlSpace="preserve"
                              width="40px"
                              height="40px"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126     c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66     c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908     c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867     c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428     c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z M216.81,178.183     c2.037-1.601,4.564-2.236,7.114-1.787c1.536,0.271,2.924,0.913,4.087,1.856l-12.645,10.129c-1.126-2.111-2.581-4.019-4.283-5.672     L216.81,178.183z M281.837,177.528L208.69,235.81c-7.377,5.878-16.635,9.116-26.068,9.116H92.194     c-6.113,0-12.083,1.714-17.267,4.954l-33.169,20.743l-23.959-30.954L74.554,187.7c8.469-7.753,19.451-12.267,30.924-12.708     c8.279-0.323,16.554,1.504,23.933,5.268l11.486,5.861c6.707,3.422,14.233,5.231,21.763,5.231h32.504     c4.278,0,7.758,3.48,7.758,7.758c0,4.105-3.211,7.507-7.309,7.745l-90.45,5.252c-4.168,0.242-7.351,3.817-7.109,7.985     s3.822,7.346,7.985,7.109l90.45-5.252c9.461-0.549,17.317-6.817,20.282-15.32l53.916-43.189c2.036-1.602,4.561-2.237,7.114-1.787     c2.552,0.449,4.709,1.909,6.075,4.111C286.277,169.634,285.401,174.691,281.837,177.528z"
                                      fill="#FFFFFF"
                                    />
                                    <path
                                      d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531     c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855     C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307     c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765     C137.687,99.759,137.101,91.391,140.441,84.114z"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="team_img">
                            <img
                              src="images/team_4.jpg"
                              alt="img"
                              className="img-responsive"
                            />
                          </div>
                          <div className="team_txt">
                            <h1>
                              <a href="#">Dr. Johan Doe</a>
                            </h1>
                            <p>(Hepatologist)</p>
                          </div>
                          <div className="team_icon_hover our_doc_icn_hovr">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
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
                                  <i
                                    className="fa fa-youtube-play"
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
            </div>
          </div>
        </div>
      </div>

      {/* blog wrapper start*/}
      <div className="blog_wrapper med_toppadder100 med_bottompadder90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div
                className="team_heading_wrapper med_bottompadder50 wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <h1 className="med_bottompadder20">Our Diet Tips</h1>
                <img
                  src="images/Icon_team.png"
                  alt="line"
                  className="med_bottompadder20"
                />
                <p>
                  Stay informed with the latest diet tips, healthy recipes, and wellness advice from our team of experts.
                  Our blog is designed to provide valuable information to help you make informed decisions about your nutrition.
                </p>
              </div>
            </div>
            <div className="row">
              {dietTips.map((tip, index) => (
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" key={index}>
                  <div className="blog_about">
                    <div className="blog_img">
                      <figure>
                        <img
                          src={tip.image}
                          alt={tip.title}
                          className="img-responsive"
                        />
                      </figure>
                    </div>
                    <div className="blog_comment">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-comment" aria-hidden="true" />
                            50
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-thumbs-up" aria-hidden="true" />
                            98
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_txt">
                      <h1>
                        <a href="#">{tip.title}</a>
                      </h1>
                      <p>
                        {tip.description}
                      </p>
                      <a href="#">
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* blog wrapper end */}
      <section className="mb-5 bg-white ">
        <h2 className='text-dark'>Developing Healthy Eating Habits</h2>
        <p>
          Creating and maintaining healthy eating habits is a journey that requires dedication and consistency. Start by making small, sustainable changes to your diet and gradually build upon them. Focus on incorporating more whole foods, cooking meals at home, and being mindful of your eating patterns. Remember that balance and moderation are key to long-term success.
        </p>
        <img src="/images/dietician/healthyeatinghabits.jpeg" alt="Healthy Eating Habits" className="img-fluid rounded mb-3 w-100" />
      </section>
    </div>
  );
};

export default Dietician;
