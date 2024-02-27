import RecipeList from '@/components/RecipeList';
import React from 'react'

const getRecipes = async (type) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
    const response = await res.json();
    return response;
}

const page = async({ params }) => {
    const recipes = await getRecipes(params.type);
  return <RecipeList recipes={recipes.meals} type={params.type} />
}

export default page