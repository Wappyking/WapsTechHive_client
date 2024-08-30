import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-t from-sky-500 to-white h-auto pb-10 pt-5 w-screen">
        <div
          className=" border-gray-600 border-solid my-2"
          style={{ borderWidth: 0.5 }}
        ></div>
        <div
          className=" border-gray-600 border-solid"
          style={{ borderWidth: 0.5 }}
        ></div>
        <div className="flex flex-col content-center pt-10">
          <h6
            style={{
              color: "black",
              alignSelf: "center",
            }}
            className="font-bold w-96 text-center text-md my-2 text-xl"
          >
            WAPS TECH HIVE LTD
          </h6>
          <p
            style={{
              alignSelf: "center",

              color: "black",
            }}
            className="w-96 px-2 text-center"
          >
            Copyright Waps Tech. Hive
          </p>
          <p
            style={{
              alignSelf: "center",

              color: "black",
            }}
            className="w-96 px-2 text-center"
          >
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
