import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Al Gharb Management Consultants</h3>
            <p className="mb-4">
              <br />Al Mussalla, Sharjah, UAE
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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:underline">Tax advisory and preparation</Link></li>
              <li><Link href="/services" className="hover:underline">Accounts supervision</Link></li>
              <li><Link href="/services" className="hover:underline">Audit Assistance</Link></li>
              <li><Link href="/services" className="hover:underline">Budgeting and Forecasting</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <Image src="/algharbLogo.jpeg" className="h-20 w-auto mb-4" alt="Al Gharb Logo" width={80} height={80} sizes="80px" />
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

        <div className="text-center mt-8 border-t border-white/10 py-6">
          <p className="text-gray-400 text-sm">© {currentYear} Al Gharb Management Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
