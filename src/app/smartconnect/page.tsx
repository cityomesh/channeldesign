"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartConnect from "@/components/SmartConnect/SmartConnectPage"

const SmartConnectPage: React.FC = () => {

  return (
    <>     
      <Header/>
      <SmartConnect />
      <Footer />
    </>
  );
};

export default SmartConnectPage;
