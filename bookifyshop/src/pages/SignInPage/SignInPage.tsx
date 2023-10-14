import React, { FC, useState } from 'react';

import Button from 'src/components/Common/Button';
import FormTemplate from 'src/components/Common/FormTemplate';
import PageTemplate from 'src/components/PageTemplate';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import TabMenu from 'src/components/Common/TabMenu';

import 'src/scss/App.scss';

const SignInPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <PageTemplate title="" customClass="signInPage" invisible>
        <FormTemplate customClass="formSignIn" title="">
          <TabMenu
            text1="Sign in"
            text2="Sign up"
            text3=""
            onChange={toggleTab}
          />
          {toggleState === 1 ? (
            <div className="formSignIn__signIn">
              <SignIn />
            </div>
          ) : toggleState === 2 ? (
            <div className="formSignIn__signUp">
              <SignUp />
            </div>
          ) : (
            ''
          )}
          {toggleState === 1 ? (
            <Button type="button" content="Sign In" />
          ) : toggleState === 2 ? (
            <Button type="button" content="Sign Up" />
          ) : (
            ''
          )}
        </FormTemplate>
      </PageTemplate>
    </>
  );
};

export default SignInPage;
