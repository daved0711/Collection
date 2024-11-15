import React from 'react'
import { imgPath } from '../helpers/functions-general'
import Itemscard from './Itemscard'

const Collection = () => {


    const collectionArray = [
        {
            img:"card-1.png",
            title:"Loro Piana",
            text:"Slim-fit Stripped Silk and Linen-Blend Polo Shirt", 
            price:"45",
        },
        {
            img:"card-2.png",
            title:"White Pants",
            text:"Slim man pants", 
            price:"90",
        },
        {
            img:"card-3.png",
            title:"Bidha Glasses",
            text:"Black Glasses with luxury finishing", 
            price:"50",
        },
        {
            img:"card-4.png",
            title:"Brown Bomber",
            text:"Luxury unisex bomber jacket", 
            price:"52",
        },
        {
            img:"card-5.png",
            title:"Leather Shoes Jack",
            text:"Man leather shoes", 
            price:"189",
        },
        {
            img:"card-6.png",
            title:"Grey Tshirt",
            text:"Unisex grey tshirt", 
            price:"21",
        },
        
     
        
       
    ]
   
  return (
    
    <section className='collection py-10 '>
      <div className="container">
        <div className='text-center pb-2'>
      <h2>NEW COLLECTION</h2>
        <p>Our latest collection where classic and contemporary styles converge in 
            <br/>perfect harmony</p>
            </div>
      <div className='grid grid-cols-[1fr,_1fr,_1fr] gap-2'>
      {collectionArray.map((item, key)=>(
           <Itemscard item={item} key={key}/>
        ))}  
      </div>
          
      </div>
    </section>
  )
}

export default Collection
