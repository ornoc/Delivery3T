import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/foods')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Request failed with status code 404', error);
      });
  }, []);

  return (
    <div className="products-page">
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Preço: R${product.price}</p>
            <p>Tempo de entrega: {product.time}</p>
            <p>Taxa de entrega: R${product.delivery}</p>
            <p>Rating: {product.rating}</p>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;