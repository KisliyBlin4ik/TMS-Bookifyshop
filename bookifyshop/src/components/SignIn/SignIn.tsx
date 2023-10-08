import React, { useState } from 'react';
import Input from '../Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);

  return (
    <>
      <Input
        type="text"
        value={email}
        label="Email"
        placeholder="Your email"
        onChange={setEmail}
      />
      <Input
        type="password"
        value={password}
        label="Password"
        placeholder="Your password"
        onChange={setPassword}
      />
    </>
  );
};

export default SignIn;
