import React from "react";
import image from "../images/download.jfif"
import "../css/CarouselFade.css"

export default function CarouselFade() {
  
  return (
    <div>
      <div
        id="carousel"
        className="carousel slide d-lg-none"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={image}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={image}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={image}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">Place</div>
            </div>
          </div>
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
        <div className="col-sm-3">
          <div className="card d-none d-sm-block" style={{width:'18rem'}}>
          <img className="card-img-top" src={image} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/park" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card d-none d-sm-block" style={{width:'18rem'}}>
          <img className="card-img-top" src={image} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/park" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card d-none d-sm-block" style={{width:'18rem'}}>
          <img className="card-img-top" src={image} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/park" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card d-none d-sm-block" style={{width:'18rem'}}>
          <img className="card-img-top" src={image} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/park" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div><br/>
      <div style={{textAlign:'center'}}><a href='/parks' className="btn btn-outline-danger">Explore more</a></div>
    </div>
  );
}
