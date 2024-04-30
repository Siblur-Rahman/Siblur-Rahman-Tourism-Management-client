import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";

const TouristsSpotsSection = ({sport}) => {

    const { user, logOut } = useContext(AuthContext);


    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName} = sport
    
    return (
        <div className="hero h-[600px] bg-base-200 rounded-2xl my-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse flex-grow">
            <div className="lg:px-10 flex-col flex-grow">
                <h2 className="card-title">{country_Name}</h2>
                <h2 className="card-title">{tourists_spot_name}</h2>
                <hr className="mt-5 border-2"/>
                <p>Location: {location}</p>
                <p>Description: {short_description}</p>
                { user? <Link to={`/viewdetails/${_id}`} className="btn btn-success">View Details</Link>: <Link to={`/login`} className="btn btn-success">View Details</Link>}
            </div> 
            <img src={image} className="max-w-sm rounded-lg h-[500px]" />
        </div>
    </div>
    );
};

export default TouristsSpotsSection;