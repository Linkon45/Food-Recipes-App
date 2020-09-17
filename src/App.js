import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_Key = process.env.REACT_APP_APP_Key;


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipie();
  }, [query]);


  const getRecipie = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);

  }

  const searchUpdate = (e) => {
    setSearch(e.target.value);
  }

  const submitQuery = (e) => {
    e.preventDefault();
    setQuery(search);

  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={submitQuery}>
        <input className="search-bar" type="text" value={search} onChange={searchUpdate}></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}

          />

        ))}
      </div>




    </div>
  );
}

export default App;
