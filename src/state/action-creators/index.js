export const addRoomsCharge = (room,charge,days)=>{
     return (dispatch)=>{
          dispatch({
            type:'addRooms',
            payload:room*charge*days
          })
     }
}

export const removeRooms = (room,charge)=>{
    return (dispatch)=>{
        dispatch({
          type:'removeRooms',
          payload:room*charge
        })
   }
}

export const addDays = (days,charge,room)=>{
    return (dispatch)=>{
        dispatch({
          type:'addDays',
          payload:days*charge*room
        })
   }
}

export const removeDays = (days,charge)=>{
    return (dispatch)=>{
        dispatch({
          type:'removeDays',
          payload:days*charge
        })
   }
}

export const addSafari = (charge)=>{
    return (dispatch)=>{
        dispatch({
          type:'addSafariAmount',
          payload:charge
        })
   }
}

export const removeSafari = (charge)=>{
    return (dispatch)=>{
        dispatch({
          type:'removeSafariAmount',
          payload:charge
        })
   }
}

export const addKid = (kid)=>{
  return (dispatch)=>{
    dispatch({
      type:'addKid',
      payload:kid
    })
  }
}

export const addAdult = (adult)=>{
  return (dispatch)=>{
    dispatch({
      type:'addAdult',
      payload:adult
    })
  }
}

export const addKidSafari = (kid)=>{
  return (dispatch)=>{
    dispatch({
      type:'addKidSafari',
      payload:kid
    })
  }
}

export const addAdultSafari = (adult)=>{
  return (dispatch)=>{
    dispatch({
      type:'addAdultSafari',
      payload:adult
    })
  }
}

export const addGypsy = (gypsy)=>{
  return (dispatch)=>{
    dispatch({
      type:'addGypsy',
      payload:gypsy
    })
  }
}

export const addRoom = (room)=>{
  return (dispatch)=>{
    dispatch({
      type:'addRoom',
      payload:room
    })
  }
}

export const Days = (days) =>{
  return (dispatch)=>{
    dispatch({
      type:'Days',
      payload:days
    })
  }
}

export const sortHotel = () =>{
  return (dispatch)=>{
    dispatch({
      type:'sort',
    })
  }
}

export const reverseHotel = () =>{
  return (dispatch)=>{
    dispatch({
      type:'reverse',
    })
  }
}

export const addOtherActivityAmount = (amount) =>{
  return (dispatch)=>{
    dispatch({
      type:'addOtherActivityAmount',
      payload:amount
    })
  }
}

export const removeOtherActivityAmount = (amount) =>{
  return (dispatch)=>{
    dispatch({
      type:'removeOtherActivityAmount',
      payload:amount
    })
  }
}

export const addOtherActivity = (amount) =>{
  return (dispatch)=>{
    dispatch({
      type:'addOtherActivity'
    })
  }
}

export const removeOtherActivity = () =>{
  return (dispatch)=>{
    dispatch({
      type:'removeOtherActivity'
    })
  }
}

export const addSafariNum = ()=>{
  return (dispatch)=>{
      dispatch({
        type:'addSafari'
      })
 }
}

export const removeSafariNm = ()=>{
  return (dispatch)=>{
      dispatch({
        type:'removeSafari'
      })
 }
}

export const addActivity = (id)=>{
  return (dispatch)=>{
    dispatch({
      type:'addActivity',
      payload:id
    })
}
}

export const removeActivity = (id)=>{
  return (dispatch)=>{
    dispatch({
      type:'removeActivity',
      payload:id
    })
}
}

export const addArray=(arr)=>{
  return (dispatch)=>{
    dispatch({
      type:'addArray',
      payload:arr
    })
}
}

export const CityName=(name)=>{
  return (dispatch)=>{
    dispatch({
      type:'cityName',
      payload:name
    })
}
}

export const StateName=(name)=>{
  return (dispatch)=>{
    dispatch({
      type:'stateName',
      payload:name
    })
}
}

export const ParkName=(name)=>{
  return (dispatch)=>{
    dispatch({
      type:'parkName',
      payload:name
    })
}
}

export const ActivityName=(name)=>{
  return (dispatch)=>{
    dispatch({
      type:'activityName',
      payload:name
    })
}
}

export const SafariNameFreq=(string)=>{
  return (dispatch)=>{
    dispatch({
      type:'addSafariNameFreq',
      payload:string
    })
}
}

export const OtherNameFreq=(string)=>{
  return (dispatch)=>{
    dispatch({
      type:'addOtherNameFreq',
      payload:string
    })
}
}

export const addTotalAmount=(amount)=>{
  return (dispatch)=>{
    dispatch({
      type:'addTotalAmount',
      payload:amount
    })
}
}
