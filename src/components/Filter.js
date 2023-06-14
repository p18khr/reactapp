import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Filter.css";
import AppContext from "../contexts/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";

export default function Filter(props) {
  const {
    city,
    getCity,
    state,
    getState,
    parkName,
    getParkName,
    getActivityName,
    activityName,
    filter,
  } = useContext(AppContext);

  // const stateName = useSelector(state => state.stateName);
  // const park = useSelector(state => state.parkName);
  // const City = useSelector(state => state.cityName);
  // const activity = useSelector(state => state.activityName);

  // const {stateName,park,City,activity} = props;

  // const dispatch = useDispatch();

  // const initialVal = [
  //   {
  //     id: "city",
  //     value: "",
  //   },
  //   {
  //     id: "state",
  //     value: "",
  //   },
  //   {
  //     id: "park",
  //     value: "",
  //   },
  //   {
  //     id: "activity",
  //     value: "",
  //   },
  // ];

  // const [s, setS] = useState(initialVal);


  useEffect(() => {
    getCity();
    getState();
    getParkName();
    getActivityName();
  }, []);

  const onChange=(e)=> {
    const value = e.target.value;
    const id = e.target.id;

    // console.log(value);
    // console.log(id);
    // const initial = s.map((idx) => {
    //   if (idx.id === id) {
    //     if (id === "city") {
    //       dispatch(actionCreators.CityName(value));
    //     } else if (id === "park") {
    //       dispatch(actionCreators.ParkName(value));
    //     } else if (id === "state") {
    //       dispatch(actionCreators.StateName(value));
    //     } else if (id === "activity") {
    //       dispatch(actionCreators.ActivityName(value));
    //     }
    //     return {
    //       ...idx,
    //       value: value,
    //     };
    //   } else {
    //     return idx;
    //   }
    // });
    // setS(initial);

    var activity ="";
    var City ="";
    var stateName="";
    var park="";
    if (id === "activity") {
      activity = value;
      // console.log(activity);
      // console.log("in");
    }
    else if (id === "park") {
       park = value;
    }
    else if (id === "state") {
      stateName = value;
    }
    else if (id === "city") {
       City = value;
    }

    // console.log("activity: " + activity);
    // console.log("park: " + park);
    // console.log("City: " + City);
    // console.log("stateName: " + stateName);

    filter(activity, park, City, stateName);
  }

  const load=()=>{
    window.location.reload();
  }

  return (
    <div className="container form my-5">
      <Row xs={1} md={2} style={{ margin: "10px" }}>
        <Col key={1} className="my-3" placeholder="select a city">
          <select id="city" onChange={onChange}>
            <option id="disabledCity">Select a City</option>
            {city.map((idx) => (
              <option id={idx} value={idx}>{idx}</option>
            ))}
          </select>
        </Col>
        <Col key={2} className="my-3">
          <select id="state" onChange={onChange}>
          <option id="disabledState">Select a State</option>
            {state.map((idx) => (
              <option id={idx} value={idx}>{idx}</option>
            ))}
          </select>
        </Col>
        <Col key={3} className="my-3">
          <select id="park" onChange={onChange}>
          <option id="disabledPark">Select a Park</option>
            {parkName.map((idx) => (
              <option id={idx.split(",")[1]} value={idx.split(",")[0]}>{idx.split(",")[0]}</option>
            ))}
          </select>
        </Col>
        <Col key={4} className="my-3">
          <select id="activity" onChange={onChange}>
          <option id="disabledAtivity">Select an Activity</option>
            {activityName.map((idx) => (
              <option id={idx} value={idx}>{idx}</option>
            ))}
          </select>
        </Col>
      </Row>
      <div className="text-center"><button className="btn btn-danger" onClick={load}>Reset</button></div>
    </div>
  );
}
