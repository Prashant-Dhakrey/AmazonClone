import Navbaar from './Components/header/Navbar.js';
import Newnav from './Components/newnavbar/Newnav.js';
import Maincompo from './Components/home/Maincompo.js';
import Footer from './Components/footer/Footer.js';
import SignUp from './Components/signup_sign/SignUp.js';
import Sign_in from './Components/signup_sign/Sign_in.js';
import Cart from './Components/cart/Cart.js';
import Buynow from './Components/buynow/Buynow.js';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Routes, Route } from "react-router-dom"; 

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Navbaar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincompo />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      )}
    </>
  );
}

export default App;
