import React from "react";
import reactDom from "react-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.css';
import image1 from  '../images/thai-red-curry-recipe-with-vegetables-1-1.jpeg';
import image2 from '../images/Kasespatzle-15-lighter.jpeg';
import image3 from '../images/Cheesecake-Eis-selbermachen-1460x789.jpeg';
import image4 from '../images/DSC_0181.jpeg';
import image5 from '../images/quick-and-easy-snow-ice-cream-16.jpeg';
import image6 from '../images/Maultaschen-4-square.jpeg';

function Carousel() {
    return (
    <div className="Carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
      <img src={image5} className="sliderimg"/>
      <img src={image6} className="sliderimg"/>
      </AliceCarousel>
     </div>

    );
}

export default Carousel;
