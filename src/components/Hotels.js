import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import image from "../images/hotel.jpg";
import "../css/Hotels.css";
import air_conditioner from '../images/icons/air-conditioner.png'
import wifi from '../images/icons/wifi.png';
import room_service from '../images/icons/covered-food-tray-on-a-hand-of-hotel-room-service.png';
import pool from '../images/icons/swimming.png';
import laundry from '../images/icons/laundry-service.png';
import AppContext from "../contexts/AppContext";
import { useLocation, useParams } from "react-router-dom";

export default function Hotels(props) {

  const{id1} = useParams();


  const {hotels,setHotels, getHotels,hotelReverse,hotelSort,getHotelreverse,getHotelsorted} = useContext(AppContext);


  const{ varXs, varMd } = props;



  const lowToHigh = () => {
       setHotels(hotelSort);
  }

  const highToLow = ()=>{
       setHotels(hotelReverse);
  }

  useEffect(()=>{
    getHotels(id1);
    getHotelreverse(id1);
    getHotelsorted(id1);
  },[])
  
  return (
    <div>
      <div
      hidden={hotels.length == 0}
      className="container border my-3"
      style={{padding: "20px" }}
    >
      Sort for price:&nbsp;&nbsp;
      <input type="radio" name="sort" id="htol" onClick={highToLow} />
      &nbsp;Higher to lower&nbsp;&nbsp;
      <input type="radio" name="sort" id="ltoh" onClick={lowToHigh}/>
      &nbsp;Lower to higher
    </div>
    <div hidden={hotels.length != 0}>No hotels available</div>
      <Row xs={varXs} md={varMd} className="g-4">
      {hotels.map((idx) => (
        <Col key={idx.id}>
          <div className='card card1 my-2'>
          <div
                id={"carouselExampleControls"+idx.id}
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={idx.image1} alt="First slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image2} alt="Second slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image3} alt="Third slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image4} alt="Fourth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image5} alt="Fifth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image6} alt="Sixth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image7} alt="Seventh slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image8} alt="Eighth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image9} alt="Ninth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={idx.image10} alt="Tenth slide" style={{height:'200px',width:'150px'}} />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href={"#carouselExampleControls"+idx.id}
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
                  href={"#carouselExampleControls"+idx.id}
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
            {/* <img className='image' src={idx.image} alt="" style={{height:'200px'}} /> */}
            <div className='card-body' style={{height:'200px'}}>
              <div className='card-title' style={{color:'goldenrod'}}>{idx.name}</div>
              <div className='card-text text-center'>
                <div hidden={idx.ac === 'No'}>Air-conditioner &nbsp;<img src={air_conditioner} alt="" style={{height:'20px',width:'20px'}}/><br/></div>
                <div hidden={idx.pool === 'No'}>Swimming-pool &nbsp;<img src={pool} alt="" style={{height:'20px',width:'20px'}}/><br/></div>
                <div hidden={idx.room === 'No'}>Room-service &nbsp;<img src={room_service} alt="" style={{height:'20px',width:'20px'}}/><br/></div>
                <div hidden={idx.wifi === 'No'}>Wifi &nbsp;<img src={wifi} alt="" style={{height:'20px',width:'20px'}}/><br/></div>
                <div hidden={idx.laundry === 'No'}>Laundry-Service&nbsp;<img src={laundry} style={{height:'20px',width:'20px'}}/></div>
              </div>
            </div>
            <div className='card-footer'>
                <span>&#8377;{idx.price}</span><br/>
                <span style={{color:'gray'}}>*For 1 night for 2 persons*</span><br/>
                <span style={{color:'gray'}}>Inclusive of all taxes</span><br/><br/>
                <a href={`/hotel-form/${id1}/${idx.id}`} className='btn btn-primary'>Get Details</a>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  );
}
