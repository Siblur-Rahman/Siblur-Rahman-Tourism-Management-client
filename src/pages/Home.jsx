import { useLoaderData } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

const Home = () => {

    const spots = useLoaderData();
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/countries')
        .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])
    return (
        <div>
            
            <div className="lg:grid grid-cols-3 gap-3">

            {
                    spots.map(sport =><TouristsSpotsSection
                    key={sport._id} sport={sport}
                    >
                    </TouristsSpotsSection>)
                }
                
                </div>,
                <div>
                    <div className="lg:grid grid-cols-3 gap-3">

                        {
                            countries.map(country =><CountryCard key={country._id} courntry={country}></CountryCard>)
                        }
                        
                    </div>
                </div>
        </div>
    );
};

export default Home;