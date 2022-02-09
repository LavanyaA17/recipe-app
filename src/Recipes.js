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
 { recipes && recipes.map((recipe) => (
       <div className="Recipe_Container">
         <h1>{recipe.recipe_title}</h1>
         <img src={recipe.image}/> 
         <p>{recipe.description}</p>
        <p>{recipe.ingrdients}</p>
         <p>{recipe.procedure}</p>
         
       </div>
     ))}
     
     </div>)
};

export default Recipes;