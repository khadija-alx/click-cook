import React from 'react';
import RecipeCard from '../components/RecipeCard';

function Home() {
  // Fetch recipes data from API
  const recipes = []; // Array of recipe objects

  return (
    <div className="home">
      <h2>Featured Recipes</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;

