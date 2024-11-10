import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="bg-gray-500 py-4 flex items-center justify-center">
          <div className="text-white text-xl">User: {userid}</div>
        </div>
      </div>
    </>
  );
}
