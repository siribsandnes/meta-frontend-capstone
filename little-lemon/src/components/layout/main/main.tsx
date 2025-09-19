import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Menu from "../../pages/menu/menu";
import OrderOnline from "../../pages/orderOnline/orderOnline";
import Login from "../../pages/login/login";
import Rating from "../../pages/rating/rating";
import Booking from "../../pages/booking/booking";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </main>
  );
};

export default Main;
