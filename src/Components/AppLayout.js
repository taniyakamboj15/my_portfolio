import React from 'react' 
import Header from './Header'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import {themeContext} from '../utils/themeContext';
import { useState } from 'react';
import Footer from './Footer';

const AppLayout = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode?"bg-gray-800":"bg-slate-300"}>
        <themeContext.Provider value={{isDarkMode,setIsDarkMode}}>
        <Header />
        <Outlet/>
        <Footer/>
        </themeContext.Provider>

    </div>

  )
}

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/experience",
                element:<Experience/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },

        ]
    },
])

export default AppLayout;