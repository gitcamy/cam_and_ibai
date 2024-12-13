import React from "react";

export default function RSVPSection({ formData, setFormData }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">RSVP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={formData.attending}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    attending: e.target.value === "true",
                  })
                }
              >
                <option value="true">Attending</option>
                <option value="false">Not Attending</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guests: parseInt(e.target.value),
                  })
                }
                min="1"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit RSVP
            </button>
          </form>
          <p>Option to add dietary needs/allergies</p>
          <p> Shared spotify playlist with song requests</p>
        </div>
      </div>
    </div>
  );
}
