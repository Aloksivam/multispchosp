import React from 'react';


const MOA = () => {
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
                  <h1>MOA</h1>
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>MOA</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div ><h4>hi</h4></div>

      {/* Photo Section */}
      <div className="container mt-4" style={{ backgroundColor: '#f8f9fa', marginTop: '80px' }}>
      <h4 style={{ color: 'black', fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center', marginTop: '30px', }}>HONOURS & AWARDS</h4> 
      <div><h5>ui</h5></div>
        <div className="row">
          <div className="col-md-3">
            <img src="images/awards/4.jpg" alt="Photo 1" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src="images/awards/3.jpg" alt="Photo 2" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src="images/awards/2.jpg" alt="Photo 3" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src="images/awards/1.jpg" alt="Photo 4" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Space before text */}
      <div style={{ margin: '40px 0' }}></div>

      {/* Memorandum of Association Section */}
      <div className="container mt-4">
      <h2 style={{ color: 'black', fontSize: '2em', fontWeight: 'bold', marginTop: '30px', textAlign: 'center' }}>MEMORANDUM OF ASSOCIATION</h2>
        <p><strong>Name:</strong> The name of the Company is DEEPMIND Hospital Public Limited Company.</p>
        <p><strong>Type:</strong> The Company is to be a public limited company.</p>
        <p><strong>Objects:</strong> The primary objects for which the Company is established include providing comprehensive healthcare services, engaging in medical research, establishing healthcare facilities, collaborating with other healthcare providers, investing in healthcare technology, and offering training programs for healthcare professionals.</p>
        <p><strong>Liability:</strong> The liability of the members is limited.</p>
        <p><strong>Share Capital:</strong> The share capital of the Company is to be determined, divided into ordinary and preferred shares as decided by the Company.</p>
        <p><strong>Shares:</strong> The shares may be increased or reduced and divided into classes with special rights, privileges, and conditions as provided by the Company’s articles of association.</p>

        {/* Mutual Aid Agreement Section */}
        <h2 style={{ color: 'black', fontSize: '2em', fontWeight: 'bold', marginTop: '30px' }}>Mutual Aid Agreement During Emergencies</h2>

        <p>In addition to the Memorandum of Association, DEEPMIND Hospital enters into a voluntary agreement for mutual aid during disasters or critical situations. This agreement signifies the commitment of DEEPMIND Hospital to assist and receive assistance from other healthcare facilities during emergencies, ensuring continuity of patient care and operational preparedness.</p>

        <h3 style={{ color: 'black', fontSize: '1.5em', fontWeight: 'bold', marginTop: '20px' }}>Key Provisions of the Mutual Aid Agreement:</h3>

        <ul>
          <li><strong>Evacuation Assistance:</strong> DEEPMIND Hospital agrees to assist in distributing patients from affected facilities during disasters, coordinating through established protocols.</li>
          <li><strong>Operational Support:</strong> The hospital may voluntarily offer staff assistance, equipment, medical supplies, and pharmaceuticals to aid in emergency response efforts.</li>
          <li><strong>Financial and Legal Liability:</strong> Recipient facilities assume legal responsibility for personnel, equipment, and supplies received during the emergency period, with reimbursement arrangements as permitted by law.</li>
          <li><strong>Conformance with Laws and Regulations:</strong> All parties must comply with federal, state, county, and local laws, including licensing and certification requirements.</li>
          <li><strong>Patient Care Continuity:</strong> Transferring facilities are responsible for providing comprehensive documentation on transferred patients to ensure uninterrupted care.</li>
          <li><strong>Supervision and Privileges:</strong> Recipient facilities designate admitting services and physicians for each patient, offering temporary courtesy privileges to original attending physicians per facility policy.</li>
        </ul>
        <br />
        <i style={{color:'black'}}>By signing this Memorandum of Association and Mutual Aid Agreement, DEEPMIND Hospital commits to abiding by its terms during normal operations and emergencies, aiming to enhance community resilience and patient safety through collaborative efforts and preparedness initiatives.</i>
      </div>

      {/* Footer Section */}
      <div className="footer_section">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '20px 0', fontSize: '14px' }}>
            &copy; 2024 DEEPMIND Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MOA;
