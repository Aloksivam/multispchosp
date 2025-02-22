// import main from './assets/images/mbbs/main.jpg';
import React from "react";
import lecturehall1 from '../../assets/images/mbbs/lecturehall.jpg'
import lecturehall2 from '../../assets/images/mbbs/lectuerhall2.jpg'
import main from '../../assets/images/mbbs/main.jpg'
import lectuerhall3 from '../../assets/images/mbbs/lecturehall3.jpg'



const MbbsTheme = () => {
  return (
    <div>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont ">
                  <h1>MBBS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_wrapper  ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team_heading_wrapper med_bottompadder40">
                <h1 className="med_bottompadder20">Introduction </h1>
                <img
                  src="images/Icon_team.png"
                  alt="line"
                  className="med_bottompadder20"
                />
                <p>
                  Deep Mind Medical College offers BACHELOR OF MEDICINE AND
                  BACHELOR OF SURGERY (M.B.B.S.). It is a comprehensive medical
                  institute having excellent infrastructure & maintaining high
                  Academic standards.
                </p>
              </div>
            </div>
            <div className="mbbs-main-img">
                <img className="img-fluid" src={main} alt=",," />
              </div>
          </div>
          <div className="container text-center mx-auto fliter_main_wrapper_2  ">
            <div className="row row-cols-3 grid ">
             

              <div className="card mx-auto img-fluid "
                style={{ width: 20 + "rem", height: 33 + "rem" }}>
  <img src={lecturehall1} className="card-img-top" alt="..." style={{ width: 20 + "rem",height: 10 + "rem"}}/>
  <div className="card-body">
    <h3 className="card-title text-dark float-left"><strong >Intake Capacity</strong></h3>
    <p className="card-text float-left">   The intake capacity of the college for the first year
    M.B.B.S. Class is 150.</p>
  </div>
</div>

<div className="card mx-auto img-fluid"
                style={{ width: 20 + "rem"}}>
  <img src={lecturehall2} className="card-img-top" style={{ width: 20 + "rem",height: 10 + "rem"}}/>
  <div className="card-body">
    <h3 className="card-title float-left text-dark"><strong>Qualification</strong></h3>
    <p className="card-text float-left">The candidate should have passed in English, Physics,
                    Chemistry and Biology at 10+2 Intermediate, ICSE, CBSE or
                    any equivalent examination securing a minimum of 50% marks
                    in Physics, Chemistry & Biology taken together. For
                    SC/ST/OBC category candidates, the required percentage in
                    Physics, Chemistry & Biiology taken together is 40%.</p>
  </div>
</div>

<div className="card mx-auto img-fluid"
                style={{ width: 20 + "rem", height: 33 + "rem"}}>
  <img src={lectuerhall3} className="card-img-top" alt="..."  style={{ width: 20 + "rem",height: 10 + "rem"}}/>
  <div className="card-body">
    <h3 className="card-title text-dark fw-bold float-left"><strong>Study Programme</strong></h3>
    <p className="card-text  float-left fw-bolder ">The total duration of the course is 54 months (4 1/2 yrs.)
                    The structure and content of the syllabus is based on
                    guidelines laid down by the Medical Council of India. The
                    course is divided in 9 semesters of 6 months each.</p>
  </div>
</div>





            

            </div>
          </div>
        </div>

        <div className="team_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="team_heading_wrapper med_bottompadder40">
                  <h1 className="med_bottompadder20">Study Plan</h1>
                  <img
                    src="images/Icon_team.png"
                    alt="line"
                    className="med_bottompadder20"
                  />
                  <p>
                    The MBBS program uses a horizontally and vertically
                    integrated annual system with rotations in clinical medicine
                    and preparation for supervised practice.{" "}
                  </p>
                </div>
              </div>
            </div>
            <table class="table table-bordered ">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">Semester</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Semester</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Semester 1</th>
                  <td>6 Months</td>
                  <td>Anatomy, Physiology</td>
                </tr>
                <tr>
                  <th scope="row">Semester 2</th>
                  <td>6 Months</td>
                  <td>Biochemistry</td>
                </tr>

                <tr>
                  <th scope="row">Semester 3</th>
                  <td>6 Months</td>
                  <td>Pathology, Microbiology</td>
                </tr>
                <tr>
                  <th scope="row">Semester 4</th>
                  <td>6 Months</td>
                  <td>Pharmacology</td>
                </tr>
                <tr>
                  <th scope="row">Semester 5</th>
                  <td>6 Months</td>
                  <td> Forensic Medicine</td>
                </tr>
                <tr>
                  <th scope="row">Semester 6</th>
                  <td>6 Months</td>
                  <td>Ophthalamology, Oto-Rhino-Laryngology</td>
                </tr>
                <tr>
                  <th scope="row">Semester 7</th>
                  <td>6 Months</td>
                  <td>Social and Preventive Medicine</td>
                </tr>
                <tr>
                  <th scope="row">Semester 8</th>
                  <td>6 Months</td>
                  <td> Medicine Surgery Paediatrics</td>
                </tr>
                <tr>
                  <th scope="row">Semester 9</th>
                  <td>6 Months</td>
                  <td>Medicine Surgery Paediatrics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MbbsTheme;
