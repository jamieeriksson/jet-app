import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export default function SponsorIntro() {
  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-right text-gray-light uppercase font-title text-4xl mt-4">
        Sponsorship Program
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <div className="font-light text-lg text-center">
        One of JET’s main goals is to help elevate the overall level of play in
        ultimate through throwing-specific coaching services; however, as soon
        as you start putting a price tag on something, you begin to leave
        players behind. We don’t want the creation of our services to exacerbate
        already limited opportunities and access that underprivileged players
        have to this sport. In order for JET to help grow ultimate, our services
        need to bridge the cost-barrier gap for underprivileged players as much
        as possible.
        <br />
        <br />
        We personally believe in the power of community, especially the ultimate
        community, and coming together to help others. As a result, we have
        created a community-driven sponsorship program to help fund young and
        driven players who are not able to afford our services.
      </div>
      <div className="my-12 flex justify-center place-items-center">
        <FontAwesomeIcon icon={faHandHoldingHeart} size="7x" color="#EEEEEE" />
      </div>
      <p className="mb-6 font-bold uppercase text-center">
        There are two ways you can help:
      </p>
      <div className="flex flex-col">
        <div className="flex place-self-center justify-center mb-10">
          <p className="mr-4 max-w-xl w-full">
            1) Donate directly to JET. Your funding will help cover or offset
            the costs for a player selected by JET’s coaches. Target recipients
            will be underprivileged players, young players, womxn’s players,
            BIPOC players, and/or small market players.
          </p>
          <Link
            to="/sponsorship"
            className="self-center h-12 mt-2 px-10 bg-teal-dark flex items-center font-title text-gray-light shadow-md text-lg font-bold uppercase"
          >
            Donate Directly to JET
          </Link>
        </div>
        <div className="flex place-self-center justify-center mb-10">
          <p className="mr-4 max-w-xl w-full">
            2) Sponsor a player who has applied to this program directly. You
            can choose to fully fund or partially fund any player listed.
          </p>
          <Link
            to="/sponsorship"
            className="self-center h-12 mt-2 px-10 bg-teal-dark flex items-center font-title text-gray-light shadow-md text-lg font-bold uppercase"
          >
            Sponsor a Player
          </Link>
        </div>
      </div>
    </div>
  );
}
