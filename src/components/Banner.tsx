import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <div
      className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(/NewBanner.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-customBlue/60"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold mb-4 drop-shadow-lg leading-tight">
          Simplify Your Business
          <br />
          with Expert Consulting
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] mb-8 drop-shadow-md max-w-2xl">
          Expert Consulting Services for Business Success
        </p>
        <Link href="/contact" className="bg-customGreen text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
