import React, { useEffect, useState } from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessages({
        name: name ? '' : 'Name is required',
        email: email ? '' : 'Email is required',
        password: password ? '' : 'Password is required',
        confirmPassword: confirmPassword ? '' : 'Confirm Password is required',
      });
      return;
    }

    const formData = {
      name,
      email,
      password,
      confirmPassword,
    };

    const getStorage = localStorage.getItem('users')

    const userArr = getStorage !== null ? JSON.parse(getStorage) : [];

    const isUserName = userArr.some((post: any) => post.name === formData.name);
    const isUserEmail = userArr.some((post: any) => post.email === formData.email);

    if ((!isUserName && !isUserEmail) && password === confirmPassword) {
      userArr.push(formData)
      localStorage.setItem('users', JSON.stringify(userArr));
      setRegistrationSuccess(true);
    } else {
      console.log('Ошибка: имя пользователя или адрес электронной почты уже существуют');
    }
  };

  useEffect(()=>{

  },[])

  return (
    <form id='5' onSubmit={handleSubmit}>
      {registrationSuccess ? <p className='success-message'>Registration <strong>completed successfully</strong>. You can log into your account.</p> : ''}
      <Input
        type="text"
        value={name}
        label="Name"
        placeholder="Your name"
        children={errorMessages.name && <p className="error">{errorMessages.name}</p>}
        onChange={setName}
      />
      <Input
        type="text"
        value={email}
        label="Email"
        placeholder="Your email"
        children={errorMessages.email && <p className="error">{errorMessages.email}</p>}
        onChange={setEmail}
      />
      <Input
        type="password"
        value={password}
        label="Password"
        placeholder="Your password"
        children={errorMessages.password && <p className="error">{errorMessages.password}</p>}
        onChange={setPassword}
      />
      <Input
        type="password"
        value={confirmPassword}
        label="Confirm password"
        placeholder="Confirm your password"
        children={errorMessages.confirmPassword && <p className="error">{errorMessages.confirmPassword}</p>}
        onChange={setConfirmPassword}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUp;
