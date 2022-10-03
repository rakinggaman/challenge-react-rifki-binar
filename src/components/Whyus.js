
import icon1 from "../img/icon/icon_complete.png"
import icon2 from "../img/icon/icon_24hrs.png"
import icon3 from "../img/icon/icon_price.png"
import icon4 from "../img/icon/icon_professional.png"


const Whyus = () => {
    return (
        <div className="why " id="whyus">
            <div className="container ">
             <h4 className="why-title fw-bold">Why Us?</h4>
             <h5 className="why-description mt-3 fw-bold">Mengapa harus pilih Binar Car Rental?</h5>
             <div className="row">
                  <div className="col-md-3 mt-4">
                    <div className="card p-3">
                        <img src={icon1} style={{width: 36}}className="card-img-top ms-3 mt-3" alt="icon"/>
                        <div className="card-body ">
                            <div className="d-flex align-items-center gap-5">
                                <h4 className="card-title ">Mobil Lengkap</h4>
        
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <h5 className="card-description"> Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</h5>
                            </div>
        
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 mt-4">
                    <div className="card p-3">
                        <img src={icon3}  style={{width: 36}} className="card-img-top ms-3 mt-3 "alt="icon"/>
                        <div className="card-body ">
                            <div className="d-flex align-items-center gap-5">
                                <h4 className="card-title ">Harga Murah</h4>
        
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <h5 className="card-description"> Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</h5>
                            </div>
        
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card p-3">
                        <img src={icon2} style={{width: 36}}className="card-img-top ms-3 mt-3" alt="icon"/>
                        <div className="card-body ">
                            <div className="d-flex align-items-center gap-5">
                                <h4 className="card-title ">Layanan 24 Jam</h4>
        
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <h5 className="card-description"> Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</h5>
                            </div>
        
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card p-3">
                        <img src={icon4} style={{width: 36}} className="card-img-top ms-3 mt-3" alt="icon"/>
                        <div className="card-body ">
                            <div className="d-flex align-items-center gap-5">
                                <h4 className="card-title ">Sopir Profesional</h4>
        
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <h5 className="card-description"> Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</h5>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
          
            </div>
        </div> 
 
        
    )
}

export default Whyus