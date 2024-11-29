"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Plus, X, ArrowLeft } from "@phosphor-icons/react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFaqPopup, setShowFaqPopup] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const images = ["/iptv1.jpg", "/serve.jpg", "/satlite.png"];
  const services = [
    { title: "IPTV", description: "IPTV distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network." },
    { title: "HEVC", description: "All channels are transcoded to HEVC Codec supporting future 4k/8k Resolutions using AI-Nvidia GPUs offering the best quality in the Industry competing Major Global Players." },
    { title: "CDN", description: "Rcast have developed its own CDN system and not dependent on 3rd Party Vendors and they can be cascaded to save the trunk line capacity advertisements." },
    { title: "Lowest Trunk", description: "Lowest Trunk Line requirement for connecting CDN servers 150-300 Mbps for 250 SD+16 HD Channels 500-1000 Mbps for all the 700 Channels." },
    { title: "IPTV vs OTT", description: "IPTV is licensed by M.I.B and it is exempted from AGR using existing local broadband networks. AGR is payable for OTT Applications since they use internet." },
  ];
  

  const faqData = [
    {
      id: "collapseOne",
      question: "Why is IPTV exempt from AGR while OTT apps are not?",
      answer: (
        <p>IPTV is licensed by M.I.B and it is exempted from AGR using existing local broadband networks. AGR is payable for OTT Applications since they use internet.</p>
      ),
      image: "/blog-OTT.png",
    },
    {
      id: "collapseTwo",
      question: "Why do OTT applications increase internet costs compared to IPTV?",
      answer: (
        <p>ALL OTT Applications use Global Streaming Servers like Amazon and Akamai and consumes internet bandwidth and hence cost of internet becomes expensive.</p>
      ),
      image: "/iil.png",
    },
    {
      id: "collapseThree",
      question: "Who is permitted to distribute licensed satellite channels?",
      answer: (
        <p>M.I.B is already in the Process of withdrawal of Live satellite channels from OTT platforms and Major Broadcasters like Star and Sony have already withdrawn their live channels from their OTT Apps Disney Hotstar and Sony LIV.</p>
      ),
      image: "/Blog-image-01.jpg",
    },
    {
      id: "collapseFour",
      question: "Why are live satellite channels being withdrawn from OTT platforms?",
      answer: (
        <p>Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast</p>
      ),
      image: "/dth-vs-ott.webp",
    },
    {
      id: "collapseFive",
      question: "How do the infrastructure costs of Cable TV distribution compare to Rcast CDN?",
      answer: (
        <p>Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k against Rcast CDN (Streaming Server) at Rs.15k-50k</p>
      ),
      image: "/DTT-Project-TechnicalDiagram.png",
    },
    {
      id: "collapseSix",
      question: "What additional infrastructure increases the CAPEX of distributing Digital Cable TV?",
      answer: (
        <p>Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.</p>
      ),
      image: "/capex.jpg",
    },
  ];


  const handleCardClick = (index: number) => {
    setHighlightedCards(prev => {
      const updatedCards = [...prev];
      updatedCards[index] = !updatedCards[index];
      return updatedCards;
    });
  };

  const toggleAccordion = (accordionId: string) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white">
      <div className="relative w-full xl:h-[40rem] lg:h-[25rem] sm:h-[15rem] h-[15rem] flex items-center justify-center overflow-hidden px-4 sm:px-4 mt-[6rem]">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out transform mb-8"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
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

      <section className="container mx-auto px-4 mt-8 mb-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="text-2xl font-bold text-center mb-4">IPTV vs OTT</div>
          <div className="flex flex-col gap-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="rounded-lg bg-yellow-200 p-4">
                <motion.button
                  className="w-full text-left text-lg font-medium flex justify-between items-center text-blue hover:bg-white hover:text-blue-800 hover:border-blue-800 p-2"
                  onClick={() => toggleAccordion(faq.id)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                  <span>{activeAccordion === faq.id ? "-" : "+"}</span>
                </motion.button>

                <motion.div
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{
                    opacity: activeAccordion === faq.id ? 1 : 0,
                    maxHeight: activeAccordion === faq.id ? '1000px' : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  {activeAccordion === faq.id && (
                    <>
                      <div>{faq.answer}</div>
                      <motion.img
                        src={faq.image}
                        alt={faq.question}
                        className="mt-4 w-full max-h-64 object-cover rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 flex flex-col justify-center mt-8 mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100 w-64 h-72`}
            >
              <h3 className="text-xl font-semibold text-black text-center">{service.title}</h3>
              <p className="mt-2 text-gray-700 text-center">{service.description}</p>
              <Link href="#" className="mt-4 text-blue-500 hover:underline flex items-center">
                Learn More <EastOutlinedIcon className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col mt-10 md:flex-row items-center max-w-5xl mx-auto">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center transform transition-all duration-700 motion-safe:translate-x-[-50px] opacity-0 motion-safe:opacity-100 hover:translate-x-0 hover:opacity-100">
          <Image
            src="/futures4.jpg"
            alt="Team Meeting"
            width={800}
            height={600}
            className="object-cover w-[90%] h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full p-4 transform transition-all duration-700 motion-safe:translate-x-[50px] opacity-0 motion-safe:opacity-100 hover:translate-x-0 hover:opacity-100">
          <div className="text-3xl font-bold leading-10 text-black text-[14px]">
          <div className="text-3xl font-bold leading-10 text-black">
            Top <span className="text-[#33CCC5]">Web design & Development </span>
            agency & consult your website<span className="text-[#0A8FC3]"> with us</span>
          </div>
            <span className="font-bold text-[16px]">Rcast</span> <span className="text-[#33CCC5]">Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided. </span>
            Evaluation of responses from ISPs and users helped us to proceed to the next stage of development in the right direction with clarity on features and functionality of the product.
            <span className="text-[#0A8FC3]"> ULKA TV</span>
          </div>
          <p className="mt-4 text-yellow-600">
          City Online Private Limited System All Smart TVs, Smart STBs, Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.</p>
        </div>
      </div>

      <div className=" bg-white px-4 py-10 xl:py-[80px] xl:px-[135px]">
        <div className="bg-[#6C2BD9]   flex justify-around mx-auto py-6 md:max-w-[700px] xl:max-w-[1180px] px-4 rounded-xl xl:py-[75.184px] xl:px-[68px]">
          <div className="flex flex-col relative gap-6 ">
            <div className="flex flex-col ">
              <div className=" text-[9px] md:text-[10px] xl:text-[18.444px]  text-white font-semibold ">
                All Smart TVs , Smart STBs , Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.?
              </div>
              <p className=" text-[8px] md:text-[1opx] xl:text-[18px] text-white font-normal mt-4 opacity-70">
              All type of Last Mile Distribution Networks are supported which include GPON, EPON, 1G/10G Lan, Air Fiber.
              </p>
            </div>

            <div className="flex  gap-2 xl:gap-[24px] absolute bottom-[-8px]">
              <button className=" text-[8px] md:text-[10px]  text-white font-semibold border-[1px] border-white rounded-full px-[8px] py-[2.5px] md:px-[12px] md:py-[5px] my-2 xl:text-[17.778px] xl:px-[21.333px] xl:py-[8.889px]">
                Start Free Trial
              </button>
            
                <button className=" text-[8px] text-[#6C2BD9] md:text-[10px] bg-white font-semibold border-[1px] border-white rounded-full my-2  pl-[3px] md:pl-[4px] xl:pl-[7.111px] xl:text-[17.778px] ">
                  <EastOutlinedIcon className=" bg-[#6C2BD9] text-white rounded-full w-[10px] h-[10px] md:w-[14px] md:h-[14px] xl:h-7 xl:p-1 xl:w-7 " />
                  <span className="relative pr-[3px] py-[4px] md:py-[5px] md:pr-[12px] xl:py-[8.889px] xl:pr-[21.333px]"> Multipoint Links</span>
                </button>

            </div>
          </div>

          <video
            className="w-[114px] h-[90px] md:w-[300px] md:h-[100px] xl:w-[355.556px] xl:h-[220.444px]"
            preload="none"
            autoPlay
            loop
            muted
            style={{
              borderRadius: "16px",
              border: "1px solid #EBEBEB",
              background: "#FFF",
              boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.03)",
            }}
          >
            <source src="/Getting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>




      <div className="flex flex-wrap justify-center gap-5">
        {/* First Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Token Management System</h2>
          <p className="text-gray-200">
            Authorizations tokens were issued to the subscribers for each channel
            access as per the subscription status of the subscriber in the DRM
            Application Server which is pushed from the SMS server at the time of
            subscription activations. The token log server maintains the logs
            with subscriber ID, device ID, channel ID, with timestamps. These
            logs provide subscriber viewership analysis of channels for rating of
            the channels which is authentic.
          </p>
        </motion.div>

        {/* Second Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Pallycon Features</h2>
          <p className="text-gray-200">
            Pallycon provides forensic watermarking, key rotation, blacklisting,
            and whitelisting of device IDs used by subscribers. The token server
            logs were maintained locally by CityMedia and in the cloud by
            Pallycon. Transcoding and encryption are implemented in a single
            process; the output streams are connected to the distribution
            streaming/CDN servers. If the encoders deployed are already supported
            with the required codec and file format, only encryption can be
            implemented, saving GPU resources.
          </p>
        </motion.div>

        {/* Third Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Transcoding / Encryption Servers</h2>
          <p className="text-gray-200">
            The Transcoding / Encryption Servers can accept almost all types of
            input streams from the Encoders or the IRDs which includes
            Multicast/Unicast, MPTS/SPTS, MPEG-2, MPEG-4, H.264, H.265,
            MPEG-TS, HLS, MPEG-DASH etc.
          </p>
        </motion.div>

        {/* Fourth Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Transcoder Server Details</h2>
          <p className="text-gray-200">
            Professional Nvidia GPUs are used in Transcoder Servers and support
            100 to 160 streams per server as per the Server and GPU specifications.
            N+1 Servers are recommended for redundancy and the configurations
            can be backed up and restored in the Spare Server. Web browser based
            configuration and management of the channels is available. The Server
            and GPU resources also can be monitored remotely. All the Channels
            status including the bitrates can be monitored to ensure 24/7 operation.
          </p>
        </motion.div>

        {/* Fifth Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">CDN Servers</h2>
          <p className="text-gray-200">
            Streaming/CDN(Content Delivery Network) Servers play a major role
            in distribution of IPTV services. We use opensource Ubuntu 24.04
            Ubuntu server Operating System. All X86-64 hardware are supported
            and Network Ports capacity should meet the output requirement.
            Hardware estimate for the concurrent subscriber connections to the
            CDN Server is 500 to 1000 subscribers per Core of the CPU provided
            network port capacity is available. Minimum RAM of 8Gb and 16Gb of
            storage is required.
          </p>
        </motion.div>

        {/* Sixth Text Animation */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">CDN Server Functionality</h2>
          <p className="text-gray-200">
            CDN servers can be cascaded without affecting any loss of quality.
            CDN servers are addressable from the central monitoring system with
            live view of the input and output stream information. CDN servers
            pull the source streams only when requested by any of the users,
            hence saving the bandwidth of the trunk line. The same input stream
            source is multiplied to all the requested subscribers on demand.
          </p>
        </motion.div>
      </div>


    </div>
  );
};

export default TechnologyPage;
