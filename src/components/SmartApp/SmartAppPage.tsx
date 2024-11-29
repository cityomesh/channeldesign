"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Item {
  label: string;
  image: string;
  alt: string;
}

const SmartAppPage: React.FC = () => {
  const softwareItems: Item[] = [
    { label: "Smartapp PLANNER™", image: "/resa.png", alt: "Smartapp PLANNER™ Image" },
    { label: "Smartapp FIELD™", image: "/svs.webp", alt: "Smartapp FIELD™ Image" },
    { label: "Smartapp FINANCE™", image: "/smarttv.jpeg", alt: "Smartapp FINANCE™ Image" },
    { label: "Smartapp SAFETY™", image: "/smart.png", alt: "Smartapp SAFETY™ Image" },
    { label: "AppStudio™", image: "/smarttv.png", alt: "AppStudio™ Image" },
    { label: "Smartapp ONE™", image: "/mobil.jpeg", alt: "Smartapp ONE™ Image" },
  ];
  
  const hardwareItems: Item[] = [
    { label: "Jobsite BADGE™", image: "/lcd.png", alt: "Jobsite BADGE™ Image" },
    { label: "Jobsite ACCESS™", image: "/Apple-.webp", alt: "Jobsite ACCESS™ Image" },
    { label: "Jobsite BOARD™", image: "/des.png", alt: "Jobsite BOARD™ Image" },
    { label: "Jobsite RTLS™", image: "/futures4.jpg", alt: "Jobsite RTLS™ Image" },
    { label: "Jobsite GPS™", image: "/future1.jpg", alt: "Jobsite GPS™ Image" },
    { label: "Jobsite ATTENDANCE™", image: "/maxresdefault.jpg", alt: "Jobsite ATTENDANCE™ Image" },
  ];
  
  const services = [
    {
      description: "All Smart TVs , Smart STBs , Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.",
      image: "smrt.png",
    },
    {
      description: "All type of Last Mile Distribution Networks are supported which include GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point and Point to Multipoint Wireless Links.",
      image: "resa.png",
    },
    {
      description: "Rcast CDN Servers available various configurations to suit Small and Large Network with 1G Copper and 1G/10G/40G Fiber ports supporting 8000 to 100,000 concurrent users.",
      image: "rem.png",
    },
    {
      description: "Rugged Fan-less Mini CDNs for small operators, communities and hotels having multiple 1G/2.5G LAN ports supporting 500 to 2000 users.",
      image: "vds.jpg",
    },
    {
      description: "Rcast Smart TV App for connected Smart Televisions ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process.",
      image: "iptv.jpg",
    },
    {
      description: "Distributed ledger technology (DLT) is a database of information that's shared and duplicated across a network of computers in different locations.",
      image: "future1.jpg",
    },
    {
      description: "SatLite is the newest, prepaid satellite pay-tv service in the Philippines powered by Cignal. This may be the most affordable DTH TV anyone can go for.",
      image: "smarttv.jpeg",
    },
    {
      description: "A gigabit switch is a type of network switch, typically Ethernet-based, that allows devices to be connected to a LAN at speeds of 1 Gbps or higher.",
      image: "nnj.png",
    },
    {
      description: "Here's some information about ETH DC 12V, including a car cabin light and a coin COB injection module.",
      image: "futures4.jpg",
    },
    {
      title: "",
      description: "This white interior light has a color temperature of 6500 Kelvin, is waterproof, and has a voltage of 12 volts. It's a super bright LED with low battery consumption.",
      image: "ledtv.png",
    },
  ];
  
  const [selectedItem, setSelectedItem] = useState<Item>(softwareItems[0]);
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Hyderabad");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: any) => setCurrentSlide(index);

  const dotStyle = {
    width: "10px",
    height: "10px",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "50%",
    background: "#A694FF",
  };

  const activeDotStyle = {
    ...dotStyle,
    background: "blue",
    width: "20px",
  };

  const handleCardClick = (index: number) => {
    setHighlightedCards(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleLocationClick = () => {
    setShowLocationDropdown(prev => !prev);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  const handleSearchClick = () => {
    setShowSearchDropdown(prev => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/resa.png", alt: "Resa" },
    { src: "/smarttv.png", alt: "SVS" },
    { src: "/rem.png", alt: "Smart TV" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-6 sm:px-6 sm:py-12">
      <p className="text-lg text-gray-600 text-center mb-8 sm:mb-12 font-bold mt-[5rem]">
        Rcast Mini Mobile App is available on Android Smart Phones, and iPhone is under Process.
      </p>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full max-w-5xl">
      <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
        {softwareItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className="flex items-center gap-4 bg-white shadow-md rounded-full px-4 py-2 w-full max-w-xs border border-transparent hover:border-blue-500 hover:bg-[#0a0f2c] transition-all cursor-pointer hover:text-white"
          >
            <Image src={item.image} alt={item.alt} width={100} height={100} />
            <p className="text-sm font-bold text-gray-500 hover:text-white">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative bg-white shadow-lg rounded-full w-48 h-48 sm:w-64 sm:h-64 flex flex-col items-center justify-center text-center p-4 transition-all duration-300">
          {selectedItem ? (
            <>
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                width={80}
                height={80}
                className="object-contain"
              />
              <p className="text-base sm:text-xl font-bold text-gray-800 mt-4">{selectedItem.label}</p>
            </>
          ) : (
            <p className="text-gray-500 text-center text-sm sm:text-base">
              Select a card to display details here.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
        {hardwareItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className="flex items-center gap-4 bg-white shadow-md rounded-full px-4 py-2 w-full max-w-xs border border-transparent hover:border-blue-500 hover:bg-[#0a0f2c] hover:text-white transition-all cursor-pointer"
          >
            <Image src={item.image} alt={item.alt} width={100} height={100} />
            <p className="text-sm font-bold text-gray-500 hover:text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </div>

      <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem] flex items-center justify-center px-4 sm:px-4 mt-[6rem]">
          <section className="container mx-auto px-4 mt-2 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]">
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
                  src="/aza.png"
                  alt="Healthcare Image 1"
                  width={2000}
                  height={800}
                  className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
                />
              </div>
              <div>
                <Image
                  src="/aza.png"
                  alt="Healthcare Image 2"
                  width={2000}
                  height={800}
                  className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
                />
              </div>
              <div>
                <Image
                  src="/aza.png"
                  alt="Healthcare Image 3"
                  width={2000}
                  height={800}
                  className="z-0 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
                />
              </div>
            </Carousel>
            <div className="flex justify-center mt-4">
              {[0, 1, 2].map(index => (
                <span
                  key={index}
                  style={currentSlide === index ? activeDotStyle : dotStyle}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="container mx-auto px-4 flex flex-col justify-center mt-[4rem] mb-8">
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
      <div className="flex justify-center items-center mt-[3rem]">
        <div className="flex justify-between w-full items-center rounded-[30px] bg-red-800 from-[#05020A] to-[#200C42] p-[32px] md:p-[37.5px] xl:py-[75px] xl:px-[135px] flex-col md:flex-row">
          <h2 className="text-white text-[16px] md:text-[20px] xl:text-[18px] font-semibold cursor-default md:w-1/2">
            Rcast Smart TV App for connected Smart Televisions
            ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process.
            My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.
            Available in Android and I-Phone Mobile App Stores. 
            Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs
          </h2>
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[350px] xl:h-[200px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAppPage;
