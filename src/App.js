
import "./App.css";
import "./styles/style.css"

import Home from "./page/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Carimobil from "./page/Carimobil";
import Listmobil from "./page/Listmobil";
import Detailmobil from "./page/Detailmobil";






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/carimobil"  element={<Carimobil/>} />
      <Route path="/listmobil/:name/:category/:price/:status"  element={<Listmobil/>} />
      <Route path="/detailmobil/:id"  element={<Detailmobil/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
