import React, { useEffect, useState } from 'react'

const Subtotal = ({item}) => {


const [price,setPrice] = useState(0);

const totalAmount = () =>{

  let price = 0;
  item.map((item)=>{

    price += item.price.cost
    
  });
  setPrice(price);
}

useEffect(() =>{

  totalAmount()
},[item])

  return (
    <div className='sub_item'>
       <h3>Subtotal ({item.length} item): <strong style={{fontWeight :600,color:"#111"}}> {price} </strong></h3>
    </div>
  )
}

export default Subtotal;
