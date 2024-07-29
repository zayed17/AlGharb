import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-gray-200 fixed top-0 left-0 w-full z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => navigate('/')}>
          <img src="/algharbLogo.jpeg" className="h-20" alt="Al Gharb Logo" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-bold flex flex-col text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:mx-4 lg:mx-8">
            <li>
              <button
                onClick={() => navigate('/')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/') ? 'text-customBlue' : 'text-gray-900'} md:bg-transparent md:hover:text-customBlue`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/services')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/services') ? 'text-customBlue' : 'text-gray-900'} md:bg-transparent md:hover:text-customBlue`}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/about')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/about') ? 'text-customBlue' : 'text-gray-900'} md:bg-transparent md:hover:text-customBlue`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/contact')}
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/contact') ? 'text-customBlue' : 'text-gray-900'} md:bg-transparent md:hover:text-customBlue`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;