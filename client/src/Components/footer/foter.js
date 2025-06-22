import React from 'react'
import "./footer.css";


const Footer = () => {
  
  const year = new Date(    ).getFullYear();
  console.log(year);
  
  
  return (

    <footer>
        <div className='"footer_container'>

            <div className='footer_details_one forres'>
              <h3> Get to Know US </h3> 
              <p> About Us </p>
              <p> Careers </p>
              <p> Press Releases </p>
              <p> Amazon Cares</p>
            </div>
            
            <div className='footer_details_one forres'>
              <h3> Connet With Us </h3> 
              <p> Facebook  </p>
              <p> Twiter </p>
              <p> Instagram  </p>
            </div>

            <div className='footer_details_one forres'>
              <h3> Make Money With Us </h3> 
              <p> Facebook  </p>
              <p> Twiter </p>
              <p> Instagram  </p>
            </div>

            <div className='footer_details_one forres'>
              <h3> Make Money With Us </h3> 
              <p> Facebook  </p>
              <p> Twiter </p>
              <p> Instagram  </p>
            </div>
        </div>

        <div className='lastdetails'>
           <img src="https://www.iconpacks.net/icons/free-icons-6/free-amazon-logo-rounded-square-black-shop-button-icon-19633-thumb.png " alt=""/>
          <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
        
        </div>
    </footer>

  )
}

export default Footer;
