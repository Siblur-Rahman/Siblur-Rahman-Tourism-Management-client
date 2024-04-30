
import { Link, useLoaderData } from "react-router-dom";
import AllTouristsSpots from "../components/AllTouristsSpots";

const AllTouristsSpot = () => {
    const spots = useLoaderData();
    
    return (

     <div>
        <h1 className="text-red-500 font-extrabold text-3xl text-center bg-slate-500 py-5"> All Tourists Spot </h1>
     {
         spots.map(sport =><AllTouristsSpots
         key={sport._id} sport={sport}
         >
         </AllTouristsSpots>)
     }
 </div>
    );
};

export default AllTouristsSpot;