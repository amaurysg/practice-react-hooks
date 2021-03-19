import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  //1.Obtener referencia
  const { iser, setUser } = useContext(UserContext);

  //2. setUser
  const sendUser = () => {
    console.log("send user...");
    setUser({
      id: 123,
      fname: "Amaury",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={sendUser}>
        Log in 😄
      </button>
    </div>
  );
};

export default LoginScreen;
