import React from "react";
import Navbar from "../components/Navbar";
import { Input } from "postcss";
import ContactForm from "../components/ContactForm";
import Form from "../components/Form";

export default function ContactUs() {
  return (
    <>
      <Navbar page="contact us" />
      <div
        className="pt-28 
      min-h-screen 
      bg-gradient-to-b
       from-black 
       to-sky-500 
       flex-col gap-10 
       content-center 
       flex-wrap flex w-full px-2 pb-10"
      >
        <div className="flex flex-col gap-5 w-full">
          <h6
            style={{
              fontSize: 30,
              color: "white",
              alignSelf: "center",
            }}
            className="font-bold w-full sm:w-96 text-center mt-10"
          >
            CONTACT US
          </h6>
          <p
            style={{
              alignSelf: "center",

              color: "white",
            }}
            className="w-full sm:w-96 px-2 text-center"
          >
            Waps Tech Hive is your ultimate destination for innovation in the
            tech world. We offer a dynamic enviroment where techies can share
            ideas and break the boundary of possibilities.
          </p>
          <p
            style={{
              alignSelf: "center",

              color: "white",
            }}
            className="w-full sm:w-96 px-2 text-center"
          >
            For Enquiries or Complaints: <br />
            EMAIL : Admin@wapstechhive.com <br />
            <br />
            or fill the contact form below
          </p>
        </div>

        <div className="flex w-full justify-center">
          <ContactForm />
        </div>
        {/* <Form /> */}
      </div>
    </>
  );
}
