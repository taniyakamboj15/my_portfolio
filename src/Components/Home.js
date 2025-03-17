import React from 'react'
import Landing from './Landing';
import Education from './Education';
import Skill from './Skill';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  const skill = useRef();
  const [skillIsVisible, setSkillIsVisible] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (hasAnimated) return; 
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setSkillIsVisible(true);
          setHasAnimated(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );
  
    if (skill.current) {
      observer.observe(skill.current);
    }
  
    window.addEventListener("scroll", scrollFunction);
  
    return () => {
      if (skill.current) observer.unobserve(skill.current);
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [hasAnimated]); // Only run if `hasAnimated` changes
  
  
  return (
    <div>
      <button
        type='button'
        className={`!fixed bottom-5 end-5 ${
          !isVisible ? "hidden" : ""
        } z-[99999999999999] rounded-full bg-red-400 p-3 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg`}
        onClick={backToTop}
      > <span className='[&>svg]:w-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='3'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
        />
      </svg>
    </span></button>
      <Landing/>
      <div
          className={`mt-16 md:mt-10 transform transition-all duration-[2s] ${
            skillIsVisible
              ? "opacity-100 scale-100 rotate-0"
              : hasAnimated 
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-90 rotate-[-10deg]"
          }`}
          ref={skill}
        >
          <Skill />
        </div>
      <Education/>
    </div>

  )
}

export default Home;