import { useLoaderData } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";

const Home = () => {

    const spots = useLoaderData();
    return (
        <div>
            {
                spots.map(sport =><TouristsSpotsSection
                key={sport._id} sport={sport}
                >
                </TouristsSpotsSection>)
            }
        </div>
    );
};

export default Home;