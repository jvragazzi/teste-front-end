import '../styles/ProductsCategoryButtons.scss';
import TechnologyIcon from '../assets/category/Technology.svg';
import SupermarketIcon from '../assets/category/Supermarket.svg';
import DrinksIcon from '../assets/category/Drinks.svg';
import ToolsIcon from '../assets/category/Tools.svg';
import HealthIcon from '../assets/category/Health.svg';
import FitnessIcon from '../assets/category/Fitness.svg';
import FashionIcon from '../assets/category/Fashion.svg';

const ProductCategoryButtons = () => {
  const categories = [
    { icon: TechnologyIcon, label: 'Tecnologia', isLarge: true },
    { icon: SupermarketIcon, label: 'Supermercado', isLarge: false },
    { icon: DrinksIcon, label: 'Bebidas', isLarge: false },
    { icon: ToolsIcon, label: 'Ferramentas', isLarge: false },
    { icon: HealthIcon, label: 'Saúde', isLarge: false },
    { icon: FitnessIcon, label: 'Esportes e Fitness', isLarge: false },
    { icon: FashionIcon, label: 'Moda', isLarge: false },
  ];

  return (
    <section className="product-category-buttons">
      <div className="product-category-buttons__container">
        {categories.map((category, index) => (
          <button key={index} className="product-category-buttons__button">
            <img
              src={category.icon}
              alt={category.label}
              className={`product-category-buttons__icon ${category.isLarge ? 'product-category-buttons__icon--large' : ''}`}
            />
            <span className="product-category-buttons__label">{category.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductCategoryButtons;
