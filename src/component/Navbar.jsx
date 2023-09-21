import {  NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-5">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                    <NavLink to="/contact">Contact</NavLink>
                <li>
                </li>
                <li>
                    <NavLink to="/users">Our user</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;