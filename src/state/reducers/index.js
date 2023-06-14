import { combineReducers } from "redux";
import RoomAmountReducer from "./RoomAmountReducer";
import kidReducer from "./KidReducer";
import adultReducer from "./adultReducer";
import roomReducer from "./roomReducer";
import DayAmountReducer from './DayAmountReducer';
import SafariAmountReducer from './SafariAmontReducer';
import DayReducer from './DayReducer';
import adultSafariReducer from './adultSafariReducer';
import kidSafariReducer from './kidSafariReducer';
import GypsyReducer from './GypsyReducer';
import HotelReducer from './HotelReducer'
import OtherActivityAmountReducer from './otherActivityAmountReducer';
import SafariReducer from './SafariReducer';
import OtherActivityReducer from './OtherActivityReducer';
import ActivityReducer from './ActivityReducer';
import StateNameReducer from './StateReducer';
import CityNameReducer from './CityReducer';
import ParkNameReducer from './ParkReducer';
import ActivityNameReducer from './ActivityNameReducer';
import SafariNameReducer from './SafariNameReducer';
import OtherActivityNameReducer from './OtherActivityNameReducer';
import TotalAmountReducer from './TotalAmountReducer';

const reducers = combineReducers({
    RoomAmount:RoomAmountReducer,
    room:roomReducer,
    kid:kidReducer,
    adult:adultReducer,
    SafariAmount:SafariAmountReducer,
    DayAmount:DayAmountReducer,
    Day:DayReducer,
    kidSafari:kidSafariReducer,
    adultSafari:adultSafariReducer,
    Gypsy:GypsyReducer,
    hotels:HotelReducer,
    OtherActivityAmount:OtherActivityAmountReducer,
    Safari:SafariReducer,
    OtherActivity:OtherActivityReducer,
    Activity:ActivityReducer,
    stateName:StateNameReducer,
    parkName:ParkNameReducer,
    cityName:CityNameReducer,
    activityName:ActivityNameReducer,
    safariName:SafariNameReducer,
    otherName:OtherActivityNameReducer,
    TotalAmount:TotalAmountReducer

})

export default reducers;