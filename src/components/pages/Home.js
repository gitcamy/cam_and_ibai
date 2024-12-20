import React from "react";
import { weddingDetails } from "../../data/weddingDetails";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="flex-column container w-100">
        <div className="home-image">
          <img src="/homeTitle.svg" alt="We're getting married!" />
        </div>

        <h1 className="display-4 mb-4 text-nowrap">
          {weddingDetails.couple.partner1} & {weddingDetails.couple.partner2}
        </h1>
        <div className="container flex-column">
          <h5 className="m-3 text-center">{weddingDetails.date}</h5>
          <p className="mb-1 text-center">{weddingDetails.venue.name}</p>
          <p className="mb-0 text-center">{weddingDetails.venue.address}</p>
        </div>
      </div>
    </div>
  );
}
