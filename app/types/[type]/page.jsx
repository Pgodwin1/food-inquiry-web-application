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
    const response = await fetch(`https://exchange-rate-api1.p.rapidapi.com/latest`, {
        headers: {
            'X-RapidAPI-Key': '0fc9d49fbcmsh516b497377afd2dp1f27c8jsnc7040083e0c6',
            'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
        },
        params: {
            base: 'NGN',
          amount: formatedPrice,
        },
      });
      const res = await response.json();
        return res;
}

const page = async({ params, formatedPrice }) => {
    const convertedPrice = await converter(formatedPrice);
    // console.log(convertedPrice)
    const ngnToUsdRate = convertedPrice.rates.USD;
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