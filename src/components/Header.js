// import {Input,Container,ToggleButton, span}from "react-bootstrap"
import headerimg from "../img/img_car.png"
import {
    Link
  } from "react-router-dom";
  

const Header = (button) => {
console.log(button, 'ininilaibutton')

    return (
        <div className="header">
        <div className="container pt-5 pb-4">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <h1 className="header-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="header-description mt-3">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </p>
                    {button.button==true ? 
                    
                
                    <div className="d-flex align-items-center gap-4 mb-5">
                        <Link to="/carimobil" className="btn-primary px-4 py-2 text-decoration-none"> Mulai Sewa Mobil</Link>

                    </div> :
                      <div className="d-flex align-items-center gap-4 mb-5">
                      <Link to="/carimobil" className="btn-primary px-4 py-2 d-none ">Mulai Sewa Mobil</Link>

                  </div>

                    }
                </div>
                <div className="col-md-6">
                    <img src={headerimg} className="header-image" alt="headerimg"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header