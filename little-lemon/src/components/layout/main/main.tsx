import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import Reservation from "../../pages/reservation/reservation";
import About from "../../pages/about/about";
import Menu from "../../pages/menu/menu";
import OrderOnline from "../../pages/orderOnline/orderOnline";
import Login from "../../pages/login/login";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
