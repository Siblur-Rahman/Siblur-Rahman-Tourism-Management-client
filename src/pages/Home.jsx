import { useLoaderData } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";

const Home = () => {

    const touristsSpots = useLoaderData();
    return (
        <div>
            {
                touristsSpots.map(sport =><TouristsSpotsSection
                key={sport._id} sport={sport}
                >
                </TouristsSpotsSection>)
            }
        </div>
    );
};

export default Home;