import React, { useEffect } from 'react';
import Banner from './Banner';
import './maincompo.css';
import Slide from './Slide.js';
import {getProducts} from "../redux/actions/action.js";
import {useDispatch,useSelector} from "react-redux";


const Maincompo = () => {

  const  {products} = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    
    <div className='home_section'>

      <div className='banner_part'>
        <Banner />
      </div>

      <div className='slide_part'>
        <div className="left_slide">
          <Slide title="Deal of the Day"  products={products} />
        </div>

        <div className='right_slide'>
          <h4>Festive Latest Launches</h4>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57JjSCt6jM9U8t9umjFOe3H8Rjo4bGKJo-g&s' 
            alt='Festive launch banner' 
          />
          <a href="#" className="see-more-link">See More</a>
        </div>
      </div>

      <Slide title="Today's Deal" products={products} />

      <div className='center_img'>
        <img 
          src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' 
          alt='Center promotional banner' 
        />
      </div>

      <Slide title="Best Seller"  products={products} />
      <Slide title="Up to 80% Off"   products={products}/>

    </div>
  );
};

export default Maincompo;

 