import React from 'react'



export default async function page() {
    const restaurants = await getRestaurants();
    // console.log(restaurants)
  return (
    <div>page</div>
  )
}
