import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <div>
      <h1>About</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default AboutScreen;
