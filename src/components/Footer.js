import footerimg from "../img/Rifcar Logo.png"
import boxicon from "../vendors/boxicons-2.1.2/css/boxicons.min.css"


const Footer = () => {
    return (
        <section className="footer">
        <div className="container">
        <div className="row">

<div className="col-md-3">
    <div className="footer-item">
        <h5 className="footer-title">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</h5>
        <h5 className="footer-title">Binarcarrental@gmail.com</h5>
        <h5 className="footer-title">081-233-334-808</h5>


    </div>
</div>
<div className="col-md-2">
    <div className="footer-item">
        <a href="#" className="footer-link d-flex align-items-start gap-3 text-decoration-none">
            <p>Our Services
            </p>
        </a>

        <a href="#" className="footer-link d-flex align-items-start gap-3 text-decoration-none">

            <p>Why Us
            </p>
        </a>
        <a href="#" className="footer-link d-flex align-items-start gap-3 text-decoration-none">

            <p>Testimonial</p>
        </a>
        <a href="#" className="footer-link d-flex align-items-start gap-3 text-decoration-none">

            <p>FAQ</p>
        </a>
    </div>
</div>
<div className="col-md-3">
    <div className="footer-item ">
        <h5 className="footer-title fw-bold">Connect With Us</h5>

        <div className="socials d-flex align-items-center gap-3 mb-4">
            <a href="#" className="social-link text-decoration-none">
                <i className="bx bxl-facebook fs-5"></i>
            </a>
            <a href="#" className="social-link text-decoration-none">
                <i className="bx bxl-instagram fs-5"></i>
            </a>
            <a href="#" className="social-link text-decoration-none">
                <i className="bx bxl-twitter fs-5"></i>
            </a>
            <a href="#" className="social-link text-decoration-none">
                <i className="bx bxl-gmail fs-5"></i>
            </a>
            <a href="#" className="social-link text-decoration-none">
                <i className="bx bxl-twitch fs-5"></i>
            </a>
        </div>
    </div>
</div>
<div className="col-md-3">
    <div className="footer-item">
        <h5 className="footer-title fw-bold ">Copyright Binar 2022</h5>
        <img src={footerimg} alt="footerimg" className="logo-image w-50" />
    </div>
</div>
</div>
           </div>
    </section>




    )
}

export default Footer