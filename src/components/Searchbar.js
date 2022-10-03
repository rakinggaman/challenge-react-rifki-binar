import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Searchbar = (button) => {
  const [data, setData] = useState({
    name: 'Masukan nama mobil',
    category: 'null',
    price: 'null',
    status: 'true',
  })

  const formRef = useRef()

  // const Url = new URLSearchParams('listmobil')
  // Url.append('name', data.name)
  // Url.append('category', data.category)
  // Url.append('price', data.price)
  // Url.append('status', data.status)

  const Params = `listmobil/${data.name}/${data.category}/${data.price}/${data.status}`

  return (
    <div className='container'>
      <div className='content '>
        <div className='search'>
          {button.button === true ? (
            <h5 className=' mb-4 d-none'>
              {' '}
              <Link to='/listmobil' className=' fw-bold text-black '>
                {' '}
                Pencarianmu
              </Link>
            </h5>
          ) : (
            <h5 className=' mb-4 '>
              {' '}
              <Link
                to='/carimobil'
                className=' fw-bold text-black text-decoration-none'
              >
                {' '}
                Pencarianmu
              </Link>
            </h5>
          )}

          <form ref={formRef} onSubmit={console.log(data)}>
            <div className='search-items d-flex align-items-center justify-content-between '>
              <div className='statistic-item '>
                <h4 className='search-title '>Nama Mobil</h4>
                <input
                  type='text'
                  value={data.name === 'Masukan nama mobil' ? '' : data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder='Masukkan Nama Mobil'
                  className='input-select '
                />
              </div>

              <div className='search-item '>
                <h4 className='search-title'>Kategori</h4>
                <select
                  name='choose'
                  id='choose'
                  className='input-select '
                  value={data.category}
                  onChange={(e) =>
                    setData({ ...data, category: e.target.value })
                  }
                >
                  <option value='null'>Pilih Category</option>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='4 - 6 orang'>4 - 6 Orang</option>
                  <option value='6 - 8 orang'>6 - 8 Orang</option>
                </select>
              </div>

              <div className='search-item '>
                <h4 className='search-title'>Harga</h4>
                <select
                  name='choose'
                  id='choose'
                  className='input-select  '
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                >
                  <option value='null'>Masukkan Harga Sewa per Hari</option>
                  <option value='10000'>Rp 10000</option>
                  <option value='200000'>RP 200000</option>
                  <option value='2000000000'>Rp 2000000000</option>
                </select>{' '}
              </div>

              <div className='search-item '>
                <h4 className='search-title'>Status</h4>
                <select
                  name='choose'
                  id='choose'
                  className='input-select '
                  value={data.status}
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                >
                  <option value='true'>Disewa</option>

                  <option value='false'>tersedia</option>
                </select>{' '}
              </div>

              <div className='search-item text-center'>
                <br />
                {button.button === true ? (
                  <div className=' '>
                    <Link
                      to={`/${Params}`}
                      className='btn-primary px-3 py-2 text-decoration-none'
                    >
                      Cari Mobil{' '}
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      to={`/${Params}`}
                      className='btn-secondary px-3 py-2 text-decoration-none'
                    >
                      {' '}
                      Edit
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
