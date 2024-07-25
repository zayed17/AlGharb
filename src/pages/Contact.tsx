import ContactBanner from '../components/CommonBanner'
import ContactUs from '../components/ContactDetails'
import MapComponent from '../components/ContactMap'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactBanner title={'Contact'} url={'/contactBanner.jpg'} />
      <ContactUs />
      <MapComponent />
      <Footer />
    </>
  )
}

export default Contact
