
import contentimg from "../img/img_service.png"
import iconimg from "../img/icon/icon_li.png"

const Content = () => {
    return (
        <div className="content ">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={contentimg} className="content-image" alt="contentimg"/>
                </div>
                <div className="col-md-6 ">
                    <h1 className="content-title mb-3 ">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p className="content-description">
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </p>
                    <div className="content-point ">
                        <p className="mt-3 ">
                            <img src={iconimg} alt=" " className="content-icon me-2"/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        <p className="mt-3 "><img src={iconimg} alt=" " className="content-icon me-2"/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        <p className="mt-3 "><img src={iconimg} alt=" " className="content-icon me-2"/> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        <p className="mt-3 "><img src={iconimg} alt=" " className="content-icon me-2"/> Sewa Mobil Jangka Panjang Bulanan</p>
                        <p className="mt-3 "><img src={iconimg} alt=" " className="content-icon me-2 "/> Gratis Antar - Jemput Mobil di Bandara</p>
                        <p className="mt-3 "><img src={iconimg} alt=" " className="content-icon me-2 "/> Layanan Airport Transfer / Drop In Out</p>
                    </div>


                </div>

            </div>
        </div>
       
    </div>

        
    )
}

export default Content