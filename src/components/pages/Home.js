import React from "react";
import { weddingDetails } from "../../data/weddingDetails";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="flex-column justify-content-evenly container w-100">
        <img
          alt="doves"
          src="../../palomas.png"
          style={{ maxWidth: "150px" }}
        ></img>
        <div className="home-image">
          <img src="/homeTitle.svg" alt="We're getting married!" />
        </div>
        <div className="container flex-column">
          <h1 className="display-4 text-nowrap">
            {weddingDetails.couple.partner1} & {weddingDetails.couple.partner2}
          </h1>
          <h5 className="text-center">{weddingDetails.date}</h5>
          <p>We'd love for you to join us and celebrate!</p>
        </div>
      </div>
    </div>
  );
}
