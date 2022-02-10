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
    <h1><b><i>About Me</i></b></h1>
    
    <p><h4><i>Hi there, I’m Lavanya!</i></h4></p>
     <div className="about-me">
    <p><b>My Favorite Recipes blog</b> is my little corner of the internet!</p>  
    <p>I live in Germany with my husband and two kids who share my love for food and cooking</p>
    <p>I created My Favorite Recipes as a way for our own family to share our cherished favorite family recipes with each other and our friends.
       I am yet add some recipes of my grandmothers, my mother, and my aunts which were written in their diaries or books. Some were written in pencil, or had splashes of food on them. 
       So I thought this blog will gave us a way to preserve them for myself, my children, friends and future generations.</p>
    <p>In this space, I am always sharing fresh, flavorful, (mostly) healthy recipes that I love to make 
       and eat in my real, actual, every day life. If I wouldn’t eat it in real life, I won’t put in on the blog.
        My goal is to inspire you with food that is both approachable AND exciting, whether you’re cooking for yourself, 
        your family, your roommates, or your friends. I want you to be so excited about these recipes that you eagerly 
        await 5pm when you can go home from work and start cooking.</p>

     <p>Check out my following favorite recipes. On a related note, I absolutely LOVE seeing the food that you’re making. 
     It will make my day if you share your comments and stories about it!</p>
</div>  
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