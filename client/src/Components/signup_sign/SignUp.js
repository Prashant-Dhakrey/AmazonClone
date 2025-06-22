
import React, { useState, useRef } from 'react';
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignIn = () => {

  const emailRef = useRef(null); // Add this line
  const [udata, setUdata] = useState({
    fname: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const adddata = (e) => {

    const { name, value } = e.target;

    setUdata(() => {

      return {

        ...udata,
        [name]: value
      }

    })

  };



  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    if (fname === "") {

      toast.warn(" Provide all details  ", {
        position: "top-center"
      });
      return;
    }
    else if (email === "") {

      toast.warn("Enter the Email ", {
        position: "top-center"
      });
      return;
    }
    else if (mobile === "") {
      toast.warn("Enter the Mobile Number ", {
        position: "top-center"
      });
      return;
    }
    else if (password === "") {
      toast.warn("Enter the Password", {
        position: "top-center"
      });
      return;
    }

    else if (cpassword === "") {
      toast.warn(cpassword === "", {
        position: "top-center"
      });
    }

    else if (password !== cpassword) {
      toast.warn("Passwords do not match", {
        position: "top-center"
      });
      return;
    }


    const res = await fetch("http://localhost:8005/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        fname, email, mobile, password, cpassword

      })

    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      toast.warning("Invalid details", {
        position: "top-center"
      });
    } else if (res.status === 409) {
      toast.error("Email already exists", {
        position: "top-center"
      });
      emailRef.current.focus();  // Focus on the email field
    } else {
      toast.success("Data successfully added", {
        position: "top-center"
      });
      setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
    }
  }

  return (
    <section>
      <div className='sign_container'>
        <div className='sign_header'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" alt='amazonlogo' />
        </div>
        <div className='sign_form'>
          <form method="POST">
            <h1>Create Account</h1>

            <div className='form_data'>
              <label htmlFor='fname'>Your Name</label>
              <input type="text"
                onChange={adddata}
                value={udata.fname}
                name="fname" id="fname" />
            </div>

            <div className='form_data'>
              <label htmlFor='mobile'>Mobile</label>
              <input type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" />
            </div>

            <div className='form_data'>
              <label htmlFor='email'>Email</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.email}
                name="email"
                id="email"
                ref={emailRef}
              />
            </div>

            <div className='form_data'>
              <label htmlFor='password'>Password</label>
              <input type="password"
                onChange={adddata}
                value={udata.password}
                name="password" placeholder="At least 6 char" id="password" />
            </div>

            <div className='form_data'>
              <label htmlFor='cpassword'>Confirm Password</label>
              <input type="password"
                onChange={adddata}
                value={udata.cpassword}
                name="cpassword" id="cpassword" />
            </div>

            <button type="submit" className='signin_btn' onClick={senddata}  >Continue</button>
          </form>
        </div>
        <div className='sign_info'>
          <p>Already have an account?  <NavLink to="/login">Login</NavLink> </p>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignIn;
