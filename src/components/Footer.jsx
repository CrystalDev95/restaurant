import React from 'react'

const Footer = ({contact}) => {
  return (
    <>
    <div className='flex bg-black text-gray-300 justify-around p-10 md:flex-col gap-5 md:text-sm sm:text-xs sm:p-5'>
    {
    contact.map((item, i) => 
    <div key={i}>
    <h1>{item.title}</h1>
    <p>{item.text1}</p>
    <p>{item.text2}</p>
</div>
    )
    }
    </div>
    </>
  )
}

export default Footer