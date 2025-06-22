import React, { useEffect, useState } from 'react'

const Right = () => {
  
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const totalAmount = () => {

    let price = 0;
    items.map((item) => {

      price += item.price.cost

    });
    setPrice(price);
  }

  useEffect(() => {

    totalAmount()
  }, [items])


  return (
    <div className='right_buy'>
      <img src='' alt='' />
      <div className='cost_right'>
        <p>Your order is eligible for FREE Delvery. </p> <br />
        <span style={{ color: "#565959" }}>Select this option at checkout Details </span>
        <h3>Subtotal ({items.length} items): <span style={{ fontwegiht: 700 }}> {price}.00 </span></h3>
        <button className='rightbuy_btn'>Process to Buy </button>
        <div className='emi'>
          Emi avaible
        </div>
      </div>

    </div>
  )
}

export default Right;
