import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./CustomSlider.css"

interface SliderItem {
  title: string;
  description: string;
  image:string;
}

interface CustomSliderProps {
  data: SliderItem[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setActiveIndex(index),
    appendDots: (dots: React.ReactNode) => (
      <div className='dotsparent'>
        <ul className='dots' >{dots}</ul>
      </div>
    ),
    autoplay: true, // Disable autoplay since we are implementing custom auto-slide
    autoplaySpeed: 1000, // Set autoplay speed to 0 to prevent automatic sliding by React Slick
    pauseOnHover: true, // Disable pausing on hover
    pauseOnFocus: false, // Disable pausing on focus
  };

  return (
    <div className='slider-container'>
      <Slider className='slider' {...settings} initialSlide={activeIndex}>
        {data.map((item, index) => (
          <div className='slide' key={index}>
            <img src={item.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
