import React, { useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image"
import carouselOne from "../img/carousel-1.jpg"
import carouselTwo from "../img/carousel-2.jpg"
import carouselThird from "../img/carousel-3.jpg"


const MainCarousel =()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
      <div>
    <Carousel  className='text-center' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image className='d-block w-100' src={carouselOne} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-block w-100' src={carouselTwo} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-block w-100' src={carouselThird} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }


export default MainCarousel