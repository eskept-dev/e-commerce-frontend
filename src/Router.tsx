import { Routes, Route } from 'react-router-dom';

import { HomePage, SignInPage, SignOutPage, SignInByActivationLinkPage } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/auth">
        <Route path="sign_in" element={<SignInPage />} />
        <Route path="sign_in/activation" element={<SignInByActivationLinkPage />} />
        <Route path="sign_out" element={<SignOutPage />} />
      </Route>
    </Routes>
  );
};

export default Router;