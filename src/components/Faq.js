
import navimg from "../img/Rifcar Logo.png"

import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <section className="faq mb-3" id="faq">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h4 className="header-title fw-bold">Frequently Asked Question</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-md-8">
              
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apa saja syarat yang dibutuhkan?

        </Accordion.Header>
        <Accordion.Body>
          tes 1 2
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
        <Accordion.Body>
        minimal sewa 7 hari
        </Accordion.Body>
      </Accordion.Item> <Accordion.Item eventKey="2">
        <Accordion.Header > Berapa hari sebelumnya sebaiknya booking sewa mobil?</Accordion.Header>
        <Accordion.Body>
        Anda dapat menghubungi maksimal h-1
        </Accordion.Body>
      </Accordion.Item> <Accordion.Item eventKey="3">
        <Accordion.Header>  Apakah Ada biaya antar-jemput?</Accordion.Header>
        <Accordion.Body>
        Ada biaya sebesar Rp 50.000
        </Accordion.Body>
      </Accordion.Item>
     
       <Accordion.Item eventKey="4">
        <Accordion.Header>  Bagaimana jika terjadi kecelakaan? </Accordion.Header>
        <Accordion.Body>
        Anda bisa langsung menghubungi call center kami
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
            </div>
        </div>


    </section>




    )
}

export default Faq