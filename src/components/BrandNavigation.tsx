import React from 'react';
import '../styles/BrandNavigation.scss';
import logo from '../assets/header/logo.svg'; 

const BrandNavigation: React.FC = () => {
  const brands = Array(5).fill(logo);

  return (
    <section className="brand-navigation">
      <h2 className="brand-navigation__title">Navegue por marcas</h2>
      <div className="brand-navigation__list">
        {brands.map((brand, index) => (
          <div key={index} className="brand-navigation__item">
            <img src={brand} alt={`Marca ${index + 1}`} className="brand-navigation__logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandNavigation;
