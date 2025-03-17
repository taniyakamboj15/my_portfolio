import React, { useContext } from "react";
import { motion } from "framer-motion";
import { themeContext } from '../utils/themeContext';

const educationData = [
  {
    institution: "Graphic University",
    year: "2024 - now",
    marks:"SEM 1: 7.9 SGPA",
    description: "Master's in Computer Applications",
  },
  {
    institution: "Graphic Era University",
    year: "2021 - 2024",
    marks:" 8.45 CGPA",
    description: "Bachelor's in Computer Applications",
  },
  {
    institution:"Asha Modern International School",
    year: "2019 - 2021",
    marks:"75%",
    description: "High School",
  },
  {
    institution: "Asha Modern International School",
    year: "2017 - 2019",
    marks:"72%",
    description: "Middle School",
  },
];

const Education = () => {
  const { isDarkMode } = useContext(themeContext);

  return (
    <div
      className={`relative pb-20 pt-32 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-slate-300 text-black"
      }`}
    >
      {/* Wavy Background */}
      <svg
        className='absolute top-0 left-0 w-full'
        viewBox='0 0 1440 320'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill={isDarkMode ? "#1F2937" : "#fff"}
          d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,240C672,245,768,235,864,208C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256V0H0Z'
        />
      </svg>

      {/* Education Section */}
      <div className='text-center relative z-10'>
        <h1 className='text-4xl font-extrabold drop-shadow-lg md:text-5xl'>
          Education
        </h1>
        <p className='text-lg drop-shadow-md md:text-xl opacity-90'>
          My Learning Journey
        </p>
        <div
          className={`w-20 h-1 mx-auto mt-2 transition-all ${
            isDarkMode ? "bg-slate-400" : "bg-white"
          }`}
        ></div>
      </div>

      {/* Education Timeline */}
      <div className='relative mt-16 mx-auto w-11/12 md:w-2/3'>
        {/* Vertical Line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-all ${
            isDarkMode ? "bg-gray-500" : "bg-white"
          }`}
        ></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } flex-col md:flex-row`}
            initial={{ opacity: 0, y: 50 }} // Start hidden & lower
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{
              duration: 0.8,
              delay: index * 0.3, // Delay for each item
            }}
            viewport={{ once: true }} // Runs animation only once
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-md animate-pulse transition-all ${
                isDarkMode
                  ? "bg-gray-400 border-gray-600"
                  : "bg-white border-red-500"
              }`}
            ></div>

            {/* Card */}
            <motion.div
              className={`p-6 rounded-lg shadow-xl w-11/12 sm:w-80 transition-transform duration-300 transform hover:scale-105 ${
                isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-black"
              } ${index % 2 === 0 ? "ml-10 md:ml-20" : "mr-10 md:mr-20"}`}
            >
              <h2
                className={`text-xl font-semibold transition-all ${
                  isDarkMode ? "text-red-300" : "text-red-500"
                }`}
              >
                {edu.institution}
              </h2>
                <p className={`${isDarkMode ? "text-gray-200": "text-gray-800"}`}>{edu.marks}</p>
              <p className='text-gray-500'>{edu.year}</p>
              <p className='text-sm opacity-80'>{edu.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
