import { FaFacebookF, FaTiktok,  FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Al Gharb Management Consultants</h3>
            <p className="mb-4">
              Opposite Grand Mall,<br /> Sharjah, Rolla, UAE
            </p>
            <p className="mb-4">
              <a href="mailto:contactalgharbconsultant@gmail.com" className="hover:underline">contactalgharbconsultant@gmail.com</a>
            </p>
            <p>
              +971 65288822
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to='/services' className="hover:underline">Emirates ID Typing</Link></li>
              <li><Link to='/services' className="hover:underline">Family Visa Online Registration</Link></li>
              <li><Link to='/services' className="hover:underline">Audit Assistance</Link></li>
              <li><Link to='/services' className="hover:underline">Visa Services</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <img src="/algharbLogo.jpeg" className="h-20 mb-4" alt="Al Gharb Logo" />
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555492751458"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@1agmcshj"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FaTiktok size={24} />
              </a>

              <a
                href="https://www.instagram.com/algharbmc/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">© 2024 Al Gharb Management Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;