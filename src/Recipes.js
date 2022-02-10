import { useEffect, useState } from 'react';
//import styled from 'styled-components';
import axios from "axios";
import "./Recipes.css"

/*const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

//const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; */

const Recipes = () => {

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get("https://lav-myrecipes.herokuapp.com/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);


console.log(recipes);
  
  return (
   
    <div className="Recipes_Container">
      <div className='header'>
      <h1><i><b>Recipes & Cooking Ideas</b></i></h1>
      <p><b><i>These are my absolute favorite recipes that I tried recently! You’ll find flavorful lunches and dinners,
         and plenty of drool-worthy desserts that were on repeat in our house. 
         I’m a firm believer in using easy ingredients
         to create delicious recipes that my family and friends can easily re-create at home.</i></b></p>

      </div>
      { recipes && recipes.map((recipe) => (
       <div className="Recipe_Container">

         <h1><i>{recipe.recipe_title}</i></h1>
         <img src={recipe.image}/> 
         <p><h4><i>Description:</i></h4>{recipe.description}</p>
        <p><h4><i>Ingredients:</i></h4>{recipe.ingredients}</p>
         <p><h4><i>Procedure:</i></h4>{recipe.procedure}</p>
         
       </div>
     ))}
     
     </div>)
};

export default Recipes;