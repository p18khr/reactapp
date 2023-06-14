import React from "react";
import { Row, Col } from "react-bootstrap";
import '../css/Filter.css'

export default function Filter() {
  return (
    <div className="container form my-5">
      <Row xs={1} md={2} style={{ margin: "10px" }}>
        <Col className="my-3">
          <select>
            <option disabled selected>
              Select a City
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Col>
        <Col className="my-3">
          <select>
            <option disabled selected>
              Select a State
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Col>
        <Col className="my-3">
          <select>
            <option disabled selected>
              Select a National Park
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Col>
        <Col className="my-3">
          <select>
            <option disabled selected>
              Select an acitivty
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </Col>
      </Row>
      <div style={{textAlign:'center'}}><button className="btn btn-primary">Filter</button></div>
    </div>
  );
}
