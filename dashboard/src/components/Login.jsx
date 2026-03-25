import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { email, password } = inputValue;

  // Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toast helpers
  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      setLoading(true);

      const API_URL = "http://localhost:4000";

      const { data } = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true },
      );

      const { success, message, accessToken } = data;

      if (success) {
        handleSuccess(message);

        sessionStorage.setItem("token", accessToken);

        // Reset form
        setInputValue({
          email: "",
          password: "",
        });

        setTimeout(() => navigate("/"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
        console.log(error);
      handleError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>

      <div style={{ marginTop:"10vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}} >

        <div className="form_container">

          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >

            <img src="/kite-logo.svg" alt="" style={{height:"5rem", width:"5rem" }} />

            <h2 style={{fontWeight:"400"}} >Login To Kite</h2>

          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Submit"}
            </button>

            <span>
              Don’t have an account? <Link to="/signup">Signup</Link>  for free!
            </span>
          </form>

          <ToastContainer />
        </div>

      </div>

      <div style={{marginTop:"5vh", width:"100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >

        <div style={{ width:"8vw", display:"flex", justifyContent:"space-around", alignItems:"center"}} >

          <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"><img src="/android.svg" alt="" /></a>

          <a href="https://apps.apple.com/in/app/kite-zerodha/id1449453802"><img src="/apple.svg" alt="" /></a>

        </div>

        <p style={{marginTop:"2vh"}} ><a href="https://zerodha.com/"><img src="/zerodha-logo.svg" alt="" style={{ width:"9vh", height:"auto" }} /></a></p>

        <p style={{textAlign:"center", fontSize:"0.88vh", maxWidth:"30vh", color:"#D3D3D3", lineHeight:"1.6"}} >Zerodha Broking Limited: Member of NSE, BSE, MCX ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Smart Online Dispute Resolution | SEBI SCORES</p>

      </div>

    </div>

  );
};

export default Login;
