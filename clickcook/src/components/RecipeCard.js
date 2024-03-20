import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
      {/* Additional details */}
    </div>
  );
}

export default RecipeCard;
