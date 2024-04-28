import { useLoaderData } from "react-router-dom";


const UpdateTouristsSpot = () => {
    const sport =useLoaderData();
    const {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport

    return (
        <div>
            <h2>UpdateTouristsSpot: <span className="bg-red-600">{tourists_spot_name}</span></h2>
        </div>
    );
};

export default UpdateTouristsSpot;