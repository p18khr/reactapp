import React, { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

export default function OtherActivity(props) {
  var { varXs, varMd } = props;

  const { id1 } = useParams();

  const { others, getOtherActivity } = useContext(AppContext);

  const dispatch = useDispatch();

  const [add, setAdd] = useState(0);


  const [state,setState] = useState([]);
  const getOther = async (id1) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/others/park/${id1}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setState(json);
    }
  };

  useEffect(() => {
    getOtherActivity(id1);
    getOther(id1);
  }, []);


  const NameFreq = () => {
    let string = "";
    for (let i = 0; i < state.length; i++) {
      if (state[i].frequency > 0) {
        string = string + state[i].name + " x " + (state[i].frequency) + ";";
      }
    }
    dispatch(actionCreators.OtherNameFreq(string));
  };

  function dis(id){
    // console.log("inside:"+count);
    // console.log(id);
    NameFreq();
     for(let i=0;i<state.length;i++){
      if(state[i].id === id){
        // console.log("h")
        if(state[i].frequency > 0){
          // console.log("f")
          return false;
        }
        else{
          return true;
        }
      }
     }
     return true;
  }
  

  return (
    <div>
      <Row xs={varXs} md={varMd} className="g-4">
      <div hidden={others.length != 0}>No activities available</div>
        {others.map((idx) => (
          <Col key={idx.id}>
            <div className="card card1 my-2">
              <img className="image" src={idx.image} alt="" style={{height:'200px'}} />
              <div className="card-body text-center" style={{height:'200px',overflow:'hidden'}}>
                <div className="card-title" style={{ fontWeight: "bold" }}>
                  {idx.name}
                </div>
                <div className="card-text">{idx.about}</div>
              </div>
              <div className="card-footer text-center">
                <span>&#8377;{idx.price}</span>
                <br />
                <br />
                <button
                  className="btn btn-success text-center mx-2"
                  data-toggle="popover"
                  data-trigger="focus"
                  data-content="Click anywhere in the document to close this popover"
                  onClick={() => {
                    dispatch(actionCreators.addOtherActivityAmount(idx.price));
                    setAdd(add + 1);
                    dispatch(actionCreators.addOtherActivity());

                    const nextCount = state.map((c) => {
                      if(c.id === idx.id){
                        return {
                          ...c,
                          frequency: c.frequency +1
                        }
                      }
                      else{
                        return c;
                      }
                  });
                    setState(nextCount);
                    console.log(state);
                  }}
                  
                  
                >
                  Add
                </button>
                <button
                  className="btn btn-danger tex-center mx-2"
                  onClick={() => {
                    
                      dispatch(actionCreators.removeOtherActivityAmount(idx.price));
                      setAdd(add-1);
                      dispatch(actionCreators.removeOtherActivity());
                    
                      const nextCount = state.map((c) => {
                        if (idx.id === c.id) {
                          return {
                            ...c,
                            frequency: c.frequency - 1,
                          };
                        }
                        else{
                          return c;
                        }
                    });
                    setState(nextCount);
                    console.log(state);

                  }}

                  disabled={dis(idx.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
