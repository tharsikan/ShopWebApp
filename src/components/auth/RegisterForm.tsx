import React from 'react'
import SignupA from './SignupA';
import SignupB from './SignupB';
import { inputAssetsA } from './inputs';
import { inputAssetsB } from './inputs';
import { useAppSelector } from '../../redux/hooks';

const RegisterForm = () => {
  const hidden = useAppSelector((state) => state.authType);
    const data = () => {
      if (hidden.screen === true) {
        return <SignupB inputAssets={inputAssetsA} title="Username and Password" />;
      } else {
        return <SignupA inputAssets={inputAssetsB} title="Signup" />;
      }
    };
  return (
    <div>
     {data()}
    </div>
  );
}

export default RegisterForm