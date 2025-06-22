import React, { useEffect } from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Rightheader';
import { NavLink } from "react-router-dom";
import LoginContext from '../context/Contextprovider';
import { createContext } from 'react';



const Navbar = () => {

  const { account, setAccount } = createContext(LoginContext);
  console.log(account);

  const getdetailvaliduser = async () => {

    const res = await fetch("/validuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid")
      setAccount(data);
    }

  }

  useEffect(() => {
    getdetailvaliduser();

  }, [])

  return (
    <>
      <header>
        <nav>
          <div className='left'>

            <IconButton className='hamburgur'>

              <MenuIcon  style={{color:"#fff"}}/>
            </IconButton>
            
            <Drawer>
              <Rightheader />
            </Drawer>

            <div className='navlogo'>
              <img src="https://www.per-accurate.com/wp-content/uploads/2021/05/amazon_PNG25.png" alt="logo" />
            </div>

            <div className='nav_searchbaar'>
              <input type="text" name="" id="" />
              <div className='search_icon'>
                <SearchIcon id="search" />
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='nav_btn'>
              <NavLink to="/login">Sign In</NavLink>
            </div>

            <div className='cart_btn'>
              {
                account ? <NavLink to="/buynow">
                  <Badge badgeContent={account?.carts?.length} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>

                </NavLink> : <NavLink to="/login">
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>
                </NavLink>

              }
              <p>Cart</p>
            </div>
            {

              account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase[0]}</Avatar> :
                <Avatar className='avtar'></Avatar>
            }

          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
