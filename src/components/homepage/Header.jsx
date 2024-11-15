import { Facebook, Search, ShoppingBag, Twitch } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">
      <div className="nav-wrapper flex justify-between">
    <ul className='main-nav flex gap-5 pt-2 font-semibold '>
    <NavLink to="/men">Men</NavLink>
    <NavLink to="/woman">Woman</NavLink>
    <NavLink to="/kids">Kids</NavLink>
    <NavLink to="/new&feature">New&Feature</NavLink>
    <NavLink to="/gift">Gift</NavLink>
   
    </ul>
    <div className='tulos  '>
      <h2>TULOS</h2>
    </div>
    
      <div className="nav-icons ">
        <ul className='flex gap-5 font-semibold  pt-2 '>
      <li><Link to="/"><Search strokeWidth={2} size={18}/></Link></li>
      <li><Link to="/"><ShoppingBag strokeWidth={2} size={18}/></Link></li>
      <p>Login</p>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Header
