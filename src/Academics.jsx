import React from "react";


const medicalCourses = [
  {
    name: "MBBS",
    duration: "5 Years",
    fees: "₹10,00,000 per year",
    image: "images/academics/mbbs.jpg",
  },
  {
    name: "BDS",
    duration: "4 Years",
    fees: "₹8,00,000 per year",
    image: "images/academics/bds.jpg",
  },
  {
    name: "BAMS",
    duration: "5.5 Years",
    fees: "₹9,00,000 per year",
    image: "images/academics/bams.jpg",
  },
  {
    name: "BHMS",
    duration: "5.5 Years",
    fees: "₹7,50,000 per year",
    image: "images/academics/bhms.jpg",
  },
  {
    name: "BPT",
    duration: "4.5 Years",
    fees: "₹6,00,000 per year",
    image: "images/academics/bpt.jpg",
  },
  {
    name: "B.Sc Nursing",
    duration: "4 Years",
    fees: "₹5,50,000 per year",
    image: "images/academics/bsc.jpg",
  },
];

const Academics = () => {
  return (
    <>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1 className="mt-5">Academics</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="academics">
        <main className="container mb-5">
          <section className="course-list">
            <h1 className="text-center mb-4">
              Medical Courses and Specializations
            </h1>
            <div className="row">
              {medicalCourses.map((course, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={course.image}
                      className="card-img-top"
                      alt={course.name}
                    />
                    <div className="card-body">
                      <h2 className="card-title">{course.name}</h2>
                      <p className="card-text">Duration: {course.duration}</p>
                      <p className="card-text">Fees: {course.fees}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Academics;
