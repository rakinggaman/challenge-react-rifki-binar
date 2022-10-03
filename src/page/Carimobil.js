import '../App.css'
import '../styles/style.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'

function Carimobil() {
  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar button={true} />

      <Footer />
    </div>
  )
}

export default Carimobil
