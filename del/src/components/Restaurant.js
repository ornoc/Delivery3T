import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/rota4/${id}`) // Substitua pela URL real da rota 4
      .then(response => setRestaurant(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="restaurant-page">
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      <p>{restaurant.description}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
}

export default Restaurant;