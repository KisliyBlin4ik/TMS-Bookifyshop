import React, { useState, useEffect } from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Button from 'src/components/Elements/Button';
import Input from 'src/components/Elements/Input';
import PageTemplate from 'src/components/ModulesForPages/PageTemplate';
import FormTemplate from 'src/components/Elements/FormTemplate';

import { useNavigate } from 'react-router-dom';
import { ROUTE_SIGN_IN } from 'src/utils/routes';

import { findUserInStorage } from 'src/utils/helpers';

import './_AccountPage.scss';

const AccountPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const IsAuthenticated: boolean = useSelector(({ IsAuthenticated }) => IsAuthenticated);

  const user = findUserInStorage();
  
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [password, setPassword] = useState(user ? user.password : '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
      newPassword,
      confirmNewPassword,
    };

    console.log('send form:', formData);
  };

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
    if (!IsAuthenticated) {
      navigate(ROUTE_SIGN_IN);
    }
  }, []);

  return (
    <>
      <PageTemplate title="Account" customClass="account">
        <form id="form_1" onSubmit={handleSubmit}>
          <FormTemplate title="Profile" customClass="account__profile">
            <Input
              type="text"
              label="Name"
              value={name}
              placeholder="Enter your name"
              onChange={setName}
            />
            <Input
              type="text"
              label="Email"
              value={email}
              placeholder="Enter your email"
              onChange={setEmail}
            />
          </FormTemplate>
          <FormTemplate title="Password" customClass="account__password">
            <Input
              type="password"
              label="Password"
              value={password}
              placeholder="Enter your password"
              onChange={setPassword}
            />
            <div className="password__box">
              <Input
                type="password"
                label="New password"
                value={newPassword}
                placeholder="New password"
                onChange={setNewPassword}
              />
              <Input
                type="password"
                label="Confirm new password"
                value={confirmNewPassword}
                placeholder="Confirm new password"
                onChange={setConfirmNewPassword}
              />
            </div>
          </FormTemplate>
          <div className="account__buttons">
            <Button type="submit">Save Changes</Button>
            <Button type="button">Cancel</Button>
          </div>
        </form>
      </PageTemplate>
    </>
  );
};

export default AccountPage;
