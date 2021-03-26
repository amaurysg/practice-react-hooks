import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  //1.Obtener referencia
  const { setUser } = useContext(UserContext);

  //2. setUser

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({
            id: 123,
            fname: "Amaury",
          });
        }}
      >
        Log in 😄
      </button>
    </div>
  );
};

export default LoginScreen;
