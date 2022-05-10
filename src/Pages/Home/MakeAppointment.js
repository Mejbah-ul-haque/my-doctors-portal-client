import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui
          aut asperiores excepturi unde, nobis consequuntur eaque ipsa dolor
          minus, provident ipsum dolorum? Itaque quisquam eius fugit cumque
          laboriosam aliquid, inventore quae quam dolores tempora perspiciatis
          ipsum voluptatum omnis numquam!
        </p>
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
