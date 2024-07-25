import React from "react";

interface CommonType {
  title:string,
  url:string
}

const CommonBanner : React.FC<CommonType>= ({title,url}) => {
    return (
      <div className="relative h-[300px] pt-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${url})`}}>
        <div className="absolute inset-0 bg-customBlue opacity-50"></div> 
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white">{title}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default CommonBanner;