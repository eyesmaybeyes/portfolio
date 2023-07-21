import { Link, useLocation } from "react-router-dom";
import "./Paginator.scss";

function Paginator() {
    const location = useLocation();
    return (
        <div className="paginator">
            {location.pathname === "/page-two" && (
                <Link to={"/"} className="prev">
                    PREV
                </Link>
            )}
            <Link to={"/page-two"} className="next">
                NEXT
            </Link>
        </div>
    );
}

export { Paginator };
