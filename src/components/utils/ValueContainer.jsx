import React from 'react'

const valueContainer = ({value}) => {
  return (
    <div className='border flex flex-col text-center py-20 lg:py-10 sm:py-5 px-3 sm:px-2 gap-10 xl:gap-8 lg:gap-5 shadow-lg shadow-neutral-400 w-92 h-92'>
        <div className='text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl flex justify-center'>
            <div className='w-20 h-20 xl:w-18 xl:h-18 lg:w-16 lg:h-16 md:w-12 md:h-12 bg-red-500 rounded-full flex justify-center items-center text-white'>
            {value.icon} 
            </div>
            </div>
        <h1 className='font-semibold text-2xl xl:text-xl lg:text-lg sm:text-sm'>{value.value}</h1>
        <p className='text-md lg:text-sm sm:text-xs text-neutral-600 font-light'>{value.description}</p>
        </div>
  )
}

export default valueContainer