import React from 'react';
import Select from 'react-select';

export default function HotelDash() {

  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div  style={{paddingBottom:'76px'}}>
      <div className="container border my-5">
        <div className="text-center my-3" style={{fontWeight:'bolder',fontSize:'20px'}}>Hotel Details</div>
        <form className="my-5">
          <div className="form-group my-5">
            <label>Hotel Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group my-5">
            <label>Hotel Price</label>
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
            <label>About/Description</label>
            <input
              type="text"
              className="form-control"
              id="about"
              placeholder="About"
            />
          </div>
          <div className="form-group my-5">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Location"
            />
          </div>
          <div className="form-group my-5">
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Image-Link"
            />
          </div>
          <div className="form-group my-5">
            <label>Select National Park</label>
            <Select
              closeMenuOnSelect={true}
              options={Options}
            />
          </div>
          <div className="form-group my-5">
            <label>Swimming Pool</label>
            <Select
              closeMenuOnSelect={true}
              options={[{value:"Yes",label:'Yes'},{value:"No",label:'No'}]}
            />
          </div>
          <div className="form-group my-5">
            <label>Wi-fi</label>
            <Select
              closeMenuOnSelect={true}
              options={[{value:"Yes",label:'Yes'},{value:"No",label:'No'}]}
            />
          </div>
          <div className="form-group my-5">
            <label>A/C</label>
            <Select
              closeMenuOnSelect={true}
              options={[{value:"Yes",label:'Yes'},{value:"No",label:'No'}]}
            />
          </div>
          <div className="form-group my-5">
            <label>Laundry</label>
            <Select
              closeMenuOnSelect={true}
              options={[{value:"Yes",label:'Yes'},{value:"No",label:'No'}]}
            />
          </div>
          <div className="form-group my-5" style={{ textAlign: "center" }}>
            <button className="btn btn-outline-primary">Save Hotel</button>
            &nbsp;&nbsp;
            <button type="reset" className="btn btn-outline-danger">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
