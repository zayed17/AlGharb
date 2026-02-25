// Services.tsx
import React from 'react';
import { FaIdCard, FaHeartbeat, FaPlane, FaFileSignature, FaFileAlt, FaUserMd, FaBuilding, FaBusinessTime, FaBook, FaCalculator, FaUsers, FaHandsHelping, FaHandshake, FaCertificate, FaLanguage, FaGavel, FaPassport, FaNotesMedical, FaRegBuilding, FaChartPie, FaLaptopCode } from 'react-icons/fa';

const services = [
  { title: "Accounting and bookkeeping", description: "Professional accounting and bookkeeping services.", icon: FaBook },
  { title: "Tax advisory and preparation", description: "Tax advisory and preparation services.", icon: FaCalculator },
  { title: "Accounts supervision", description: "Supervision of accounts and financial records.", icon: FaUsers },
  { title: "Audit assistance", description: "Assistance with auditing processes.", icon: FaHandsHelping },
  { title: "Budgeting and Forecasting", description: "Comprehensive financial planning, budgeting services, and accurate financial forecasting with trend analysis.", icon: FaChartPie},
  { title: "Accounting Software Setup", description: "Professional setup and integration of accounting software tailored to your business needs.", icon: FaLaptopCode },
  { title: "Emirates ID Typing", description: "Assistance with Emirates ID applications.", icon: FaIdCard },
  { title: "Medical Fitness Typing", description: "Medical fitness typing services for visa applications.", icon: FaHeartbeat },
  { title: "Immigration Typing", description: "Immigration typing services for various visa applications.", icon: FaPlane },
  { title: "Family Visa Online Registration", description: "Online registration for family visas.", icon: FaFileSignature },
  { title: "Tas'heel Services", description: "Government transactions and document services.", icon: FaFileAlt },
  { title: "Occupational Health Card Typing", description: "Typing services for occupational health cards.", icon: FaUserMd },
  { title: "Economic Department Services", description: "Services related to the economic department.", icon: FaBuilding },
  { title: "Business Setup", description: "Assistance with setting up new businesses.", icon: FaBusinessTime },
  { title: "Local Sponsorship", description: "Local sponsorship services for businesses.", icon: FaHandshake },
  { title: "Certificate Attestation", description: "Certificate attestation services.", icon: FaCertificate },
  { title: "Translation Services", description: "Professional translation services.", icon: FaLanguage },
  { title: "LLC Agreement", description: "LLC agreement preparation and consultation.", icon: FaGavel },
  { title: "Visa Services", description: "Various visa services.", icon: FaPassport },
  { title: "Health Insurance Services", description: "Health insurance services and consultation.", icon: FaNotesMedical },
  { title: "Govt related work (ADJD, MOJ, DXPP, DC, SEDD, DED, ETC)", description: "Government-related work and services.", icon: FaRegBuilding },
];

const ServicesList: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-3 p-5 bg-white rounded-xl shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-gray-200 transition-all duration-200">
            <div className="flex-shrink-0 mt-1">
              {React.createElement(service.icon, { className: 'h-6 w-6 text-customBlue' })}
            </div>
            <div>
              <p className="text-base md:text-lg font-medium text-gray-700">{service.title}</p>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
