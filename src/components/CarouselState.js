import React from "react";
import image from "../images/tiger.avif";
import "../css/CarouselAnimals.css";
import mp from "../images/mp.jpg";
import squirrel from "../images/squirrel.webp";
import musk from "../images/musk.jpg";
import rhino from "../images/rhino.jpg";

export default function CarouselState() {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide d-lg-none"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <a
              href="/parks/madhya pradesh"
              style={{ textDecoration: "none", color: "black" }}
            >
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={mp}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body" style={{ height: "150px", overflow: "hidden" }}>
                <h5 className="card-title">Madhya Pradesh</h5>
                <p className="card-text">
                  Madhya Pradesh is the largest state of central India, home to
                  a variety of flora and fauna. The national parks in Madhya
                  Pradesh are beautiful, diverse and important to India's
                  ecosystem. The Kanha National Park is the largest of them, an
                  important Tiger reserve of the country. Visit Pench National
                  Park to get a true taste of natural beauty, understanding how
                  this place inspired the popular Jungle Book. The Bandhavgarh
                  National Park in Madhya Pradesh is also an important tiger
                  reserve with historic significance.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="/parks/maharashtra"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card text-center">
                <div className="card-header">
                  <img
                    src={squirrel}
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="card-body" style={{ height: "150px", overflow: "hidden" }}>
                  <h5 className="card-title">Indian giant squirrel</h5>
                  <p className="card-text">
                    Maharashtra as a state is blessed with fertile plains,
                    picturesque landscapes and lush green forest areas besides
                    some great national parks in Maharashtra. There are so many
                    sanctuaries and national parks in Maharashtra that take care
                    of the nature and provide a beautiful experience to the
                    travellers. The state is filled with some of the best
                    national parks that are known all over the world and also
                    arrange numerous treks along with camping experiences that
                    include safari journeys and picnics. Indian Giant squirrel
                    is the state animal of Maharashtra.
                  </p>
                  {/* <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
                <div className="card-footer">...more</div>
              </div>
            </a>
          </div>
          <div className="carousel-item">
          <a
              href="/parks/uttarakhand"
              style={{ textDecoration: "none", color: "black" }}
            >
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={musk}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body" style={{ height: "150px", overflow: "hidden" }}>
                <h5 className="card-title">Uttarakhand</h5>
                <p className="card-text">
                  Uttarakhand is a state in northern India that is blessed with
                  natural beauty and is home to some of the most beautiful
                  national parks in the country. These national parks are
                  important for the conservation of various species of flora and
                  fauna that are unique to this region. The national parks in
                  Uttarakhand offer an opportunity to witness the natural beauty
                  and wilderness of the state. These parks are home to a variety
                  of animals such as tigers, leopards, elephants, and deer, as
                  well as rare and endangered species of birds, insects, and
                  plants.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
            </a>
          </div>
          <div className="carousel-item">
          <a
              href="/parks/assam"
              style={{ textDecoration: "none", color: "black" }}
            >
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={rhino}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body" style={{ height: "150px", overflow: "hidden" }}>
                <h5 className="card-title">Assam</h5>
                <p className="card-text">
                  A hotspot for biodiversity, it is only natural that some of
                  India's most important national parks are in Assam. Two-thirds
                  of the world's population of one-horned rhinoceros are found
                  at the famous Kaziranga National Park while Manas National
                  Park is a tiger and elephant reserve, both landing on UNESCO's
                  list of World Heritage Sites. The National Parks of Assam like
                  Dibru Saikhowa and Nameri showcase the beautifully preserved
                  exotic wildlife of the Himalayas and the North Eastern Valley.
                  One horned rhinoceros is state animal of Assam.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
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
          href="#carouselExample"
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
          <a
            href="/parks/madhya pradesh"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={mp}
                alt=""
                style={{ width: "286px", height: "200px" }}
              />
              <div
                className="card-body"
                style={{ height: "250px", overflow: "hidden" }}
              >
                <h5 className="card-title">Madhya Pradesh</h5>
                <p className="card-text">
                  Madhya Pradesh is the largest state of central India, home to
                  a variety of flora and fauna. The national parks in Madhya
                  Pradesh are beautiful, diverse and important to India's
                  ecosystem. The Kanha National Park is the largest of them, an
                  important Tiger reserve of the country. Visit Pench National
                  Park to get a true taste of natural beauty, understanding how
                  this place inspired the popular Jungle Book. The Bandhavgarh
                  National Park in Madhya Pradesh is also an important tiger
                  reserve with historic significance.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
          </a>
        </div>

        <div className="col-sm-3">
        <a
            href="/parks/maharashtra"
            style={{ textDecoration: "none", color: "black" }}
          >
          <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={squirrel}
              alt=""
              style={{ width: "286px", height: "200px" }}
            />
            <div
              className="card-body"
              style={{ height: "250px", overflow: "hidden" }}
            >
              <h5 className="card-title">Maharashtra</h5>
              <p className="card-text">
                Maharashtra as a state is blessed with fertile plains,
                picturesque landscapes and lush green forest areas besides some
                great national parks in Maharashtra. There are so many
                sanctuaries and national parks in Maharashtra that take care of
                the nature and provide a beautiful experience to the travellers.
                The state is filled with some of the best national parks that
                are known all over the world and also arrange numerous treks
                along with camping experiences that include safari journeys and
                picnics. Indian Giant squirrel is the state animal of
                Maharashtra.
              </p>
              {/* <a href="/park" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
            <div className="card-footer">...more</div>
          </div>
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href="/parks/uttarakhand"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={musk}
                alt=""
                style={{ width: "286px", height: "200px" }}
              />
              <div
                className="card-body"
                style={{ height: "250px", overflow: "hidden" }}
              >
                <h5 className="card-title">Uttarakhand</h5>
                <p className="card-text">
                  Uttarakhand is a state in northern India that is blessed with
                  natural beauty and is home to some of the most beautiful
                  national parks in the country. These national parks are
                  important for the conservation of various species of flora and
                  fauna that are unique to this region. The national parks in
                  Uttarakhand offer an opportunity to witness the natural beauty
                  and wilderness of the state. These parks are home to a variety
                  of animals such as tigers, leopards, elephants, and deer, as
                  well as rare and endangered species of birds, insects, and
                  plants.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href="/parks/assam"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={rhino}
                alt=""
                style={{ width: "286px", height: "200px" }}
              />
              <div
                className="card-body"
                style={{ height: "250px", overflow: "hidden" }}
              >
                <h5 className="card-title">Assam</h5>
                <p className="card-text">
                  A hotspot for biodiversity, it is only natural that some of
                  India's most important national parks are in Assam. Two-thirds
                  of the world's population of one-horned rhinoceros are found
                  at the famous Kaziranga National Park while Manas National
                  Park is a tiger and elephant reserve, both landing on UNESCO's
                  list of World Heritage Sites. The National Parks of Assam like
                  Dibru Saikhowa and Nameri showcase the beautifully preserved
                  exotic wildlife of the Himalayas and the North Eastern Valley.
                  One horned rhinoceros is state animal of Assam.
                </p>
                {/* <a href="/park" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
              <div className="card-footer">...more</div>
            </div>
          </a>
        </div>
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
