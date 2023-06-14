import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Safari from "./Safari";
import { addDays } from "date-fns";
import Cart from "./Cart";

export default function HotelForm() {
  const [adult, setAdult] = useState(1);
  const [kids, setKid] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate,1));

  const setAdults = (event) => {
    if(event.target.value>3 && (event.target.value)%3 === 1){
      setAdult(adult+1);
    }
  };

  const setKids = (event) => {
    setKid(event.target.value);
  };

  const days = Math.round((endDate.getTime()-startDate.getTime())/(1000*3600*24));

  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];


  return (
    <div>
      <Cart></Cart>
      <div className="container border form my-5">
        <form className="mx-3 my-5">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01" style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                htmlFor="validationDefaultUsername"
                style={{ color: "white" }}
              >
                Email
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="City"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                Contact No.
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="Contact No."
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                No. of adults
              </label>
              <input
                type="number"
                className="form-control"
                id="validationDefault03"
                defaultValue={2}
                min={1}
                max={10}
                onChange={setAdults}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                No. of kids
              </label>
              <input
                type="number"
                className="form-control"
                id="validationDefault03"
                defaultValue={0}
                min={0}
                max={10}
                onChange={setKids}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>Check-in</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {setStartDate(date); setEndDate(addDays(date,1)) }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
              />
            </div>
            <div className="col-md-6">
              <label style={{ color: "white" }}>Check-out</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label
                htmlFor="inlineFormCustomSelectPref"
                style={{ color: "white" }}
              >
                National Park
              </label>
              <br />
              <input
                type="text"
                className="form-control col-md-6 mb-3"
                id="inlineFormCustomSelectPref"
                required
                disabled
                defaultValue={"RanthamBore National Park"}
              />
            </div>
            {/* <div className="col-md-6 mb-3">
              <label
                htmlFor="inlineFormCustomSelectPref"
                style={{ color: "white" }}
              >
                Select Activities
              </label>
              <br />
              <Select
                closeMenuOnSelect={false}
                defaultValue={"Choose..."}
                isMulti
                options={Options}
                onChange={set}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                No. of adults (for activity)
              </label>
              <input
                type="number"
                className="form-control"
                id="validationDefault03"
                defaultValue={state}
                min={1}
                max={10}
                required
                onChange={setActivity}
                disabled={state < 1}
              />
            </div> */}
          </div>
          <div className="my-4" style={{ textAlign: "center" }}>
            <span>
              Note: Only 3 guests per room are allowed
            </span>
            <br />
            <br />
            {/* <span>Total Estimate: &#8377; {(adult * 2000 + kids * 900)*days} for {days} nights</span>
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Send Enquiry
            </button> */}
          </div>
        </form>
      </div>
      <div className="container">
        <div style={{fontWeight:"bold",textAlign:'center'}}>Safari</div><br/>
        <Safari varXs={1} varMd={3} bt={"Add"} blockbtn={false}></Safari>
      </div>
    </div>
  );
}
