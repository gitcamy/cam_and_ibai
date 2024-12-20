import React from "react";
import { weddingDetails } from "../../data/weddingDetails";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="p-5 w-100">
        <div className="flex-column container w-100">
          <div className="w-75 mb-5 mt-5">
            <img src="/homeTitle.svg" alt="We're getting married!" />
          </div>

          <h1 className="display-4 mb-4">
            {weddingDetails.couple.partner1} & {weddingDetails.couple.partner2}
          </h1>
          <h5 className="m-3">{weddingDetails.date}</h5>
          <p className="mb-1">{weddingDetails.venue.name}</p>
          <p className="mb-0">{weddingDetails.venue.address}</p>
        </div>{" "}
      </div>
    </div>
  );
}
