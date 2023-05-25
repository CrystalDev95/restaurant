import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { heroapi, contact } from "../data/Data";
import MenuButtons from "../components/utils/MenuButtons";
import { buttons } from "../data/Data.jsx";
import { menu2 } from "../data/Data.jsx";
import WiggleLine from "../components/utils/WiggleLine";
import Footer from '../components/Footer'

const MenuPage = () => {
  const [ activeTab, setActiveTab ] = useState("All");
  const [data, setData ] = useState(menu2);

  
useEffect(() => {
  setData(menu2);
}, [activeTab])


const onTabChange = (tab) => {
  if (tab === "All") {
    setData(menu2);
  } else if (tab === activeTab) {
    const newData = data.filter((data) => data.category === activeTab);
    setData(newData);
  };
};


  return (
    <>
      <Navbar heroapi={heroapi} />
      <div className="h-[50vh] sm:h-60 w-screen bg-cover bg-center bg-opacity-50 shadow-xl bg-[url('/images/heroimg.jpg')]">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
          <h1 className="text-white text-5xl md:text-3xl font-bold">Menu</h1>
        </div>
      </div>

      <div className=" relative bg-black w-screen h-auto px-10 sm:px-5 py-32 lg:py-10 md:py-0 text-white">
        <div className="w-full pb-24 md:pb-32 sm:pb-20">
      <div className="flex lg:justify-center relative top-24 left-[35%] lg:left-0 mb-32 xl:mb-20 lg:mb-16 gap-3 xsm:gap-2">
        <h1 className="absolute right-[18%] w-full bottom-12 xl:bottom-14 xl:right-[25%] text-9xl xl:text-8xl lg:text-6xl lg:hidden font-extrabold text-neutral-100 opacity-10">Dong De Moon</h1>
        <h1 className="text-5xl mb-5 xl:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold">Dong De Moon</h1>
        <div className="flex flex-col items-center">
        <h1 className="text-5xl mb-1 md:mb-0 xl:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold">Menu</h1>
        <span><WiggleLine /></span>
        </div>
          </div>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 lg:place-items-center justify-center gap-10 xl:gap-5 md:gap-4">
          {buttons.map((tab, i) => (
            <MenuButtons tab={tab} key={i} setActiveTab={setActiveTab} activeTab={activeTab} onTabChange={onTabChange} />
          ))}
        </div>
        

          <div className="mt-32 sm:mt-16 mx-20 xl:mx-10 md:mx-0 gap-10 xl:gap-5 md:gap-3 grid place-items-center grid-cols-4 xl:grid-cols-3 lg:grid-cols-2">
            {
              data.map((menu, i) => 
              <div className="w-88 h-auto xl:w-72 lg:w-60 md:w-58 sm:w-52 xsm:w-40 mb-20 md:mb-12 cursor-pointer" key={i}>
                <img className="w-full h-full hover:scale-110 transition duration-300" src={menu.img} alt={menu.title} />
                <div className="text-xl lg:md:text-lg md:text-sm text-white font-semibold text-center py-5 flex justify-center">{menu.title}</div>
              </div>
              )
            }
          </div>
      </div>
      <hr />
      <Footer contact={contact}/>
    </>
  );
};

export default MenuPage;
