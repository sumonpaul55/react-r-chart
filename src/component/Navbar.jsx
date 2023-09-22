import {  NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="flex gap-5">
                     <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/users">Our user</NavLink>
        </div>
    );
};

export default Navbar;