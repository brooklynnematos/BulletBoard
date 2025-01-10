import React, { useState } from "react";
import { signIn } from "../../../utils/auth";
import { signInWithGoogle } from  "../../../utils/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      alert("Signed in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleGoogleSignIn} style={{ marginTop: "10px" }}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;