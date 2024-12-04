import React from "react";
import heroBg from "/Logo/Landing/HeroBg.svg";
const heroDashboard = new URL('/public/Logo/Landing/HomePage.PNG', import.meta.url).href;
import icon from "/Logo/Landing/icon.svg";
import logo from "/Logo/Landing/streamDriveLogo.svg";
import image1 from "/Logo/Landing/Main Section.svg";
import image2 from "/Logo/Landing/Main Section2.svg";
import image3 from "/Logo/Landing/Main Section3.svg";
const image4 = new URL('/public/Logo/Landing/PreviewPage.PNG', import.meta.url).href;
import frame from "/Logo/Landing/Frame.svg";
import frame1 from "/Logo/Landing/Frame (1).svg";
import frame2 from "/Logo/Landing/Frame (2).svg";
import icon5 from "/Logo/Landing/icon5.svg";
import icon6 from "/Logo/Landing/icon6.svg";
import block3 from "/Logo/Landing/block3.svg";
import back1 from "/Logo/Landing/back1.svg";
import back2 from "/Logo/Landing/back2.svg";
import arrow from "/Logo/Landing/arrow.svg";
import back3 from "/Logo/Landing/back3.svg";
import logoOrange from "/Logo/Landing/logo-orange.svg";
import logoBlack from "/Logo/Landing/logoBlack.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const features = [
  {
    title: "Military-Grade Encryption",
    description:
      "Your data is protected with top-tier encryption, ensuring that only you have access—no one else, not even us.",
  },
  {
    title: "100% Data Privacy",
    description:
      "We respect your privacy. Your data is never sold, shared, or exploited. Stay in control without compromising your personal information.",
  },
  {
    title: "Real-Time Security Alerts",
    description:
      "Stay informed with immediate notifications for any unusual or suspicious activities on your account, keeping you one step ahead.",
  },
];


const plans = [
  {
    title: "FREE",
    price: "₹0",
    period: "Per month",
    features: [
      "Drive, Calendar, and Contacts",
      "500 MB cloud storage",
      "Single device login",
      "1 custom domain",
      "Basic support",
    ],
    buttonText: "Get Started",
  },
  {
    title: "ESSENTIAL",
    price: "₹399",
    period: "Per month",
    features: [
      "Everything in Free",
      "15 GB cloud storage",
      "5 devices login",
      "1 custom domain",
      "Priority support",
      "Basic security features",
    ],
    buttonText: "Upgrade Now",
  },
  {
    title: "PRO",
    price: "₹899",
    period: "Per month",
    features: [
      "Everything in Essential",
      "200 GB cloud storage",
      "15 devices login",
      "3 custom domains",
      "Advanced security features",
      "Collaborator management",
      "Premium support",
    ],
    buttonText: "Get PRO",
  },
  {
    title: "BUSINESS",
    price: "₹1,299",
    period: "Per user/month",
    features: [
      "Everything in Pro",
      "1 TB cloud storage",
      "Unlimited device login",
      "Unlimited custom domains",
      "Advanced collaboration tools",
      "Team and admin controls",
      "Dedicated support",
      "99.9% uptime guarantee",
    ],
    buttonText: "Start Free Trial",
  },
];

const testimonials = [
  {
    name: "Filip Mark",
    role: "Chief of Staff, Passionfroot",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1727547898~exp=1727551498~hmac=83a8d7d47f7415c702a274f6e91892d0dbc86211de2688747d29c3ba0beb6f4b&w=1060",
    testimonial:
      "StreamDrive provides the perfect balance of security and ease of use. Managing file access is simple, and everything syncs effortlessly across devices. It's a service I trust for both personal and professional needs.",
  },
  {
    name: "Sarah Lee",
    role: "Founder, Tech Innovators",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1727548122~exp=1727551722~hmac=330f14a5a9e6120ee0a2252d5fc7b18f3c98f7db6eb3da043a10b5499bcf392a&w=1060",
    testimonial:
      "StreamDrive has revolutionized how we manage data. With seamless sync and unmatched security, it's a service we cannot do without.",
  },
  {
    name: "John Carter",
    role: "CTO, Fintech Giants",
    image:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1727547934~exp=1727551534~hmac=3adf666d44f5d8e1f5cae71b3ed33553f26303481bb76dc2cb1cad192f0691fb&w=740",
    testimonial:
      "With StreamDrive, our data management became more efficient. The user-friendly interface and secure environment allow our team to work without interruption.",
  },
  {
    name: "Emily Johnson",
    role: "VP of Operations, Creative Co",
    image:
      "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1727548148~exp=1727551748~hmac=0be13053d944ace803330f3e2f741795b06281d76d7b9326a1c6eae6b583f6c2&w=1060",
    testimonial:
      "StreamDrive ensures that all our files are accessible and secure, providing peace of mind and ease of use for our creative projects.",
  },
];


const LandingHome = () => {
  const navigate = useNavigate();

  const handleSecureClick = () => {
    navigate("/login");
  };
  return (
    <div className="relative w-full mx-auto">
      <Navbar />
      <section
        className="py-24 w-full relative bg-gradient-to-b from-[#00A36C] to-[#B0F2B6] text-gray-900"
        style={{ backgroundImage: `url("${heroBg}")`, backgroundSize: 'cover' }}
      >
        <div
          className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-12"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {/* Hero Section Text */}
          <div className="text-center mt-12 md:mt-20">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Is your data encrypted and <span className="text-[#009F7A]">secure?</span>
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-gray-500 font-light md:w-3/5 mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              In a world where privacy matters, <span className="font-semibold text-[#009F7A]">StreamDrive</span> is the only solution
              you can trust to protect your data and ensure accessibility.
            </p>
            <button
              onClick={handleSecureClick}
              className="mt-8 bg-[#009F7A] text-white py-2 px-4 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl focus:outline-none"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              Secure My Data Now
            </button>
          </div>

          {/* Hero Image Section */}
          <div
            className="mt-24 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105"
            data-aos="zoom-in-up"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <img
              src={heroDashboard}
              alt="Drive Interface Mockup"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-16 w-11/12 mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row items-center">
            <h2
              className="text-3xl mb-8 md:w-1/3"
              data-aos="zoom-in-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              The Future of Cloud Storage, Today
            </h2>
            <img
              src={icon}
              alt="our partners"
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-tl from-[#f3f4f6] to-[#ffffff] shadow-xl rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tl hover:from-[#fffbf0] hover:to-[#e4f7f1]"
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="p-4 md:p-10 bg-[#F5F5F4]">
        <div
          className=" bg-[#fafaf9] rounded-md border border-[#afafaf]"
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="bg-gradient-to-r from-[#e4f7f1] to-[#f1f9fb] py-16 px-8 md:px-16 lg:px-32 text-center rounded-lg shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Coming Soon: Next-Level Privacy & Secure File Sharing
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                We're excited to introduce a groundbreaking feature that puts you in full control of your files. With our enhanced privacy settings, you’ll be able to specify exactly who can view, share, or access your documents, ensuring only trusted individuals can interact with your content. Stay tuned for this highly anticipated update—privacy just got an upgrade!
              </p>

            </div>
          </div>

          <div className=" pr-5 pl-5 pt-4 pb-1 w-full flex justify-between gap-2">
            <img className="h-8 w-8" src={icon6} alt="Icon" />
            <div className="flex gap-2">
              <div className="text-[#afafaf]">Learn more</div>
              <div className="h-7 w-7 rounded-3xl border border-[#afafaf] flex flex-col justify-center items-center">
                <img className="" src={arrow} alt="Arrow"></img>
              </div>
            </div>
          </div>

          {/* BLOCK 1 */}

          <div className="flex flex-col md:flex-row ">
            {/* Left Side */}

            <div className="w-full md:w-[50%] bg-[#FAFAF9] pr-5 pl-5  pb-10 flex flex-col gap-2 rounded-md">
              <div className="h-auto md:h-[30%] flex flex-col gap-1">
                <div>
                  <b>End-to-end encrypted with extra 2FA security</b>
                </div>
                <div className="text-[#afafaf]">
                  Skiff Mail protects your inbox with free private email, giving
                  you the power to communicate freely with anyone.
                </div>
              </div>

              <div className="h-auto md:h-[70%] flex flex-col items-center md:flex-row gap-4 pl-0 md:pl-10">
                <img
                  className="w-52 md:w-auto h-auto md:h-52 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)]"
                  src={image1}
                  alt="Image1"
                />
                <img
                  className="w-52 md:w-auto h-auto md:h-52 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)]"
                  src={image2}
                  alt="Image2"
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] bg-[#FAFAF9] rounded-md flex flex-col justify-end">
              <img src={image3}></img>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Left Card */}
          <div className="w-full md:w-[48%] bg-gradient-to-r from-[#f9f9f9] to-[#e0f7fa] p-6 border border-[#dcdcdc] rounded-xl shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <img
                src={icon5}
                className="h-8 w-8"
                alt="Icon5"
                data-aos="zoom-in-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <div className="flex items-center gap-3 cursor-pointer text-[#00897b] hover:text-[#004d40]">
                <span>Learn more</span>
                <div className="h-7 w-7 rounded-full border-2 border-[#00897b] flex justify-center items-center">
                  <img src={arrow} alt="Arrow" className="h-4 w-4 rotate-45" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <h3 className="font-semibold text-xl text-[#333333]">Access Your Files, Photos, and Documents Privately</h3>
              <p className="text-[#555555] text-base">
                StreamDrive's end-to-end encryption keeps your files private and secure, ensuring only you and trusted contacts can access them.
              </p>
            </div>

            <img
              src={image4}
              className="w-full rounded-lg shadow-lg"
              alt="Secure File Access"
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
          </div>

          {/* Right Card */}
          <div className="relative w-full md:w-[48%] bg-gradient-to-r from-[#f7f7f7] to-[#fff3e3] p-6 border border-[#e0e0e0] rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-gradient-to-r from-[#ff7ec1] to-[#f3a6c7] text-[#9c2a5f] text-sm px-4 py-2 rounded-lg font-semibold shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                ENHANCED PRIVACY FEATURES
              </span>

              <div className="flex items-center gap-3 cursor-pointer text-[#00796b] hover:text-[#004d40] transition-all ease-in-out">
                <span className="font-semibold">Learn more</span>
                <div className="h-7 w-7 rounded-full border-2 border-[#00796b] flex justify-center items-center">
                  <img src={arrow} alt="Arrow" className="h-4 w-4 rotate-45 transition-all ease-in-out" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <h3 className="font-semibold text-xl text-[#2a2a2a]">Full Authority Over Who Accesses Your Files</h3>
              <p className="text-[#555555] text-base">
                Take Charge of Who Views, Shares, or Accesses Your Files, Photos, and Documents. With this feature, you control your content—ensuring only trusted individuals can interact with it.
              </p>
              <div className="text-[#009F7A] font-bold mt-2">Approve or Reject Access Requests</div>
            </div>

            <div className="h-[60%] flex flex-col gap-2">
              {/* Card 1 */}
              <div className="flex items-center gap-2 bg-[#f9f9f9] p-2 rounded-lg shadow-md mb-2 hover:bg-[#f1f1f1] transition-all duration-300 ease-in-out hover:shadow-xl">
                <div className="h-8 w-8 rounded-full bg-[#009F7A] flex justify-center items-center">
                  <i className="fa-solid fa-check text-white text-lg"></i>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col pl-3">
                    <div className="text-base font-medium text-[#333]">Raj wants to share a 📄 document</div>
                    <div className="text-[#8e8e8e] text-xs">10:00 AM</div>
                  </div>
                  <div className="w-12 flex justify-center items-center">
                    <img src={frame1} className="w-10 h-10 rounded-full object-cover" alt="User Image" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-2 bg-[#f9f9f9] p-2 rounded-lg shadow-md mb-2 hover:bg-[#f1f1f1] transition-all duration-300 ease-in-out hover:shadow-xl">
                <div className="h-8 w-8 rounded-full bg-[#009F7A] flex justify-center items-center">
                  <i className="fa-solid fa-check text-white text-lg"></i>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col pl-3">
                    <div className="text-base font-medium text-[#333]">Sakshi is requesting to read your 📄 file</div>
                    <div className="text-[#8e8e8e] text-xs">10:30 AM</div>
                  </div>
                  <div className="w-12 flex justify-center items-center">
                    <img src={frame2} className="w-10 h-10 rounded-full object-cover" alt="User Image" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-2 bg-[#f9f9f9] p-2 rounded-lg shadow-md mb-2 hover:bg-[#f1f1f1] transition-all duration-300 ease-in-out hover:shadow-xl">
                <div className="h-8 w-8 rounded-full bg-[#EF5A3C] flex justify-center items-center">
                  <i className="fa-solid fa-times text-white text-lg"></i>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col pl-3">
                    <div className="text-base font-medium text-[#333]">Anonymous is requesting access to your files</div>
                    <div className="text-[#8e8e8e] text-xs">11:45 AM</div>
                  </div>
                  <div className="w-12 flex justify-center items-center">
                    <img src={frame} className="w-10 h-10 rounded-full object-cover" alt="User Image" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>

      {/* rk */}
      <div className="py-12 w-11/12 mx-auto">
        <div className="mb-10 flex flex-col md:flex-row gap-4 md:justify-between md:items-end">
          <div className="w-full md:w-[55%]">
            <h2 className="text-5xl font-bold text-gray-900">Pricing Plans</h2>
            <p className="text-gray-600 mt-4">
              Choose a plan that fits your needs. Get started with a free option, or
              upgrade to enjoy premium features like 1 TB of storage, custom domains, and
              advanced admin tools. No hidden fees or long-term commitments.
            </p>
          </div>

        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border p-6 rounded-xl bg-gray-50 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ${index === 3 ? "bg-gradient-to-r from-blue-500 to-indigo-700 text-white" : "bg-white text-gray-900"}`}
              data-aos="zoom-in-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-4xl font-bold mt-2">{plan.price}</p>
              <p className="text-sm text-gray-600">{plan.period}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleSecureClick}
                className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform ${index === 3 ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>



        {/* Promotional Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 py-8 px-4 flex flex-col md:flex-row justify-between items-center rounded-xl border border-transparent shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
          <div
            className="w-full md:w-1/2 lg:w-1/3 text-white"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h2 className="text-3xl font-bold leading-tight">Want a workstation for your startup?</h2>
            <p className="text-lg text-gray-200 mt-4">
              Apply now and enjoy an exclusive{" "}
              <span className="text-yellow-400 font-semibold">₹3,999 off</span> on our yearly business plan!
            </p>

            <div className="mt-6">
              <button
                onClick={handleSecureClick}
                className="px-6 py-3 text-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                Apply for workstation →
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
            <img
              src={logo}
              alt="Workstation Logo"
              className="w-full h-96 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
              data-aos-mirror="true"
              data-aos-once="true"
            />
          </div>
        </div>

        {/* testimonial */}

        <div className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-4 lg:px-0">
            <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
              What Our Users Say
            </h2>
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-xl"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="w-full h-auto">
                  <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 mx-auto rounded-full mb-6 object-cover transition-transform duration-200 ease-in-out transform hover:scale-110"
                    />
                    <p className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="mt-6">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <section
          className="flex flex-col items-center justify-center py-20 px-4 md:px-8 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg shadow-indigo-500/50"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="text-center mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              Seamless Storage, Unmatched Security
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              All you need is your precious memories and private data. We handle the rest.
            </p>
            <button
              onClick={handleSecureClick}
              className="px-8 py-4 bg-white text-black rounded-full shadow-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up for free →
            </button>
          </div>
        </section>

      </div>
      <footer className="bg-gradient-to-r from-indigo-100 to-purple-100 py-12 md:px-8">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0">
      {/* Logo & Copyright */}
      <div className="text-center lg:text-left">
        <img src={logo} alt="Streamdrive Logo" className="mb-4 h-16" />
        <p className="text-sm text-gray-600">
          Crafted with passion by the Streamdrive Team 🚀 for your data security.
        </p>
        <p className="text-sm text-gray-600">
          © 2024 Streamdrive, Inc. All rights reserved.
        </p>
      </div>

      {/* Footer Links */}
      <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16">
        {/* Learn Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">LEARN MORE</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                How Streamdrive Keeps Your Data Safe
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Cloud Storage 101: A Beginner's Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Streamdrive Features You Need to Know
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                How We Encrypt Your Data
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">LEGAL</h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Acceptable Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
                Transparency Report
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">CONNECT WITH US</h3>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default LandingHome;
