import React from 'react';
import '../styles/Footer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../assets/header/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={Logo} alt="Econverse Logo" className="footer__brand-logo" />
            <p className="footer__brand-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__brand-social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__links-section">
              <h3 className="footer__links-section-title">Institucional</h3>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>
            <div className="footer__links-section">
              <h3 className="footer__links-section-title">Ajuda</h3>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>
            <div className="footer__links-section">
              <h3 className="footer__links-section-title">Termos</h3>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
