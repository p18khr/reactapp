import React, { useContext, useEffect, useState } from "react";
import "../css/Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hotels from "./Hotels";
import { addDays } from "date-fns";
import AddSafariPassenger from "./AddSafariPassenger";
import { useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import OtherActivity from "./OtherActivity";
import CartSafari from "./CartSafari";
import Alert from "./Alert";

export default function SafariForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(addDays(new Date(), 1));

  // const [adult, setAdult] = useState(2);
  // const [kid, setKid] = useState(0);

  const {id1,id2} = useParams();

  const {safari,getSafari,park,getPark,safariEnquiry} = useContext(AppContext);

  
  const [Name,setName] = useState("");
  const [Email,setEmail] = useState("");
  const [Contact,setContact] = useState("");
  const [City,setCity] = useState("");

  const [alert,setAlert] = useState({
    msg:"",
    value:true,
    type:""
  });


  const [btn,setBtn] = useState("Send Enquiry");
  const [dis,setDis] = useState(false);

  const enquiry=()=>{
    setBtn("Enquiry Sent");
    setDis(true);
  }

  const gypsy = useSelector(state => state.Gypsy);
  const kids = useSelector(state => state.kidSafari);
  const adults = useSelector(state => state.adultSafari);
  const OtherName = useSelector(state => state.otherName);
  const TotalAmount = useSelector(state => state.TotalAmount);

  

  useEffect(() => {
    getSafari(id2);
    getPark(id1);
  },[]);


  const save = (event)=>{
    if(Name !== "" && City !== "" && Email !== "" && Contact !== ""){
      safariEnquiry(Name,Contact,Email,City,adults,kids,startDate,(park.name+","+park.id),gypsy,(safari.name+","+safari.id),OtherName,TotalAmount);
      setAlert({msg:"New Hotel details are successfully saved",value:false, type:"success"});
        event.preventDefault();
        enquiry();
      }
      else{
        setAlert({msg:"Kindly fill all the fields",value:false, type:"danger"});
        event.preventDefault();
      }
      
  }

  return (
    <div>
      <CartSafari gypsy={gypsy} price={safari.price}></CartSafari>
      <Alert message={alert.msg} hidden={alert.value} type={alert.type}></Alert>
      <div className="container border form my-5">
        <div className="text-center my-3" style={{ fontWeight: "bold" }}>
          {safari.name}
        </div>
        <form className="my-2">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e)=>{setName(e.target.value)}}
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
                  placeholder="Email"
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                type="text"
                className="form-control"
                placeholder="Contact No."
                onChange={(e)=>{setContact(e.target.value)}}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                No. of passeners
              </label>
              <input
                type="text"
                className="form-control"
                value={adults +" adults, "+ kids +" kids, " + gypsy +" gypsy"}
                min={2}
                max={10}
                onChange={(e) => {
                  setAdult(e.target.value);
                }}
                data-toggle="modal" data-target="#exampleModal"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label
                style={{ color: "white" }}
              >
                National Park
              </label>
              <br />
              <input
                type="text"
                className="form-control col-md-6 mb-3"
                required
                disabled
                defaultValue={park.name}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                Park Visiting date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {setStartDate(date)}}
                selectsStart
                startDate={startDate}
                // endDate={endDate}
                minDate={new Date()}
              />
            </div>
            {/* <div className="col-md-6">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                Check-out
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div> */}
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label
                style={{ color: "white" }}
              >
                Select a Safari
              </label>
              <br />
              <input
                type="text"
                disabled
                className="form-control col-md-6 mb-3"
                defaultValue={safari.name}
              />
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <div>
              Note: Only 6 people are allowed in the safari per gypsy and no
              sharing is allowed. Kindly book accordingly
            </div>
            <br />
            <br />
            <button className="btn btn-primary" disabled={dis} type="submit" onClick={save}>
              {btn}
            </button>
          </div>
        </form>
      </div>
      <div className="container text-center border my-5">
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Other Activity(ies)
        </div>
        <br />
        <OtherActivity varXs="1" varMd="3"></OtherActivity>
      </div>
      <div className="container text-center border">
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Hotels available
        </div>
        <br />
        <Hotels varXs="1" varMd="3"></Hotels>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Rooms
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body"><AddSafariPassenger></AddSafariPassenger> </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
