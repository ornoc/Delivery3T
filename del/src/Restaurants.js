import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Request failed with status code 404', error);
      });
  }, []);

  return (
    <div className="restaurants-page">
      <h1>Restaurantes</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Rating: {restaurant.rating}</p>
            <img src={restaurant.image} alt={restaurant.name} />
            <p>{restaurant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;