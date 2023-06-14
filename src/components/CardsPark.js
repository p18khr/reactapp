import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../images/download.jfif";
import '../css/CardsPark.css'
import AppContext from '../contexts/AppContext';
import { useSelector } from 'react-redux';

export default function CardsPark() {
  
  const {parks,getParks} = useContext(AppContext);

  // const stateName = useSelector(state => state.stateName);
  // const parkName = useSelector(state => state.parkName);
  // const cityName = useSelector(state => state.cityName);
  // const activityName = useSelector(state => state.activityName);

  useEffect(()=>{
    getParks();
  },[])
  
  return (
    <div>
      <Row xs={1} md={4} className="g-4 my-5">
      {parks.map((idx) => (
        <Col key={idx.id}>
          <div className='card card1 my-2'>
            <img src={idx.image} alt="" style={{height:'200px'}} />
            <div className='card-body text-center' style={{height:'110px'}}>
              <div className='card-title'>{idx.name}</div>
              <div className='card-text'>
                {idx.city}, {idx.state}           
              </div>
            </div>
            <div className='card-footer text-center'>
                <a href={`/park/${idx.id}`} className='btn btn-primary'>Go to the park</a>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  )
}
