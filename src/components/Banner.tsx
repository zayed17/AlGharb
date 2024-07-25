import React from 'react';
import bannerImage from '/NewBanner.jpg';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-customBlue opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Simplify Your Business
          <br />
          with Expert Consulting
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Expert Consulting Services for Business Success
        </p>
        <Link
          to="/contact"
          className="bg-customGreen text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;