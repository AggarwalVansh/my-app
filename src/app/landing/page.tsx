import React from "react";
import "../../styles/landing.css";
import phone from "../images/phone.png";
import Image from "next/image";


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={phone}
            alt="App preview"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Text content */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Ready When You Are</h1>
          <p className="mt-4 text-gray-600 text-lg" >
            Jump right in and start exploring. Whether you're here to create, manage, or discover,
            our app is ready to go whenever you are!
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="w-full bg-purple-600 text-white mt-12 py-6 px-4 rounded-t-3xl">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <span className="text-lg font-bold">P</span>
          <nav className="flex gap-4 text-sm">
            <a href="." className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">How it Works</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Affiliates</a>
            
          </nav>
          <div className="flex items-center gap-4">
          <a href="/login" className="text-sm hover:underline">Log in / Sign up    </a>
            <button className="bg-white text-black px-4 py-2 rounded-lg"> Book 1:1 Demo </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg"> Get Started</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
