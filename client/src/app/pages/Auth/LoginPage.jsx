import React from "react";
import LoginForm from "../../components/others/LoginForm";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  return (
    <React.Fragment>
      <section>
        <Toaster position="top-left" />
        <LoginForm />
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
