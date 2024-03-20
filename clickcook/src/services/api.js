// api.js

const API_URL = 'ssh 55cd6228bc22@55cd6228bc22.19d006d5.alx-cod.online';

// Function to fetch recipes from the backend
export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${API_URL}/recipes`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    throw error;
  }
};

// Function to fetch a single recipe by ID from the backend
export const fetchRecipeById = async (recipeId) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${recipeId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe:', error.message);
    throw error;
  }
};

// Function to add a new recipe to the backend
export const addRecipe = async (recipeData) => {
  try {
    const response = await fetch(`${API_URL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    });
    if (!response.ok) {
      throw new Error('Failed to add recipe');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding recipe:', error.message);
    throw error;
  }
};

// Function to update an existing recipe on the backend
export const updateRecipe = async (recipeId, recipeData) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${recipeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    });
    if (!response.ok) {
      throw new Error('Failed to update recipe');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating recipe:', error.message);
    throw error;
  }
};

// Function to delete a recipe from the backend
export const deleteRecipe = async (recipeId) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${recipeId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete recipe');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting recipe:', error.message);
    throw error;
  }
};

