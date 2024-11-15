import React from 'react'
import { imgPath } from '../helpers/functions-general'

const Itemscard = ({item, key}) => {
  return (
    <div className='new-arrival-card px-10' key={key} >
    <div className='mb-4 p'>
     <p className='absolute top-3 left-3 bg-white px-4 py-1 rounded-full text-[10px] font-bold uppercase z-20 group-hover:opacity-0'>new</p>
     <img
           src={`${imgPath}/${item.img}`}
           alt=""/>
       
    
    </div>
    <div className='gap-2 flex flex-col'>

        <h5>{item.title}</h5>
        <h6 className='font-normal'>{item.text}</h6>
        <p className='font-semibold'>${item.price}</p>
      
    </div>           
   </div>
  )
}

export default Itemscard