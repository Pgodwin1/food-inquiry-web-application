import React from 'react'

const getRestaurants = async () => {
    const res = await fetch(`https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/get-all-restaurant-names`, {
        headers: {
            'X-RapidAPI-Key': '0fc9d49fbcmsh516b497377afd2dp1f27c8jsnc7040083e0c6',
            'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com'        
          }      
    });
    const response = await res.json();
    return response;
}

export default async function page() {
    const restaurants = await getRestaurants();
    console.log(restaurants)
  return (
    <div>page</div>
  )
}
