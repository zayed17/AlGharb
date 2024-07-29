import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-gray-200">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-customBlue text-white mb-4">
            <MdEmail className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-customBlue">Mail for information</h3>
              <a href="mailto:contactalgharbconsultant@gmail.com" className="text-black text-sm">
                contactalgharbconsultant@gmail.com
              </a>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-gray-200">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-customBlue text-white mb-4">
            <MdPhone className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-customBlue">Office Phone Number</h3>
          <ul className="text-sm text-gray-700">
            <li className="mb-1">+971 581366135</li>
            <li className="mb-1">+971 507296378</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-gray-200">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-customBlue text-white mb-4">
            <MdLocationOn className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-customBlue">Address Info</h3>
          <ul className="text-sm text-gray-700">
            <li className="mb-1 text-center">Al Mussalla, Sharjah, UAE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;