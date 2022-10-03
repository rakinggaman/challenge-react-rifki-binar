import '../App.css'
import '../styles/style.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Detaildata from '../components/Detaildata'
import Searchbardisable from '../components/Searchbardisable'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Carimobil() {
  let { id } = useParams()
  const [data, setData] = useState([])
  function fetchRentCarsData() {
    fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((result) => result.json())
      .then((result) => {
        setData(result)
      })
  }

  useEffect(() => {
    fetchRentCarsData()
  }, [id])

  return (
    <div>
      <Navbar />
      <div className='headers'>
        <div className='container pt-5 pb-4'>
          <div className='row align-items-center'></div>
        </div>
      </div>
      <Searchbardisable />
      <Detaildata data={data} />
      <Footer />
    </div>
  )
}

export default Carimobil
