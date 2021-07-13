import React from "react";
import Card from "../../components/AuthCard/Card";
import Intro from "../../components/AuthCard/Intro";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/svg/Overflow";
import Alert from "../../components/Alert/Alert";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const RegisterScreen = () => {
  window.scrollTo(0, 0);
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector(state => state.loading.loading)

  if (isAuthenticated) {
    history.push("/");
  }

  return (
    <React.Fragment>
      <Alert />
	  {loading && <Spinner />}
      {!loading && <div className="flex flex-row justify-center items-center h-screen">
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
      </div>}
    </React.Fragment>
  );
};
export default RegisterScreen;
