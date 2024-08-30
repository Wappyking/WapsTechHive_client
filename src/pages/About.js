import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar page="about" />
      <div className="pt-28 h-screen bg-gradient-to-b from-black to-sky-500 flex flex-col gap-10 content-center">
        <h6
          style={{
            fontSize: 30,
            color: "white",
            alignSelf: "center",
          }}
          className="font-bold w-96 text-center"
        >
          ABOUT
        </h6>
        <p
          style={{
            alignSelf: "center",

            color: "white",
          }}
          className="w-96 px-2 text-center"
        >
          Waps Tech Hive is your ultimate destination for innovation in the tech
          world. We offer a dynamic enviroment where techies can share ideas and
          break the boundary of possibilities.
        </p>
      </div>
    </>
  );
}
