import React from 'react'

import Genders from './Genders'

const Gendercards = () => {


    const gendercardsArray = [
        {
            Gimg:"card-7.png",
            Gtitle:"MAN",
            Gbutton:"See details",
            
        },
        {
            Gimg:"card-8.png",
            Gtitle:"WOMAN",
            Gbutton:"See details",
            
            
        },
        {
            Gimg:"card-9.png",
            Gtitle:"KIDS",
            Gbutton:"See details",
           
        },
                          
    ]
   
  return (
    
    <section className='Gendercards md:py-[15rem] py-5 '>
      <div className="container">
        
      <div className='grid md:grid-cols-3 gap-5 '>
      {gendercardsArray.map((item, key)=>(
           <Genders item={item} key={key}/>
        ))}  
      </div>     
      </div>
    </section>
  )
}

export default Gendercards
