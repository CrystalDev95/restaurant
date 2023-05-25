import React, { useState } from "react";

const MenuButtons = ({ tab, setActiveTab, activeTab, onTabChange }) => {

  return (
    <>
      <div className="text-white text-xl lg:text-lg md:text-md sm:text-sm">
        <button
          onClick={() => {
            setActiveTab(tab.title);
            onTabChange(tab.title);
          }}
          className={`${
            tab.title === activeTab
              ? "bg-white text-black font-semibold"
              : "bg-[#2b2b2b]"
          }  px-5 py-2 rounded-lg w-40 xl:w-32 lg:w-52 md:w-40 sm:w-28`}
        >
          {tab.title}
        </button>
      </div>
    </>
  );
};

export default MenuButtons;
