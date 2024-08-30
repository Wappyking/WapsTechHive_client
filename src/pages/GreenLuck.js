import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Footer from "../components/Footer";
import Aos from "aos";

export default function GreenLuck() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar page="project" />
      <div
        class="  
       bg-gradient-to-b
       from-black to-sky-500 
       flex-wrap flex  
       h-auto w-screen 
       pb-32 flex-col 
       justify-center  
       content-center 
       pt-20"
      >
        <div
          className="
             flex 
              flex-wrap-reverse 
              justify-center 
              content-center 
              items-center"
        >
          <div
            className=" flex w-auto "
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <img
              src="./greenluckapp.png"
              style={{ height: 400 }}
              className=" inline-flex lg:h-500 "
            />
          </div>
          <div
            className="flex gap-4 flex-col"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <h6
              style={{
                fontSize: 30,
                color: "white",
              }}
              className="font-bold w-96 text-center mt-10"
            >
              Green Luck Mobile App
            </h6>
            <p
              style={{
                color: "white",
              }}
              className="w-96 px-2 text-center"
            >
              Green Luck - Your winning advantage and ultimate guide to
              profitable betting. Available now on Google Play Store
              and Apple App Store
            </p>
          </div>
        </div>
        <div
          className="gap-4 flex flex-col pt-2"
          // data-aos="fade-up"
          // data-aos-duration="900"
          // data-aos-delay="300"
        >
          <h6
            style={{
              fontSize: 30,
              alignSelf: "center",
            }}
            className="font-bold w-96 text-center text-white"
          >
            Download Below
          </h6>
          <div className="gap-3 flex content-center justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.greenluck.greenluck"
              target="_blank"
            >
              <img src="../../playstore.jpg" className="h-12 rounded-lg" />
            </a>
            <h6 className="text-center font-semibold text-white">OR</h6>
            <a
              href="https://apps.apple.com/ng/app/green-luck/id6483303093"
              target="_blank"
            >
              <img src="../../appstore.jpg" className="h-12 rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
