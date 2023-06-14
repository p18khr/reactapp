import React from "react";

export default function HotelFilter() {
  return (
    <div
      className="container border"
      style={{padding: "20px" }}
    >
      Sort for price:&nbsp;&nbsp;
      <input type="radio" name="sort" id="htol" />
      &nbsp;Higher to lower&nbsp;&nbsp;
      <input type="radio" name="sort" id="ltoh" />
      &nbsp;Lower to higher
    </div>
  );
}
