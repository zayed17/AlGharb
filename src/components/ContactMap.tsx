'use client';
import React, { useState } from 'react';

const MapComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full flex justify-center items-center mb-16 relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80">
          <div className="loader"></div>
        </div>
      )}
      <div className="relative w-full max-w-4xl h-80 md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.427321464271!2d55.3949213782153!3d25.3544144418608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ee4f7b97336737%3A0xd2dae9531cc9065d!2sAl%20Gharb%20Management%20Consultants!5e1!3m2!1sen!2sin!4v1721801643714!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
