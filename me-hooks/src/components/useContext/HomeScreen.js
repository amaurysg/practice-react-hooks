import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  //1. Here called UserContext from other file.
  const { user, setUser } = useContext(UserContext);

  console.log("user:", user);

  return (
    <div>
      <h1>Home Screen</h1>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomeScreen;
