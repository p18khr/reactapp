import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [parks, setParks] = useState([]);

  const [park, setPark] = useState([]);

  const [city, setCity] = useState([]);

  const [state, setState] = useState([]);

  const [parkName, setParkName] = useState([]);

  const [activityName,setActivityName] = useState([]);

  const [hotels, setHotels] = useState([]);

  const [hotel, setHotel] = useState([]);

  const [hotelSort, setHotelSort] = useState([]);
  const [hotelReverse, setHotelReverse] = useState([]);

  const [safaris, setSafaris] = useState([]);
  const [count,setCount] = useState([]);

  const [safari, setSafari] = useState([]);

  const [others,setOthers] = useState([]);

  const [filters,setFilters] = useState([]);

  //Get all Parks
  const getParks = async () => {
    const response = await fetch("http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setParks(json);
  };

  //Get a park by id
  const getPark = async (id) => {
    const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPark(json);
  };

  // Filter a park by nearby city name, , getting city names only
  const getCity = async () => {
    const response = await fetch("http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api/city", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setCity(json);
  };

  // Filter a park by state name , getting state names only
  const getState = async () => {
    const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api/state`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setState(json);
  };

  // Filter a park just by it's name, getting park names only
  const getParkName = async () => {
    const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api/park`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setParkName(json);
  };


  const [allActivity,setAllActivity] = useState([]);

  // get all activities associated to a park
  const getAllActivities = async (park_id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/park/${park_id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setAllActivity(json);
    }
  };

  // get all activities name
  const getActivityName = async () => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/name`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setActivityName(json);
    }
  };

  // Get all the hotels name without any filter by park_id
  const getHotels = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/hotel-api/park/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setHotels(json);
    }
  };

  // get details of a hotel by id
  const getHotel = async (id) => {
    {
      const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/hotel-api/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setHotel(json);
    }
  };

  // sorting hotel by prices in increasing order
  const getHotelsorted = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/hotel-api/sort/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setHotelSort(json);
    }
  };

  // sorting hotel by prices in decreasing order
  const getHotelreverse = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/hotel-api/reverse/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setHotelReverse(json);
    }
  };

  // getting type 'safari' by park_id
  const getSafaris = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/safari/park/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setSafaris(json);
      

      }
  };

  // getting type 'safari' by id
  const getSafari = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setSafari(json);
    }
  };

  // getting type 'other' by park_id
  const getOtherActivity = async (id) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/activity-api/others/park/${id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setOthers(json);
    }
  };

  // filter the park on 4 parameters
  const filter = async (activity_name,park_name,city,state) => {
    {
      const response = await fetch(
        `http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/park-api/filter`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ activity_name,park_name,city,state }),
        }
      );
      const json = await response.json();
      setParks(json);
    }
  };

 // posting a general enquiry from home page form
  const GeneralEnquiry = async (name,contact,email,city,adult,kid,check_in,check_out,days,park_id) => {
    await fetch("http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/enquiry-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,contact,email,city,adult,kid,check_in,check_out,days,park_id }),
    });
  };

  const HotelEnquiry = async (name,contact,email,city,adult,kid,check_in,check_out,days,park_id,room,safari,activity,estimate_package,hotel) => {
    await fetch("http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/enquiry-api/hotel-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,contact,email,city,adult,kid,check_in,check_out,days,park_id,room,safari,activity,estimate_package,hotel }),
    });
  };

  const safariEnquiry = async (name,contact,email,city,adult,kid,visiting_date,park_id,gypsy,safari,activity,estimate_package) => {
    await fetch("http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/enquiry-api/safari-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,contact,email,city,adult,kid,visiting_date,park_id,gypsy,safari,activity,estimate_package }),
    });
  };


  const [blog,setBlog] = useState({});
  const getBlog = async (id) => {
    const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/blog-api/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json();
    setBlog(json);
  };

  const [blogs,setBlogs] = useState([]);
  const getBlogs = async () => {
    const response = await fetch(`http://nationalpark-api-env.eba-srqefrtw.ap-south-1.elasticbeanstalk.com/blog-api`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await response.json();
    setBlogs(json);
  };

  // Add a blog
  const addBlog = async (title, category, content) => {
    await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category, content }),
    });
  };

  //Edit a blog
  const editBlog = async (id, title, category, content) => {
    const response = await fetch("http://localhost:4000/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, category, content }), // body data type must match "Content-Type" header
    });

    console.log(response.json());
  };

  //Delete a blog
  const deleteBlog = async (id) => {
    await fetch("http://localhost:4000/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }), // body data type must match "Content-Type" header
    });
  };

  return (
    <AppContext.Provider
      value={{
        parks,
        getParks,
        park,
        getPark,
        getCity,
        city,
        getState,
        state,
        getParkName,
        parkName,
        getHotels,
        hotels,
        setHotels,
        getHotel,
        hotel,
        hotelReverse,
        hotelSort,
        getHotelreverse,
        getHotelsorted,
        getSafaris,
        safaris,
        getSafari,
        safari,
        others,
        getOtherActivity,
        getActivityName,
        activityName,
        filter,
        getAllActivities,
        allActivity,
        GeneralEnquiry,
        HotelEnquiry,
        safariEnquiry,
        blog,
        getBlog,
        blogs,
        getBlogs
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
