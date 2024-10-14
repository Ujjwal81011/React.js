import React from "react";
import { Link } from "react-router-dom"; 

const Error404 = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-800 mb-4">
        Error 404
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 transition duration-200"
        aria-label="Go back to Home"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error404;