import React from "react";

const Research = () => {
  return (
    <>
      {/* Title Section */}
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont text-center">
                  <h1>Hospital Practices and Research</h1>
                  <p className="med_subtitle">
                    Advancing Medical Knowledge for Better Healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Research Section */}
      <div className="about_research_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5">
              <h2 className="med_bottompadder20">About Research</h2>
              <p className="lead">
                Our research department is dedicated to advancing knowledge
                through rigorous investigation and innovative methodologies. We
                foster an environment of intellectual curiosity and
                collaborative inquiry among researchers and scholars. By
                leveraging state-of-the-art facilities and diverse expertise, we
                aim to address complex problems and contribute to academic and
                societal progress. Our commitment to excellence drives impactful
                discoveries and groundbreaking developments across various
                fields.
              </p>
            </div>
            <div className="col-md-6 py-5">
              <img
                src="./images/research/research.jpg"
                alt="Research"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Articles Section */}
      <div className="journal_section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>Recent Journal Articles</h2>
              <p>Explore our latest research publications</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm">
                <img
                  src="./images/research/surgical.jpg"
                  className="card-img-top"
                  alt="Surgical Techniques"
                />
                <div className="card-body">
                  <h5 className="card-title">Impact of New Surgical Techniques</h5>
                  <p className="card-text">
                    A study on the efficacy of advanced surgical methods in
                    improving patient outcomes and reducing recovery times.
                  </p>
                  <button
                    className="btn btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#article1"
                    aria-expanded="false"
                    aria-controls="article1"
                  >
                    Read More
                  </button>
                  <div className="collapse" id="article1">
                    <p className="mt-2">
                      This article explores the latest developments in surgical
                      procedures, examining patient case studies and recovery
                      statistics. The findings suggest that these new techniques
                      significantly reduce post-operative complications.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Full Article
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm">
                <img
                  src="./images/research/telemedicine.jpg"
                  className="card-img-top"
                  alt="Telemedicine"
                />
                <div className="card-body">
                  <h5 className="card-title">Innovations in Telemedicine</h5>
                  <p className="card-text">
                    Analysis of how telemedicine is revolutionizing healthcare
                    delivery and expanding access to medical services.
                  </p>
                  <button
                    className="btn btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#article2"
                    aria-expanded="false"
                    aria-controls="article2"
                  >
                    Read More
                  </button>
                  <div className="collapse" id="article2">
                    <p className="mt-2">
                      The study highlights the growth of telemedicine during the
                      pandemic, outlining key technological advances and their
                      impact on patient care. The article also discusses the
                      challenges and future prospects of this field.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Full Article
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm">
                <img
                  src="./images/research/cancer_treatment.jpg"
                  className="card-img-top"
                  alt="Cancer Treatment"
                />
                <div className="card-body">
                  <h5 className="card-title">Advances in Cancer Treatment</h5>
                  <p className="card-text">
                    Exploring the latest breakthroughs in oncology, focusing on
                    targeted therapies and personalized medicine.
                  </p>
                  <button
                    className="btn btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#article3"
                    aria-expanded="false"
                    aria-controls="article3"
                  >
                    Read More
                  </button>
                  <div className="collapse" id="article3">
                    <p className="mt-2">
                      This article delves into new cancer treatment modalities,
                      including immunotherapy and gene therapy. The research
                      presents case studies showing improved survival rates and
                      quality of life for patients undergoing these treatments.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Full Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta_section py-5 text-center">
        <div className="container">
          <h2>Join Our Research Community</h2>
          <p>
            Stay updated with the latest research and discoveries from our
            hospital. Subscribe to our newsletter for updates.
          </p>
          <a href="#" className="btn btn-lg btn-success">
            Subscribe Now
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#top" id="return-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Research;
