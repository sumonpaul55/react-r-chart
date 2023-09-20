import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-5">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link> 
                </li>
                <li>
                    <Link to="/users">Our users</Link> 
                </li>
            </ul>
        </div>
    );
};

export default Navbar;