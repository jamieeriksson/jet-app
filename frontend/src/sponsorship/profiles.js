import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDataApi from "../hooks/data-api.js";
import profileImage from "./chase-fade-Qk8o8S_PMTY-unsplash.jpg";

function ProfileCard(props) {
  const profile = props.profile;

  return (
    <div className="w-72 h-96 my-8 mx-6 bg-gray-dark flex flex-col overflow-hidden">
      <div className="h-20 flex flex-col justify-center place-items-center">
        <h1 className="pt-3 text-2xl font-title text-gray-light text-center">
          {profile.name}
        </h1>
        <h2 className="pb-3 uppercase text-gray-light text-center">
          Funding Goal {profile.funding_goal}
        </h2>
      </div>
      <div className="bg-gray-dark w-72 h-full flex-shrink-0 self-end">
        <img
          src={profileImage}
          alt="profile"
          className="w-full h-full object-top object-fill"
        />
      </div>
      <div className="absolute opacity-0 hover:opacity-100 transition duration-300 ease-in-out w-72 h-96 overflow-y-hidden">
        <div className="h-20"></div>
        <div className="h-full backdrop-blur-lg bg-opacity-75 bg-gray-dark flex justify-center px-5 py-5">
          <div>
            <p className="mb-1">
              <span className="underline uppercase">Age:</span>
              <span className="font-light"> 21</span>
            </p>
            <p className="mb-1">
              <span className="underline uppercase">Gender:</span>
              <span className="font-light"> {profile.gender}</span>
            </p>
            <p className="mb-1">
              <span className="underline uppercase">Country:</span>
              <span className="font-light"> {profile.country}</span>
            </p>
            <p className="mb-1">
              <span className="underline uppercase">Years Played:</span>
              <span className="font-light"> {profile.ultimate_start_dt}</span>
            </p>
            <p className="mb-1 leading-5">
              <span className="underline uppercase">Teams Played For:</span>
              <span className="font-light"> {profile.teams_played_for}</span>
            </p>
            <p className="mb-1 leading-5">
              <span className="underline uppercase">About:</span>
              <span className="font-light"> {profile.description}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center z-10 max-w-6xl mb-20 w-full self-center md:ml-64 md:justify-start">
        <Link to="/contact" className="-mt-4 w-48 bg-teal-dark">
          <h3 className="font-title text-xl uppercase p-3 text-gray-200 text-center">
            Sponsor {profile.name}
          </h3>
        </Link>
      </div>
    </div>
  );
}

function ProfileListing(props) {
  const profiles = props.profiles;

  return (
    <div className="max-w-5xl w-full flex flex-wrap justify-center">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default function Profiles() {
  const [state] = useDataApi("/profiles");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    console.log(state.data);
    if (state.data) {
      setProfiles([...state.data]);
    }

    return () => {};
  }, [state, setProfiles]);

  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-gray-light uppercase font-title text-4xl mt-4">
        Sponsor A Player
      </h2>
      <div className="w-48 h-6 bg-teal-bright mb-12"></div>
      <ProfileListing profiles={profiles} />
    </div>
  );
}
