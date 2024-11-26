import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`URL_DA_ROTA_2/${id}`) // Substitua pela URL real da rota 2
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-page">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Saldo: {user.saldo}</p>
    </div>
  );
}

export default User;