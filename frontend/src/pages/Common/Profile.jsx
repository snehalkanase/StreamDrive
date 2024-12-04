import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Profile({ data, profile, toggleEdit }) {
  const topProfile = useRef();
  const textRef = useRef();
  const planRef = useRef();
  const terminateRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      topProfile.current,
      {
        translateX: "-400px",
      },
      {
        translateX: "0px",
        duration: 0.8,
        ease: "power3.inOut",
      }
    );
    
    gsap.fromTo(
      textRef.current,
      {
        translateY: "200px",
      },
      {
        translateY: "0px",
        duration: 1,
        ease: "power3.inOut",
      }
    );

    // Animation for Current Plan
    gsap.fromTo(
      planRef.current,
      {
        opacity: 0,
        translateY: "20px",
      },
      {
        opacity: 1,
        translateY: "0px",
        duration: 0.5,
        ease: "power3.inOut",
      }
    );

    // Animation for Account Termination
    gsap.fromTo(
      terminateRef.current,
      {
        opacity: 0,
        translateY: "20px",
      },
      {
        opacity: 1,
        translateY: "0px",
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="sideBar w-85 font-inter bg-white shadow-lg rounded-2xl top-10 md:top-12 lg:top-20 p-2 h-full fixed overflow-y-auto z-20 border border-gray-200">
    {/* Profile Section */}
    <div ref={topProfile} className="w-full text-center mb-3">
      <img onClick={() => profile(false)} src="/Logo/back.svg" alt="back" className="cursor-pointer mb-1" />
      
      {/* Profile Banner */}
      <div className="w-full h-20 bg-gradient-to-r from-[#004646] to-[#002d2d] rounded-t-2xl">
        {/* You can add a custom image or gradient here */}
      </div>
  
      {/* Profile Image */}
      <div className="relative inline-block mb-2 -mt-16">
        <img
          className="rounded-full w-[130px] h-[130px] border-4 border-[#004646] shadow-lg"
          src={data.profileLink ? `data:image/jpeg;base64,${data.profileLink}` : "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100262.jpg"}
          alt="Profile"
        />
        {/* Edit Button */}
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="bg-[#004646] rounded-full p-2 w-fit hover:scale-110 transition-transform duration-200 cursor-pointer">
            <img onClick={() => toggleEdit(true)} className="w-5 text-white" src="/Logo/Recent/edit.svg" alt="edit" />
          </div>
        </div>
      </div>
  
      {/* Name & Email */}
      <div>
        <p className="font-bold text-lg text-gray-800">{data.name || "YOUR NAME"}</p>
        <p className="text-gray-500 text-sm">{data.email || "example@domain.com"}</p>
      </div>

    </div>
  
    <hr className="w-full my-2 border-gray-300" />
  
    {/* Stats Section */}
    <div className="w-full flex justify-between items-center mb-2">
      <div className="text-center">
        <p className="font-semibold text-gray-600">Storage</p>
        <p className="text-lg text-[#004646]">50GB / 100GB</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-600">Files</p>
        <p className="text-lg text-[#004646]">1200</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-600">Shared</p>
        <p className="text-lg text-[#004646]">180</p>
      </div>
    </div>
  
    <hr className="w-full my-2 border-gray-300" />
  
    {/* Current Plan Section */}
    <div ref={planRef} className="w-full flex flex-col items-start mb-2">
      <h1 className="font-semibold text-gray-600 text-lg">Current Plan</h1>
      <div className="flex justify-between items-center w-full my-2">
        <p className="text-gray-500 text-sm">Premium Pack</p>
        <i className="fa-solid fa-star text-xs text-yellow-500"></i>
      </div>
      <div className="bg-[#f0f9f9] p-3 rounded-lg w-full mb-2">
        <p className="text-sm text-gray-500">Upgrade to a higher tier for more storage and features</p>
      </div>
      <button className="bg-[#004646] text-white p-3 rounded-lg w-full hover:bg-[#003636] transition duration-200">
        Upgrade
      </button>
    </div>
  
    <hr className="w-full my-2 border-gray-300" />
  
    {/* Payment History Section */}
    <div className="w-full flex flex-col items-start mb-3">
      <h1 className="font-semibold text-gray-600 text-lg">Payment History</h1>
      <div className="w-full py-2">
        <p className="text-sm text-gray-400">View your recent transactions and payment details.</p>
        <ul className="mt-2 space-y-2">
          <li className="flex justify-between text-gray-600">
            <span>Nov 2024 - Premium Pack</span>
            <span>$9.99</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Oct 2024 - Premium Pack</span>
            <span>$9.99</span>
          </li>
          {/* Add more transactions here */}
        </ul>
      </div>
    </div>
  
    <hr className="w-full my-2 border-gray-300" />
  
    {/* Account Termination Section */}
    <div ref={terminateRef} className="w-full flex flex-col items-start">
      <h1 className="font-semibold text-gray-600 text-lg">Account Termination</h1>
      <div className="flex flex-col w-full my-2">
        <p className="text-sm text-gray-400">Click on terminate to delete your data and account permanently.</p>
        <button className="bg-red-600 text-white p-3 rounded-lg w-full hover:bg-red-700 transition duration-200">
          Terminate Account
        </button>
      </div>
    </div>
  
  </div>
  
  );
}

export default Profile;
