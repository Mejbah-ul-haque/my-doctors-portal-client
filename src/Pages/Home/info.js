import React from "react";
import InfoCard from "./infoCard";
import clock from "../../assets/icons/clock.svg";

const info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard img={clock}></InfoCard>
      <InfoCard img={clock}></InfoCard>
      <InfoCard img={clock}></InfoCard>
    </div>
  );
};

export default info;
