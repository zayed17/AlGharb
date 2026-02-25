import React from "react";

interface CommonType {
  title:string,
  url:string
}

const CommonBanner : React.FC<CommonType>= ({title,url}) => {
    return (
      <div className="relative min-h-[35vh] md:min-h-[45vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${url})`}}>
        <div className="absolute inset-0 bg-customBlue/60"></div> 
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold text-white">{title}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default CommonBanner;
