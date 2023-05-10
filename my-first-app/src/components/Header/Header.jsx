import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/480px-Telegram_X_2019_Logo.svg.png" alt=""></img>
      <div className={s.title}>Telegram</div>
      <div>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;