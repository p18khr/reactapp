import React, { useContext, useEffect } from "react";
import image from "../images/tigers.jfif";
import "../css/CarouselFade.css";
import { Carousel, Col, Row } from "react-bootstrap";
import AppContext from "../contexts/AppContext";

export default function CarouselParks() {
  const { parks, getParks } = useContext(AppContext);

  useEffect(() => {
    getParks();
  }, []);

  return (
    <div>
      <div
        id="carousel"
        className="carousel slide d-lg-none"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {parks.map((idx, i) => (
            
              <div
                className={i === 0 ? "carousel-item active" : "carousel-item"}
              >
                <a
                href={`/park/${idx.id}`}
                style={{ textDecoration: "none", color: "black" }}
                >
                <div className="card text-center">
                  <div className="card-header">
                    <img
                      src={idx.image}
                      alt=""
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>
                  <div
                    className="card-body"
                    style={{ height: "150px", overflow: "hidden" }}
                  >
                    <h5 className="card-title">{idx.name}</h5>
                    <p className="card-text">{idx.about}</p>
                    {/* <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a> */}
                  </div>
                  <div className="card-footer text-muted">...more</div>
                </div>
                </a>
              </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
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
          href="#carousel"
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

      {/* Cards in large screen */}

      <div className="row">
        <Row md={4} className="g-4">
          {parks.slice(0, 4).map((idx) => (
            <Col key={idx.id}>
              <a
                href={`/park/${idx.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="col-sm-3">
                  <div
                    className="card d-none d-sm-block"
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={idx.image}
                      alt=""
                      style={{ height: "200px" }}
                    />
                    <div
                      className="card-body"
                      style={{ height: "250px", overflow: "hidden" }}
                    >
                      <h5 className="card-title">{idx.name}</h5>
                      <p className="card-text">{idx.about}</p>
                    </div>
                    <div className="card-footer">...more</div>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <a href="/parks" className="btn btn-outline-danger">
          Explore more
        </a>
      </div>
    </div>
  );
}
