
import {
    Link
  } from "react-router-dom";
  

const Searchbardisable = () => {
    return (
        <div className="container"> 
        <div className="content ">
        <div className="search">
          
                  <h5 className=" mb-4 "> <Link to="/listmobil" className=" fw-bold text-black text-decoration-none"> Pencarianmu</Link></h5>
                
           
            <div className="search-items d-flex align-items-center justify-content-between ">
                <div className="statistic-item ">
                    <h4 className="search-title ">Nama Mobil</h4>
                    <input type="text" alt="" placeholder=" " className="input-select disabled" disabled />
                </div>
                <div className="statistic-item ">
                    <h4 className="search-title ">Kategori</h4>
                    <input type="text" alt="" placeholder=" " className="input-select disabled" disabled />
                </div>
                <div className="statistic-item ">
                    <h4 className="search-title ">Harga</h4>
                    <input type="text" alt="" placeholder="" className="input-select disabled" disabled />
                </div>
                <div className="statistic-item ">
                    <h4 className="search-title ">Status</h4>
                    <input type="text" alt="" placeholder=" " className="input-select disabled" disabled />
                </div>
            </div>
        </div>
         
       
    </div>
    </div>
    )
}

export default Searchbardisable