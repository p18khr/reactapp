import React, { useContext, useEffect, useState } from "react";
import "../css/Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { addDays } from "date-fns";
import AppContext from "../contexts/AppContext";
import Alert from "./Alert";

export default function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  const [days, setDays] = useState(1);

  const { parkName, getParkName, allActivity, getAllActivities, GeneralEnquiry } =
    useContext(AppContext);

  // const [Options, setOptions] = useState([]);

    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Contact,setContact] = useState("");
    const [Adults,setAdult] = useState(2);
    const [Kid,setKid] = useState(0);
    const [CheckIn,setCheckIn] = useState(startDate);
    const [CheckOut,setCheckOut] = useState(endDate);
    const [Park,setPark] = useState("");
    const [City,setCity] = useState("");
    const [alert,setAlert] = useState({
      msg:"",
      value:true,
      type:""
    });

    const [btn,setBtn] = useState("Send Enquiry");
    const [dis,setDis] = useState(false);
  
    
  useEffect(() => {
    getParkName();
  }, []);


  const enquiry=()=>{
    setBtn("Enquiry Sent");
    setDis(true);
  }

  const save =(e)=>{
    if(Name !== "" && Email !== "" && Contact !== "" && Park !== "" && City !== ""){
      GeneralEnquiry(Name,Contact,Email,City,Adults,Kid,CheckIn,CheckOut,days,Park); 
      setAlert({msg:"Enquiry is successfully sent",value:false, type:"success"});
      e.preventDefault();
      enquiry();
    }
    else{
      setAlert({msg:"Kindly fill all the fields",value:false, type:"danger"});
      e.preventDefault();
    }
    
  }


  const reset = ()=>{
    setName("");
    setEmail("");
    setContact("");
    setCity("");
    setAdult(2);
    setKid(0);
  }

//  const loadActivities = () =>{
//   const initial = allActivity.map((idx) => {
//     return { value: idx.id, label: idx.name };
//  })

//  setOptions([...Options,initial]);
//  }

  return (
    <div className="container border form my-5">
      <Alert message={alert.msg} hidden={alert.value} type={alert.type}></Alert>
      <form className="my-2">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Name"

              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label
              style={{ color: "white" }}
            >
              Email
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e)=>{setEmail(e.target.value)}}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              onChange={(e)=>{setCity(e.target.value)}}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              Contact No.
            </label>
            <input
              type="number"
              className="form-control"
              id="contact"
              placeholder="Contact No."
              max={9999999999}
              min={1000000000}
              onChange={(e)=>{setContact(e.target.value)}}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              No. of adults
            </label>
            <input
              type="number"
              className="form-control"
              id="adults"
              defaultValue={2}
              min={2}
              max={10}
              onChange={(e)=>{setAdult(e.target.value)}}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              No. of kids
            </label>
            <input
              type="number"
              className="form-control"
              id="kids"
              defaultValue={0}
              min={0}
              max={10}
              onChange={(e)=>{setKid(e.target.value)}}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>
              Check-in
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEndDate(addDays(date, 1));
                setDays(
                  Math.round(
                    (addDays(date, 1).getTime() - date.getTime()) /
                      (1000 * 3600 * 24)
                  )
                );
                setCheckIn(date);
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
            />
          </div>
          <div className="col-md-6">
            <label style={{ color: "white" }}>
              Check-out
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                setDays(
                  Math.round(
                    (date.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
                  )
                );
                setCheckOut(date);
              }}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label style={{ color: "white" }}>Select National Park</label>
            <br />
            <select
              className="col-md-12 mb-3"
              style={{ height: "40px", borderRadius: "5px" }}
              onChange={(e) => {setPark(e.target.value)}}
              required
            >
              <option disabled selected>
                Select...
              </option>
              {parkName.map((idx) => (
                <option id={idx.split(",")[1]} value={idx}>
                  {idx.split(",")[0]}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            {/* <label style={{ color: "white" }}>Select Activities</label>
            <br />
            <Select
              className="col-md-12 mb-3"
              style={{ height: "40px", borderRadius: "5px" }}
              isDisabled={allActivity.length === 0}
              options={Options}
              required
            /> */}
            {/* <option disabled selected>
                Select...
              </option>
              {allActivity.map((idx) => (
                <option id={idx.id} value={idx.id}>
                  {idx.name}
                </option>
              ))}
            </Select> */}
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary" disabled={dis} type="submit" onClick={save}>
            {btn}
          </button>
          &nbsp;
          <button type="reset" className="btn btn-danger" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
