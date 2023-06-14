import React from "react";
import { Row, Col } from "react-bootstrap";
import image from "../images/hotel.jpg";
import "../css/Hotels.css";

export default function Hotels() {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <div className='card card1 my-2'>
            <img className='image' src={image} alt="" />
            <div className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                
              </div>
            </div>
            <div className='card-footer'>
                <a href='/hotel-form' className='btn btn-primary'>Go to the park</a>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  );
}
