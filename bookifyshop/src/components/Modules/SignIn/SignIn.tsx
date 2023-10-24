import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';


import Input from '../../Elements/Input';
import Button from '../../Elements/Button';
import { SET_AUTHENTICATED } from 'src/actions/authenticated';
import { getUserDataFromLocalStorage } from 'src/utils/helpers';

const SignIn = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goBack() {
    navigate(-1);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };
   
    const userArr = getUserDataFromLocalStorage('users');
    const isUserArr = userArr.some((post: any) => post.email === formData.email && post.password === formData.password);

    if (isUserArr) {
      console.log('loginOK');
      dispatch(SET_AUTHENTICATED(true))
      localStorage.setItem('user', JSON.stringify(formData));
      goBack()
    } else {
      console.log('error email or pass');
    }
  };

  return (
    <form id='4' onSubmit={handleSubmit}>
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
      <p>Forgot password ?</p>
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignIn;
