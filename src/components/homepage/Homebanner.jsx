import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Homebanner = ({img, header, subheader}) => {
  return (
    
    <section className='homebanner relative'>
        <Link to="/">
        <img src={`${imgPath}/${img}`} alt="" className='w-full h-screen object-cover' />
        <div className='absolute bottom-20 left-10 text-white w-[1700px] mx-auto'>
        <h2 className='pb-16 '>{header}</h2>
        <div className='flex justify-between'>
        <small className='text-white'>{subheader}</small>
        <Link to="/" className='p-2 bg-white text-black rounded-full 
        px-10 font-semibold'>Buy Now</Link>
        </div>
        </div>
        </Link>
    </section>
  )
}

export default Homebanner
