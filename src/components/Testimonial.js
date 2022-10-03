import testiimg from "../img/testimonial_1.png";
import rateimg from "../img/icon/Rate.png";
// Import Swiper React components
import React, { useRef} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";

import "swiper/css/effect-fade";

// Import Swiper styles
import "swiper/css";

const Testimonial = () => {

    const swiper = useSwiper();
    const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <section className="arrival" id="testimonial">
      <div className="align-items-center text-center mb-4">
        <h3 className="why-title fw-bold ">Testimonial</h3>
        <h5 className="why-description mt-3 fw-bold">
          Berbagai review positif dari para pelanggan kami
        </h5>
      </div>

      <Swiper
      
    
            slidesPerView={1}
            
            watchSlidesVisibility={true}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            autoHeight={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
    
    
     
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
  
          >
            
              <div className="swiper mt-5" id="bestSeller">
              <div className="swiper-wrapper">
                
        <SwiperSlide>
        <div className="container swiper-slide " > 
          <div className="card border-2" style={{ backgroundColor: "#F1F3FF" }}>
            <div className="card-body ">
              <div className="row mt-3 ps-4 pb-4">
                <div className="col-md-3">
                  <img
                    src={testiimg}
                    className="testimonial-image mt-5"
                    alt="testiimg"
                  />
                </div>
                <div className="col-md-8">
                  <img src={rateimg} alt="rateimg" />
                  <p className="testimonial-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptates praesentium eum aliquid sequi esse, modi
                    ipsam harum, quasi deleniti quam magnam, omnis repellat
                    fugiat ea doloremque earum similique commodi!
                  </p>
                  <p> John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container swiper-slide" > 
          <div className="card border-2" style={{ backgroundColor: "#F1F3FF"  }}>
            <div className="card-body ">
              <div className="row mt-3 ps-4 pb-4">
                <div className="col-md-3">
                  <img
                    src={testiimg}
                    className="testimonial-image mt-5"
                    alt="testiimg"
                  />
                </div>
                <div className="col-md-8">
                  <img src={rateimg} alt="rateimg" />
                  <p className="testimonial-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptates praesentium eum aliquid sequi esse, modi
                    ipsam harum, quasi deleniti quam magnam, omnis repellat
                    fugiat ea doloremque earum similique commodi!
                  </p>
                  <p> Vicha 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" container swiper-slide" > 
          <div className="card border-2" style={{ backgroundColor: "#F1F3FF" }}>
            <div className="card-body ">
              <div className="row mt-3 ps-4 pb-4">
                <div className="col-md-3">
                  <img
                    src={testiimg}
                    className="testimonial-image mt-5"
                    alt="testiimg"
                  />
                </div>
                <div className="col-md-8">
                  <img src={rateimg} alt="rateimg" />
                  <p className="testimonial-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptates praesentium eum aliquid sequi esse, modi
                    ipsam harum, quasi deleniti quam magnam, omnis repellat
                    fugiat ea doloremque earum similique commodi!
                  </p>
                  <p> Nari 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        
         <SwiperSlide>
        <div className="container swiper-slide " > 
          <div className="card border-2" style={{ backgroundColor: "#F1F3FF" }}>
            <div className="card-body ">
              <div className="row mt-3 ps-4 pb-4">
                <div className="col-md-3">
                  <img
                    src={testiimg}
                    className="testimonial-image mt-5"
                    alt="testiimg"
                  />
                </div>
                <div className="col-md-8">
                  <img src={rateimg} alt="rateimg" />
                  <p className="testimonial-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptates praesentium eum aliquid sequi esse, modi
                    ipsam harum, quasi deleniti quam magnam, omnis repellat
                    fugiat ea doloremque earum similique commodi!
                  </p>
                  <p> John Michael 12, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        </div>
        </div>
      </Swiper>

     

      <div className=" align-items-center text-center mt-5 gap-2">
      <button className="arrow-left arrow btn btn-white border-dark rounded-5 me-2"> <i class='bx bx-left-arrow-alt fs-5'></i></button>
        <button className="arrow-right arrow btn btn-success rounded-5"> <i class='bx bx-right-arrow-alt fs-5'></i></button>
        
       
      </div>
    </section>
  );
};

export default Testimonial;
