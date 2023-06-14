import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../images/download.jfif";
import '../css/CardsPark.css'


export default function CardsPark() {
  return (
    <div>
      <Row xs={1} md={4} className="g-4 my-5">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <div className='card card1 my-2'>
            <img src={logo} alt="" />
            <div className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </div>
            </div>
            <div className='card-footer'>
                <a href='/park' className='btn btn-primary'>Go to the park</a>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  )
}
