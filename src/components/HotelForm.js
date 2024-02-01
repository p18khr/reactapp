import React, {useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Safari from "./Safari";
import { addDays } from "date-fns";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index.js";
import AddGuest from "./AddGuest";
import { useParams } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import OtherActivity from "./OtherActivity";
import Alert from "./Alert";

export default function HotelForm() {

  const {id1,id2} = useParams();

  const {hotel,getHotel,park,getPark,HotelEnquiry} = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate, 1));
  const [Name,setName] = useState("");
  const [Email,setEmail] = useState("");
  const [Contact,setContact] = useState("");
  const [City,setCity] = useState("");

  const [alert,setAlert] = useState({
    msg:"",
    value:true,
    type:""
  });

  const room = useSelector(state => state.room);
  const kid = useSelector(state => state.kid);
  const adult = useSelector(state => state.adult);
  const SafariName = useSelector(state => state.safariName);
  const OtherName = useSelector(state => state.otherName);
  const TotalAmount = useSelector(state => state.TotalAmount);

  const dispatch = useDispatch();

  useEffect(()=>{
   getHotel(id2);
   getPark(id1);
  },[])

  // const setAdults = (event) => {
  //   var num = 0;
  //   if (event.value % 3 === 0) {
  //     num = event.value / 3 - 1;
  //     setAdult(num);
  //     console.log("insideif:" + adult);
  //   } else {
  //     num = Math.floor(event.value / 3);
  //     setAdult(num);
  //     console.log("math" + num);
  //     console.log("insideelse:" + adult);
  //   }
  //   console.log("outside:" + adult);
  //   dispatch(actionCreators.addRooms(num, 2000));
  // };

  // const setKids = (event) => {
  //   setKid(event.value);
  // };

  // const Days=()=>{
  //   dispatch(actionCreators.addDays((Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))),2000));
  // }

  const [btn,setBtn] = useState("Send Enquiry");
  const [dis,setDis] = useState(false);

  const enquiry=()=>{
    setBtn("Enquiry Sent");
    setDis(true);
  }

  const save = (event)=>{
    if(Name !== "" && City !== "" && Email !== "" && Contact !== ""){
      HotelEnquiry(Name,Contact,Email,City,adult,kid,startDate,endDate,(Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))),park.name+","+park.id,room,SafariName,OtherName,TotalAmount,hotel.name+","+hotel.id);
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
      <Cart price={hotel.price}></Cart>
      <div className="container border">
      <div className="img-overlay">
                <div className="card-title body" style={{ fontSize: "40px",textAlign:'center',color:'yellow' }}>
                  {hotel.name}
                </div>
              </div>
      <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={hotel.image1} alt="First slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image2} alt="Second slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image3} alt="Third slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image4} alt="Fourth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image5} alt="Fifth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image6} alt="Sixth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image7} alt="Seventh slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image8} alt="Eighth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image9} alt="Ninth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={hotel.image10} alt="Tenth slide" style={{height:'500px',width:'150px'}} />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              
      </div>
      <div className="container border form my-5">
      <Alert message={alert.msg} hidden={alert.value} type={alert.type}></Alert>
      <div className="text-center my-3" style={{ fontWeight: "bold" }}>
          Enquiry Form
        </div>
        <form className="mx-3 my-5">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
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
                  id="validationDefaultUsername"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend2"
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
                id="validationDefault03"
                placeholder="City"
                onChange={(e)=>{setCity(e.target.value)}}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                Contact No.
              </label>
              <input
                type="number"
                className="form-control"
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
              <label htmlFor="validationDefault03" style={{ color: "white" }}>
                No. of guests
              </label>
              <input
                type="text"
                value={adult +" adults, "+ kid +" kids, " + room +" rooms"}
                className="form-control"
                readOnly
                data-toggle="modal" data-target="#exampleModal"
              />
            </div>
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
                className="form-control"
                id="inlineFormCustomSelectPref"
                required
                disabled
                defaultValue={park.name}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label style={{ color: "white" }}>Check-in</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setEndDate(addDays(date, 1));
                  dispatch(actionCreators.Days(1));
                  dispatch(actionCreators.addDays((Math.round((addDays(date, 1).getTime() - date.getTime()) / (1000 * 3600 * 24))),hotel.price,room));
                }}
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
                onChange={(date) => {setEndDate(date);
                  console.log(Math.round((date.getTime() - startDate.getTime())  / (1000 * 3600 * 24)));
                  dispatch(actionCreators.Days(Math.round((date.getTime() - startDate.getTime())  / (1000 * 3600 * 24))));
                dispatch(actionCreators.addDays((Math.round((date.getTime() - startDate.getTime()) / (1000 * 3600 * 24))),hotel.price,room));
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={addDays(startDate,1)}
              />
            </div>
          </div>
          <div className="form-row">
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
            <span>Note: Only 3 guests per room are allowed</span>
            <br />
            <br />
            {/* <span>Total Estimate: &#8377; {(adult * 2000 + kids * 900)*days} for {days} nights</span>
            <br />
            <br /> */}
            <button className="btn btn-primary" disabled={dis} type="submit" onClick={save}>
              {btn}
            </button>
          </div>
        </form>
      </div>
      <div className="container my-3 border">
        <div style={{ fontWeight: "bold", textAlign: "center" }}>Safari</div>
        <br />
        <Safari varXs={1} varMd={3} bt={"Add"} blockbtn={false}></Safari>
      </div>
      <div className="container my-5 border">
        <div style={{ fontWeight: "bold", textAlign: "center" }}>Other Activities</div>
        <br />
        <OtherActivity varXs="1" varMd="3"></OtherActivity>
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
            <div className="modal-body"><AddGuest price={hotel.price}></AddGuest></div>
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
