import { useEffect, useState } from 'react';

export default function Message() {
  const [email, setEmail] = useState('');
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  function HandleUserLoggedIn() {
    setisUserLoggedIn(!isUserLoggedIn);
  }

  useEffect(() => {}, []);
  return <h1>User {email} is logged in</h1>;
}
