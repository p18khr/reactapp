import React from "react";
import logo from "../images/park.webp";
import Hotels from "./Hotels";
import "../css/ParkForm.css";
import HotelFilter from "./HotelFilter";
import Safari from "./Safari";
// import { useContext, useEffect } from "react";
// import AppContext from "../contexts/AppContext.js";

export default function ParkForm() {
  return (
    <div>
      <div className="my-5">
        <div className="card cardPark">
          <img src={logo} alt=""></img>
          <div className="card-img-overlay">
            <div className="card-title body" style={{ fontSize: "40px" }}>
              Ranthambore National Park
            </div>
            <div className="card-text body">Ranthambore, Rajasthan, IND</div>
            <div className="card-body body">
              tristique. Morbi mattis ullamcorper velit. Phasellus gravida
              semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt
              et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac
              felis. Nunc egestas, augue at pellentesque laoreet, felis eros
              vehicula leo, at malesuada velit leo quis pede. Donec interdum,
              metus et hendrerit aliquet, dolor diam sagittis ligula, eget
              egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl,
              viverra et, tempor et, pretium in, sapien. Donec venenatis
              vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio.
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Sed magna purus,
              fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis
              lacus. Quisque libero metus, condimentum nec, tempor a, commodo
              mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce
              fermentum. Nullam cursus lacinia erat. Praesent blandit laoreet
              nibh. Fusce convallis metus id felis luctus adipiscing.
              Pellentesque egestas, neque sit amet convallis pulvinar, justo
              nulla eleifend augue, ac auctor orci leo non est. Quisque id mi.
              Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus.
              Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam
              leo. Praesent egestas neque eu enim. In hac habitasse platea
              dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales
              aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam
              ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed
              augue ipsum, egestas nec, vestibulum et, malesuada adipiscing,
              dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi
              congue nunc, vitae euismod ligula urna in dolor. Mauris
              sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc
              interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum
              vehicula, eros
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-container border my-5">
          <div className="grid-item">
            <span className="my-3" style={{ fontSize: "20px", textAlign: "center",fontWeight:'bold' }}>
              Safari
            </span>
            <Safari className="my-3"></Safari>
          </div>
        </div>
        <div className="grid-container border my-5">
          <div className="grid-item my-3">
            <HotelFilter className="my-3"></HotelFilter>
            <span className="my-3" style={{ fontSize: "20px", textAlign: "center",fontWeight:'bold' }}>
              Hotels
            </span>
            <Hotels className="my-3"></Hotels>
          </div>
        </div>
      </div>
    </div>
  );
}
