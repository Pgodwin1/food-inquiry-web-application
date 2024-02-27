import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeList = ({ recipes, type }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
        {recipes.map((recipe, idx) => {
            return (
                <div
                    className="rounded bg-slate-300 overflow-hidden server card"
                    key={idx}
          >
            <Image
              alt='recipe'
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className='w-full'
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl">{recipe.strMeal}</h2>
              <div className="flex justify-between">
                <Link href={`/types/${type}/${recipe.idMeal}`}>
                  <button className="text-white bg-blue-500 rounded py-1 px-3 mt-5 hover:bg-blue-600">
                    Get Recipe Details
                  </button>
                </Link>
                
              </div>
            </div>
            </div>
            )
        })}
    </div>
  )
}

export default RecipeList