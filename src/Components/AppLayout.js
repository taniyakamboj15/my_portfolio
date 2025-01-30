import React from 'react' 
import Header from './Header'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import {themeContext} from '../utils/themeContext';
import { useState } from 'react';

const AppLayout = () => {
    const [isDarkMode,seIsDarkMode] = useState(false);
  return (
    <div className='bg-slate-200'>
        <themeContext.Provider value={{isDarkMode,seIsDarkMode}}>
        <Header />
        <Outlet/>
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