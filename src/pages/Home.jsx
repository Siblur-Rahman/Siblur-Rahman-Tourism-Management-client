import { useLoaderData } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Banner from "../components/Banner";
import {Cursor, useTypewriter } from 'react-simple-typewriter'
const Home = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'Thank You', 'For Visiting', 'Our WebSite'],
        loop: 0
      })

    const spots = useLoaderData();
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://assignment-10-server-side-mu-gules.vercel.app/countries')
        .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])
    return (
        <div>
            <div className="text-3xl text-red-500">{text}<Cursor cursorColor='red' /></div>
            <Banner/>
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