import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import ServiceBanner from "../components/CommonBanner"
import ServicesList from "../components/SeriveList"

const Service = () => {
  return (
    <>
    <Navbar />
    <ServiceBanner title={"Service"} url={'/service.jpg'} />
    <ServicesList />
    <Footer />
    </>
  )
}

export default Service