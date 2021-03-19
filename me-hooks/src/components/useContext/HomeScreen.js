import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  //1. Here called UserContext from other file.
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  );
};

export default HomeScreen;
