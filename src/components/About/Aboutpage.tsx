"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Aboutpage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: any) => setCurrentSlide(index);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const fourCardsData = [
    {
      title: "What is a DVB-S2 tuner",
      content: "To be a proactive, trusted technology partner that propels Maharaju IT Department towards a future of digital excellence and resilience.",
      image: "/swsa.png",
      bgColor: "bg-orange-500",
    },
    {
      title: "Iptv Digital Headend",
      content: "An IPTV headend receives television signals, typically from satellite or cable providers, and encodes them into a digital format suitable for distribution over an IP network.",
      image: "/tyt.webp",
      bgColor: "bg-blue-500",
    },
    {
      title: "CDN Server",
      content: "A CDN server is a part of a network of servers that speeds up the delivery of web content to users by storing cached copies of files on servers closer to the user.",
      image: "/cdns.jpeg",
      bgColor: "bg-pink-500",
    },
    {
      title: "Television be on AV HDMI",
      content: "Unless you're using one of those old analog TV's you will probably need an HDMI cord. Although most older televisions now are 4k and any standard speed HDMI cable will work well.",
      image: "/avm.jpg",
      bgColor: "bg-red-500",
    },
  ];

    const cards = [
      {
        description:
          'The Subscriber Management System provides multi level reseller management and revenue sharing with all the stake holders and also includes enhanced CRM features for the customer satisfaction. Android and IOS mobile Apps for subscription management and instant activations.',
          image: "/lko.png",
        },
      {
        description:
          'API integration with popular broadband billing systems to offer combo packs with IPTV bouquets. API integration to the DRM Application server to push the subscription data and customer information in real time to meet the regulatory compliances.',
          image: "/vdfc.png",
      },
      {
        description:
          'The system is built on robust Linux operating system. The application and database servers can be independently hosted for scalability. Realtime scalable options like Openstack and Kubernetes can be deployed for unlimited expansion.',
          image: "/links.png",
      },
      {
        description:
          'City Media is a technical partner of Pallycon Multi-DRM encryption service Provider and developed the DRM Application Server to meet the TRAI regulatory specifications. The DRM Server is integrated with Multi-DRM Key server with Site ID, Site Key and Access Key.',
          image: "/km.png",
        
      },
      {
        description:
          'DRM do not have any facility to activate and deactivate a Subscriber directly from the Graphical User Interface (GUI) terminal of DRM. All activation, de-activations, bouquets and channel assignments are done only in SMS and the data is pushed to DRM server.',
          image: "/lio.png",
      },
      {
        description:
          'The system is built on robust Linux operating system. The application and database servers can be independently hosted for scalability. Realtime scalable options like Openstack and Kubernetes can be deployed for unlimited expansion.',
          image: "/nc.jpeg",
      },
    ];

  return (
    <div className="bg-white">
      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[39rem] flex items-center justify-center px-4 sm:px-4 mt-[6rem]">
        <Image
          src="/kjk.webp"
          alt="Facility Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>

      <div className="w-full">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-center text-2xl text-blue-900 mt-2 font-bold mb-8">IPTV Headend Schematic</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fourCardsData.map((card, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-white flex flex-col justify-between h-[300px] ${card.bgColor} relative group transition-colors duration-300`}
              >
                <div
                  className="absolute inset-0 rounded-full bg-purple-600 opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100 transition-all duration-300 pointer-events-none"
                  style={{ width: "16rem", height: "16rem", margin: "auto", top: 0, bottom: 0, left: 0, right: 0 }}
                ></div>
                <h2 className="text-lg font-semibold mb-2 relative">{card.title}</h2>
                <p className="mb-4 text-sm relative">{card.content}</p>
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[8rem] object-cover rounded-b-lg relative"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem] flex items-center justify-center px-4 sm:px-4 mt-[-4rem]">
        <section className="container mx-auto px-4 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
          >
            <div>
              <Image
                src="/slide.jpg"
                alt="Healthcare Image 1"
                width={2000}
                height={800}
                className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
              />
            </div>
            <div>
              <Image
                src="/slide1.jpg"
                alt="Healthcare Image 2"
                width={2000}
                height={800}
                className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
              />
            </div>
            <div>
              <Image
                src="/slide3.jpg"
                alt="Healthcare Image 3"
                width={2000}
                height={800}
                className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
              />
            </div>
          </Carousel>
        </section>
      </div>

      <h2 className='text-center text-3xl font-bold mt-[-3rem] text-blue-950'>Subscriber Management System</h2>
      <div className="container mx-auto p-6 grid grid-cols-1 lg:w-[80%]  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md bg-white p-3 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden ">
              <img
                src={card.image}
                className="w-full h-48 object-cover  transform transition-transform duration-300 group-hover:scale-110"
              />
              
            </div>
            
            <div className="mt-5  p-4">
              <p className="text-md tracking-widest text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-10 md:flex-row items-center max-w-5xl mx-auto mb-8">
        <div
          className={`md:w-1/2 w-full h-full flex items-center justify-center ${
            animate ? "opacity-0 animate-slide-left" : ""
          }`}
        >
          <Image
            src="/po.png"
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
            <span className="font-bold text-[16px]">Pallycon</span>{" "}
            <span className="text-[#33CCC5]">
              is a Multi-DRM product of INKA networks who is a pioneer in the
              field of Digital Rights Management Software. It supports Google
              Widevine, Apple Fairplay, Microsoft Playready.
            </span>{" "}
            Authorizations tokens were issued to the subscribers for each channel
            access as per the subscription status of the subscriber in the DRM
            Application Server which is pushed from the SMS server at the time of
            subscription activations.
            <span className="text-[#0A8FC3]">
              {" "}
              City Media DRM server is currently using only Google Widevine.
            </span>
          </h2>
          <p className="mt-4 text-yellow-600">
            The token log server maintains the logs with subscriber id, device
            id, channel id, with time stamps. These logs provide subscriber
            viewership analysis of channels for rating of the channels which is
            authentic.
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
    </div>
  );
};

export default Aboutpage;
