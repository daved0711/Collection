import React from 'react'
import { imgPath } from '../helpers/functions-general'

const Itemscard = ({item, key}) => {
  return (
    <div className='new-arrival-card' key={key} >
    <div className='mb-4 '>  
     <img className='md:h-[30rem] w-full h-[20rem] rounded-3xl objec'
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