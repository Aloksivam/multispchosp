import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Inquiry = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const callApiAddInquiry = async (e) => {
    e.preventDefault();
    const formData = {
      name_user: nameRef.current.value,
      user_email: emailRef.current.value,
      user_phone: phoneRef.current.value,
      enquiry_details: messageRef.current.value,
    };

    try {
      const url = process.env.REACT_APP_API_URL + 'enquiry/create_enquiry';
      const response = await axios.post(url, formData);
      setSuccessMessage('Your message has been sent successfully!');
      // navigate('/');
    } catch (error) {
      setSuccessMessage('There was an error sending your message.');
      console.log(error);
    }
  };

  return (
    <div className="department_appointment_section">
      <div className="department_appointment_overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div className="appointment_form_section text-center">
              <h4>Send Message Us</h4>
              <form onSubmit={callApiAddInquiry}>
                <div className="d-flex flex-column align-items-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only">Name</label>
                      <input
                        type="text"
                        className="form-control require"
                        name="name"
                        placeholder="Your Name"
                        ref={nameRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="email"
                        className="form-control require"
                        name="email"
                        placeholder="Your Email"
                        ref={emailRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only">Phone</label>
                      <input
                        type="text"
                        className="form-control require"
                        name="phone"
                        placeholder="Phone"
                        ref={phoneRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="message">Message</label>
                      <textarea
                        className="form-control require"
                        name="message"
                        placeholder="Message"
                        ref={messageRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="submitForm btn btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                  <div className="response" style={{ color: "#fff" }} />
                </div>
              </form>
              {successMessage && (
                <div className="alert mt-3">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inquiry
