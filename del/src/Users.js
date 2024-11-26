import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './App';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/users')
      .then(response => {
        const usersData = response.data;
        if (user) {
          usersData.push(user);
        }
        setUsers(usersData);
      })
      .catch(error => {
        console.error('Request failed with status code 404', error);
      });
  }, [user]);

  return (
    <div className="users-page">
      <h1>Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id || user.email}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Saldo: R${user.saldo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;