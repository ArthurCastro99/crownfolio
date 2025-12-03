import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#">
          <img src="/src/assets/image-logo/logo.png" alt="Icon logo" />
        </a>

        <nav className="headerMenu">
          <ul className="menuLista">
            <li className="links">
              <a href="#main">Home</a>
            </li>
            <li className="links">
              <a href="#menu">Menu</a>
            </li>
            <li className="links">
              <a href="#evento">Evento</a>
            </li>
            <li className="links">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
