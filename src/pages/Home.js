import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar page="home" />

      <main class="  bg-gradient-to-b from-black via-sky-500 to-white h-auto w-screen pb-10 flex flex-wrap pt-28">
        <div
          className=" flex"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="300"
        >
          <img
            src="./header.png"
            style={{ height: 400 }}
            className=" self-start inline-flex lg:h-500 "
          />
        </div>
        <div
          className=" w-screen  gap-5 mt-20 flex-col flex flex-wrap  content-center justify-items-center sm:w-screen lg:w-2/3 md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="300"
        >
          <h6
            style={{
              fontSize: 30,
              color: "white",
              alignSelf: "center",
            }}
            className="font-bold w-96 text-center"
          >
            WAPS TECH HIVE LTD
          </h6>
          <p
            style={{
              alignSelf: "center",

              color: "white",
            }}
            className="w-96 px-2 text-center"
          >
            Waps Tech Hive is your ultimate destination for innovation in the
            tech world. We offer a dynamic enviroment where techies can share
            ideas and break the boundary of possibilities.
          </p>
        </div>

        <div
          className=" content-center justify-center items-center w-screen justify-items-center flex mt-5 mb-3"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay-300
        >
          <img src="../splash.png" className="h-32 self-center" />
          <h6 className="absolute font-extrabold text-l text-sky-600">
            OUR SERVICES
          </h6>
        </div>
        <div className="flex justify-center content-center w-screen">
          <p className="w-80 mx-20 text-white place-content-center">
            At WAPS TECH HIVE, we are commited to delivering exceptional tech
            solutions in order to meet your business needs. Our range of
            services includes:
          </p>
        </div>
        <div className="flex flex-col justify-center content-center w-screen items-center gap-6">
          <div className="flex-row flex justify-center w-screen mt-5 flex-wrap gap-20 ">
            <div
              className="bg-white  border-8 rounded-3xl shadow-black"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <img
                src="../webdev.png"
                className="h-80 self-center rounded-t-2xl"
              />
              <h6 className="text-center text-lg font-bold py-2">
                Web Development
              </h6>
            </div>

            <div
              className="bg-white  border-8 rounded-3xl"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <img
                src="../appdev.png"
                className="h-80 self-center rounded-t-2xl"
              />
              <h6 className="text-center text-lg font-bold py-2">
                App Development
              </h6>
            </div>
            {/* </ScrollAnimation> */}
          </div>
          <div className="flex-row flex gap-20 w-screen mt-5 justify-center flex-wrap">
            <div
              className="bg-white  border-8 rounded-3xl"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <img
                src="../dataman.png"
                className="h-80 self-center rounded-t-2xl"
              />
              <h6 className="text-center text-lg font-bold py-2">
                Data Management
              </h6>
            </div>
            <div
              className="bg-white  border-8 rounded-3xl"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <img
                src="../graphic.png"
                className="h-80 self-center rounded-t-2xl"
              />
              <h6 className="text-center text-lg font-bold py-2">
                Graphics Design
              </h6>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
