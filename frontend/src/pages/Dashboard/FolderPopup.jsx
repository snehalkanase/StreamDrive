import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import api from "../../utils/api";
import { gsap } from "gsap";
import { toast } from "react-toastify";

const FolderPopup = ({ toggle }) => {
  const [folderName, setFolderName] = useState("");
  const popRef = useRef();


  useEffect(() => {
    gsap.fromTo(
      popRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: "power3.out" }
    );
  }, []);


  const handleClose = () => {
    gsap.fromTo(
      popRef.current,
      { scale: 1 },
      {
        scale: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => toggle(),
      }
    );
  };

  const handleCreateFolder = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${api}folders/create-folder`,
        { folderName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Folder created successfully!");
      handleClose();
    } catch (error) {
      console.error("Error creating folder:", error);
      toast.error("Error creating folder");
    }
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50 bg-[#00000080] overflow-hidden font-inter">
      <div ref={popRef} className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] p-3 flex flex-col bg-white rounded-lg shadow-lg transition-all">

        {/* Close Button */}
        <div className="w-full flex justify-end">
          <button onClick={handleClose} className="text-gray-600 hover:text-red-700 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>

        {/* Header Section */}
        <div className="flex gap-2 items-center mb-2">
          <i className="fa-solid fa-folder-plus text-green-600 text-2xl"></i>
          <h2 className="font-semibold text-lg text-gray-800">Create New Folder</h2>
        </div>

        {/* Folder Name Input */}
        <input
          type="text"
          placeholder="Enter Folder Name"
          value={folderName}
          required
          onChange={(e) => setFolderName(e.target.value)}
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        {/* Action Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleCreateFolder}
            className="w-full sm:w-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-200"
          >
            Create
          </button>
          <button
            onClick={handleClose}
            className="w-full sm:w-auto bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

  );
};

export default FolderPopup;
