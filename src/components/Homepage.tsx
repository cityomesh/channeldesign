"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { MapPin, CalendarPlus, Hospital, Ambulance, Pill, Star } from "@phosphor-icons/react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Homepage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/dev.webp");
  const [isScrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const images = ["/kii.jpg", "/CRTs1.webp", "/cable3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);



  const featureData = [
    {
      text: "What is the future of TV in India",
      image: "/text.jpg",
    },
    {
      text: "What is the future of television",
      image: "/future2.jpeg",
    },
    {
      text: "What is the importance of television",
      image: "/import.jpg",
    },
    {
      text: "What is the development of television in India",
      image: "/future1.jpg",
    },
    {
      text: "What is the future of Media in India",
      image: "/digital.png",
    },
    {
      text: "What is the future of connected TV in India",
      image: "/card.png",
    },
    {
      text: "How do you see the future of media in 2030",
      image: "/media.jpg",
    },
    {
      text: "Which technology will boom in the future",
      image: "/0x0.webp",
    },
  ];

  const handleCardClick = (index: number) => {
    setHighlightedCards(prev => {
      const updatedCards = [...prev];
      updatedCards[index] = !updatedCards[index];
      return updatedCards;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    setDropdownOpen(false);
  };



  const services = [
    {
      title: "CRT Tube TV",
      description: "The Television sets are being upgraded at a very fast pace.4K Smart TVs are common today and the traditional Set-top-Boxes are unable to upgrade to the standards of 4K Televisions."
    },
    {
      title: "LCD / LED TV",
      description: "LED TVs are preferred for their energy efficiency, slimmer design, and enhanced picture quality compared to traditional LCDs. They offer better brightness, contrast, and a broader color spectrum."
    },
    {
      title: "SMART TV",
      description: "Smart TV share of new Television sales is more then 95%, Rcast 4K compatible distribution system has TRAI approved Virtual STB Application for Smart TVs and Smart Phones.."
    },
    {
      title: "Smart Mobile",
      description: "A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones, such as an operating system (OS)."
    },
    {
      title: "STB",
      description: "An electronic device that converts signals from cable, satellite. STBs can also be used to access pay-per-view channels, record content, and send and receive internet data."
    },
    {
      icon: "tools",
      title: "Stick",
      description: "A stick is either a short length of wood—part of a tree branch—or an implement made of wood, like a hockey stick, a walking stick, or the sticks you use to play a drum."
    }
  ];

  return (
    <div className="bg-white">        
    <div className="relative w-full xl:h-[50rem] lg:h-[40rem] sm:h-[20rem] h-[20rem] flex items-center justify-center overflow-hidden px-4 sm:px-4 mt-[6rem]">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
        ))}
      </div>
      <div
        className={`relative z-10 flex flex-col text-center transition-opacity duration-500 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="sliding-text text-[20px] sm:text-6xl font-bold animate-slide-in bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          style={{ position: "relative" }}
        >
          City Online Media Private Limited
        </div>

        <div
          className="text-white font-bold sm:text-[19px] mt-4 animate-slide-in-delay"
          style={{ position: "relative" }}
        >
          City Online Media (P) Limited <br />
          is promoted by technocrats having <br />
          more than two decades of experience in the Internet and Television
          Industry.
        </div>
      </div>
      <div className="absolute bottom-4 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        @keyframes slideInDelay {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in-delay {
          animation: slideInDelay 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>

    <div className="flex flex-col mt-10 md:flex-row items-center max-w-5xl mx-auto mb-8">
      <div
        className={`md:w-1/2 w-full h-full flex items-center justify-center ${
          animate ? "opacity-0 animate-slide-left" : ""
        }`}
      >
        <Image
          src="/smart.png"
          alt="Team Meeting"
          width={800}
          height={600}
          className="object-cover w-[90%] h-auto transition-opacity duration-1000 ease-in-out"
        />
      </div>

      <div
        className={`md:w-1/2 w-full p-4 ${
          animate ? "opacity-0 animate-slide-right" : ""
        }`}
      >
        <h2 className="text-3xl font-bold leading-10 text-black text-[14px]">
          <span className="font-bold text-[16px]">Rcast</span>{" "}
          <span className="text-[#33CCC5]">
          the IPTV SAAS (Software As A Solution) is deployed for ULKA TV services for more than 4 years. The Concept of IPTV is tested by Public and Private ISPs by deploying ULKA TV in their broadband Networks.
          </span>{" "}
          Evaluation of responses from ISPs and users helped us to proceed to the next stage of development in the right direction with clarity on features and functionality of the product. We focused on the quality and distribution efficiency of IPTV service which can be deployed in all types of broadband networks.
          <span className="text-[#0A8FC3]">
            {" "}
            ULKA TV.
          </span>
        </h2>
        <p className="mt-4 text-yellow-600">
          using Rcast successfully passed all the Audits conducted by the Broadcasters and its own self Audits for the last four years....
        </p>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-left {
          animation: slide-left 2s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 2s ease-out forwards;
        }
      `}</style>
    </div>

      <section className="container mx-auto px-4 flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div
            className={`bg-white-200 shadow-lg rounded-[20px] p-4 text-center 
                        ${highlightedCards[0] ? "ring-1 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out transform hover:scale-105`}
            onClick={() => handleCardClick(0)}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/etv.png"
                alt="CRT Tube Tv"
                width={120}
                height={120}
                className="w-[15rem] h-[9rem] rounded-[1.5rem]"
              />
              <h3 className="text-lg font-semibold mt-2 text-blue-600">CRT Tube Tv</h3>
              <a
                href="https://www.reddit.com/r/crtgaming/comments/10unuwm/where_can_i_find_a_good_crt_tv_stand_i_need_one/?rdt=61143"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-[#e38516] focus:outline-none focus:ring-2 focus:ring-[#190d5f] focus:ring-opacity-50 transition-all"
                >
                  View Details
                </button>
              </a>
            </div>
          </div>
          <div
            className={`bg-white-200 shadow-lg rounded-[20px] p-4 text-center 
                        ${highlightedCards[1] ? "ring-1 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out transform hover:scale-105`}
            onClick={() => handleCardClick(1)}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/lcd.png"
                alt="LCD / LED"
                width={120}
                height={120}
                className="w-[15rem] h-[9rem] rounded-[1.5rem]"
              />
              <h3 className="text-lg font-semibold mt-2 text-blue-600">LCD / LED</h3>
              <a
                href="https://www.nytimes.com/wirecutter/reviews/best-lcd-led-tv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-[#e38516] focus:outline-none focus:ring-2 focus:ring-[#190d5f] focus:ring-opacity-50 transition-all"
                >
                  View Details
                </button>
              </a>
            </div>
          </div>
          <div
            className={`bg-white-200 shadow-lg rounded-[20px] p-4 text-center
                        ${highlightedCards[2] ? "ring-1 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out transform hover:scale-105`}
            onClick={() => handleCardClick(2)}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/smarttv.png"
                alt="Smart Tv"
                width={120}
                height={120}
                className="w-[15rem] h-[9rem] rounded-[1.5rem]"
              />
              <h3 className="text-lg font-semibold mt-2 text-blue-600">Smart Tv</h3>
              <a
                href="https://www.amazon.in/smart-tv/s?k=smart+tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-[#e38516] focus:outline-none focus:ring-2 focus:ring-[#190d5f] focus:ring-opacity-50 transition-all"
                >
                  View Details
                </button>
              </a>
            </div>
          </div>
          <div
            className={`bg-white-200 shadow-lg rounded-[20px] p-4 text-center
                        ${highlightedCards[3] ? "ring-1 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out transform hover:scale-105`}
            onClick={() => handleCardClick(3)}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/setup.jpg"
                alt="TV HD Set Top Box"
                width={120}
                height={120}
                className="w-[15rem] h-[9rem] rounded-[1.5rem]"
              />
              <h3 className="text-lg font-semibold mt-2 text-blue-600">TV HD Set Top Box</h3>
                <a
                  href="https://www.tataplay.com/explore/set-top-boxes-packs/set-top-box?srsltid=AfmBOop6OWDtV8YFmA7QrzZOsYzQ3aAXTir_GoyCC13SZhZf6YQzEmj2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-[#e38516] focus:outline-none focus:ring-2 focus:ring-[#190d5f] focus:ring-opacity-50 transition-all"
                  >
                    View Details
                  </button>
                </a>
            </div>
          </div>
          <div
            className={`bg-white-200 shadow-lg rounded-[20px] p-4 text-center
                        ${highlightedCards[4] ? "ring-1 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out transform hover:scale-105`}
            onClick={() => handleCardClick(4)}
          >
            <div className="flex flex-col items-center">
              <Image
                src="/net.png"
                alt="NETTV Streamz+ Best Android TV"
                width={120}
                height={120}
                className="w-[15rem] h-[9rem] rounded-[1.5rem]"
              />
              <h3 className="text-lg font-semibold mt-2 text-blue-600">NETTV Android TV</h3>
              <a
                  href="https://www.nettv.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-[#e38516] focus:outline-none focus:ring-2 focus:ring-[#190d5f] focus:ring-opacity-50 transition-all"
                  >
                    View Details
                  </button>
                </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto lg:w-[80%] p-4 mt-[4rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-[20px] text-[#032963] text-left p-6 border border-gray-300 transition-colors duration-300 hover:bg-[#032963] hover:text-white"
            >
              <i className={`${service.icon} text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="tracking-wider hover:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white mt-6 p-6">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800">Technology</h2>
      </div>

      <section className="text-center container mx-auto px-8 mt-6 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          <div
            className={`bg-white shadow-xl border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 
                        ${highlightedCards[6] ? "ring-2 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out`}
            onClick={() => handleCardClick(6)}
          >
            <div className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-[20px] group-hover:border-2 group-hover:border-[#F7961E] transition-all duration-500">
                <Image 
                  src="/iptv.webp" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">2023 IPTV TVPlus PRO+ PROPLUS Android 9 2GB+16GB IPTV SET TOP Smart TV Box 2.4/5G Duo Band Wifi 600M Schedule Record Function with LIXSUNTEKÂ® Ethernet Cable.</h3>
            </div>
          </div>

          <div
            className={`bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 
                        ${highlightedCards[7] ? "ring-2 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out`}
            onClick={() => handleCardClick(7)}
          >
            <div className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-[20px] group-hover:border-2 group-hover:border-[#F7961E] transition-all duration-500">
                <Image 
                  src="/iptv.jpg" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">IPTV, or Internet Protocol television, is a relatively new and still evolving technology that Digital Cast is using to deliver TV service.</h3>
            </div>
          </div>

          <div
            className={`bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 
                        ${highlightedCards[8] ? "ring-2 ring-[#190d5f]" : ""} 
                        hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out`}
            onClick={() => handleCardClick(8)}
          >
            <div className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-[20px] group-hover:border-2 group-hover:border-[#F7961E] transition-all duration-500">
                <Image 
                  src="/what-is-iptv-2.webp" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">IPTV is a technology that delivers television content through internet protocol networks. IPTV uses internet connections to stream media content directly to users devices. </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white rounded-md shadow-lg p-6">
          <h2 className="text-center font-semibold text-blue-800 text-2xl font-poppins">Features</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-4">
        <div className="w-full lg:flex-1 p-2 flex justify-center items-center">
          <Image
            src={selectedImage}
            alt="Selected Feature"
            width={400}
            height={500}
            className="w-full lg:w-auto h-auto max-w-lg rounded-md object-cover"
          />
        </div>

        <div className="w-full lg:flex-1 p-2 space-y-4 mt-5 cursor-pointer">
          {featureData.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-900 hover:text-white font-poppins font-bold text-gray-700"
              onClick={() => setSelectedImage(feature.image)}
            >
              {feature.text}
            </div>
          ))}
        </div>
        <div className="w-full lg:flex-1 p-2 space-y-4 mt-5 cursor-pointer">
          {featureData.slice(4).map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-900 hover:text-white font-poppins font-bold text-gray-700"
              onClick={() => setSelectedImage(feature.image)}
            >
              {feature.text}
            </div>
          ))}
        </div>
      </div>
      </div>      
    </div>
  );
};

export default Homepage;
