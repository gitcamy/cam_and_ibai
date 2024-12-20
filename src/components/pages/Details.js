import React from "react";

export default function DetailsSection() {
  return (
    <>
      <div className="paper-background">
        <div className="d-flex justify-content-center">
          <div className="paper-content-box">
            <div className="paper-content-header">
              <h1 className="mb-0">Details</h1>
              <p className="text-small">
                We'd be thrilled to have you for as many events as you can join.
              </p>
            </div>

            <br></br>
            <div className="paper-content">
              <h6>Friday, April 10th, 2026</h6>
              <h6>5 o'clock</h6>
              <h2 className="text-nowrap">Rehersal Dinner</h2>
              <p>
                Join us for dinner and drinks at the Gordon's. Family-style meal
                in the backyard.
              </p>
              <p className="mb-0">
                Location: 25251 Terreno Drive, Mission Viejo, CA
              </p>
              <br></br>
              <br></br>
              <h6>Saturday, April 11th, 2026</h6>
              <h6>4 o'clock</h6>
              <h2 className="text-nowrap">Wedding Ceremony</h2>
              <p>
                We will have a short ourdoor ceremony followed by a cocktail
                hour.
              </p>
              <p className="mb-0">
                Location: Lawn at Ole Hanson Beach Club, San Clemente
              </p>
              <br></br>
              <h6> 6 o'clock</h6>
              <h2 className="text-nowrap">Reception</h2>
              <p>Join us for a scenic dinner, drinks & celebration!</p>
              <p className="mb-0">
                Location: Rooftop at Ole Hanson Beach Club, San Clemente
              </p>
              <br></br>
              <h6>10 o'clock</h6>
              <h2 className="text-nowrap">After Party</h2>
              <p>Good old fashioned American dive bar. Bring your boots.</p>
              <p className="mb-0">
                Location: Swallow's Inn, San Juan Capistrano
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
