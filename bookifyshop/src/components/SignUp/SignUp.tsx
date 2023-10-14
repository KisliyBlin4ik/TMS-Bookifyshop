import React, { useState } from 'react';
import Input from '../Common/Input';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Input
        type="text"
        value={name}
        label="Name"
        placeholder="Your name"
        onChange={setName}
      />
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
      <Input
        type="password"
        value={confirmPassword}
        label="Confirm password"
        placeholder="Confirm your password"
        onChange={setConfirmPassword}
      />
    </>
  );
};

export default SignUp;
