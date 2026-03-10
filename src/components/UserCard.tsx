import { useState, useEffect } from 'react';

const UserCard = ({ userId }: { userId: number }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(r => r.json())
      .then(data => { setEmail(data.email); setLoading(false); });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <div><h2>{email}</h2></div>;
};  

export default UserCard;
