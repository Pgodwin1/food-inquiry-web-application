import Image from 'next/image'
import React from 'react'

const getRecipeDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const response = await res.json()
    return response;

}


const getCalorieCount = async(id) => {
    const query = `${id} calories`;
    const res = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        headers: {
            "X-Api-Key": "/kRFqaMb5vachFyMIROKUw==nvo8b0ysDzj99giS",
            "content-type": "application/json"
        }
    })
    const response = await res.json()
    return response;
}

const page = async ({ params }) => {
    const recipeDetails = await getRecipeDetails(params.id)
    const details = recipeDetails.meals[0];
    const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("strIngredient") === 0)
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean)


    const calorieCount = await getCalorieCount(details.strMeal)
    const calories = calorieCount[0]?.calories;
    console.log(calories)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
     <div>
        <Image
          alt="Recipe"
          width={500}
          height={500}
          src={details.strMealThumb}
          className="w-full"
        />
      </div>
      <div className='p-5'>
      <h1>
          Recipe Name:{" "}
          <span className="font-bold text-2xl">{details.strMeal}</span>
        </h1>

        <div className="tags mt-3">
            <p>Calorie Count: {calories}</p>
          <p className="mb-3">Ingredients List:</p>
          {ingredients.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-500 text-white px-2 py-1 inline-block rounded mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="tags mt-3">
          <span>Video Link: </span>
          <a
            className="text-blue-500"
            target="_blank"
            href={details.strYoutube}
            rel="noreferrer"
          >
            How to make {details.strMeal}
          </a>
        </div>
      </div>
    </div>
  )
}

export default page