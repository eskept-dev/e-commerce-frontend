import { Routes, Route } from 'react-router-dom';

import { HomePage, SignInPage } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/auth">
        <Route path="sign_in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default Router;