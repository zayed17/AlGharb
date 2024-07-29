// ServiceFeature.tsx
import React from 'react';
import { FaBullseye, FaThumbsUp, FaHandsHelping } from 'react-icons/fa';
import '../style/Banner.css'

const features = [
  { title: "Customer Satisfaction", description: "Your success is our passion. We go the extra mile to make you happy.", icon: FaBullseye },
  { title: "Quality, our first priority", description: "Expect excellence in everything we do. Unwavering commitment to high standards.", icon: FaThumbsUp },
  { title: "Tailored Services", description: "Solutions designed for you. We address your unique needs and goals.", icon: FaHandsHelping },
];

const ServiceFeature: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold text-customBlue mb-4 leading-tight">
            We Help Our Clients to Achieve Their Goal
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            We guide you from concept to success, providing expert solutions to realize your entrepreneurial vision.
            Our expertise unlocks your potential, transforming ideas into reality through customized business solutions.
          </p>
          <div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 bg-customBlue from-blue-100 to-blue-200 p-3 rounded-full shadow-md">
                  {React.createElement(feature.icon, { className: 'h-6 w-6 md:h-8 md:w-8 text-white' })}
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-700">{feature.title}</p>
                  <p className="text-sm md:text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/service.jpg" alt="Client meeting" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;