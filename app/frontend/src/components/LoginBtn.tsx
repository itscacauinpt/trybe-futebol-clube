import React from 'react';
import { Link } from 'react-router-dom';

const LoginBtn: React.FunctionComponent = () => (
  <Link data-testid="header__login_btn" to="/login">
    Login
  </Link>
);

export default LoginBtn;
