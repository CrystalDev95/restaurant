import React, { useState, useEffect } from "react";

const MenuButtons = ({ setActiveTab, setFiltered, data, activeTab }) => {

  useEffect(() => {
      if (activeTab === "All") {
        setFiltered(data);
      } 
        const newData = data.filter((data) => data.category === activeTab);
        setFiltered(newData);
  }, [activeTab])


  return (

    <>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab("Signature");
          }}
          className={`${
            "Signature" === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          Signature
        </button>
      </div>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab("Stew");
          }}
          className={`${
            "Stew" === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          Stew
        </button>
      </div>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab("Rice");
          }}
          className={`${
            "Rice" === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          Rice
        </button>
      </div>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab("Noodles");
          }}
          className={`${
            "Noodles" === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          Noodles
        </button>
      </div>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab("Sides");
          }}
          className={`${
            "Sides" === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          Sides
        </button>
      </div>
    </>
  );
};

export default MenuButtons;
