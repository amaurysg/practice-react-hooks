import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  //1.Initial obj empty
  const [user, setUser] = useState({});

  return (
    //2.Here envolved whole the appRouter with component UserContext.Provider
    //3. Share const {user} to all components
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
