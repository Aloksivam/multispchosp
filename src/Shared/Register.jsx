import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mb-4">
          <div className="login_tab_top_wrap float_left">
            <div className="btn_log">
              <a href="#">REGISTER</a>
            </div>
            <div className="login_wrapper float_left">
              <div className="formsix-pos">
                <div className="form-group i-email">
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    placeholder="Username*"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group i-password">
                  <input
                    type="password"
                    className="form-control"
                    required=""
                    id="password3"
                    placeholder="Password *"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="field-name"
                  placeholder="Email*"
                />
              </div>
              <div className="formsix-e">
                <input
                  type="text"
                  className="form-control"
                  name="field-name"
                  value=""
                  placeholder="phone"
                />
              </div>
              <div className="login_remember_box">
                <label className="control control--checkbox">
                  I agreed to the Terms and Conditions.
                  <input type="checkbox" />
                  <span className="control__indicator"></span>
                </label>
              </div>
              <div className="header_btn inner_btn login_btn log float_left">
                <a href="#">register</a>
              </div>
              <div className="">
                already registered? <Link to={"/login"}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
