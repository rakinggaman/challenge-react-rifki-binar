import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import assetimg from '../img/img_car.png'

const Detaildata = (data) => {
  return (
    <div className='why mb-5' id='whyus'>
      <div className='container '>
        <div className='row'>
          <div className='detail col-md-8 mb-4'>
            <div className='card w-100' style={{ width: '18rem;' }}>
              <div className='card-body '>
                <h4 className='card-title mb-4  ms-2 mt-4'>Tentang Paket</h4>
                <p className='card-title mb-2  ms-2'>include</p>
                <ul className='text-secondary card-text'>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    Sudah termasuk bensin selama 12 jam Sudah termasuk Tiket
                    Wisata Sudah termasuk pajak
                  </li>
                  <li>Sudah termasuk bensin 12jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <p className='card-title mb-2  ms-2  fw-bold'> Exclude</p>
                <ul className='text-secondary card-text'>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <div className='col-md'>
                  <div
                    className='accordion'
                    style={{ marginLeft: '-10px;' }}
                    id='accordionPanelsStayOpenExample'
                  >
                    <section className='accordion-item border-0 '>
                      <Accordion>
                        <Accordion.Item eventKey='0'>
                          <Accordion.Header>
                            {' '}
                            <strong> Refund, Reschedule, Overtime</strong>{' '}
                          </Accordion.Header>{' '}
                          <Accordion.Body>
                            {' '}
                            <ul className='text-secondary card-text'>
                              <li>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp 20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp 20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                              <li>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                              </li>
                              <li>
                                Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya Rp 20.000/jam
                              </li>
                              <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>{' '}
                          </Accordion.Body>{' '}
                        </Accordion.Item>{' '}
                      </Accordion>
                      <div
                        id='panelsStayOpen-collapseOne'
                        className='accordion-collapse collapse show'
                        aria-labelledby='panelsStayOpen-headingOne'
                      >
                        <div className='accordion-body'></div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='detail col-md-4 '>
            <div className='card w-100' style={{ width: '18rem;' }}>
              <img src={data.data.image} className='card-img-top' alt='...' />
              <div className='card-body pb-5'>
                <h5 className='card-description mb-2'>{data.data.name}</h5>
                <p className='card-text text-dark'>
                  <i className='bx bx-group me-3'></i>4-5 orang
                </p>
                <div className='card-total justify-content-between d-flex pb-3 pt-5'>
                  <h4 className=' fw-bold '>Total</h4>
                  <h4 className=' fw-bold '>{data.data.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detaildata
