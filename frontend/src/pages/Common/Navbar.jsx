import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ profile }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [data, setData] = useState([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (token) {
        try {
          const res = await axios.get(`${api}auth/verify-user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setData(res.data.data[0]);
          profile(false, res.data.data[0]);
        } catch (error) {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );

          localStorage.removeItem("token");
          setToken("");
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };

    verifyUser();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="header w-full h-16 lg:h-20 flex items-center px-4 md:px-8 lg:px-12 fixed top-0 left-0 border-b border-gray-300 z-20 bg-white shadow-md">
    <div className="w-full flex justify-between items-center">
      {/* Logo and Title Section */}
      <div className="flex items-center space-x-3">
        <div className="w-8 md:w-10 lg:w-12">
          <Link to="/">
            <img src="/Logo/Landing/StreamDrive.svg" alt="Logo" className="h-full" />
          </Link>
        </div>
        <p className="font-roboto text-xl lg:text-3xl font-bold text-gray-800">StreamDrive</p>
      </div>
  
      {/* Right Section (Profile & Logout) */}
      <div className="flex items-center space-x-4">
        {/* Profile Icon */}
        <img
          className="w-6 lg:w-7 cursor-pointer hover:scale-105 transition-transform duration-200"
          src="/Logo/profile.svg"
          alt="Profile"
          onClick={() => profile(true, data)}
        />
        {/* Logout Icon */}
        <img
          className="w-6 lg:w-7 cursor-pointer hover:scale-105 transition-transform duration-200"
          src="/Logo/logout.svg"
          alt="Logout"
          onClick={handleLogout}
        />
      </div>
    </div>
  </div>
  
  
  );
}

export default Navbar;
