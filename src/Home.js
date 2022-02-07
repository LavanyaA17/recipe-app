import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';

const GridWrapper = styled.div`
display: grid;
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
    <h2> A food recipe blog infused with culture and love</h2>
    <p>A food blog that makes cooking fun and simple - a perfect dish everytime! My easy and fail-proof recipes deliver authentic flavors using modern and innovative teachniques</p>
    <ul>
    <li>family-run, locally sourced, animal friendly recipes</li>
    <li>100% bio, plant-based, sustainable and organic food, contact us for small orders</li>
    <li>Not only recipes, cooking courses and books available</li>
    </ul>
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