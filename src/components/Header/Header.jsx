import "./Header.scss";
import neko from "../../images/neko.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to={`/`} className="header__link">
                <img className="header__logo" src={neko} alt="logo" />
            </Link>
            <ul className="nav nav-list">
                <li className="nav-list__item">
                    <Link to={`/`} className="nav-list__link active">
                        Projects
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to={`/about`} className="nav-list__link">
                        About
                    </Link>
                </li>
                <li className="nav-list__item">
                    <a
                        href="https://github.com/eyesmaybeyes"
                        className="nav-list__link"
                    >
                        Github
                    </a>
                </li>
            </ul>
        </header>
    );
}

export { Header };
