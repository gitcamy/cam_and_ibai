import React from "react";
import { weddingDetails } from "../../data/weddingDetails";

export default function HomeSection() {
  return (
    <div className="container text-center py-5">
      <div className="row">
        <div className="col">
          <h1 className="display-4 mb-4">
            {weddingDetails.couple.partner1} & {weddingDetails.couple.partner2}
          </h1>
          <p className="lead">We're getting married!</p>
          <p className="mt-3">{weddingDetails.date}</p>
        </div>
      </div>
    </div>
  );
}
