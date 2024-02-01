import React from "react";
import Intro from "./Intro";
import Form from "./Form";
import CarousalAnimals from "./CarousalAnimals";
import CarouselParks from "./CarouselParks";
import CarouselState from "./CarouselState";
import { Row, Col } from "react-bootstrap";
import logo from "../images/lush.jpg";
import "../css/Home.css";

export default function Home() {
  return (
    <div>
      <div className="my-5">
        <div className="card cardHome">
          <div>
            <img className="card-img-top img-fluid" src={logo} alt="" />
          </div>
          <div className="card-img-overlay">
            <div className="card-body">
              <Row>
                <Col>
                  <button
                    type="button"
                    className="btn btn-primary d-lg-none my-2"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Enquire your travel
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
                            Enquiry Form
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
                          <Form></Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Intro></Intro>
                </Col>
                <Col className="d-none d-lg-block">
                  <Form></Form>
                </Col>
              </Row>
              <div className="moving-text" style={{ fontSize: "20px" }}>
                Sample text
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="container my-5">
        <tbody>
          <tr
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Explore the National Parks
          </tr>
          <tr>
            <CarouselParks></CarouselParks>
          </tr>
        </tbody>
      </table>
      <table className="container my-5">
        <tbody>
          <tr
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Witness the Majestic Animals
          </tr>
          <tr>
            <CarousalAnimals></CarousalAnimals>
          </tr>
        </tbody>
      </table>
      <table className="container my-5">
        <tbody>
          <tr
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Here! We made it easy for you.
          </tr>
          <tr>
            <CarouselState></CarouselState>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
