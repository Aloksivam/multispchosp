import React from 'react';

const Ambulance = () => {
    const steps = [
        {
            icon: '☎️',
            title: 'Step 1',
            description: 'Call +919700001298 to book An ambulance.'
        },
        {
            icon: '📍',
            title: 'Step 2',
            description: 'Share details about the Patient and Location.'
        },
        {
            icon: '🚑',
            title: 'Step 3',
            description: 'Dispatching of Ambulance in 5 mins.'
        },
        {
            icon: '🏥',
            title: 'Step 4',
            description: 'Pick Up a Patient from the Location.'
        }
    ];

    const ambulances = [
        {
            id: 1,
            name: 'Basic Life Support Ambulance',
            image: 'https://www.ambulanceoncall.com/assets/images/gallery/bls3.jpg',
            services: ['Patient transport', 'Basic medical equipment', 'First aid'],
            charge: '$100 per hour'
        },
        {
            id: 2,
            name: 'Advanced Life Support Ambulance',
            image: 'https://www.ambulanceoncall.com/assets/images/gallery/acls1.jpg',
            services: ['Critical care transport', 'Advanced medical equipment', 'Paramedic on board'],
            charge: '$200 per hour'
        },
        {
            id: 3,
            name: 'Neonatal Ambulance',
            image: 'https://sffecoglobal.com/wp-content/uploads/2017/08/Techniq_International_Neo_Natal_Ambulance.png',
            services: ['Neonatal intensive care', 'Specialized infant equipment', 'Neonatal specialist on board'],
            charge: '$250 per hour'
        }
    ];
    return (<div>
        {/* Hero Section */}
        <header className="hero bg-white text-dark text-center py-5 mb-5">
            <div className="container">
                <h2 className="text-dark">Top-Quality Ambulance Services</h2>
                <p className="lead text-dark">Emergency medical transport with care and efficiency.</p>
                <a href="#contact" className="btn text-white orange  btn-lg">Contact Us</a>
            </div>
        </header>

        <div className='orange'>
            <div className="container mt-5">
                <h2 className="text-center mt-50 pt-4 text-white">PROCESS TO BOOK <span className='text-white'>AN AMBULANCE</span></h2>
                <div className="row">
                    {steps.map((step, index) => (
                        <div key={index} className="col-md-3 text-center">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h1 className="display-4 mb-3">{step.icon}</h1>
                                    <h5 className="card-title text-dark"><b>{step.title}</b></h5>
                                    <p className="card-text">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='bg-ambulance-services'>
            <h2 className="text-center container mt-5 pt-3">AMBULANCE SERVICES</h2>
            {ambulances.map((ambulance) => (
                <div key={ambulance.id} className="card mt-4 container bg-ambu-con pb-4">
                    <div className="row g-3">
                        <div className="col-md-4 col-12">
                            <img src={ambulance.image} className="img-fluid rounded-start bg-white mt-5" alt={ambulance.name} />
                        </div>
                        <div className="col-md-8 col-12 d-flex flex-column justify-content-center align-items-start">
                            <div className="card-body text-white">
                                <h3 className="text-white"><strong>{ambulance.name}</strong></h3>
                                <h6 className="card-subtitle mb-2 text-white"><strong>Services Provided:</strong></h6>
                                <ul className="list-unstyled">
                                    {ambulance.services.map((service, index) => (
                                        <li key={index}>
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>{service}
                                        </li>
                                    ))}
                                </ul>
                                <p className="card-text"><strong>Service Charge:</strong> {ambulance.charge}</p>
                                <button className="btn orange  mt-3">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='orange'>
            <div className="container">
                <section id="about" className="p-3">
                    <h2 className="text-center text-white p-3">About Our Services</h2>
                    <p className='text-white'>
                        We provide fast and reliable ambulance services to ensure patients receive the medical care they need when they need it. Our fleet includes a variety of vehicles, each equipped with advanced medical equipment and staffed by trained professionals.
                    </p>
                    <p className='text-white'>
                        Our mission is to offer the highest standard of care, ensuring the safety and comfort of our patients during transportation. We cater to both emergency and non-emergency situations.
                    </p>
                </section>
            </div>
        </div>

        <div className="testimonial_wrapper med_toppadder100">
            <div className="test_overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="test_heading_wrapper">
                            <h1 className="med_bottompadder20">What Patients Are Saying</h1>
                            <img
                                src="images/line.png"
                                alt="title"
                                className="med_bottompadder60"
                            />
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="test_slider_wrapper">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="t_icon_wrapper">
                                        <div className="t_client_cont_wrapper2">
                                            <p>
                                                "The service was incredibly fast and professional. The paramedics were kind and attentive to our needs."
                                            </p>
                                            <div className="client_img_abt">
                                                <img
                                                    className="img-circle"
                                                    src="images/test_img_1.png"
                                                    alt="img"
                                                    style={{ width: 90, height: 90 }}
                                                />
                                                <h5>- Aditi Suryavanshi</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="t_icon_wrapper">
                                        <div className="t_client_cont_wrapper2">
                                            <p>
                                                "Exceptional care during a critical time. I highly recommend their services to anyone in need."
                                            </p>
                                            <div className="client_img_abt">
                                                <img
                                                    className="img-circle"
                                                    src="images/test_img_1.png"
                                                    alt="img"
                                                    style={{ width: 90, height: 90 }}
                                                />
                                                <h5>- Sarah L.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="t_icon_wrapper">
                                        <div className="t_client_cont_wrapper2">
                                            <p>
                                                "The service was exceptionally swift and professional. The paramedics were compassionate and highly attentive to our needs."
                                            </p>
                                            <div className="client_img_abt">
                                                <img
                                                    className="img-circle"
                                                    src="images/test_img_1.png"
                                                    alt="img"
                                                    style={{ width: 90, height: 90 }}
                                                />
                                                <h5>- Michael P.</h5>
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
    )
};

export default Ambulance;