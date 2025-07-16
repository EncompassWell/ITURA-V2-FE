import React from "react";
import image from "../../assets/col.svg";
import starknetlogo from "../../assets/starknet-logo.svg";
import logo from "../../assets/logo.svg";

const Partner = () => {
  return (
    <div className="p-[1px] w-[90%] mx-auto lg:my-40 md:my-30 my-20 bg-gradient-to-b from-white to-[#FFFFFF]/0 rounded-[44px]">
      <div className="flex lg:justify-between md:justify-between justify-center bg-darkBg rounded-[44px] items-center pt-10 flex-col lg:flex-row md:flex-row text-center lg:text-left md:text-left">
        <div className="w-[80%] lg:w-[30%] md:w-[45%] mb-4">
          <img src={image} alt="" className="rounded-bl-[44px] w-[100%]"/>
        </div>
        <div className="w-[100%] lg:w-[62%] md:w-[52%] pb-8 mb-4">
          <div className="flex items-center lg:my-4 justify-center lg:justify-start">
            
            <img src={logo} alt="" className="w-[32px] lg:w-[50px] md:w-[50px]" />
            <p className="mx-4">X</p>
            <img src={starknetlogo} alt="" className="w-[70px] lg:w-[120px] md:w-[120px]" />
          </div>
          <h2 className="text-[40px] lg:text-[72px] md:text-[58px] font-semibold lg:leading-20 md:leading-18">
            Built on <span className="font-instrumentSerif">Starknet</span>
          </h2>
          <p className="text-[#A39EB6] px-4 lg:px-0 md:px-0">
            Create with ease— securely built on Starknet, where your journey is
            yours alone
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
