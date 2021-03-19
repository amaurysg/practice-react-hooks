import React from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const user = {
    id: new Date().getTime(),
    name: "Amaury",
    email: "amaurysotog@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
