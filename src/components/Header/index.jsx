import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import { CartContext } from "../../CartContext";

const Header = ({ onToggleCarrinho }) => {
  const { cart } = useContext(CartContext);

  const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);
  return (
    <>
      <header className="header">
        <a href="#">
          <img
            src={`${import.meta.env.BASE_URL}imageLogo/logo.webp`}
            alt="Logo"
          />
        </a>

        <nav className="headerMenu">
          <input type="checkbox" id="menuHamburguer"></input>
          <label for="menuHamburguer">
            <div class="menu">
              <span class="hamburguer"></span>
            </div>
          </label>
          <ul className="menuLista">
            <li className="links">
              <a href="#menu">Menu</a>
            </li>
            <li className="links">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="links">
              <a href="#promo">Promoção</a>
            </li>
            <li className="links">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
        <button className="botaoCarrinho" onClick={onToggleCarrinho}>
          <FontAwesomeIcon className="carrinhoAdiciona" icon="cart-plus" />
          <span key={totalItens} className="badge">
            {totalItens}
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;
