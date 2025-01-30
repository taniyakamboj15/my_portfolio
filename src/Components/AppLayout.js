import React from 'react' 
import Header from './Header'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const AppLayout = () => {
  return (
    <div className='bg-slate-200'>
        <Header />
        <Outlet/>
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