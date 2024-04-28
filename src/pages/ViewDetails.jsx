import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const sport = useLoaderData();
    const {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport
    return (
        <div>
            <h2>View Details</h2>
            <h2>{UserEmail}</h2>
        </div>
    );
};

export default ViewDetails;