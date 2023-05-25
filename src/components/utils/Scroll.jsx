import React from 'react'
import Lottie from "lottie-react";
import scroll from '../../assets/animation/scroll_down.json'

const Scroll = () => {
  return (
    <>
    <Lottie animationData={scroll} loop={true} className="absolute w-[150px] h-auto md: md:w-[80px] right-10 bottom-10 md:right-5 md:bottom-5 cursor-pointer" />
    </>
  )
}

export default Scroll;