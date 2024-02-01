import React, { useContext, useEffect } from "react";
import logo from "../images/park.webp";
import Hotels from "./Hotels";
import "../css/ParkForm.css";
import Safari from "./Safari";
import { useParams } from "react-router-dom";
import AppContext from "../contexts/AppContext";


export default function ParkForm(props) {
  const{id1} = useParams();

  const{park,getPark} = useContext(AppContext);

  useEffect(()=>{
    getPark(id1);
  },[])

  return (
    <div>
      <div className="my-5">
        <div className="card cardPark">
          <img src={logo} alt=""></img>
          <div className="card-img-overlay">
            <div className="card-title body" style={{ fontSize: "40px" }}>
              {park.name}
            </div>
            <div className="card-text body">
              <img
                    src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  &nbsp;{park.city}, {park.state}
                  <br /><br/>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4353/4353032.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  &nbsp;{park.airport}
                  <br /><br/>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2062/2062153.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />&nbsp;{park.railway}</div>
            <div className="card-body body">
              {park.about}<br/>
              <img  />
              <img  />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-container border my-5">
          <div className="grid-item">
            <span className="my-3" style={{ fontSize: "20px", textAlign: "center",fontWeight:'bold' }}>
              Safari
            </span>
            <Safari bt={"Book"} blockbtn={true} varXs="1" varMd="3" id={id1} className="my-3"></Safari>
          </div>
        </div>
        <div className="grid-container border my-5">
          <div className="grid-item my-3">
            <span className="my-3" style={{ fontSize: "20px", textAlign: "center",fontWeight:'bold' }}>
              Hotels
            </span>
            <Hotels varXs="1" varMd="3" className="my-3"></Hotels>
          </div>
        </div>
      </div>
    </div>
  );
}
