import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function ContactForm() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  let data = { name, email, phone, subject, message };

  useEffect(() => {}, [name, email, phone]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Fullname  is required";
    } else if (name.split(" ").length < 2) {
      errors.name = "provide your first and last name";
    }

    // Validate email field
    if (!email) {
      errors.email = "Email is required";
    } else if (!/@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // Validate phone number field
    if (!phone) {
      errors.phone = "phone number is required";
    } else if (phone.length < 9) {
      errors.phone = "Phone number must be at least 10 characters";
    }

    //validate subject field
    if (!subject) {
      errors.subject = "subject is required.";
    } else if (subject.length < 4) {
      errors.subject = "Subject must be at least 4 characters";
    }

    //validate message field
    if (!message) {
      errors.message = "message is required.";
    } else if (message.split(" ").length < 5) {
      errors.message = "message must be at least 5 words";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  function Reset(e) {
    setSubmit(false);
    setIsFormValid(false);
    setName(e.target.null);
    setEmail(e.target.null);
    setPhone(e.target.null);
    setSubject(e.target.null);
    setMessage(e.target.null);
  }

  async function Submitted(e) {
    if (isFormValid) {
      setSubmit(true);
      // e.preventDefault();

      try {
        await axios.post(
          "https://waps-tech-hive-server.vercel.app/contact-us",
          {
            name,
            email,
            phone,
            subject,
            message,
            // body,
          }
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      validateForm();
    }
  }

  return (
    <div
      className="flex 
  flex-col 
  content-center 
  gap-3 p-10 bg-sky-200
   lg:w-2/3 self-center 
   rounded-lg mb-10 
   flex-wrap md:w-96 sm:w-96 w-96"
    >
      <h6 className=" font-bold self-center mb-3">Contact Form</h6>
      {submit == true && (
        <div className="text-green-600 font-semibold self-center mb-3 text-lg flex flex-col justify-center content-center">
          <div className="border-green-600 self-center content-center flex justify-center rounded-full border-5 w-fit p-2 mb-3">
            <CheckIcon aria-hidden="true" className="h-24 w-24" />
          </div>
          <h6>Form Sumitted Successfully</h6>
        </div>
      )}
      {submit == false && (
        <>
          <div className="gap-3 flex flex-wrap content-center justify-center">
            <div className="flex flex-col">
              <input
                // type="text"
                type="string"
                className="w-80 self-center p-2 rounded-lg"
                placeholder="Your Name"
                value={submit == false ? name : ""}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-red-600 text-sm  self-center">
                {errors.name}
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className="w-80 self-center p-2 rounded-lg"
                placeholder="Your Email"
                value={submit == false ? email : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-red-600 text-sm  self-center">
                {errors.email}
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-wrap justify-center">
            <div className="flex flex-col">
              <input
                type="text"
                className="w-80 self-center p-2 rounded-lg"
                placeholder="Your Phone Number"
                value={submit == false ? phone : ""}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="text-red-600 text-sm  self-center">
                {errors.phone}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                className="w-80 self-center p-2 rounded-lg"
                placeholder="Subject"
                value={submit == false ? subject : ""}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div className="text-red-600 text-sm  self-center">
                {errors.subject}
              </div>
            </div>
          </div>
          <div className="self-center lg:w-2/3 flex flex-col w-80">
            <textarea
              className=" w-100 self-center p-2 rounded-lg"
              placeholder="Message"
              value={submit == false ? message : ""}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="text-red-600 self-center text-sm">
              {errors.message}
            </div>
          </div>
        </>
      )}
      {isFormValid && submit == false && (
        <div className="text-green-600 self-center text-sm font-semibold">
          Form validated, Submit now
        </div>
      )}
      {submit == false && (
        <button
          onClick={Submitted}
          className="
      bg-sky-700 text-white 
      p-2 font-semibold w-20 self-center
      rounded-lg hover:bg-sky-500"
        >
          Submit
        </button>
      )}
      {submit == true && (
        <button
          onClick={Reset}
          className="
      bg-red-700 text-white 
      p-2 font-semibold w-20 self-center
      rounded-lg hover:bg-red-500"
        >
          Reset
        </button>
      )}
    </div>
  );
}
