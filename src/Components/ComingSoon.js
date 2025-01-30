import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide animate-fade-in">
          Coming Soon
        </h1>
        <p className="text-base md:text-lg text-gray-300 mt-4">
          I'm currently working on my personal portfolio. Stay tuned for updates!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="mailto:taniyakamboj184@gmail.com"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/taniyakamboj15"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:border-yellow-500 transition duration-300"
          >
            Follow Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
