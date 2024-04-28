import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
    const [myList, setMyList] = useState([]);

    const sport = useLoaderData();
    const {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport

    useEffect(()=>{
        fetch('http://localhost:5000/TouristsSpot')
        .then(res => res.json())
        .then(data => setMyList(data.filter(sport =>sport.UserEmail == UserEmail)));
    }, [])
    
    return (
        <div>
           <h3>{myList.length}</h3>
        </div>
    );
};

export default MyList;