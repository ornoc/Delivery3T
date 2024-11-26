import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/rota3') // Substitua pela URL real da rota 3
      .then(response => setRestaurants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="restaurants-page">
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>
              <img src={restaurant.image} alt={restaurant.name} />
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <p>Rating: {restaurant.rating}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;