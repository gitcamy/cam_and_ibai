import React from "react";
import { weddingDetails } from "../../data/weddingDetails";

export default function HomeSection({ isMobile }) {
  return (
    <div className="container">
      <div className="flex-column justify-content-evenly container w-100">
        {isMobile ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            {/* <div className="home-image-mobile">
              <img src="/homeTitle.svg" alt="We're getting married!" />
            </div> */}
            <h1 className="mb-4">We're getting married!</h1>
            <img
              alt="doves"
              src="../../palomas.png"
              style={{ maxWidth: "300px" }}
            ></img>
          </div>
        ) : (
          <>
            <img
              alt="doves"
              src="../../palomas.png"
              style={{ maxWidth: "150px" }}
            ></img>
            <div className="home-image">
              <img src="/homeTitle.svg" alt="We're getting married!" />
            </div>
          </>
        )}

        <div className="d-flex flex-column">
          <h1 className="text-center text-nowrap">
            {weddingDetails.couple.partner1} & {weddingDetails.couple.partner2}
          </h1>
          <h2 className="text-center">{weddingDetails.date}</h2>
          <h5 className="text-center">
            We'd love for you to join us and celebrate!
          </h5>
        </div>
      </div>
    </div>
  );
}
