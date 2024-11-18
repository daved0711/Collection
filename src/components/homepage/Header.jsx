import { Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => setScrollPosition(scrollY));
        return window.removeEventListener("scroll", () =>
          setScrollPosition(scrollY)
        );
      }, []);
  return (
    <header className=" fixed z-50 bg-white w-full top-0 left-0">
        <div className="bg-black py-2 text-white text-center font-semibold">
            <p>Get 25% Off off This Summer Sale. Grab It Fast!!! 15H:45M:37S</p>
        </div>
        <div className="container">
            <div className="toggle flex justify-between items-center  py-5">
            <div className="header-logo md:hidden block">
                    <img src={`${imgPath}/headerlogo.png`} alt="" />
                </div>
                <button className={`${isOpen ? "active" : ""} toggle-menu md:hidden`}
            onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            </div>
            <nav className={` py-5 fixed md:gap-10 md:grid md:grid-cols-3 
             md:w-[2350px] mx-auto items-center  md:static w-full 
              h-screen md:h-auto top-[9rem]left-0 bg-white md:bg-transparent   ${
                isOpen ? "text-black block" : "hidden md:block"
              }`}>
                <ul className='md:flex md:flex-row flex flex-col gap-10 translate-x-[50px] md:translate-x-0 translate-y-[50px] md:translate-y-0 w-[75%] md:w-full md:w-auto'>
                    <li><NavLink>Men</NavLink></li>
                    <li><NavLink>Women</NavLink></li>
                    <li><NavLink>Kids</NavLink></li>
                    <li><NavLink>News & Featured</NavLink></li>
                    <li><NavLink>Gift</NavLink></li>
                </ul>
                <div className="header-logo hidden md:block">
                    <img src={`${imgPath}/headerlogo.png`} alt="" />
                </div>
                <div className="right-menu flex gap-5 translate-x-[50px] md:translate-x-0 translate-y-[50px] md:translate-y-0 w-[75%] md:w-full md:w-auto mt-10 md:mt-0">
                    <button><Search strokeWidth={1}/></button>
                    <button><ShoppingBag/></button>
                    <Link>Login</Link>
                </div>
                </nav>
        </div>
    </header>
  )
}

export default Header