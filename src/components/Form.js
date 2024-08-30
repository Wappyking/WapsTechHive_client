import React, { Component } from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message,
    };

    fetch("/api/contact-us", {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!

      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())

      .catch((error) => console.error("Error:", error))

      .then((response) => console.log("Success:", response));
  }

  render() {
    return (
      <>
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
          {/* {submit == true && (
            <div className="text-green-600 font-semibold self-center">
              form sumitted successfully
            </div>
          )} */}
          <div className="gap-3 flex flex-wrap content-center justify-center">
            <input
              id="name"
              name="name"
              type="text"
              className="w-80 self-center p-2 rounded-lg"
              placeholder="Your Name"
              //
            />
            <input
              id="email"
              name="email"
              type="text"
              className="w-80 self-center p-2 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="gap-3 flex flex-wrap justify-center">
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-80 self-center p-2 rounded-lg"
              placeholder="Your Phone Number"
            />
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-80 self-center p-2 rounded-lg"
              placeholder="Subject"
            />
          </div>
          <textarea
            id="message"
            name="message"
            className=" w-2/3 self-center p-2 rounded-lg"
            placeholder="Message"
          />

          <button
            onClick={this.handlesubmit}
            className="
      bg-sky-700 text-white 
      p-2 font-semibold w-20 self-center
      rounded-lg hover:bg-sky-500"
          >
            Submit
          </button>
        </div>
      </>
      //   <form onSubmit={this.handleSubmit}>
      //     <label htmlFor="username">Enter username</label>
      //     <input id="username" name="username" type="text" />

      //     <label htmlFor="email">Enter your email</label>
      //     <input id="email" name="email" type="email" />

      //     <label htmlFor="password">Enter a password</label>
      //     <input id="password" name="password" type="text" />

      //     <button>Send data!</button>
      //   </form>
    );
  }
}

export default Form;
