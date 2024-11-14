import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md border">
        {user ? (
          <>
            <h1 className="text-2xl font-bold text-gray-700">
              Welcome, {user.username}!
            </h1>
            <p className="mt-4 text-gray-600">
              You are successfully logged in.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-red-600">
              Please, Login First
            </h1>
            <p className="mt-4 text-gray-600">
              Access is restricted until you log in.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
