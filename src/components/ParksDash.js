import React, { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import AppContext from "../contexts/AppContext";

export default function ParksDash() {

  const { parks, getParks } = useContext(AppContext);

  useEffect(() => {
    getParks();
  }, []);
  
  console.log(parks);

  return (
    <div>
      <Carousel>
        {[parks[0].image,parks[1].image,parks[2].image,parks[3].image,parks[4].image,parks[5].image].map((item) => {
          return <Carousel.Item key={item}>{item}</Carousel.Item>;
        })}
      </Carousel>
    </div>
  );
}
