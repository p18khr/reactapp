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
      <div style={{fontWeight:'bold',fontSize:'30px',textAlign:'center'}}>Do you like blogs? Here!</div>
      <Row xs={1} md={1}>
        {blogs.map((idx) => (
          <Col>
            <a href={`/blogs/${idx.id}`} style={{textDecoration:'none',color:'black'}}>
            <div className="card text-center my-5">
              <div className="btn btn-primary disabled" style={{borderBottomLeftRadius:'0',borderBottomRightRadius:'0'}}>{idx.title}</div>
              <div className="card-body" style={{height:'120px',overflow:'hidden'}}>
                <Row>
                  <Col>
                  <img src={idx.image} alt="" style={{maxHeight:'80px', maxWidth:'100px'}} />
                  </Col>
                  <Col>
                  {idx.content}
                  </Col>
                </Row>
                 
              </div>
              <div className="card-footer text-muted">..more</div>
            </div>
            </a>
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
