import React from "react";
import { logOut } from "../../auth";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await logOut();
      alert("Signed out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
