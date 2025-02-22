import React from 'react';

// Members data with updated department names
const members = [
  { id: 1, department: 'Paediatrics', name: 'Dr SWAPNIL SHARMA', qualification: 'MBA HOSPITAL ADMN [PURSUING]' },
  { id: 2, department: 'Nephrology', name: 'Col GULSHANLAL SACHDEV, retd', qualification: 'MBBS MD [CHA]' },
  { id: 3, department: 'Dentist', name: 'Ms HARPREET KAUR', qualification: 'PGDHM' },
  { id: 4, department: 'Cardiologist', name: 'Dr PGP KAINIKKARA', qualification: 'MBBS' },
  { id: 5, department: 'Neuro', name: 'Dr PARUL MADAN', qualification: 'PURSUING PGDHA' },
  { id: 6, department: 'Gastroentero', name: 'Dr DEVENDRA SINGH', qualification: 'MBBS, MHA' },
  { id: 7, department: 'Paediatrics', name: 'Dr GEETIKA GOEL', qualification: 'PURSUING PGDHA' },
  { id: 8, department: 'Nephrology', name: 'Dr KS RANA', qualification: 'MBBS' },
  { id: 9, department: 'Dentist', name: 'Dr DENNY JOHN', qualification: 'B.P.T. (BACHELOR OF PHYSIOTHERAPY)' },
  { id: 10,department: 'Cardiologist', name: 'Dr MM SIRCAR', qualification: 'MBBS' },
  { id: 11,department: 'Neuro', name: 'Dr AVINASH AGRAWAL', qualification: 'B.COM' },
  { id: 12,department: 'Gastroentero', name: 'Surg Rear Adm VIJAY KUMAR SINGH', qualification: 'MBBS, MHA, DNB [H&HA]' },
  { id: 13,department: 'Paediatrics', name: 'Dr SINI SIVAN KUTTY', qualification: 'PURSUING PGDHM' },
  { id: 14,department: 'Nephrology', name: 'Dr JASLIN KAUR', qualification: 'B.COM' },
  { id: 15,department: 'Dentist', name: 'Dr GURV RAJESH JAMMY', qualification: 'MBBS' },
  { id: 16,department: 'Cardiologist', name: 'Dr MIRNAL KANTI SEN', qualification: 'MBBS MHA AIIMS' },
  { id: 17,department: 'Neuro', name: 'Dr SIBASIS HENSE', qualification: 'BBA (H) GRADUATE' },
  { id: 18,department: 'Gastroentero', name: 'Dr MANAS TRIPATHI', qualification: 'AHA-House Noida' },
  { id: 19,department: 'Paediatrics', name: 'Dr BHASKAR CHATERJEE', qualification: 'MBBS, MHA' },
  { id: 10,department: 'Nephrology', name: 'Dr MUNISH KUMAR MITTAL', qualification: 'AHA-House Noida' },
];

const Members = () => {
  return (
    <div>
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Members</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Members</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="department_services_section">
        <div className="section_head">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div className="text-center">
                  <div
                    className="section_heading wow fadeInDown"
                    data-wow-delay="0.5s">
                    <h2><c>Our Doctors</c></h2>
                  </div>
                  <div className="container mt-4">
                    <table className="table table-bordered">
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>Department</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((member) => (
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.department}</td>
                        <td>{member.name}</td>
                        <td>{member.qualification}</td>
                    </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="laparoscopic_procedures_wrapper">
    <div class="laparoscopic_procedures_overlay"></div>
    <div class="section_head">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div class="text-center">
                        <div class="section_heading">
                            <h2>Our Members</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="item">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/members/m2.jpg" alt="membersImage" /></a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/members/m1.jpg" alt="Appendectomy" /></a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="thumbnail">
                                <a href="#"><img src="images/members/m3.jpg" alt="Adrenalectomy" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  );
};

export default Members;
