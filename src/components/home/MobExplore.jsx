import React from "react";
import markImg2 from "../../assets/mark.svg";
import markImg from "../../assets/marklogo.svg";
import colImg from "../../assets/icon-group.svg";

const MobExplore = () => {
  const themeColor = "bg-black/5";

  return (
    <div className="flex md:hidden lg:hidden justify-center bg-darkBg rounded-[44px] items-center  p-4 flex-col  text-center  relative">
      <div className="w-[100px] h-[100px] bg-linear-to-b from-gradientYellow blur-[80px] to-gradientRed  rounded-full absolute left-10 top-0 "></div>
      <div className="w-[80%] mb-4 ml-auto">
        <img src={colImg} alt="" className=" w-[80%]" />
      </div>
      <div className="flex text-center justify-center items-center mt-4">
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg -rotate-12 ${themeColor}`}
        >
          <img src={markImg} alt="" />
        </div>
        <h2 className="text-[28px] font-medium">
          See your feelings in
          <span className="font-instrumentSerif italic"> Colours.</span>
        </h2>
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg rotate-12 ${themeColor}`}
        >
          <img src={markImg2} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[#A39EB6] px-4  my-7 w-[100%] lg:w-[80%] md:w-[80%]">
          Easily track how you're feeling each day and watch your emotional
          journey unfold in beautiful colours. Spot trends, understand your
          triggers, and nurture your well-being
        </p>
        <button className="bg-linear-to-r from-lightOrange to-orange rounded-xl text-white p-3 font-[500] px-10">
          Explore Mood Tracking
        </button>
      </div>
    </div>
  );
};

export default MobExplore;
