import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
    <div className="footer">
      <div className="container">
      <div className="flex md:justify-between md:flex-row flex-col gap-5"  >
    <div className=' flex flex-col md:gap-10  '>
    <div className=''>
      <img src={`${imgPath}/footerlogo.png`} alt="" />
    <p className=' text-gray-600'>Get newdletter update for upcoming product 
      <br />and best discount for all items</p>
    </div>
      <div className=' flex flex-row gap-2 items bg-center'>
        <input name="" id="" placeholder='Your email' className='border rounded-3xl px-5 py-1 '></input>
        <Link><button className='p-2 bg-black text-white rounded-full 
            px-10 '>Submit</button></Link>
      </div>
    </div>
    <div className=' md:flex gap-20'>
    <ul className='footer '>
      <p className=' pb-5'>Product</p>
      <li>Tshirt</li>
      <li>Jacket</li>
      <li>Shoes</li>
      <li>Pants</li>
      <li>Sunglasses</li>
      <li>Tuxedo</li>
    </ul>
    <ul className='footer '>
      <p className=' pb-5'>Categories</p>
      <li>Man</li>
      <li>Woman</li>
      <li>Kids</li>
      <li>Gift</li>
      <li>New Arrival</li>
    </ul>
    <ul className='footer '>
      <p className=' pb-5'>Our Social Media</p>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Youtube</li>
      <li>Twitter</li>
      
    </ul>
    </div>   
    </div>  
    </div>
    <div className='bg-black text-white md:flex justify-between py-7 px-5 text-center'>
      <p>©2023 Tulos Production</p>
       <div className=' flex gap-5 text-center justify-center'>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
       </div>
    </div>
    </div>
  )
}

export default Footer
