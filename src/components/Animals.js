import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import tigers from "../images/tiger.avif";
import lions from "../images/lions.jpg";
import rhino from "../images/rhino.jpg";
import elephants from "../images/elephants.jpg";

export default function Animals() {
  const { animal, getAnimal } = useContext(AppContext);

  const { animal_name } = useParams();

  useEffect(() => {
    getAnimal(animal_name);
  }, []);

  return (
    <div className="container my-5">
      <div className="card cardPark" hidden={animal_name !== "tiger"}>
        <img src={tigers} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {animal_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            Tigers in India constitute more than 70% of the global population of
            tigers. Tiger is officially adopted as the National Animal of India
            on recommendation of the National Board for Wildlife since April
            1972. In popular local languages, tigers are called baagh or sher.
            The Bengal Tiger (Panthera tigris tigris) is the species found all
            across the country except Thar desert region, Punjab and Kutch
            region. These can attain the largest body size among all the
            Felidae, and therefore are called Royal Bengal Tigers. Tigers are
            present in different landscapes across the country. Some landscapes
            are having rich and viable population with adequate habitat and
            abundance of prey. Then are some landscapes which are prone to human
            interference but have potential to support improved tiger
            population. Unfortunately, there are some habitats where once
            thriving tiger population has now disappeared. As of 2020, it is
            estimated that nearly 30% of tiger population in India is present
            outside the Tiger Reserves.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={animal_name !== "lion"}>
        <img src={lions} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {animal_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            The Asiatic lion, also known as the Persian lion, is a population of
            Panthera leo that today survives in the wild only in India. Since
            the turn of the 20th century, its range has been restricted to Gir
            National Park, Gujarat. Historically, it inhabited much of southwest
            Asia to northern India. The lion is one of five pantherine cats
            native to India, along with the Bengal tiger (P. tigris tigris),
            Indian leopard (P. pardus fusca), snow leopard (P. uncia) and
            clouded leopard (Neofelis nebulosa). Also they are the 'king of the
            jungle'. The population has steadily increased since 2010. In May
            2015, the 14th Asiatic Lion Census was conducted over an area of
            about 20,000 km2 (7,700 sq mi); the lion population was estimated at
            523 individuals, comprising 109 adult males, 201 adult females and
            213 cubs. In August 2017, surveyors counted 650 wild lions. In June
            2020, an estimation exercise counted 674 Asiatic lions in the Gir
            forest region, an increase of 29% over the 2015 census figure.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={animal_name !== "rhino"}>
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
            National Parks with {animal_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            The Indian rhinoceros (Rhinoceros unicornis), or Indian rhino for
            short, also known as the greater one-horned rhinoceros or great
            Indian rhinoceros, is a rhinoceros species native to the Indian
            subcontinent. It is listed as Vulnerable on the IUCN Red List. As of
            August 2018, the global population was estimated to comprise 3,588
            individuals, including 2,939 individuals in India and 649 in Nepal.
            Kaziranga National Park alone had an estimated population of 2,048
            rhinos in 2009. ndian rhinos once ranged throughout the entire
            stretch of the Indo-Gangetic Plain, but excessive hunting and
            agricultural development reduced its range drastically to 11 sites
            in northern India and southern Nepal. In the early 1990s, between
            1,870 and 1,895 Indian rhinos were estimated to have been alive.
            Since then, numbers have increased due to conservation measures
            taken by the government. However, poaching remains a continuous
            threat, as more than 150 Indian rhinos were killed in Assam by
            poachers between 2000 and 2006.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <div className="card cardPark" hidden={animal_name !== "elephant"}>
        <img src={elephants} alt="" style={{ opacity: 0.25 }} />
        <div className="card-img-overlay">
          <div
            className="card-title body"
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            National Parks with {animal_name.toUpperCase()}
          </div>
          <div
            className="card-body body"
            style={{ fontWeight: "bold", color: "black" }}
          >
            The Indian elephant (Elephas maximus indicus) is one of three extant
            recognised subspecies of the Asian elephant and native to mainland
            Asia. Since 1986, the Asian elephant has been listed as Endangered
            on the IUCN Red List as the wild population has declined by at least
            50% since the 1930s to 1940s, i.e. three elephant generations. The
            Asian elephant is threatened by habitat loss, degradation and
            fragmentation. The Indian elephant is native to mainland Asia:
            India, Nepal, Bangladesh, Bhutan, Myanmar,etc. The pre-eminent
            threats to Asian elephants today are habitat loss, degradation, and
            fragmentation, which are driven by an expanding human population,
            and lead in turn to increasing conflicts between humans and
            elephants when elephants eat or trample crops. Loss of
            significant extents of elephant range and suitable habitat
            continues; their free movement is impeded by reservoirs,
            hydroelectric projects and associated canals, irrigation dams,
            numerous pockets of cultivation and plantations, highways, railway
            lines, mining and industrial development.
            <br />
            <img />
            <img />
          </div>
        </div>
      </div>
      <Row xs={1} md={4} className="g-4 my-5">
        {animal.map((idx) => (
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
