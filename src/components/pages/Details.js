import React from "react";

export default function DetailsSection() {
  return (
    <>
      <div className="paper-background">
        <div className="d-flex justify-content-center">
          <div className="d-flex col-5 flex-column align-items-center p-4">
            <h1>Details</h1>
            <h3>
              We'd be thrilled to have you for as many events as you can join.{" "}
            </h3>
            <p>
              event details: date, time, venue location with embeded map, where
              to park, dress code, ceremony/reception/afterparty deets
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
