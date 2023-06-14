import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";

export default function Cart(props) {

  const {price} = props;

  const DayAmount = useSelector(state => state.DayAmount);
  const SafariAmount = useSelector(state => state.SafariAmount);
  const OtherActivityAmount = useSelector(state => state.OtherActivityAmount);
  const OtherActivity = useSelector(state => state.OtherActivity);
  const Safari = useSelector(state => state.Safari);

  const dispatch = useDispatch();

  // const {Activity} = useSelector(state => state.Activity);


  // const RoomAmount = useSelector(state => state.RoomAmount);

  useEffect(()=>{
    total();
  })

  
    const total = () =>{
      if(DayAmount === 0){
      dispatch(actionCreators.addTotalAmount(price+SafariAmount+OtherActivityAmount));
    }
    else{
      dispatch(actionCreators.addTotalAmount(DayAmount+SafariAmount+OtherActivityAmount));
    }
    }
  

  return (
    <div style={{zIndex:'999',position:'fixed'}} className="bg-primary">
      <nav className="navbar navbar-light" hidden={DayAmount === 0}>
       Your estimate: &#8377;{DayAmount+SafariAmount+OtherActivityAmount}<br/>
       You have added:<br/> {OtherActivity} Activity(ies)<br/> {Safari} safari
      </nav>
      <nav className="navbar navbar-light" hidden={DayAmount != 0}>
       Your estimate: &#8377;{price+SafariAmount+OtherActivityAmount} <br/>
       You have added: <br/>{OtherActivity} Activity(ies)<br/> {Safari} safari
      </nav>
      
    </div>
  );
}
