import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "../DataContext";
import GoogleLoginButton from "../components/GoogleLoginButton";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const localContext = useContext(DataAppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //console.log('localContext in login page - ', localContext)
  }, [localContext]);
  const login = async (values) => {
    console.log(values);
    const url = process.env.REACT_APP_API_URL + "users/login";
    setLoading(true);
    try {
      const response = await axios.post(url, values);

      const { token, userId, userType } = response.data;

      if (response.status === 202) {
        localStorage.setItem("jwttoken", token);
        localStorage.setItem("userid", userId);
        localStorage.setItem("usertype", userType);
        alert("login successful.");
        setLoading(false);
        localContext.login_user();
        if (userType === "admin") {
          navigate("/home");
          return {
            error: true,
          };
        } else {
          navigate("/home");
          return {
            error: true,
          };
        }
      } else {
        return {
          error: true,
        };
      }
    } catch (err) {
      alert("Login Failed...");
      setLoading(false);
      return {
        error: true,
      };
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mb-4">
            <div className="login_tab_top_wrap float_left">
              <div className="btn_log">
                <a href="#">LOG IN </a>
              </div>

              <div className="login_wrapper  float_left">
                <div className="formsix-pos">
                  <div className="form-group i-email">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Username*"
                      value={username}
                      onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                  </div>
                </div>

                <div className="formsix-e">
                  <div className="form-group i-password">
                    <input
                      type="password"
                      className="form-control"
                      required={true}
                      id="password2"
                      placeholder="Password *"
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div>
                <GoogleLoginButton/>
                </div>

                <div className="login_remember_box">
                  <Link to={"/register"}>Register</Link>
                  <a href="#" className="forget_password">
                    Forgot Password
                  </a>
                </div>
                <div className="header_btn inner_btn login_btn log float_left">
                  {!loading ? (
                    <button
                      onClick={async () => {
                        await login({ username: username, password: password });
                      }}
                    >
                      log in
                    </button>
                  ) : (
                    <button disabled={true}>Loading...</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Login;
