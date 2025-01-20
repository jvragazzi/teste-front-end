import '../styles/Header.scss';
import ShieldIcon from '../assets/header/ShieldCheck.svg';
import TruckIcon from '../assets/header/Truck.svg';
import CreditCardIcon from '../assets/header/CreditCard.svg';
import Logo from '../assets/header/logo.svg';
import Box from '../assets/header/Box.svg';
import Heart from '../assets/header/Heart.svg';
import User from '../assets/header/UserCircle.svg';
import Cart from '../assets/header/ShoppingCart.svg';
import SearchIcon from '../assets/header/MagnifyingGlass.svg';
import Crown from '../assets/header/Crown.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__info-bar">
        <div className="header__info-item">
          <img src={ShieldIcon} alt="Compra 100% segura" className="header__info-icon" />
          <span className="header__info-text header__info-text--light">Compra&nbsp;</span>
          <span className="header__info-text header__info-text--blue">100% segura</span>
        </div>
        <div className="header__info-item">
          <img src={TruckIcon} alt="Frete grátis acima de R$200" className="header__info-icon" />
          <span className="header__info-text header__info-text--blue">Frete grátis&nbsp;</span>
          <span className="header__info-text header__info-text--light">acima de R$200</span>
        </div>
        <div className="header__info-item">
          <img src={CreditCardIcon} alt="Parcele suas compras" className="header__info-icon" />
          <span className="header__info-text header__info-text--blue">Parcele&nbsp;</span>
          <span className="header__info-text header__info-text--light">suas compras</span>
        </div>
      </div>

      <div className="header__separator"></div>

      <div className="header__main">
        <div className="header__logo">
          <img src={Logo} alt="Logo Econverse" />
        </div>
        <div className="header__search">
          <div className="header__search-container">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <img src={SearchIcon} alt="Pesquisar" className="header__search-icon" />
          </div>
        </div>
        <div className="header__buttons">
          <button className="header__button">
            <img src={Box} alt="Envios" className="header__button-icon" />
          </button>
          <button className="header__button">
            <img src={Heart} alt="Favoritos" className="header__button-icon" />
          </button>
          <button className="header__button">
            <img src={User} alt="Perfil do usuário" className="header__button-icon" />
          </button>
          <button className="header__button">
            <img src={Cart} alt="Carrinho de compras" className="header__button-icon" />
          </button>
        </div>
      </div>

      <div className="header__separator"></div>

      <nav className="header__categories">
        <ul className="header__categories-list">
          <li className="header__categories-item">Todas categorias</li>
          <li className="header__categories-item">Supermercado</li>
          <li className="header__categories-item">Livros</li>
          <li className="header__categories-item">Moda</li>
          <li className="header__categories-item">Lançamentos</li>
          <li className="header__categories-item">Ofertas do dia</li>
          <li className="header__categories-item header__categories-item--assinatura">
            <img src={Crown} alt="Assinatura" className="header__categories-icon" />
            Assinatura
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
