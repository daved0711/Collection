import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Homebanner = ({img, header, subheader}) => {
  return (
    
    <section className='homebanner relative pt-[10rem]' >
      <div className="container">
        <Link to="/">
        <img src={`${imgPath}/${img}`} alt="" className='w-full h-full object-cover rounded-3xl' />
        <div className='absolute bottom-20 md:left-20 left-10 text-white w-[1700px] mx-auto'>
        <h2 className='pb-16 '>{header}</h2>
        <div className='flex flex-col gap-5 items-baseline md:flex md:flex-row md:justify-between'>
        <small className='text-white'>{subheader}</small>
        <Link to="/" className='p-2 bg-white text-black rounded-full 
        px-10 font-semibold'>Buy Now</Link>
        </div>
       </div> 
        </Link>
        </div>
    </section>
  )
}

export default Homebanner
