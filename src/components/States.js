import React, { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import mp from "../images/mp.jpg";
import squirrel from "../images/squirrel.webp";
import musk from "../images/musk.jpg";
import rhino from "../images/rhino.jpg";

export default function States() {
  const { statePark, getStatePark } = useContext(AppContext);

  const { state_name } = useParams();

  useEffect(() => {
    getStatePark(state_name);
  }, []);

  return (
    <div className="container my-5">
      <div className="card cardPark" hidden={state_name !== "madhya pradesh"}>
        <img src={mp} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {state_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            Madhya Pradesh is the largest state of central India, home to a
            variety of flora and fauna. The national parks in Madhya Pradesh are
            beautiful, diverse and important to India's ecosystem. The Kanha
            National Park is the largest of them, an important Tiger reserve of
            the country. Visit Pench National Park to get a true taste of
            natural beauty, understanding how this place inspired the popular
            Jungle Book. The Bandhavgarh National Park in Madhya Pradesh is also
            an important tiger reserve with historic significance.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={state_name !== "maharashtra"}>
        <img src={squirrel} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {state_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            Maharashtra as a state is blessed with fertile plains, picturesque
            landscapes and lush green forest areas besides some great national
            parks in Maharashtra. There are so many sanctuaries and national
            parks in Maharashtra that take care of the nature and provide a
            beautiful experience to the travellers. The state is filled with
            some of the best national parks that are known all over the world
            and also arrange numerous treks along with camping experiences that
            include safari journeys and picnics. Indian Giant squirrel is the
            state animal of Maharashtra.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={state_name !== "uttarakhand"}>
        <img src={musk} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {state_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            Uttarakhand is a state in northern India that is blessed with
            natural beauty and is home to some of the most beautiful national
            parks in the country. These national parks are important for the
            conservation of various species of flora and fauna that are unique
            to this region. The national parks in Uttarakhand offer an
            opportunity to witness the natural beauty and wilderness of the
            state. These parks are home to a variety of animals such as tigers,
            leopards, elephants, and deer, as well as rare and endangered
            species of birds, insects, and plants.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={state_name !== "assam"}>
        <img src={rhino} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {state_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            A hotspot for biodiversity, it is only natural that some of India's
            most important national parks are in Assam. Two-thirds of the
            world's population of one-horned rhinoceros are found at the famous
            Kaziranga National Park while Manas National Park is a tiger and
            elephant reserve, both landing on UNESCO's list of World Heritage
            Sites. The National Parks of Assam like Dibru Saikhowa and Nameri
            showcase the beautifully preserved exotic wildlife of the Himalayas
            and the North Eastern Valley. One horned rhinoceros is state animal
            of Assam.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <Row xs={1} md={4} className="g-4 my-5">
        {statePark.map((idx) => (
          <Col key={idx.id}>
            <a
              href={`/park/${idx.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card card1 my-2">
                <div>
                  <img
                    className="w-100"
                    src={idx.image}
                    alt=""
                    style={{ height: "200px" }}
                  />

                  <div className="card-img-overlay">
                    <div
                      className="card-title body"
                      style={{ fontSize: "40px", textAlign: "center" }}
                    >
                      {idx.name}
                    </div>
                  </div>
                </div>
                <div
                  className="card-body text-center"
                  style={{ height: "220px" }}
                >
                  {/* <div className="card-title">{idx.name}</div> */}
                  <div className="card-text">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                      alt=""
                      style={{ height: "20px", width: "20px" }}
                    />
                    &nbsp;{idx.city}, {idx.state}
                    <br />
                    <br />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4353/4353032.png"
                      alt=""
                      style={{ height: "20px", width: "20px" }}
                    />
                    &nbsp;{idx.airport}
                    <br />
                    <br />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2062/2062153.png"
                      alt=""
                      style={{ height: "20px", width: "20px" }}
                    />
                    &nbsp;{idx.railway}
                  </div>
                </div>
                {/* <div className="card-footer text-center">
                <a href={`/park/${idx.id}`} className="btn btn-primary">
                  Go to the park
                </a>
              </div> */}
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
