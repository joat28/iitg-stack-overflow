import React from "react";
import Card from "../../components/AuthCard/Card";
import Intro from "../../components/AuthCard/Intro";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/svg/Overflow";
import Alert from "../../components/Alert/Alert";
import { useSelector } from 'react-redux';

const RegisterScreen = () => {
  const history = useHistory();
  const registerSuccess = useSelector(state => state.auth.registerSuccess);

  if (registerSuccess) {
    history.push('/login');
  }

  return (
    <React.Fragment>
      <Alert />
      <div class="flex flex-row justify-center items-center h-screen">
        <Intro />
        <div className="flex flex-col justify-center items-center">
          <a href="/">
            <Logo />
          </a>
          <Card type="Sign up" />
          <span>
            Already have an account?
            <Link to="/login">
              <span className="text-blue-500"> Login</span>
            </Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default RegisterScreen;
