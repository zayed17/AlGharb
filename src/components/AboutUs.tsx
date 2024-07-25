import { useNavigate } from "react-router-dom";


const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-8">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/AboutLogo.jpeg" alt="Al Gharb Logo" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-bold mb-6">Welcome to Al Gharb</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Al Gharb Management Consultants, we pride ourselves on being a premier provider of comprehensive business solutions tailored to meet the unique needs of our diverse clientele. Located conveniently in Grand Mall Sharjah, we have built a reputation for excellence, reliability, and innovation in the field of business consulting and management services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced professionals is dedicated to providing personalized service and customized solutions to help our clients achieve their business goals. We offer a wide range of services, including business setup, legal and regulatory compliance, financial management, and strategic planning.
            </p>
            <button onClick={()=>navigate('/contact')} className="mt-6 px-6 py-3 bg-customGreen text-white font-semibold rounded-lg">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;