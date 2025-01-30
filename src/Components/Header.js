import React, { useState } from 'react'
import image from "../assets/dummy_logo.jpg"
import { DARK_MODE , LIGHT_MODE} from '../utils/constants'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const [isDarkMode,setIsDarkMode]=useState(false);
    const handlerDarkMode=()=>{
        setIsDarkMode(!isDarkMode);
  
    }
    console.log(isDarkMode);
    console.log(location);

  return (
    <div className='flex flex-row justify-between items-center px-10 pt-2'>
        < div  className='flex items-center'>
            <Link to="/"><img className='rounded-full w-24' src={image} alt="logo"></img></Link>
            <h1 className='text-lg font-bold'>TANIYA</h1>
        </div> <div className='flex items-center gap-10'>
        <ul className='flex gap-10 font-bold '>
            <Link to="/"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/"?"text-red-400":""}`}>Home</li></Link>
            <Link to="/projects"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/projects"?"text-red-400":""}`}>Projects</li></Link>
            <Link to="/experience"> <li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/experience"?"text-red-400":""}`}>Experience</li></Link>
            <Link to="/contact"><li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/contact"?"text-red-400":""}`}>Contact</li></Link>
            <li className={`hover:text-red-500 hover:scale-105 hover:underline ${location.pathname==="/resume"?"text-red-400":""}`}>Resume</li>
             <a href="https://github.com/taniyakamboj15">
            <li className={`hover:text-red-500 hover:scale-105 hover:underline`}>GitHub</li>
            </a>
            
        </ul>
        <button className='w-10 h-10 hover:scale-90 ' onClick={handlerDarkMode}>{isDarkMode?<img  src={DARK_MODE}></img>:<img src={LIGHT_MODE}></img>}</button>
    </div>
    </div>
  )
}

export default Header;