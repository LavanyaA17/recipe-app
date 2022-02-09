import React from 'react';
import "./About.css";
import image1 from  './images/thai-red-curry-recipe-with-vegetables-1-1.jpeg';
import image2 from './images/Kasespatzle-15-lighter.jpeg';
//import image3 from './images/Cheesecake-Eis-selbermachen-1460x789.jpeg';
import image4 from './images/DSC_0181.jpeg'; // /Users/arunsridhar/final_project/recipe-app/src/images/DSC_0181.jpeg
import image5 from './images/quick-and-easy-snow-ice-cream-16.jpeg'; //src/images/DSC_0181.jpeg



export const About = () => (
 <>
    <div className="about-wrapper">
    <h2>About Page</h2>
    
    <p>My Recipes Blog. I’m Lavanya, a software tester, a home cook and baker,  with a huge sweet tooth. I make good Southern cooking and baking approachable and enjoyable.</p>
    <p>I am a mother of two kids who share my love for food and cooking</p>

    <div className="allGalleries">
      <div className="gallery">
        <a target="_blank" href={image1}>
        <img src={image1}/>
        </a>
        <div className="desc">Thai red curry recipe with vegetables</div>
     </div>

     <div className="gallery">
        <a target="_blank" href={image2}>
        <img src={image2}/>
        </a>
        <div className="desc">German Cheese Spaetzle</div>
     </div>

     <div className="gallery">
        <a target="_blank" href={image4}>
        <img src={image4}/>
        </a>
        <div className="desc">Middle Eastern Lentil Soup</div>
     </div>

     <div className="gallery">
        <a target="_blank" href={image5}>
        <img src={image5}/>
        </a>
        <div className="desc">Easy Snow Ice Cream Recipe</div>
     </div>
     </div>  

     </div>
</> 
)