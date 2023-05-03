import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const setActive = ({isActive}) => isActive ? s.active : s.item; // route-dom 6

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
