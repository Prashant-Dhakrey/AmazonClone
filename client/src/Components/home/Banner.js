import React from 'react';
import Carousel from 'react-multi-carousel';
import '../home/banner.css';

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
];

// Add this responsive config
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        responsive={responsive}  
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        arrows={true}
        showDots={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
          },
        }}
      >
        {
          data.map((imag, i) => (
            <img key={i} src={imag} alt='' className='banner-img' />
          ))
        }
      </Carousel>
    </>
  );
};

export default Banner;
