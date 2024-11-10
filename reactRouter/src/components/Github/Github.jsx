import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/bhabinbudujapun")
      // fetch("https://api.github.com/users/hiteshchoudhary")
      .then((respone) => respone.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="bg-gray-500 py-4 flex flex-col items-center justify-center">
        <div className="text-white text-xl underline">GITHUB</div>
        <div className="text-white text-xl">User Name: {data.name}</div>
        <div className="text-white text-xl">Followers: {data.followers}</div>
      </div>
    </div>
  );
}

export default Github;
