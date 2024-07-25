import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-8xl font-bold text-customBlue ">404</h1>
      <h1 className="text-4xl font-bold text-black mb-4">Page Not Found</h1>
      <button onClick={() => navigate('/')} className="px-4 py-2 text-white bg-customGreen rounded">
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;