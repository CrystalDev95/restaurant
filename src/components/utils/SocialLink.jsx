import React from "react";

const SocialLink = ({ val }) => {
  return (
    <>
    <img src={val.icon} alt="social-icons" className="w-8 h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 xsm:x-5 xsm:h-5 flex items-center cursor-pointer transition-all duration-200 hover:scale-110" />
    </>
  );
};

export default SocialLink;
