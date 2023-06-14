import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state';


export default function CartSafari(props) {

    const OtherActivityAmount = useSelector(state => state.OtherActivityAmount);
    const OtherActivity = useSelector(state => state.OtherActivity);
    

    const {gypsy,price} = props;

    const dispatch = useDispatch();


    useEffect(()=>{
      total();
    })

    const total = () =>{
      
      dispatch(actionCreators.addTotalAmount(OtherActivityAmount+gypsy*price));
    
    }

  return (
    <div style={{zIndex:'999',position:'fixed'}}>
      <nav className="navbar navbar-light bg-primary">
       
       You have added:<br/> {OtherActivity}x Other Activities = &#8377;{OtherActivityAmount}<br/>
       Your estimate: &#8377;{OtherActivityAmount+gypsy*price}
      </nav>
    </div>
  )
}
