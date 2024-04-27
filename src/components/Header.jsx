import { NavLink } from "react-router-dom";

const Header = () => {
    const navLink =<>
                <li><NavLink to="/">Home</NavLink></li>          
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/updatetouristsspot">Update Tourists Spot</NavLink></li>
                <li><NavLink to="/addtouristsspot">AddTouristsSpot</NavLink></li>
                <li><NavLink to="/alltouristsspot">All Tourists Spot</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/mylist">Mu List</NavLink></li>
                <li><NavLink to="/"></NavLink></li>
                </>
    return (
        <div>
            <ul className="flex gap-4">
            {
                navLink
            }
            </ul>
        </div>
    );
};

export default Header;
// 56-5