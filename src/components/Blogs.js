import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AppContext from "../contexts/AppContext";

export default function Blogs() {
  const { blogs, getBlogs, deleteBlog, getBlog, blog } = useContext(AppContext);

  useEffect(() => {
    getBlogs();
  });


  return (
    <div className="container my-5">
      <Row xs={1} md={1}>
        {blogs.map((idx) => (
          <Col>
            <div className="card text-center my-3">
              <div className="card-header">{idx.title}</div>
              <div className="card-body">
                <div className="card-title">
                  <img src={idx.image} alt="" style={{maxHeight:'250px', maxWidth:'200px'}} />
                </div>
                <p className="card-text">{idx.content}</p>
                <div className="card-footer">
                  {/* <button className="btn btn-primary mx-2" data-toggle="modal" data-target="#exampleModal" onClick={()=>{getBlog(idx.id)}}>Edit</button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      deleteBlog(idx.id);
                    }}
                  >
                    Delete
                  </button> */}
                  {/* <button className="btn btn-primary">Read More</button> */}
                </div>
              </div>
              <div className="card-footer text-muted">{idx.timestamp}</div>
            </div>
          </Col>
        ))}
      </Row>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Blog Edit Form
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div className="modal-body"><BlogEdit blog={blog}></BlogEdit></div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
