import Navbar from "../components/NavBar"
import AboutBanner from '../components/CommonBanner'
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
    <Navbar />
    <AboutBanner title={"About"} url={'/AboutBanner.jpg'} />
    <AboutUs />
    <Footer />
    </>
  )
}

export default About