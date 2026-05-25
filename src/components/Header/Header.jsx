import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">About</Link>
                <Link to="/projects">Project</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;