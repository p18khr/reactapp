import React from "react";
import Select from "react-select";

export default function ParksDash() {
  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];


  return (
    <div style={{ paddingBottom: "76px" }}>
      <div className="container border my-5">
        <div
          className="text-center my-3"
          style={{ fontWeight: "bolder", fontSize: "20px" }}
        >
          Park Details
        </div>
        <form className="my-5">
          <div className="form-group my-5">
            <label>Park Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group my-5">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
            />
          </div>
          <div className="form-group my-5">
            <label>State Name</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State"
            />
          </div>
          <div className="form-group my-5">
            <label>Paste Image Link</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Image-Link"
            />
          </div>
          <div className="form-group my-5">
            <label>About/Description</label>
            <input
              type="text"
              className="form-control"
              id="about"
              placeholder="Enter the description of the park"
            />
          </div>
          <div className="form-group my-5" style={{ textAlign: "center" }}>
            <button className="btn btn-outline-primary">Save Activity</button>
            &nbsp;&nbsp;
            <button type="reset" className="btn btn-outline-danger">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
