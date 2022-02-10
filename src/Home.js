import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';

const GridWrapper = styled.div`
display: grid;
text-align:center;
margin-top: 2rem;
margin-left: 12em;
margin-right: 6em;
grid-template-columns: 8fr;
grid-template-rows: 8fr;
`;
export const Home = (props) => (
  <>
  <Carousel />

  <GridWrapper>
    <h1><b><i>Welcome to My Favorite Recipes!</i></b></h1>
    <h4> <i>This is a food recipe blog infused with culture and love </i></h4>
    <p>We know that cooking for others is one of the greatest gifts you can give them. The time you invest from the shopping, to the prep, the cooking and cleanup – it’s a lot, but it’s always worth it. When you make something great, that’s what brings everyone to the table for Sunday dinner, family breakfast, or a slice of pie on the front porch. These are moments that one bite can take you back to. 
      These are times that they’ll always treasure, every time you make a “favorite family recipe. My goal is to inspire you with food that is both approachable AND exciting”</p>
    <p>Less STRESS and more JOY from my favorite RECIPES MADE FOR
real, actual, everyday life.</p>
  
  </GridWrapper>
  </>

  /*grid-template-columns: repeat(12, 1fr);
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);*/
)