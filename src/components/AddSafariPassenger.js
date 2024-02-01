import React, { useState } from "react";
import cancel from '../images/icons/cancel.png';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";


export default function AddSafariPassenger() {

    const dispatch = useDispatch();

    const days = useSelector(state => state.Day);
  
    const[adLimit,setAdLimit] = useState(6);
    const[kidLimit,setKidLimit] = useState(4);
  
    const [rows, setRows] = useState([{
      "Adult":2,
      "Kids":0
    }]);
    const columnsArray = ["Adult", "Kids"]; // pass columns here dynamically
  
    const handleAddRow = () => {
      const item = {"Adult":2,"Kids":0};
      setRows([...rows, item]);
    };
  
    const postResults = () => {
      setRows(rows);
  
      let ad = 0;
      let kids = 0;
     
      for(var i = 0;i<rows.length;i++){
          ad = +ad + +rows[i].Adult;
          kids = +kids + +rows[i].Kids;
      }
  
      dispatch(actionCreators.addAdultSafari(ad));
      dispatch(actionCreators.addKidSafari(kids));
      dispatch(actionCreators.addGypsy(rows.length));
    //   dispatch(actionCreators.addDays(days,2000,rows.length));
      
      // console.log(ad);
      // console.log(kids);
      // console.log(rows) // there you go, do as you please
    };
  
    const handleRemoveSpecificRow = (idx) => {
      const tempRows = [...rows]; // to avoid  direct state mutation
      tempRows.splice(idx, 1);
      setRows(tempRows);
    };
  
    const updateState = (e) => {
      let prope = e.target.attributes.column.value; // the custom column attribute
      let index = e.target.attributes.index.value; // index of state array -rows
      let fieldValue = e.target.value; // value
  
      if(e.target.attributes.column.value === 'Kids'){
        setAdLimit(6 - e.target.value);
      }
      else{
        setKidLimit(6-e.target.value);
      }
  
      const tempRows = [...rows]; // avoid direct state mutation
      const tempObj = rows[index]; // copy state object at index to a temporary object
      tempObj[prope] = fieldValue; // modify temporary object
  
      // return object to rows` clone
      tempRows[index] = tempObj;
      setRows(tempRows); // update state
    };
  

  return (
    <div>
      <div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> Gypsy </th>
                  {columnsArray.map((column, index) => (
                    <th className="text-center" key={index}>
                      {column}
                    </th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((item, idx) => (
                  <tr key={idx}>
                    <td className="text-center">Gypsy #{idx + 1}</td>

                    {columnsArray.map((column, index) => (
                      <td key={index}>
                        <input
                          type="number"
                          column={column}
                          index={idx}
                          className="form-control"
                          onChange={(e) => updateState(e)}
                          max={index === 0 ? adLimit:kidLimit}
                          min={index === 0 ? 1:0}
                          defaultValue={index === 0 ? 2:0}
                        />
                      </td>
                    ))}

                    <td  className="text-center">
                      <img src={cancel} hidden={idx === 0}
                        style={{height:'20px',width:'20px',cursor:'pointer'}}
                        onClick={() => handleRemoveSpecificRow(idx) }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center">You have selected {rows.length} gypsy(ies).</div><br/><br/>
            <div style={{color:'red'}}>Note: Kindly click on Save Rooms to save your rooms (if changed)</div><br/><br/>
            <button onClick={handleAddRow} className="btn btn-primary">
              Add Gypsy
            </button>
            <button
              onClick={postResults}
              className="btn btn-success float-right"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
