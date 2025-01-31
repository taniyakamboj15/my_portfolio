import React from 'react'

const Landing = () => {
  return (
    <div className='pt-40 px-64 h-screen'>
        <h1 className='text-slate-600 tracking-widest font-semibold text-2xl'>WELCOME TO MY WORLD</h1>
        <h2 className='font-bold text-5xl pt-5'>Hii I'm <span className='text-red-400'>Taniya Kamboj</span></h2>
        <h3 className='font-semibold text-5xl pt-5'><span className='text-red-400'>a</span> Developer</h3>
        <div className='inline-block w-7/12 pt-6 text-slate-700'>
        <p>Hi, I'm Taniya, an MCA graduate and a passionate MERN Stack developer. I love building sleek, high-performance web applications that blend creativity with functionality. Whether it's crafting intuitive user interfaces or optimizing backend efficiency, I thrive on turning ideas into reality. Let’s build something amazing together!"</p>
        </div>
        <div>
            <div>
                <h4>Find  Me On</h4>
                <div className='flex gap-5 '>
                    <div  className='w-12 h-12 border shadow-lg rounded-md bg-slate-100'>    
                    </div>
                    <div  className='w-12 h-12 border shadow-lg rounded-md  bg-slate-100'>    
                    </div>
                    <div  className='w-12 h-12 border shadow-lg rounded-md  bg-slate-100'>    
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing;