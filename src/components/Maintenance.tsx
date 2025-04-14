// components/HeroSection.tsx

import React from "react";
import { MapPin } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

const Maintenance = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg-salon.jpg')" }}>
      {/* Fullscreen Section */}
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#000000a9] bg-opacity-50 text-white text-center">
        {/* Heading and Sub-Text */}
        <div className="mx-auto max-w-screen-xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
        Welcome to GOLD TOUCH THE LUXURY SPA
        </h1>
        <p className="text-lg md:text-xl mb-20">
        Indulge in an unforgettable experience where relaxation meets luxury. At GOLD TOUCH THE LUXURY SPA, we offer a sanctuary of tranquility designed to rejuvenate your mind, body, and soul.
        </p>
        </div>
        

      {/* Address Field with Icon */}
      <div className="px-6 md:px-12 max-w-5xl mx-auto text-lg absolute bottom-4 left-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <MapPin size={24} className="text-white" />
            <Link className="underline underline-offset-4" href="https://maps.app.goo.gl/DGbDJ8jBUSmCWzQTA"><p className="text-base">Ground Floor, Survey No 167, 3,4, Calangute - Anjuna Rd, Naika Waddo, Calangute, Goa 403516</p></Link>
          </div>
        </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/9071547777" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 p-3rounded-full shadow-lg transition-all"
      >
        <Image 
        src="/whatsapp-icon.png"
        width={100}
        height={100}
        alt="WhatsApp Icon"
        className="max-w-[70px]"
        />
      </a>
    </div>
    </div>
  );
};

export default Maintenance;
