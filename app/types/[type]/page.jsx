import Price from '@/components/Price';
import RecipeList from '@/components/RecipeList';
import React from 'react'
// import formattedPrice from "@/components/Price";

const getRecipes = async (type) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
    const response = await res.json();
    return response;
}

const converter = async (formatedPrice) => {
    const response = await fetch(`https://currency-converter18.p.rapidapi.com/api/v1/convert`, {
        headers: {
            'X-RapidAPI-Key': process.env.CONVERTER_X_KEY,
            'X-RapidAPI-Host': process.env.CONVERTER_X_HOST,
        },
        params: {
          from: 'NGN',
          to: 'USD',
          amount: "500"
        },
      });
      const res = await response.json();
        return res;
}

const page = async({ params, formatedPrice }) => {
    const convertedPrice = await converter(500);
    console.log(convertedPrice)
    const ngnToUsdRate = convertedPrice.rates;
    console.log(ngnToUsdRate)
    const recipes = await getRecipes(params.type);
  return (
    <div>
   <RecipeList recipes={recipes.meals} type={params.type} />
  <Price type={params.type} ngnToUsdRate={ngnToUsdRate} />
  </div>
  )
}

export default page