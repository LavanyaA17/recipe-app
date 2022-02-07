import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <p>My Recipes Blog. I’m Lavanya, a software tester, a home cook and baker,  with a huge sweet tooth. I make good Southern cooking and baking approachable and enjoyable.</p>
    <p>I am a mother of two kids who share my love for food and cooking</p>
  </GridWrapper>
)