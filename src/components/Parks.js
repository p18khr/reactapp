import React from "react";
import logo from "../images/safari.jpg";
import CardsPark from "./CardsPark";
import "../css/Parks.css";
import Filter from "./Filter";
import { useSelector } from "react-redux";

export default function Parks() {

  const stateName = useSelector(state => state.stateName);
  const parkName = useSelector(state => state.parkName);
  const cityName = useSelector(state => state.cityName);
  const activityName = useSelector(state => state.activityName);

  return (
    <div>
      <div className="my-2">
        <div className="card bg-light">
          <div className="card-header">Filter out your next adventure!</div>
          <img src={logo} alt="Card" />
          <div className="card-img-overlay">
            <div className="card-body my-5">
              <div className="d-none d-lg-block">
                <Filter stateName={stateName} City={cityName} park={parkName} activity={activityName}></Filter>
              </div>
              <button
                type="button"
                className="btn btn-primary d-lg-none"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Filter
              </button>
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
                        Filter out your adventure!
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
                    <div className="modal-body">
                      <Filter stateName={stateName} City={cityName} park={parkName} activity={activityName}></Filter>
                    </div>
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
          </div>
        </div>
      </div>

      <div className="container border my-3">
        <CardsPark></CardsPark>
      </div>
    </div>
  );
}
