import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DataAppContext } from "../DataContext";
import GoogleLoginButton from "../components/GoogleLoginButton";

const LLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login_user } = useContext(DataAppContext);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login logic
  const handleLogin = async () => {
    const url = `${process.env.REACT_APP_API_URL}users/login`;
    setLoading(true);
    setError(""); // Reset any existing errors

    try {
      const response = await axios.post(url, credentials);

      if (response.status === 202) {
        const { token, userId, userType } = response.data;

        // Store user data in localStorage
        localStorage.setItem("jwttoken", token);
        localStorage.setItem("userid", userId);
        localStorage.setItem("usertype", userType);

        // Notify context of the logged-in user
        login_user();

        // Redirect based on user type
        const destination = userType === "admin" ? "/admin-dashboard" : "/home";
        navigate(destination);

        alert("Login successful!");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-3 mb-4">
          <div className="login_tab_top_wrap float_left">
            <div className="btn_log">
              <a href="#">LOG IN</a>
            </div>

            <div className="login_wrapper float_left">
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="formsix-pos">
                <div className="form-group i-email">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username*"
                    value={credentials.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="formsix-e">
                <div className="form-group i-password">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password *"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <GoogleLoginButton />
              </div>

              <div className="login_remember_box">
                <Link to="/register" className="register-link">
                  Register
                </Link>
                <a href="#" className="forget_password">
                  Forgot Password
                </a>
              </div>

              <div className="header_btn inner_btn login_btn log float_left">
                {!loading ? (
                  <button
                    onClick={handleLogin}
                    className="m-0 outlinenone login-button"
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    disabled={true}
                    className="m-0 outlinenone login-button loading"
                  >
                    Loging in...
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLogin;
