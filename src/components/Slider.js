import React from 'react'
import { Carousel } from 'react-bootstrap'
function Slider() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
      <img
        className="d-block w-100"
        src="../1644495711.jpeg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../1663091461.jpg"
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../1663091970.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
    
  </Carousel>
  </div>
  )
}


    
  

export default Slider