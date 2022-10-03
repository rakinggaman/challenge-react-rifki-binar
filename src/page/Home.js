
import "../App.css";
import "../styles/style.css"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Content from "../components/Content"
import Whyus from "../components/Whyus";

import Sewa from "../components/Sewa";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";







function Home() {
  return (
  <div>
   <Navbar/>
   <Header button={true} />
   <Content/>
   <Whyus/>
   <Testimonial/>
   <Sewa/>
   <Faq/>
   <Footer/>
  </div>
  );
}

export default Home;
