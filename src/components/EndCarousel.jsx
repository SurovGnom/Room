import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import boardImg from "../img/board-carousel.png"

 const EndCarousel = () => {
  return (
    <div style={{marginTop:"288px",marginBottom:"286px"}}>
          <Carousel slide={true}  indicators={false}  controls={false} interval={1000}>
      <Carousel.Item>
            <img src={boardImg} className='w-100 d-block'  alt="boardImg" />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img src={boardImg} className='w-100 d-block' alt="boardImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img src={boardImg} className='w-100 d-block' alt="boardImg" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default EndCarousel