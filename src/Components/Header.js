import React, { useContext, useState } from 'react'
import image from "../assets/dummy_logo.jpg"
import { DARK_MODE , LIGHT_MODE} from '../utils/constants'
import { Link, useLocation } from 'react-router-dom'
import {themeContext} from '../utils/themeContext'
import menuIcon from "../assets/icons/menu.png";
import Sidebar from './Sidebar'


const Header = () => {

    const location = useLocation();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isDarkMode,setIsDarkMode}=useContext(themeContext);
    const handlerDarkMode=()=>{
        setIsDarkMode(!isDarkMode);
  
    }
    const handleHamBurger = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    console.log(isDarkMode);
    console.log(location);

  return (
    <div className='flex flex-row justify-between items-center md:px-10 px-4 pt-2 h-20 border-b-black w-full '>
        < div  className='flex items-center'>
            <Link to="/"><img className='rounded-full w-20' src={image} alt="logo"></img></Link>
            <h1 className={`text-lg font-bold ${isDarkMode?"text-white":"text-black"}`}>TANIYA</h1>
        </div> <div className='flex items-center md:gap-10 gap-4'>
        <ul className={`md:flex gap-10 font-bold hidden ${isDarkMode?"text-white":"text-black"}`}>
            <Link to="/"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/"?"text-red-400":""}`}>Home</li></Link>
            <Link to="/projects"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/projects"?"text-red-400":""}`}>Projects</li></Link>
            {/* <Link to="/experience"> <li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/experience"?"text-red-400":""}`}>Experience</li></Link> */}
            <Link to="/contact"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/contact"?"text-red-400":""}`}>Contact</li></Link>
            {/* <li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/resume"?"text-red-400":""}`}>Resume</li> */}
             <a href="https://github.com/taniyakamboj15">
            <li className={`hover:text-red-500 hover:scale-105 hover:underline`}>GitHub</li>
            </a>
            
        </ul>
        <button className='md:hidden block ' onClick={handleHamBurger}><img className='w-8' src={menuIcon}></img></button>
        <button className='w-10 h-10 hover:scale-90 ' onClick={handlerDarkMode}>{isDarkMode?<img  src={DARK_MODE}></img>:<img src={LIGHT_MODE}></img>}</button>
    </div>
    {isMenuOpen && (
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={(state) => setIsMenuOpen(state)}
        />
      )}
    </div>
  )
}

export default Header;