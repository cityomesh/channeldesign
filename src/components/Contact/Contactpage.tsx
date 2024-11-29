"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FacilitiesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white">
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] flex items-center justify-center px-4 sm:px-4 mt-[6rem]">
        <Image
        src="/dhs.png"
        alt="Facility Image"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
        />
        <div className="flex flex-col">
          <div className="sliding-text text-6xl font-bold relative z-10 text-white text-center animate-slide-down">
            Contact
          </div>
        </div>

        <style jsx>{`
          @keyframes slideDown {
            from {
              transform: translateY(-70px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-slide-down {
            animation: slideDown 1s forwards;
          }
        `}</style>
      </div>
      <div className="flex flex-col lg:flex-row md:w-[80%] mx-auto justify-center p-6">
        <div className="w-full lg:w-3/6 p-4 space-y-6">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-geo-alt-fill text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-blue-950">Address :</h3>
              <h1 className="font-bold">City Online Media Pvt Ltd.
                </h1>
              <p className="text-slate-600 tracking-wider">
                CONTACT INFO
                709, 7 th Floor,
                Aditya Trade Center,
                Ameerpet, Hyderabad,
                Telangana 500038
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-telephone-fill text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-blue-950">Mobile :</h3>
              <p className="text-slate-600 tracking-wider">++91 74164 10888</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-envelope-fill text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-blue-950">Email :</h3>
              <p className="text-slate-600 tracking-wider">srrao@ulka.tv
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/6 p-4">
          <form className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full px-3 py-4 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:shadow focus:border-transparent"
                />
                <label className="absolute left-3  text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                  FIRSTNAME
                </label>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full px-3 py-4 border border-blue-500  rounded focus:outline-none focus:ring-2 focus:shadow focus:border-transparent"
                />
                <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                 LASTNAME
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-3 py-4 border border-blue-500  rounded focus:outline-none focus:ring-2 focus:shadow focus:border-transparent"
              />
              <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                Subject
              </label>
            </div>
            <div className="relative">
              <textarea
               
                placeholder=" "
                className="peer w-full px-3 py-2 border border-blue-500  rounded focus:outline-none focus:ring-2 focus:shadow focus:border-transparent"
              ></textarea>
              <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.492635979274!2d78.4464182!3d17.4364301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c518f1af29%3A0xc0f5f478e7d34d42!2sCity%20Online%20Services%20Limited!5e0!3m2!1sen!2sin!4v1698358298192!5m2!1sen!2sin"
        className="w-[95%] lg:w-[80%] h-96 mb-12 mx-auto"
        loading="lazy"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
      ></iframe>      
    </div>
  );
};

export default FacilitiesPage;
