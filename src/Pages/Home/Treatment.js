import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="hero py-12 mb-24">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, On Your Terms
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            magni maiores eum tempora nisi debitis veritatis excepturi, ducimus
            repudiandae sapiente explicabo enim ut voluptate repellat cum ex
            officiis facilis similique, iure ipsa velit necessitatibus. Non fuga
            adipisci harum recusandae molestias officia obcaecati eos nobis
            assumenda culpa, eaque, esse quos ratione.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
