import React, { useState } from 'react';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import PageTemplate from 'src/components/PageTemplate';
import FormTemplate from 'src/components/FormTemplate';

import './AccountPage.scss';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <div className="bb">
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
            <Button type="submit" content="Save Changes" />
            <Button type="button" content="Cancel" />
          </div>
        </form>
      </PageTemplate>
    </>
  );
};

export default AccountPage;
