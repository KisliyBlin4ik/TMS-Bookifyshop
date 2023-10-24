import React, { useState } from 'react';

import FormTemplate from 'src/components/Elements/FormTemplate';
import PageTemplate from 'src/components/ModulesForPages/PageTemplate';
import SignIn from 'src/components/Modules/SignIn';
import SignUp from 'src/components/Modules/SignUp';
import TabMenu from 'src/components/Elements/TabMenu';

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
        </FormTemplate>
      </PageTemplate>
    </>
  );
};

export default SignInPage;
