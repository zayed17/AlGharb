// ServiceHome.tsx
import React from 'react';
import {FaBook, FaHandsHelping, FaCalculator, FaUsers, FaChartPie, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/Banner.css'


const featuredServices = [
  { title: "Accounting and bookkeeping", description: "Professional accounting and bookkeeping services.", icon: FaBook },
  { title: "Tax advisory and preparation", description: "Tax advisory and preparation services.", icon: FaCalculator },
  { title: "Accounts supervision", description: "Supervision of accounts and financial records.", icon: FaUsers },
  { title: "Audit assistance", description: "Assistance with auditing processes.", icon: FaHandsHelping },
  { title: "Budgeting and Forecasting", description: "Comprehensive financial planning, budgeting services, and accurate financial forecasting with trend analysis.", icon: FaChartPie},
  { title: "Accounting Software Setup", description: "Professional setup and integration of accounting software tailored to your business needs.", icon: FaLaptopCode },
];

const ServiceHome: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-5 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-customBlue text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex-shrink-0  bg-customBlue p-3 rounded-full">
                {React.createElement(service.icon, { className: 'h-8 w-8 text-white' })}
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-gray-700">{service.title}</p>
                <p className="text-sm text-gray-500 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/services" className="bg-customGreen text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHome;