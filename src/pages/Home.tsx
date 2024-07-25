import Navbar from '../components/NavBar'
import Banner from '../components/Banner'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'
import ServiceHome from '../components/ServiceHome'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='pt-20'>
    <Banner />
    <ServiceHome />
    <WhyChoose />
    <Footer />
    </div>
    </>
  )
}

export default Home

