import '../App.css'
import '../styles/style.css'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Carddata from '../components/Carddata'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Listmobil() {
  let { name, category, price, status } = useParams()
  const [data, setData] = useState([])
  async function fetchRentCarsData() {
    let cars = await (
      await fetch('https://bootcamp-rent-car.herokuapp.com/admin/car')
    ).json()

    if (name !== 'Masukan nama mobil') {
      cars = cars.filter(function (car) {
        return car.name === name
      })
    }

    if (category !== 'null') {
      cars = cars.filter(function (car) {
        return car.category === category
      })
    }

    if (price !== 'null') {
      cars = cars.filter(function (car) {
        return car.price == price
      })
    }

    if (status !== 'true') {
      cars = cars.filter(function (car) {
        return car.status === status
      })
    }

    setData(cars)
  }

  useEffect(() => {
    fetchRentCarsData()
  }, [name, category, price, status])

  return (
    <div>
      <Navbar />
      <div className='headers'>
        <div className='container pt-5 pb-4'>
          <div className='row align-items-center'></div>
        </div>
      </div>
      <Searchbar />
      <Carddata data={data} />
      <Footer />
    </div>
  )
}

export default Listmobil
