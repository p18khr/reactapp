import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Safari.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { useParams } from "react-router-dom";

export default function Safari(props) {
  var { varXs, varMd, bt, blockbtn, id } = props;

  const { id1 } = useParams();

  

  // const amount = useSelector(state => state.SafariAmount);

  const [state, setState] = useState([]);
  const get = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-env.eba-bzp82zrm.ap-south-1.elasticbeanstalk.com/activity-api/safari/park/${id}`,
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

  // const initialCount = [{
  //   id: 0,
  //   name: 'Baklava',
  //   count: 1,
  // }, {
  //   id: 1,
  //   name: 'Cheese',
  //   count: 5,
  // }, {
  //   id: 2,
  //   name: 'Spaghetti',
  //   count: 2,
  // }]

  const { safaris, getSafaris } = useContext(AppContext);

  const dispatch = useDispatch();

  const [saf, addSaf] = useState(0);
  // const [count,setCount] = useState([]);

  // const [frequency,setFrequency] = useState(initialCount);

  useEffect(() => {
    getSafaris(id1);
    get(id1);
    state;
  }, []);

  const NameFreq = () => {
    let string = "";
    for (let i = 0; i < state.length; i++) {
      if (state[i].frequency > 0) {
        string = string + state[i].name + " x " + (state[i].frequency) + ";";
      }
    }
    dispatch(actionCreators.SafariNameFreq(string));
  };

  // const descNameFreq = () => {
  //   let string = "";
  //   for (let i = 0; i < state.length; i++) {
  //     if (state[i].frequency > 0) {
  //       string = string + state[i].name + "," + (state[i].frequency) + ",";
  //     }
  //   }
  //   console.log(string);
  // };

  function dis(id) {
    // console.log("inside:"+count);
    // console.log(id);
    NameFreq();
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === id) {
        // console.log("h")
        if (state[i].frequency > 0) {
          // console.log("f")
          return false;
        } else {
          return true;
        }
      }
    }
    return true;
  }

  return (
    <div>
      <Row xs={varXs} md={varMd} className="g-4">
        <div hidden={safaris.length != 0}>No safaris available!</div>
        {safaris.map((idx) => (
          <Col key={idx.id}>
            <div className="card card1 my-2">
              <img
                className="image"
                src={idx.image}
                alt=""
                style={{ height: "200px" }}
              />
              <div
                className="card-body text-center"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <div className="card-title" style={{ fontWeight: "bold" }}>
                  {idx.name}
                </div>
                <div className="card-text">
                  Jeep safari into the core area of the national park with
                  atmost 6 seats.
                  <br />
                  (No sharing facility available. Entire gypsy have to be
                  booked. Kindly book accordingly)
                </div>
              </div>
              <div className="card-footer text-center">
                <span>&#8377;{idx.price}</span>
                <br />
                <br />
                <a
                  href={`/safari-form/${id}/${idx.id}`}
                  className="btn btn-primary"
                  hidden={!blockbtn}
                >
                  {bt}
                </a>
                <button
                  className="btn btn-success text-center mx-2"
                  data-toggle="popover"
                  data-trigger="focus"
                  data-content="Click anywhere in the document to close this popover"
                  hidden={blockbtn}
                  onClick={() => {
                    dispatch(actionCreators.addSafari(idx.price));
                    addSaf(saf + 1);
                    dispatch(actionCreators.addSafariNum());

                    const nextCount = state.map((c) => {
                      if (c.id === idx.id) {
                        return {
                          ...c,
                          frequency: c.frequency + 1,
                        };
                      } else {
                        return c;
                      }
                    });
                    setState(nextCount);
                  }}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger tex-center mx-2"
                  hidden={blockbtn}
                  onClick={() => {
                    if (saf > 0) {
                      dispatch(actionCreators.removeSafari(idx.price));
                      addSaf(saf - 1);
                      dispatch(actionCreators.removeSafariNm());

                      const nextCount = state.map((c) => {
                        if (idx.id === c.id) {
                          return {
                            ...c,
                            frequency: c.frequency - 1,
                          };
                        } else {
                          return c;
                        }
                      });
                      setState(nextCount);
                      
                      // dispatch(actionCreators.addArray(count));
                    }
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
