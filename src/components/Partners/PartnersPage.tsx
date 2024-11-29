"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PartnersPage = () => {
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const staticImages = [
    { src: "/sdc.png", alt: "SDC Logo" },
    { src: "/sdc1.png", alt: "SDC1 Logo" },
    { src: "/sdc2.png", alt: "SDC2 Logo" },
    { src: "/cdv.png", alt: "SDC3 Logo" },
    { src: "/jfd.png", alt: "SDC4 Logo" },
    { src: "/fvd.png", alt: "SDC5 Logo" },
    { src: "/dsd.png", alt: "SDC6 Logo" },
    { src: "/swds.png", alt: "SDC7 Logo" },
    { src: "/swqs.png", alt: "SDC8 Logo" },
    { src: "/wses.png", alt: "SDC9 Logo" },
    { src: "/cdfvd.png", alt: "10 Logo" },
    { src: "/nmnc.png", alt: "SDC11 Logo" },
    { src: "/dcbz.png", alt: "SDC12 Logo" },
    { src: "/djkj.png", alt: "SDC13 Logo" },
    { src: "/hbn.png", alt: "SDC14 Logo" },
    { src: "/kmbc.png", alt: "SDC15 Logo" },
    { src: "/saxcd.jpg", alt: "SDC17 Logo" },
    { src: "/fcaq.png", alt: "SDC17 Logo" },
  ];
  const handleCardClick = (index: number) => {
    setHighlightedCards(prev => {
      const updatedCards = [...prev];
      updatedCards[index] = !updatedCards[index];
      return updatedCards;
    });
  };

  return (
    <div className="bg-white">
      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[40rem] flex items-center justify-center px-4 sm:px-4">
        <Image
          src="/network.png"
          alt="Facility Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>

      <div className="flex flex-col items-center mt-10 space-y-4 mb-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:max-w-5xl mx-auto">
          {[
            "Major PSUs BSNL and Railtel are our Network Partners for IPTV Services.",
            "More than 20 National and Regional ISPs are engaged in promoting and distributing our IPTV Services covering entire India.",
            "Some enthusiastic LCOs also are participating in IPTV distribution hosting Mini CDNs integrated to their FTTH equipment using IPTV VLAN.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-4 bg-[#0a0f2c] rounded shadow w-full transition duration-300 hover:bg-white group"
              style={{
                maxWidth: "400px",
              }}
            >
              <h2 className="text-lg sm:text-xl font-bold leading-6 sm:leading-7 text-white text-center group-hover:text-blue-500">
                <span className="block text-[18px] sm:text-base font-bold group-hover:text-blue-500">
                  Partner Info
                </span>
                <span className="block text-[15px] text-[#33CCC5] mt-2 group-hover:text-gray-400">
                  {text}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="flex flex-col items-center max-w-[1180px] mx-auto xl:px-[135px] xl:gap-[50px]">
          <p className="text-[#2B1C50] text-[16px] xl:text-[32px] text-center font-semibold mt-2">
            <span className="font-bold text-blue-800">Ulka Tv </span>Network Partners
          </p>
          <div className="flex space-x-16 overflow-hidden xl:max-w-[1160px] max-w-full">
            <div className="flex space-x-16 animate-loop-scroll">
              {staticImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={64}
                  width={100}
                  className="xl:h-[64px] w-auto cursor-pointer max-w-none h-[30px] sm:h-[50px] md:h-[60px] object-contain"
                />
              ))}
            </div>
            <div className="flex space-x-16 animate-loop-scroll">
              {staticImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={64}
                  width={100}
                  className="xl:h-[64px] w-auto cursor-pointer max-w-none h-[30px] sm:h-[50px] md:h-[60px] object-contain"
                />
              ))}
            </div>
          </div>

          <div className="my-[1px] flex flex-col justify-center items-center">
            <h1 className="mb-[40px] px-4 text-center">
              <span className="text-[#2B1C50] xl:text-[40px] text-[16px] font-semibold mr-2">
                Learn about
              </span>
              <span className="text-[#F7961E] xl:text-[40px] text-[16px] font-semibold">
                Regulatory Compliance
              </span>
            </h1>
            <video
                className="xl:w-[1170px] h-[437px] rounded-[20px] w-[300px] sm:w-[500px] md:w-[700px] object-cover"
                preload="none"
                autoPlay
                loop
                muted
            >
                <source src="/Getting.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-loop-scroll {
          display: flex;
          animation: loop-scroll 20s linear infinite;
        }
      `}</style>
      


      <div className="bg-white mt-[3rem] mb-8">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800">Telecom Regulatory Authority Of India</h2>
      </div>

      <section className="text-center container mx-auto px-8 mb-16 flex justify-center items-center">
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
                  src="/hdgd.jpeg" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">Our IPTV Infrastructure is Audited by TRAI empaneled Auditors for Regulatory Compliance.</h3>
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
                  src="/ghff.webp" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">Compliance and Subscription Audits were conducted by multiple Auditors including BECIL, KPMG, Deloitte, and others.</h3>
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
                  src="/jhdh.webp" 
                  alt="logo" 
                  width={200} 
                  height={300} 
                  className="w-[600px] h-[300px] object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg mt-4 text-[#032963] hover:text-white">Our Smart Apps, ULKA Lite and ULKA Mini were also Audited for Regulatory Compliance along with our Smart STBs. </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
