import React from "react";
import Carousel from 'react-bootstrap/Carousel'


export default () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/CCTV-Camera-icon.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>EKZIMIA TECHNOLOGIES</h3>
      <p>we provide you with the best service</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="security_camera.png"
      alt="second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}