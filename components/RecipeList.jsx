import Image from 'next/image'
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
            </div>
            )
        })}
    </div>
  )
}

export default RecipeList