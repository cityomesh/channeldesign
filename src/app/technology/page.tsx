"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology/TechnologyPage";

const Home: React.FC = () => {

  return (
    <>     
      <Header/>
      <Technology />
      <Footer />
    </>
  );
};

export default Home;
