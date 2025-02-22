import React from 'react';

const Medicine = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="med_tittle_section">
        <div className="med_img_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>ESSENTIAL MEDICINES</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Medicine</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '20px', margin: '0 200px' }}>
        <div className="row">
          <div className="col-md-6" style={{ margin: '40px 0' }}>
            <h2 style={{ color: 'black', fontSize: '1.7em', fontWeight: 'bold' }}>Overview of Essential Medicines</h2>
            <p>
              Essential medicines are those that satisfy the priority healthcare needs of the population. They are selected based on disease prevalence, evidence on efficacy and safety, and comparative cost-effectiveness. Ensuring the availability of these medicines in healthcare settings is critical for improving health outcomes.
            </p>
            <p>
              This page provides a list of essential medicines commonly used for treating various conditions. Healthcare providers rely on these medicines to deliver effective and timely care. By prioritizing these medicines, we can ensure that the most critical health needs are met, contributing to a healthier society. Access to these medicines is a fundamental aspect of healthcare, and their proper management is vital for sustaining effective medical services.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images/medicine.jpg"
              alt="Essential Medicines"
              className="img-responsive"
              style={{ margin: '40px 0', height: '350px' }}
            />
          </div>
        </div>

        {/* Essential Medicines List Section */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ color: 'black', fontSize: '1.7em', fontWeight: 'bold' }}>List of Essential Medicines</h2>
          <table className="table table-bordered" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Dose</th>
                <th scope="col">Symptoms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Paracetamol</td>
                <td>500 mg</td>
                <td>Fever, Pain relief</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Amoxicillin</td>
                <td>250 mg</td>
                <td>Bacterial infections</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ibuprofen</td>
                <td>400 mg</td>
                <td>Inflammation, Pain relief</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Cetirizine</td>
                <td>10 mg</td>
                <td>Allergic reactions</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Metformin</td>
                <td>500 mg</td>
                <td>Diabetes management</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ color: 'black', fontSize: '1.7em', fontWeight: 'bold' }}>Importance of Proper Dosage</h2>
          <p>
            The correct dosage of medicine is crucial for effective treatment and minimizing side effects. Overdosing can lead to toxicity, while underdosing may result in insufficient treatment. Always consult with a healthcare provider to determine the appropriate dose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
