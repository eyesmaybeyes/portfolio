import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                <p>
                    © 2022 - 2023<Link to={`/`}> eyesmaybeyes</Link>
                </p>
            </div>
        </footer>
    );
}

export { Footer };
