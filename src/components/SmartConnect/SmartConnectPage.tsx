"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SmartConnectPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      imageUrl: './ulka.png',
      link: 'https://ulka.tv/',
    },
    {
      imageUrl: './iptvv.jpg',
      link: 'https://ulka.tv/ulka-lite',
    },
    {
      imageUrl: './futures4.jpg',
      link: 'https://ulka.tv/packs',
    },
    {
      imageUrl: './resa.png',
      link: 'https://www.android.com/better-together/',
    },
  ];
  
  const images = [
    { src: "/rem.png", alt: "Image 1" },
    { src: "/smrt.png", alt: "Image 2" },
    { src: "/des.png", alt: "Image 3" },
    { src: "/maraj.png", alt: "Image 4" },  
  ];

  const texts = [
    {
      title: "Rcast Smart TV App for connected Smart Televisions",
      description:
        "ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      mobileAppText:
        "Available in Android and I-Phone Mobile App Stores.",
      moreInfo:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs.",
    },
    {
      title: "Smart TVs",
      description:
        "Smart TVs let you stream digital content with the help of in-built wifi, exposing you to a world of unlimited content. Choose from brands like Nokia, Motorola...",
      mobileAppText:
        "Available in Android and I-Phone Mobile App Stores.",
      storeText: "Available in Android and I-Phone Mobile App Stores.",
      moreInfo:
        "You can access online content and services directly on your television screen without the hassle of extra cables and devices.",
      footerText:
        "Smart TVs provide access to all of the popular streaming services, conveniently letting you watch your favorite movies and TV shows.",
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
  ];
  
  const services = [
    {
      description: "All Smart TVs , Smart STBs , Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.",
      image: "wifinet.png",
    },
    {
      description: "All type of Last Mile Distribution Networks are supported which include GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point and Point to Multipoint Wireless Links.",
      image: "online.png",
    },
    {
      description: "Rcast CDN Servers available various configurations to suit Small and Large Network with 1G Copper and 1G/10G/40G Fiber ports supporting 8000 to 100,000 concurrent users.",
      image: "ssta.png",
    },
    {
      description: "Rugged Fan-less Mini CDNs for small operators, communities and hotels having multiple 1G/2.5G LAN ports supporting 500 to 2000 users.",
      image: "asa.png",
    },
    {
      description: "Rcast Smart TV App for connected Smart Televisions ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process.",
      image: "style.png",
    },
    {
      description: "Distributed ledger technology (DLT) is a database of information that's shared and duplicated across a network of computers in different locations.",
      image: "dst.png",
    },
    {
      description: "SatLite is the newest, prepaid satellite pay-tv service in the Philippines powered by Cignal. This may be the most affordable DTH TV anyone can go for.",
      image: "dis.png",
    },
    {
      description: "A gigabit switch is a type of network switch, typically Ethernet-based, that allows devices to be connected to a LAN at speeds of 1 Gbps or higher.",
      image: "swsa.png",
    },
    {
      description: "Here's some information about ETH DC 12V, including a car cabin light and a coin COB injection module.",
      image: "qwa.png",
    },
    {
      title: "",
      description: "This white interior light has a color temperature of 6500 Kelvin, is waterproof, and has a voltage of 12 volts. It's a super bright LED with low battery consumption.",
      image: "ser.png",
    },
  ];
  
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 flex flex-col justify-center mt-[8rem] mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#0a0f2c] rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 w-64 h-80`}
            >
              <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
              <img
                src={service.image}
                alt={service.title}
                className="mt-4 w-34 h-24 object-contain rounded-xl"
              />
              <p className="mt-2 text-white text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="text-3xl font-semibold text-green-600 mb-4">
            {texts[activeIndex]?.mobileAppText}
          </div>
          <p className="text-gray-500 mb-6">{texts[activeIndex]?.moreInfo}</p>
          <p className="text-sm text-gray-400">
            {texts[activeIndex]?.footerText}
          </p>
        </div>
      </div>

      <div className="container lg:w-[80%] mb-16 mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={`Project ${index + 1}`}
                className="w-full h-[9rem] object-cover"
              />
              <div className="p-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 flex font-bold items-center mt-2"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartConnectPage;
