"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact/Contactpage"
// import Development from "@/components/Development/DevelopmentPage";

const ContactPage: React.FC = () => {

  return (
    <>     
      <Header/>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
