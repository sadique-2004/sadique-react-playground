import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function GitHub() {

  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/sadique-2004')
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data
  //             );
  //             setData(data)
  //         })
  // }, [])
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-800 max-w-sm mx-4 my-4">
      {/* Profile Image */}
      <img
        src={data?.avatar_url}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-gray-700"
      />
      <h2 className="text-xl font-semibold mt-3">{data?.name || "No Name"}</h2>
      <p className="text-gray-400">@{data?.login}</p>
      <p className="text-sm text-gray-300 mt-2">
        {data?.bio || "No bio available."}
      </p>

      {/* Stats Section */}
      <div className="flex justify-around w-full mt-4 text-center">
        <div>
          <p className="text-lg font-bold">{data?.followers}</p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold">{data?.following}</p>
          <p className="text-gray-400 text-sm">Following</p>
        </div>
        <div>
          <p className="text-lg font-bold">{data?.public_repos}</p>
          <p className="text-gray-400 text-sm">Repos</p>
        </div>
      </div>

      {/* GitHub Link */}
      <Link
        to={data?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition cursor-pointer inline-flex items-center "
      >
        {<FaGithub />} <span className="ml-2">View my GitHub</span>
      </Link>

      {/* Additional Info */}
      <div className="mt-4 text-gray-400 text-sm">
        <p>Joined: {new Date(data?.created_at).toDateString()}</p>
        <p>Last Updated: {new Date(data?.updated_at).toDateString()}</p>
      </div>
    </div>
  );
}

export default GitHub;




export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sadique-2004");

  return response.json();
};
