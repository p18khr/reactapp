import React from "react";

export default function Alert(props) {

 const {message, hidden ,type} = props;
  return (
    <div hidden={hidden}>
      <div className={`alert alert-${type}`} role="alert">
        {message}
        {/* <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button> */}
      </div>
    </div>
  );
}
