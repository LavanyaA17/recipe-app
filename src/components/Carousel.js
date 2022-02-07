import React from "react";
import reactDom from "react-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.css';
import image1 from '../images/Maultaschen-4-square.jpeg';
import image2 from '../images/Kasespatzle-15-lighter.jpeg';
import image3 from '../images/Cheesecake-Eis-selbermachen-1460x789.jpeg';

function Carousel() {
    return (
    <div className="Carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      </AliceCarousel>
     </div>

    );
}

export default Carousel;
