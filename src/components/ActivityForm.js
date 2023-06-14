import React from "react";
import Select from "react-select";

export default function ActivityForm() {

  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div  style={{paddingBottom:'6px'}}>
      <div className="container border my-5">
        <div className="text-center my-3" style={{fontWeight:'bolder',fontSize:'20px'}}>Activity Details</div>
        <form className="my-5">
          <div className="form-group my-5">
            <label>Activity Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group my-5">
            <label>Activity Type</label>
            <Select
              closeMenuOnSelect={false}
              defaultValue={"Choose..."}
              options={[{value:"Safari",label:'Safari'},{value:"Others",label:'Others'}]}
            />
          </div>
          <div className="form-group my-5">
            <label for="formGroupExampleInput2">Activity Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              min={0}
              max={100000}
            />
          </div>
          <div className="form-group my-5">
            <label for="formGroupExampleInput2">About/Description</label>
            <input
              type="number"
              className="form-control"
              id="about"
              placeholder="About"
              min={0}
              max={100000}
            />
          </div>
          <div className="form-group my-5">
            <label>Select National Park</label>
            <Select
              closeMenuOnSelect={false}
              defaultValue={"Choose..."}
              options={Options}
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
