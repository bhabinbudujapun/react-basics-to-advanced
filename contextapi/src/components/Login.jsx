import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // pass single data or multiple
    // setUser({ username });

    setUser({ username, password });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-2 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
            React Context API
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-center text-gray-600">
            Login
          </h2>

          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
            required
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
