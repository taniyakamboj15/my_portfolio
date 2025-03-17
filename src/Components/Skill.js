import { useContext, useState, useEffect, useRef } from "react";
import { themeContext } from "../utils/themeContext";
import reactImg from "../images/react.png";
import expressImg from "../images/express.png";
import gitImg from "../images/git (2).png";
import githubImg from "../images/github (2).png";
import javaImg from "../images/java.png";
import javascriptImg from "../images/javascript (2).png";
import mongodbImg from "../images/mongodb (2).png";
import nodejsImg from "../images/nodejs.png";
import phpImg from "../images/php (2).png";
import pythonImg from "../images/python (2).png";
import tailwindImg from "../images/tailwind (2).png";

const skills = [
  { src: reactImg, name: "React" },
  { src: expressImg, name: "Express" },
  { src: mongodbImg, name: "MongoDB" },
  { src: nodejsImg, name: "Node.js" },
  { src: javascriptImg, name: "JavaScript" },
  { src: gitImg, name: "Git" },
  { src: githubImg, name: "GitHub" },
  { src: tailwindImg, name: "Tailwind CSS" },
  { src: phpImg, name: "PHP" },
  { src: pythonImg, name: "Python" },
  { src: javaImg, name: "Java" },
];

const Skill = () => {
  const { isDarkMode } = useContext(themeContext);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let index = 0;
          const interval = setInterval(() => {
            setVisibleSkills((prev) => {
              if (index >= skills.length) {
                clearInterval(interval);
                return prev;
              }
              return [...prev, skills[index++].name];
            });
          }, 300); // Delay each skill appearance by 300ms
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={skillRef}
      className={`flex flex-col lg:flex-row items-center justify-center lg:items-start gap-10 lg:gap-20 p-6 sm:w-[90vw] lg:w-[90vw] bg-opacity-85 backdrop-blur-lg shadow-lg md:shadow-xl shadow-cyan-200 drop-shadow-md ${
        isDarkMode
          ? "bg-gradient-to-r from-slate-700 to-slate-800"
          : "bg-gradient-to-r from-slate-500 to-red-300"
      } lg:mx-16 backdrop-saturate-150 group mx-4 rounded-lg mb-10`}
    >
      {/* Left Content */}
      <div
        className={`flex flex-1 md:flex-none sm:text-center items-center justify-center ${
          isDarkMode ? "bg-slate-300" : "bg-red-300"
        } mb-4 shadow-md group-hover:shadow-slate-200 rounded-md p-2 shadow-neutral-800 group-hover:scale-110 lg:mt-[100px]`}
      >
        <p className="text-3xl font-bold text-center">My Skills</p>
      </div>

      {/* Right Skills Section */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center w-[120px] h-[60px] transition-all duration-500 ${
              visibleSkills.includes(skill.name)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
            } ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 border-gray-200"
                : "bg-white text-gray-800 border-gray-800"
            } rounded-md shadow-md border hover:shadow-lg hover:shadow-red-300 hover:-translate-y-3 bg-opacity-85 backdrop-blur-lg backdrop-saturate-150`}
          >
            <img src={skill.src} className="w-8 h-8 object-contain mb-1" alt={`${skill.name} logo`} />
            <span className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
