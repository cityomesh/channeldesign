// "use client"
// import Header from "@/components/Header";
// import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import Footer from "@/components/Footer";
// import Section from "@/components/Section";
// export default function Home() {
//   return (
//     <>
//       <Header />
//       {/* <Section />
//       <Footer /> */}
//     </>
//   );
// }



// "use client"
// import React from 'react'
// import Header from "@/components/Header";
// import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import Footer from "@/components/Footer";
// import Section from "@/components/Section";
// const Home = () => {
//   return (
//    <>
//    <Header />
//    </>
//   )
// }

// export default Home;



"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage"

const Home: React.FC = () => {

  return (
    <>     
      <Header/>
      <Homepage />
      <Footer />
    </>
  );
};

export default Home;
