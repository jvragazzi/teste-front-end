import React from 'react';
import '../styles/Newsletter.scss';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__info">
          <h2 className="newsletter__info-title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__info-description">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da econverse.
          </p>
        </div>
        <form className="newsletter__form">
          <div className="newsletter__form-inputs">
            <input
              type="text"
              className="newsletter__form-input"
              placeholder="Digite seu nome"
            />
            <input
              type="email"
              className="newsletter__form-input"
              placeholder="Digite seu e-mail"
            />
            <button type="submit" className="newsletter__form-button">
              INSCREVER
            </button>
          </div>
          <div className="newsletter__form-checkbox">
            <input
              type="checkbox"
              id="terms"
              className="newsletter__form-checkbox-input"
            />
            <label htmlFor="terms" className="newsletter__form-checkbox-label">
              Aceito os termos e condições
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
