import React from 'react';
import "./Contact.css"
import image1 from './images/media.media.f88991c4-293c-4bfa-8380-38291e53da2d.original1024.jpg';


export const Contact = () => {

     function handleSubmit(e) {
       e.preventDefault();
       console.log('Submitted');
    }
    return(
     <>
  <div className="contact-wrapper">
      <h2>Contact Us</h2>
      <div className="row">
      <div className="column">
            <img src={image1} alt="image1" /> 
      </div>
      <div className="column">
      <form onSubmit={handleSubmit}>
      <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
                  <select id="country" name="country">
                     <option value="india">India</option>
                     <option value="germany">Germany</option>
                     <option value="australia">Australia</option>
                     <option value="usa">USA</option>
                  </select>
        <label for="Comments">Comments</label>
                  <textarea id="comments" name="comments" placeholder="Write something.." ></textarea>
               <button type="submit">Submit</button>
      </form>
      </div> 
      </div>
</div>
</>
);
}










