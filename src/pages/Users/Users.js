import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/users/all', {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.error('Błąd pobierania danych!');
        }
      })
      .then(data => {
        setUsers(data.users);
      });
  }, []);

  return (
    <>
      {users.map(user => {
        return (
          <div>
            {user.id} - {user.username} - {user.surname}
          </div>
        );
      })}
    </>
  );
};

export default Users;
