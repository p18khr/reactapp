import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css/CardsPark.css";
import AppContext from "../contexts/AppContext";
import { useSelector } from "react-redux";

export default function CardsPark() {
  const { parks, getParks } = useContext(AppContext);

  // const stateName = useSelector(state => state.stateName);
  // const parkName = useSelector(state => state.parkName);
  // const cityName = useSelector(state => state.cityName);
  // const activityName = useSelector(state => state.activityName);

  useEffect(() => {
    getParks();
  }, []);

  return (
    <div>
      <Row xs={1} md={4} className="g-4 my-5">
        {parks.map((idx) => (
          <Col key={idx.id}>
            <a href={`/park/${idx.id}`} style={{textDecoration:'none',color:'black'}}>
            <div className="card card1 my-2">
              <div>
              <img
                className="w-100"
                src={idx.image}
                alt=""
                style={{ height: "200px" }}
              />
              
              <div className="card-img-overlay">
                <div className="card-title body" style={{ fontSize: "40px",textAlign:'center' }}>
                  {idx.name}
                </div>
              </div>
              </div>
              <div
                className="card-body text-center"
                style={{ height: "220px" }}
              >
                {/* <div className="card-title">{idx.name}</div> */}
                <div className="card-text">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  &nbsp;{idx.city}, {idx.state}
                  <br /><br/>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4353/4353032.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  &nbsp;{idx.airport}
                  <br /><br/>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2062/2062153.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  &nbsp;{idx.railway}
                </div>
              </div>
              {/* <div className="card-footer text-center">
                <a href={`/park/${idx.id}`} className="btn btn-primary">
                  Go to the park
                </a>
              </div> */}
            </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
