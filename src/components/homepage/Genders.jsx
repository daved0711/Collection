import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Genders = ({item, key}) => {
  return (
    <div className='gender-card relative pt-20' key={key}>
        <div className=' '>
            <img className='md:h-[40rem] w-full h-[20rem] rounded-3xl object-cover' src={`${imgPath}/${item.Gimg}`} 
            alt="" />
            <div className=' flex flex-col absolute text-left bottom-4 left-5 '>
                <h2 className='text-white'>{item.Gtitle}</h2>
                <Link to="/"> 
                <button className='p-2 bg-white text-black rounded-full 
            px-10 '>{item.Gbutton}</button></Link> 
                    
             </div>
        </div>

        
    </div>

    
  )
}

export default Genders
