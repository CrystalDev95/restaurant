import React from 'react'
import Lottie from "lottie-react";
import Wiggle from '../../assets/animation/wiggle.json'

const WiggleLine = () => {
    return (
        <>
        <Lottie animationData={Wiggle} loop={true} className="w-full h-8 lg:w-28 md:w-22 sm:w-20 sm:h-4" />
        </>
    )
}

export default WiggleLine