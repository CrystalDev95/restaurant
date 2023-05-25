import React from 'react'
import ValueContainer from '../components/utils/valueContainer'

const Values = ({values}) => {
  return (
    <div className='py-32 px-10 lg:py-20 xl:px-28 lg:px-20 md:px-10 sm:px-5'>
      <div className='flex flex-col text-center gap-8'>
        <h1 className='text-6xl font-extrabold lg:text-5xl sm:text-4xl'>Dong De Moon Values</h1>
        <h2 className='text-2xl text-neutral-900 font-semibold md:text-sm'>We have good reviews, best quality of food and exceptional customer service</h2>
      </div>
      <div className='flex gap-10 xl:gap-16 md:gap-5 mt-20 md:mt-10 xl:grid xl:grid-cols-2'>
    {
      values.map((value, i) => 
      <ValueContainer key={i} value={value} />
      )
    }
      </div>
      </div>
  )
}

export default Values