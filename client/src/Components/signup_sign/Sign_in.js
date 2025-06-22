import React, { useState , createContext } from 'react';
import "./signup.css";
import {ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonGroup } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/Contextprovider';

const SignIn = () => {

  const [logdata, setData] = useState({

    email: "",
    password: "",

  });

  // console.log(logdata);

  const {account, setAccount} = createContext(LoginContext);
  
  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => ({

      ...logdata,
      [name]: value

    }));
  };

  const senddata   = async(e) =>{
    e.preventDefault();
    const  { email, password } = logdata;

    if(email === ""){

      toast.warn("Enter the Email ",{
        position:"top-center"
      })
    }

    else if(password === ""){
      toast.warn("Enter the Password",{
        position:"top-center"
      })
    }

    const res = await fetch("/login",{
    method:"POST",
    headers:{
            
      "Content-Type":"application/json"
    },

    body: JSON.stringify({

      email, password

    })

  });

  const data = await res.json();
  console.log("data", data);

  if(res.status === 400 || !data){

    // alert("No Data ")
    toast.warn(" Invalid details",{
      position:"top-center"
    })
  }
  else{
    // alert("Data succesfully added ");
    setAccount(data)
    toast.success(" User valid ",{
      position:"top-center",
    })
    setData({...logdata, email:"", password:"" });
  }
}

  return (
    <section>
      <div className='sign_container'>
        <div className='sign_header'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" alt='amazonlogo' />
        </div>
        <div className='sign_form'>
          <form method = "POST">
            <h1>sign-in</h1>

            <div className='form_data'>
              <label htmlFor='email'>Email</label>
              <input type="text"
                onChange={adddata}
                value={logdata.email}
                name="email" id="email" />
            </div>

            <div className='form_data'>
              <label htmlFor='password'>Password</label>
              <input type="password"
                onChange={adddata}
                value={logdata.password}
                name="password" placeholder="At least 6 char" id="password" />
            </div>
            <button type="submit" className='signin_btn' onClick={senddata}>Continue</button>
          </form>
        </div>
        <div className='create_accountinfo'>
          <p>New To Amazon </p>
          <button><NavLink to ="/signup"> Create Your Amazon Account</NavLink> </button>
        </div>
      <ToastContainer/>
      </div>
    </section>
  );
};

export default SignIn;
