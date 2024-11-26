import React, { useContext } from 'react';
import { UserContext } from './App';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Você precisa estar logado para ver esta página.</p>;
  }

  return (
    <div className="profile-page">
      <h1>Perfil</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Saldo: R${user.saldo}</p>
    </div>
  );
};

export default Profile;