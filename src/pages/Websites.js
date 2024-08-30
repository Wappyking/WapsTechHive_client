import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Websites() {
  return (
    <>
      <Navbar page="project" />
      <div className="pt-28 h-screen bg-gradient-to-b from-black to-sky-500 flex flex-col gap-10 content-center">
        <h6
          style={{
            fontSize: 30,
            color: "white",
            alignSelf: "center",
          }}
          className="font-bold w-96 text-center"
        >
          WEBSITES
        </h6>
        <p
          style={{
            alignSelf: "center",

            color: "white",
          }}
          className="w-96 px-2 text-center"
        >
          At Waps Tech Hive, we pride ourselves on creating websites that cater
          to your various range of needs. Our portfolio includes:
        </p>

        <div className="flex content-center justify-center">
          <div
            className="flex flex-row content-center gap-3  justify-between items-center
        bg-gradient-to-r from-sky-500 to-white m-3 p-2 lg:w-2/3 rounded-2xl px-3 border-2 border-black border-solid"
          >
            <img src="./../greenluck.png" className="h-20 rounded-full" />
            <div>
              <h6 className="text-center py-3 font-extrabold text-lg text-black">
                Green Luck Tips
              </h6>
              <p className="text-center border-t-2 border-black border-solid py-3">
                Green Luck - Your winning advantage and ultimate guide to
                profitable betting.
              </p>
            </div>

            <a
              className="text-center font-bold  bg-green-700 p-2 text-white rounded-2xl"
              href="https://www.greenlucktips.com"
              target="_blank"
            >
              {" "}
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
