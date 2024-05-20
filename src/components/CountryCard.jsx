import { Link } from "react-router-dom";

const CountryCard = ({courntry}) => {
    const {country_Name, image, short_description } = courntry

    return (
        <Link to={`/sportssamecountriy/${country_Name}`}>
                <div>
                    <h2 className="text-2xl">
                        {
                            country_Name
                        }
                    </h2>
                    {
                        short_description
                    }
                    <img src={image} alt="" />
                </div>
        </Link>
    );
};

export default CountryCard;