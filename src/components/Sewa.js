import { Link } from "react-router-dom"



const Sewa = () => {
    return (
        <section className="sewa">
        <div className="container ">
            <div className="header text-center px-5 rounded-2 p-5" style={{backgroundColor: "#0D28A6"}}>
                <div className="row align-items-center text-center ">
                    <h4 className="header-title">Sewa Mobil di (Lokasimu) Sekarang</h4>
                    <h5 className="header-description mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                </div>
                <Link to="/carimobil" className="btn-primary px-4 py-2 align-items-center text-decoration-none  mt-3  mb-5">Mulai Sewa Mobil</Link>
            </div>

        </div>
    </section>




    )
}

export default Sewa