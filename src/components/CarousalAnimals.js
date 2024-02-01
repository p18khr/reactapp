import React from "react";
import tigers from "../images/tiger.avif";
import lions from "../images/lions.jpg";
import rhino from "../images/rhino.jpg";
import elephants from "../images/elephants.jpg";
import "../css/CarouselAnimals.css";

export default function CarousalAnimals() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide d-lg-none"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/parks/animals/tiger" style={{textDecoration:'none',color:'black'}}>
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={tigers}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body"  style={{height:'150px' ,overflow:'hidden' }}>
                <h5 className="card-title">Tigers</h5>
                <p className="card-text">
                Tigers in India constitute more than 70% of the global
                population of tigers. Tiger is officially adopted as the National
                Animal of India on recommendation of the National Board for
                Wildlife since April 1972. In popular local languages, tigers
                are called baagh or sher. The Bengal Tiger (Panthera tigris
                tigris) is the species found all across the country except Thar
                desert region, Punjab and Kutch region. These can attain the
                largest body size among all the Felidae, and therefore are
                called Royal Bengal Tigers.
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
            <a href="/parks/animals/lion" style={{textDecoration:'none',color:'black'}}>
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={lions}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body"  style={{height:'150px' ,overflow:'hidden' }}>
                <h5 className="card-title">Asiatic Lions</h5>
                <p className="card-text">
                The Asiatic lion, also known as the Persian lion, is a
                population of Panthera leo that today survives in the wild
                only in India. Since the turn of the 20th century, its range has
                been restricted to Gir National Park, Gujarat. Historically, it
                inhabited much of southwest Asia to northern India. The lion is
                one of five pantherine cats native to India, along with the
                Bengal tiger (P. tigris tigris), Indian leopard (P. pardus
                fusca), snow leopard (P. uncia) and clouded leopard (Neofelis
                nebulosa). Also they are the 'king of the jungle'.
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
            <a href="/parks/animals/rhino" style={{textDecoration:'none',color:'black'}}>
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={rhino}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body"  style={{height:'150px' ,overflow:'hidden' }}>
                <h5 className="card-title">Indian Rhinoceros</h5>
                <p className="card-text">
                The Indian rhinoceros (Rhinoceros unicornis), or Indian rhino
                for short, also known as the greater one-horned rhinoceros or
                great Indian rhinoceros, is a rhinoceros species native to the
                Indian subcontinent. It is listed as Vulnerable on the IUCN Red
                List. As of August 2018, the global population was estimated to
                comprise 3,588 individuals, including 2,939 individuals in India
                and 649 in Nepal. Kaziranga National Park alone had an estimated
                population of 2,048 rhinos in 2009.
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
            <a href="/parks/animals/elephant" style={{textDecoration:'none',color:'black'}}>
            <div className="card text-center">
              <div className="card-header">
                <img
                  src={elephants}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body"  style={{height:'150px' ,overflow:'hidden' }}>
                <h5 className="card-title">Indian Elephants</h5>
                <p className="card-text">
                The Indian elephant (Elephas maximus indicus) is one of three
                extant recognised subspecies of the Asian elephant and native to
                mainland Asia. Since 1986, the Asian elephant has been listed as
                Endangered on the IUCN Red List as the wild population has
                declined by at least 50% since the 1930s to 1940s, i.e. three
                elephant generations. The Asian elephant is threatened by
                habitat loss, degradation and fragmentation. The Indian elephant
                is native to mainland Asia: India, Nepal, Bangladesh, Bhutan,
                Myanmar,etc.
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
          href="#carouselExampleControls"
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
          href="#carouselExampleControls"
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
          <a href="/parks/animals/tiger" style={{textDecoration:'none',color:'black'}}>
          <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={tigers}
              alt=""
              style={{ height: "200px" }}
            />
            <div className="card-body" style={{height:'250px' ,overflow:'hidden' }}>
              <h5 className="card-title">Tigers</h5>
              <p className="card-text">
                Tigers in India constitute more than 70% of the global
                population of tigers. Tiger is officially adopted as the National
                Animal of India on recommendation of the National Board for
                Wildlife since April 1972. In popular local languages, tigers
                are called baagh or sher. The Bengal Tiger (Panthera tigris
                tigris) is the species found all across the country except Thar
                desert region, Punjab and Kutch region. These can attain the
                largest body size among all the Felidae, and therefore are
                called Royal Bengal Tigers.
                {/* Skin hides measuring up to 4 meters are
                recorded. The body length measured from its nose to the tip
                of the tail can reach up to 3 meter and it can weigh up to 280
                Kilogram with male being heavier than the female. The average
                life expectancy is about 15 years. However, they are known
                to survive for up to 20 years in wild. */}
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
          <a href="/parks/animals/lion" style={{textDecoration:'none',color:'black'}}>
          <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={lions}
              alt=""
              style={{ height: "200px" }}
            />
            <div className="card-body" style={{height:'250px' ,overflow:'hidden' }}>
              <h5 className="card-title">Asiatic Lions</h5>
              <p className="card-text">
                The Asiatic lion, also known as the Persian lion, is a
                population of Panthera leo that today survives in the wild
                only in India. Since the turn of the 20th century, its range has
                been restricted to Gir National Park, Gujarat. Historically, it
                inhabited much of southwest Asia to northern India. The lion is
                one of five pantherine cats native to India, along with the
                Bengal tiger (P. tigris tigris), Indian leopard (P. pardus
                fusca), snow leopard (P. uncia) and clouded leopard (Neofelis
                nebulosa). Also they are the 'king of the jungle'.
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
          <a href="/parks/animals/rhino" style={{textDecoration:'none',color:'black'}}>
          <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={rhino}
              alt=""
              style={{ height: "200px" }}
            />
            <div className="card-body" style={{height:'250px' ,overflow:'hidden' }}>
              <h5 className="card-title">Indian Rhinoceros</h5>
              <p className="card-text">
                The Indian rhinoceros (Rhinoceros unicornis), or Indian rhino
                for short, also known as the greater one-horned rhinoceros or
                great Indian rhinoceros, is a rhinoceros species native to the
                Indian subcontinent. It is listed as Vulnerable on the IUCN Red
                List. As of August 2018, the global population was estimated to
                comprise 3,588 individuals, including 2,939 individuals in India
                and 649 in Nepal. Kaziranga National Park alone had an estimated
                population of 2,048 rhinos in 2009.
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
          <a href="/parks/animals/elephant" style={{textDecoration:'none',color:'black'}}>
          <div className="card d-none d-sm-block" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={elephants}
              alt=""
              style={{ height: "200px" }}
            />
            <div className="card-body" style={{height:'250px' ,overflow:'hidden' }}>
              <h5 className="card-title">Indian Elephants</h5>
              <p className="card-text">
                The Indian elephant (Elephas maximus indicus) is one of three
                extant recognised subspecies of the Asian elephant and native to
                mainland Asia. Since 1986, the Asian elephant has been listed as
                Endangered on the IUCN Red List as the wild population has
                declined by at least 50% since the 1930s to 1940s, i.e. three
                elephant generations. The Asian elephant is threatened by
                habitat loss, degradation and fragmentation. The Indian elephant
                is native to mainland Asia: India, Nepal, Bangladesh, Bhutan,
                Myanmar,etc.
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
