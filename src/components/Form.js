import React from "react";
import '../css/Form.css'

export default function Form() {
  return (
    <div className="container border form my-5">
      <form className="mx-3 my-5">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01" style={{color:'white'}}>Name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefaultUsername" style={{color:'white'}}>Email</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Email"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03" style={{color:'white'}}>City</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03" style={{color:'white'}}>Contact No.</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="Contact No."
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03" style={{color:'white'}}>No. of adults</label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              defaultValue={2} min={2} max={10}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03" style={{color:'white'}}>No. of kids</label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              defaultValue={0} min={0} max={10}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03" style={{color:'white'}}>Check-in</label>
            <input
              type="date"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" style={{color:'white'}}>Check-out</label>
            <input
              type="date"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
            />
          </div>
        </div>
        <div className="form-row">
        <div className="col-md-6 mb-3">
            <label htmlFor="inlineFormCustomSelectPref" style={{color:'white'}}>Select National Park</label><br/>
          <select
            className="form-control col-md-6 mb-3"
            id="inlineFormCustomSelectPref" required
          >
            <option selected disabled>Choose...</option>
            <option value="1">Kanha National Park</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="inlineFormCustomSelectPref" style={{color:'white'}}>Select Activities</label><br/>
          <select
            className="form-control col-md-6 mb-3"
            id="inlineFormCustomSelectPref" required
          >
            <option selected disabled>Choose...</option>
            <option value="1">Kanha National Park</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>
        </div>
        <div className="my-4" style={{textAlign:"center"}}>
          <button className="btn btn-primary" type="submit">
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
