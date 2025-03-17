import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { themeContext } from '../utils/themeContext';
import Myprofile from "../assets/taniya_image.jpg";

const Landing = () => {
  const {isDarkMode}= useContext(themeContext);
  return (
    <div className='md:pt-8 pt-10 p-3 md:px-52 max-w-screen md:h-screen h-[1000px] flex flex-col md:flex-row items-center gap-10  relative'>
      <div className='flex-1 flex-grow md:pt-40'>
        <h1 className='text-slate-600 tracking-widest font-semibold text-xl md:text-2xl'>WELCOME TO MY WORLD</h1>
        <h2 className={`font-bold text-3xl md:text-5xl pt-5 ${isDarkMode?"text-white":"text-black"}`}>Hii I'm <span className='text-red-400'>Taniya Kamboj</span></h2>
        <h3 className='font-semibold text-3xl md:ext-5xl pt-5'><span className='text-red-400'>a</span><span className='bg-gradient-to-r from-slate-600 to-red-300 text-transparent   bg-clip-text '>  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'MERN Stack Developer',
        1000,
        'Full Stack Developer',
        1000,
        'Programmer',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    /></span></h3>
        <div className={`inline-block w-9/12 md:w-11/12 pt-6  ${isDarkMode?"text-slate-200":"text-slate-700"}`}>
        <p>Hi, I'm Taniya, an MCA graduate and a passionate MERN Stack developer. I love building sleek, high-performance web applications that blend creativity with functionality. Whether it's crafting intuitive user interfaces or optimizing backend efficiency, I thrive on turning ideas into reality. Let’s build something amazing together!"</p>
        </div>
        <div className="flex flex-col gap-7">
        <div className='flex justify-between w-8/12 md:w-12/12 pt-9 md:pt-24'>
            <div className={isDarkMode?"text-slate-50":"text-black"}>
                <h4>Find  Me On</h4>
                <div className='flex gap-1 md:p-2 md:gap-5 '>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md bg-slate-100 p-1'>
                      < a href='https://www.facebook.com/share/1D9tqSGirB/'
            type='button'
            target='_blank'
            rel='noopener noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 24 24">
<path d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z" opacity=".3"></path><g opacity=".3"><path d="M20.949 12.951c.001-.013.004-.025.005-.038C20.953 12.925 20.95 12.938 20.949 12.951zM3.046 12.909c.002.017.005.034.007.051C3.051 12.944 3.047 12.927 3.046 12.909zM13.218 14.385h2.329l.366-2.366h-2.695v-1.293c0-.983.321-1.854 1.241-1.854h1.477V6.807c-.26-.035-.809-.112-1.846-.112-2.166 0-3.436 1.144-3.436 3.75v1.574H8.427v2.366h2.227v6.503C11.095 20.955 11.541 21 12 21c.414 0 .819-.038 1.218-.092V14.385z"></path></g><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z"></path><path d="M20.949 12.951c.001-.013.004-.025.005-.038C20.953 12.925 20.95 12.938 20.949 12.951zM3.046 12.909c.002.017.005.034.007.051C3.051 12.944 3.047 12.927 3.046 12.909zM13.218 14.385h2.329l.366-2.366h-2.695v-1.293c0-.983.321-1.854 1.241-1.854h1.477V6.807c-.26-.035-.809-.112-1.846-.112-2.166 0-3.436 1.144-3.436 3.75v1.574H8.427v2.366h2.227v6.503C11.095 20.955 11.541 21 12 21c.414 0 .819-.038 1.218-.092V14.385z"></path>
</svg>  </a>
                    </div>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md  bg-slate-100 p-1'>
                    <a
            href='https://www.instagram.com/taniyakamboj7?igsh=Y3hhZWp3dnMyYjJk'
            type='button'
            target='_blank'
            rel='noopener noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 24 24">
<path d="M16,4H8C5.791,4,4,5.791,4,8v8c0,2.209,1.791,4,4,4h8c2.209,0,4-1.791,4-4V8C20,5.791,18.209,4,16,4z M12,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C16,14.209,14.209,16,12,16z" opacity=".3"></path><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"></path><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"></path>
</svg>  </a>
                    </div>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md  bg-slate-100 p-1'> 
                    <a
                    target='_blank'
            href='https://www.linkedin.com/in/taniya-kamboj-282058276/'
            type='button'
            rel='noopener noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 24 24">
<path d="M19,20H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v14C20,19.552,19.552,20,19,20z" opacity=".3"></path><path d="M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M19,19H5V5h14V19z"></path>
</svg>   </a>
                    </div>
                    
                    
                </div>
            </div>
            <div>
                <h4 className={isDarkMode?"text-slate-50":"text-black"}>BEST SKILL ON</h4>
                <div className='flex gap-1 md:p-2 md:gap-5 '>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md bg-slate-100 p-1 md:p-2'>  
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/js.png" alt="js"/>  
                    </div>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md  bg-slate-100 p-1 md:p-2'> 
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 24 24">
<path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M12 7A11 5 0 1 0 12 17A11 5 0 1 0 12 7Z"></path><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M12 6.972A11.181 5.028 0 1 0 12 17.028A11.181 5.028 0 1 0 12 6.972Z" transform="rotate(-59.914 12 12)"></path><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M12 0.8190000000000008A5.028 11.181 0 1 0 12 23.180999999999997A5.028 11.181 0 1 0 12 0.8190000000000008Z" transform="rotate(-30.083 12.001 12)"></path><path d="M12 10A2 2 0 1 0 12 14A2 2 0 1 0 12 10Z" opacity=".3"></path><path d="M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z M12,11c-0.552,0-1,0.448-1,1s0.448,1,1,1 s1-0.448,1-1S12.552,11,12,11z"></path>
</svg>   
                    </div>
                    <div  className='md:w-12 w-7 h-7 md:h-12 border shadow-lg rounded-md  bg-slate-100 p-1 md:p-2'>  
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="" viewBox="0 0 32 32">
<path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z"></path>
</svg>  
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <button
              type='button'
              className='mt-8 px-5 py-3 w-fit bg-red-400 rounded-md text-white shadow-lg shadow-zinc-600 transform active:scale-x-75 transition-transform mx-5 flex items-center animate-bounce'
              onClick={() => {
                const link = document.createElement("a");
                link.href = "mycv";
                link.download = "Taniya-CV";
                link.click();
              }}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
              <span className='ml-2'>Download CV</span>
            </button>
        </div>

        </div>
        <div className=' flex-1 flex justify-end'>
        <img className='md:w-[500px] w-[350px]  mask-image object-top object-cover hover:scale-110' src={Myprofile}></img>
        </div>
    </div>
  )
}

export default Landing;