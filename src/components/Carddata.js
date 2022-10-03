import { Link } from 'react-router-dom'

import assetimg from '../img/img_car.png'

const Carddata = (data) => {
  return (
    <div className='why'>
      <div className='container '>
        <div className='row'>
          {data.data.slice(0, 10).map((item, key) => (
            <div className='col-md-4 mb-3 ' key={key}>
              <div className='card w-100' style={{ width: '18rem' }}>
                <img src={item.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <p className='card-text'>{item.name}</p>
                  <p className='card-text'>{item.category}</p>
                  <p className='card-text'>{item.status}</p>
                  <h5 className='card-description'>{item.price}</h5>
                  <p className='card-text fw-bold'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <Link
                  to={`/detailmobil/${item.id}`}
                  className='btn-primary px-5 py-3 ms-3 me-3 mb-3 text-center text-decoration-none'
                >
                  Pilih Mobil
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carddata
