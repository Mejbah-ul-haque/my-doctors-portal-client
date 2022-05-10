import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center text-center"
    >
      <div className="  px-12 py-12">
        <h3 className="text-xl text-primary font-bold">Contact Us</h3>
        <h2 className="text-3xl mb-3 text-white">Stay connected with us</h2>
        <form className="block">
          <input
            className="mb-3 pl-2 w-96 h-8 rounded"
            type="email"
            name="email"
            id=""
            placeholder="
          email"
          />{" "}
          <br />
          <input
            className="mb-3 pl-2 w-96 h-8 rounded"
            type="text"
            name="subject"
            id=""
            placeholder="subject"
          />
          <br />
          <input
            className="mb-8 pl-2 w-96 h-24 rounded"
            type="text-area"
            name="text-area"
            id=""
            placeholder="Your message"
          />{" "}
          <br />
          <PrimaryButton>submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
