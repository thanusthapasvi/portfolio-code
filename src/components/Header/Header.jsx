import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header() {

    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <header>
            <nav>
                <Link to="/">
                    <span className={currentPath === '/' ? 'span-active' : ''}>About</span>
                    <div className={currentPath === '/' ? 'nav-ani nav-active' : 'nav-ani'}>
                        <div className="city-pic-box">
                            <img src="/city 1.png" alt="city image" className="city-pic" />
                            <img src="/city 2.png" alt="city image" className="city-pic" />
                            <img src="/city 3.png" alt="city image" className="city-pic" />
                            <img src="/city 4.png" alt="city image" className="city-pic" />
                        </div>
                        <div className="shadow-pic-box">
                            <img src="/shadow 1.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 2.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 3.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 4.png" alt="shadow image" className="shadow-pic" />
                        </div>
                    </div>
                </Link>
                <Link to="/projects">
                    <span className={currentPath === '/projects' ? 'span-active' : ''}>Projects</span>
                    <div className={currentPath === '/projects' ? 'nav-ani nav-active' : 'nav-ani'}>
                        <div className="city-pic-box">
                            <img src="/city 1.png" alt="city image" className="city-pic" />
                            <img src="/city 2.png" alt="city image" className="city-pic" />
                            <img src="/city 3.png" alt="city image" className="city-pic" />
                            <img src="/city 4.png" alt="city image" className="city-pic" />
                        </div>
                        <div className="shadow-pic-box">
                            <img src="/shadow 1.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 2.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 3.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 4.png" alt="shadow image" className="shadow-pic" />
                        </div>
                    </div>
                </Link>
                <Link to="/contact">
                    <span className={currentPath === '/contact' ? 'span-active' : ''}>Contact</span>
                    <div className={currentPath === '/contact' ? 'nav-ani nav-active' : 'nav-ani'}>
                        <div className="city-pic-box">
                            <img src="/city 1.png" alt="city image" className="city-pic" />
                            <img src="/city 2.png" alt="city image" className="city-pic" />
                            <img src="/city 3.png" alt="city image" className="city-pic" />
                            <img src="/city 4.png" alt="city image" className="city-pic" />
                        </div>
                        <div className="shadow-pic-box">
                            <img src="/shadow 1.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 2.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 3.png" alt="shadow image" className="shadow-pic" />
                            <img src="/shadow 4.png" alt="shadow image" className="shadow-pic" />
                        </div>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;