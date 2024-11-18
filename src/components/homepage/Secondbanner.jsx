import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Secondbanner = ({img, header, subheader}) => {
  return (
    
    <section className='Secondbanner  '>
        <div className="container">
        <Link to="/">
        <img src={`${imgPath}/${img}`} alt="" className='  w-full h-[40rem] object-cover bg-no-repeat rounded-3xl' />
        
        <div className=" text-center flex flex-col items-center gap-5 pt-5">
            <h2>{header}</h2>
            <p>{subheader}</p>
            <Link to="/" className='p-2 bg-black text-white rounded-full 
            px-10 '>See Details</Link>
        </div>
        </Link>
        </div>
    </section>
  )
}

export default Secondbanner