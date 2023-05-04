import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/480px-Telegram_X_2019_Logo.svg.png" alt=""></img>
      <div className={s.title}>Telegram</div>
    </header>
  );
}

export default Header;