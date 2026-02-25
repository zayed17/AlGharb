import Link from "next/link";
import Image from "next/image";


const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-8">
          <div className="md:w-1/2 flex items-center justify-center">
            <Image src="/AboutLogo.jpeg" alt="Al Gharb Logo" className="w-full h-auto" width={800} height={600} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-bold mb-6">Welcome to Al Gharb</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Al Gharb Management Consultants, we pride ourselves on being a premier provider of comprehensive business solutions tailored to meet the unique needs of our diverse clientele. Located conveniently in Sharjah, we have built a reputation for excellence, reliability, and innovation in the field of business consulting and management services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced professionals is dedicated to providing personalized service and customized solutions to help our clients achieve their business goals. We offer a wide range of services, including business setup, legal and regulatory compliance, financial management, and strategic planning.
            </p>
            <Link href="/contact" className="mt-6 px-6 py-3 bg-customGreen text-white font-semibold rounded-lg w-fit">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
