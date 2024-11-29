"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const IptvCableTvPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionClicked_1, setQuestionClicked_1] = useState(true);
  const [questionClicked_2, setQuestionClicked_2] = useState(false);
  const [questionClicked_3, setQuestionClicked_3] = useState(false);
  const [selectedTypeOfAns, setSelectedTypeOfAns] = useState(
    "InpharmD&apos;s Answer"
  );
  const [selectedBtn, setSelectedBtn] = useState("Background");

  const handleAnsType = (type: string) => {
    setSelectedTypeOfAns(type);
  };

  const handleBtnClicked = (btn: string) => {
    setSelectedBtn(btn);
  };

  const handleQueClicked_1 = () => {
    setQuestionClicked_1(true);
    setQuestionClicked_2(false);
    setQuestionClicked_3(false);
  };

  const handleQueClicked_2 = () => {
    setQuestionClicked_2(true);
    setQuestionClicked_1(false);
    setQuestionClicked_3(false);
  };

  const handleQueClicked_3 = () => {
    setQuestionClicked_3(true);
    setQuestionClicked_2(false);
    setQuestionClicked_1(false);
  };

  const images = [
    { src: "/ol.webp", alt: "Image 1" },
    { src: "/ipsstv.png", alt: "Image 2" },
    { src: "/DTH.webp", alt: "Image 3" }, 
    { src: "/ggg.jpg", alt: "Image 4" },
  ];

  const texts = [
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText:
        "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "",
    },
    {
      title: "Yes, the R-Cast app is available on Android smartphones",
      description:
        "The app is intended to cast videos from websites that don't have a Roku channel. You can install the R-Cast app on your Android device and the R-Cast channel on your Roku device.",
      mobileAppText:
        "Available in Android and I-Phone Mobile App Stores.",
      moreInfo:
        "Android is simply one platform (type) of Smartphone. Examples of other platforms are: Apple iPhone, Windows Phone, etc.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs.",
    },
    {
      title: "We distribute nearly 700 licensed Satellite Channels and can include local channels on select CDN servers as per requirements of distributors.",
      description:
        "Interconnect Agreements with all the Major Broadcasters including Star TV, ZEE, SONY, TV18, ETV, SUN, Gemini, Times, India Today, Discovery, OTV, NDTV and others.",
      mobileAppText:
        "Choice of Broadcaster Bouquets and Ala-carte channels.",
      moreInfo:
        " Best value Regional and Multilingual Package offers of ULKA TV which includes 360+ Free to Air Channels.",
    },
    {
      title: "Internet Protocol Television",
       description:
          "Uses the internet to stream live TV and on-demand video content. IPTV requires a stable internet connection and a set-top box to convert the content for viewing on a TV. IPTV is a good choice if you want flexibility.",
        mobileAppText:
          "delivers television content over the traditional cable or satellite signals",
        moreInfo:
          "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
        footerText:
          "",
      },
  ];
  
  return (
    <div className="bg-white">
      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[39rem] flex items-center justify-center px-4 sm:px-4 mt-[6rem]">
        <Image
          src="/TiviMate.webp"
          alt="Facility Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
     
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[4rem]">
        <div>
          <Carousel
            showThumbs={true}
            autoPlay
            infiniteLoop
            onChange={(index) => setActiveIndex(index)}
          >
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mb-8 mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {texts[activeIndex]?.title}
          </h1>
          <p className="text-gray-600 mb-4">{texts[activeIndex]?.description}</p>
          <div className="text-xl font-semibold text-green-600 mb-4">
            {texts[activeIndex]?.mobileAppText}
          </div>
          <p className="text-gray-500 mb-6">{texts[activeIndex]?.moreInfo}</p>
          <p className="text-sm text-gray-400">
            {texts[activeIndex]?.footerText}
          </p>
        </div>
      </div>
     
      <div className="flex justify-center items-center">
        <div className="flex justify-center w-[90rem] items-center rounded-[30px] flex-col bg-gradient-to-b from-[#05020A] to-[#200C42] p-[32px] md:p-[37.5px] xl:py-[75px] xl:px-[135px]">
            <h2 className="text-white text-[16px] md:text-[20px] xl:text-[30.556px] font-semibold cursor-default">
            What is IPTV vs Cable TV?
            </h2>
            <p className="text-[#9990a9] text-[10px] md:text-[16px] xl:text-[20px] font-normal text-center">
            Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k against Rcast
            CDN (Streaming Server) at Rs.15k-50k, IPTV streams TV content via the internet, offering on-demand access,
            flexibility, and typically lower costs, but it depends on a stable internet connection.
            </p>

            <div className="grid grid-cols-3 gap-4 py-[20px] md:py-[40px] xl:py-[71.11px] max-w-[1180px] mx-auto">
                <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#F8FEFB] to-[#A0FBCB] px-[14.125px] py-[9px] md:px-[28px] md:py-[17px] xl:py-[30.889px] xl:px-[87.389px] rounded-[5px] md:rounded-[10px] xl:rounded-[17.8px] cursor-default transition transform hover:scale-105 hover:shadow-lg">
                    <p className="text-black mt-[2px] md:mt-[6px] text-center xl:mt-[16px] text-[10px] md:text-[16px] xl:text-[28.444px] font-semibold md:whitespace-nowrap">
                    310mbps
                    </p>
                    <p className="text-black text-[10px] md:text-[16px] xl:text-[28.444px] font-normal">1Gbps</p>
                </div>

                <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#F7FEFF] to-[#92F6FF] px-[14.125px] py-[9px] md:px-[28px] md:py-[17px] xl:py-[30.889px] xl:px-[50.389px] rounded-[5px] md:rounded-[10px] xl:rounded-[17.8px] cursor-default transition transform hover:scale-105 hover:shadow-lg">
                    <p className="text-black text-[10px] md:mt-[6px] md:text-[16px] xl:text-[28.444px] mt-[2px] xl:mt-[16px] font-semibold">
                    300k-400k
                    </p>
                    <p className="text-black text-center text-[10px] md:text-[16px] xl:text-[28.444px] font-normal md:whitespace-nowrap">
                    15k-50k
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#FFECD7] to-[#F0AB62] px-[14.125px] py-[9px] md:px-[28px] md:py-[17px] xl:py-[30.889px] xl:px-[87.389px] rounded-[5px] md:rounded-[10px] xl:rounded-[17.8px] cursor-default transition transform hover:scale-105 hover:shadow-lg">
                    <p className="text-black md:mt-[6px] text-[10px] md:text-[16px] xl:text-[28px] mt-[2px] xl:mt-[28.444px] font-semibold">
                    WDM
                    </p>
                    <p className="text-black text-[10px] md:text-[16px] xl:text-[28.444px] font-normal">CAPEX</p>
                </div>
                </div>

            <p className="text-[14px] md:text-[16px] xl:text-[20px] font-normal text-center flex flex-col">
            <span className="text-[#8E859C]">
                Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.
            </span>
            <span className="text-white">
                Rcast distributes the IPTV signal in existing local broadband Networks
            </span>
            <span className="text-white">
                (Networks and Networks and cost of dedicated high power laser network can be avoided..)
            </span>
            </p>

          </div>
        </div>

        <div className="bg-white">
        <div className="cursor-default mx-10 xl:py-[80px] py-[40px] xl:max-w-[1180px] xl:mx-auto">
            <p className="text-[16px] text-center font-semibold xl:text-[40px] xl:mb-[40px]">
            <span className="text-[#2B1C50]">
                What is IPTV
            </span>
            <span className="text-[#F7961E] ml-2">vs Cable TV</span>
            </p>

            <div className="bg-blue-500 flex gap-4 p-[20px] rounded-[40px] mt-3 bg-gradient-to-b from-[#05020A]">
            <div className="bg-white rounded-[10px] w-[45%] relative px-2 xl:w-[45%] min-h-[200px] xl:min-h-[500px] xl:pl-[24px] xl:py-[24px]">
                <p className="text-[#72718A] cursor-default font-semibold mt-2 text-[5px] md:text-[10px] xl:text-[18px]">
                Frequently asked question
                </p>
                <div className="flex flex-col gap-2 mt-3 w-full">
                <div
                    onClick={handleQueClicked_1}
                    className={`cursor-pointer text-[4px] md:text-[7px] xl:text-[14px] p-1 pl-2 ${
                    questionClicked_1
                        ? "w-full  rounded-tl-[8px] rounded-bl-[8px] xl:mt-[37px]  bg-[#F3F2FB] font-medium text-[#26253B] border-r-[1px] xl:border-r-[4px] border-[#F7961E] xl:pt-[17px] xl:pr-[77px] xl:pb-[15px] xl:pl-[20px]"
                        : "xl:mt-[37px] xl:mr-[24px] border-[1px] font-medium text-[#26253B] border-[#F3F2FB] rounded-lg xl:pt-[17px] xl:pr-[0px]  xl:pb-[15px] xl:pl-[20px] "
                    } `}
                >
                    What is the bandwidth requirement for a cable TV trunk line compared to Rcast?
                </div>

                <div
                    onClick={handleQueClicked_2}
                    className={`cursor-pointer text-[4px] md:text-[7px] xl:text-[14px] p-1 pl-2 ${
                    questionClicked_2
                        ? "w-full rounded-tl-[8px] xl:mt-[37px] rounded-bl-[8px] bg-[#F3F2FB] font-medium text-[#26253B] border-r-[1px] xl:border-r-[4px] border-[#F7961E] xl:pt-[17px] xl:pr-[77px] xl:pb-[15px] xl:pl-[20px]"
                        : "xl:mt-[37px] xl:mr-[24px] border-[1px] font-medium text-[#26253B] border-[#F3F2FB] rounded-lg xl:pt-[17px] xl:pr-[0px]  xl:pb-[15px] xl:pl-[20px]"
                    } `}
                >
                    What is the cost difference between the equipment required for Cable TV distribution and Rcast CDN?
                </div>

                <div
                    onClick={handleQueClicked_3}
                    className={`cursor-pointer text-[4px] md:text-[7px] p-1 xl:text-[14px] pl-2 ${
                    questionClicked_3
                        ? "w-full  rounded-tl-[8px] xl:mt-[37px] rounded-bl-[8px]  bg-[#F3F2FB] font-medium text-[#26253B]   xl:border-r-[4px] border-r-[1px] border-[#F7961E] xl:pt-[17px] xl:pr-[77px] xl:pb-[15px] xl:pl-[20px]"
                        : "xl:mt-[37px] xl:mr-[24px] border-[1px] font-medium text-[#26253B] border-[#F3F2FB] rounded-lg  xl:pt-[17px] xl:pr-[0px]  xl:pb-[15px] xl:pl-[20px]"
                    } `}
                >
                What additional infrastructure is required for the distribution of digital cable TV, and how does it impact the CAPEX?
                </div>

                <div className="flex justify-start items-center gap-1 xl:mt-4 w-full">
                    <div className="w-full md:w-[90%]">
                    <input
                        type="text"
                        placeholder="Ask any clinical question?"
                        className=" focus:outline-blue-500 border w-full border-[#F3F2FB] p-1 xl:p-2 text-[4px]  md:text-[12px] rounded-lg "
                    />
                    </div>
                    
                </div>
                </div>
            </div>

            <div className="bg-white rounded-[20px] w-[55%] p-3">
                {questionClicked_2 ? (
                <div className="flex flex-col mt-[10%] items-center ">
                    
                    <button className=" text-white shadow-xl bg-[#F7961E] font-semibold flex justify-center 
                    p-1 gap-1 rounded-full mt-2">
                    <EastOutlinedIcon
                        className=" text-black bg-white rounded-full xl:mt-[6px]"
                    />
                    <span className=" relative text-[8px] xl:text-[20px] mt-[6px] xl:mt-[2px] mr-1">
                        {" "}
                        Edge QAM modulator{" "}
                    </span>
                    </button>
                    <p className="text-[4px] md:text-[7px] xl:text-[14px] cursor-default font-normal xl:mt-[20px] mt-2">
                    Cable TV requires an Edge QAM modulator and an EDFA (Erbium-Doped Fiber Amplifier) at each distribution location.
                    The cost for this equipment is approximately Rs. 300,000 to Rs. 400,000 per location.
                    These components are necessary for delivering high-quality signals to multiple users in the cable TV setup.
                    In contrast, Rcast utilizes a CDN (Content Delivery Network) with a streaming server for distribution.
                    The cost of the Rcast CDN setup is significantly lower, ranging between Rs. 15,000 and Rs. 50,000.
                    This cost efficiency makes Rcast more scalable for modern content delivery needs.
                    Cable TVs higher cost is due to the specialized hardware needed for signal modulation and amplification.
                    Rcast leverages internet-based streaming, which reduces the need for expensive distribution hardware.
                    The pricing difference highlights Rcast's affordability for expanding or upgrading distribution networks.
                    Overall, Rcast offers a cost-effective alternative to traditional cable TV infrastructure.
                    </p>
                </div>
                ) : (
                <>
                    <div className="flex gap-4 items-center justify-center border-b-[1px] border-[#F3F2FB]">
                    <span
                        className={`cursor-pointer text-[5px] xl:text-[18px] xl:p-[14px] md:text-[9px] font-semibold  ${
                        selectedTypeOfAns === "InpharmD&apos;s Answer"
                            ? " text-[#F7961E] xl:border-b-[4px] border-b border-[#F7961E]"
                            : " text-[#72718A] "
                        } `}
                        onClick={() => handleAnsType("InpharmD&apos;s Answer")}
                    >
                        IPTV vs Cable Tv Answer
                    </span>
                    <span
                        className={`cursor-pointer text-[5px] md:text-[9px] xl:text-[18px] xl:p-[14px] font-semibold  ${
                        selectedTypeOfAns === "Generative AI&apos;s Answer"
                            ? " text-[#F7961E] xl:border-b-[4px] border-b border-[#F7961E]"
                            : " text-[#72718A] "
                        } `}
                        onClick={() => handleAnsType("Generative AI&apos;s Answer")}
                    >
                        Generative AI&apos;s Answer
                    </span>
                    </div>

                    {selectedTypeOfAns === "InpharmD&apos;s Answer" ? (
                    <>
                        <div className="mb-[20px] md:mb-[30px] cursor-default ">
                        <p className="mb-[12px] xl:mt-[30px] mt-2 text-[5px] xl:text-[30px] md:text-[10px] font-semibold text-[#26253B]">
                            INTRODUCTION BY IPTV
                        </p>
                        <p className="text-[4px] xl:text-[14px] md:text-[7px] font-normal">
                            The bandwidth requirement for a cable TV trunk line is 2GB to 3GB, while Rcast requires 310Mbps to 1Gbps of bandwidth.
                            <span className="text-[#F7961E]"> read more </span>
                        </p>
                        </div>

                        <p className="border-b-[1px] border-[#F3F2FB] flex gap-4 max-w-fit ">
                        <span
                            className={`cursor-pointer text-[4px] md:text-[8px] xl:text-[16px] font-medium xl:pb-2 ${
                            selectedBtn === "Background"
                                ? " text-[#F7961E] xl:border-b-[2px] border-b border-[#F7961E]"
                                : "text-[#72718A]"
                            } `}
                            onClick={() => handleBtnClicked("Background")}
                        >
                            Background
                        </span>
                        <span
                            className={` cursor-pointer text-[4px] md:text-[8px] xl:text-[16px] font-medium xl:pb-2 ${
                            selectedBtn === "Literature Review"
                                ? " text-[#F7961E] xl:border-b-[2px] border-b border-[#F7961E]"
                                : "text-[#72718A]"
                            } `}
                            onClick={() => handleBtnClicked("Literature Review")}
                        >
                            Literature Review
                        </span>
                        <span
                            className={` cursor-pointer text-[4px] md:text-[8px] xl:text-[16px] font-medium xl:pb-2 ${
                            selectedBtn === "References"
                                ? " text-[#F7961E] xl:border-b-[2px] border-b border-[#F7961E]"
                                : "text-[#72718A]"
                            } `}
                            onClick={() => handleBtnClicked("References")}
                        >
                            References
                        </span>
                        </p>
                        {selectedBtn === "Background" ? (
                        <div className="text-[4px] md:text-[7px] xl:text-[14px] cursor-default font-normal xl:mt-[20px] mt-2">
                            Cable TV trunk lines require a dedicated bandwidth of 2GB to 3GB.
                            Rcast, on the other hand, operates with a bandwidth of 310Mbps to 1Gbps.
                            Cable TV generally demands more consistent bandwidth for uninterrupted service.
                            Rcast uses less bandwidth due to its optimized streaming technologies.
                            Overall, Rcast is more bandwidth-efficient compared to traditional cable TV systems.
                            Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.
                        </div>
                        ) : (
                        ""
                        )}
                        {selectedBtn === "Literature Review" ? (
                        <div className="text-[14px] my-3 font-normal cursor-default">
                            
                        </div>
                        ) : (
                        ""
                        )}
                    </>
                    ) : (
                    ""
                    )}

                    {selectedTypeOfAns === "Generative AI&apos;s Answer" ? (
                    <>
                        <div className=" text-[4px] md:text-[7px] font-normal cursor-default mt-2 xl:text-[14px] xl:mx-[32px] xl:my-[51px]">
                        <p>
                        Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast.
                        </p>

                        <p>
                        Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k against Rcast    CDN (Streaming Server) at Rs.15k-50k.
                        </p>

                        <p>
                        Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution. Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.
                        </p>
                        </div>
                    </>
                    ) : (
                    ""
                    )}
                </>
                )}
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default IptvCableTvPage;
