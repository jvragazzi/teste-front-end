import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductModal from './ProductModal';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/RelatedProducts.scss';

interface Product {
  id: number;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface RelatedProductsProps {
  showCategories?: boolean;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ showCategories = true }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('VER TODOS');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = showCategories
    ? ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']
    : ['VER TODOS'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === 'VER TODOS'
      ? products
      : products.filter(() => activeCategory === 'CELULAR');

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div className="related-products__loading">Carregando produtos...</div>;
  }

  return (
    <>
      <section className="related-products">
        <h2 className="related-products__title">Produtos Relacionados</h2>
        <div
          className={`related-products__tabs-container ${showCategories ? '' : 'minimal'}`}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`related-products__tab ${
                showCategories ? '' : 'minimal'
              } ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          className="related-products__slider"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id} className="related-products__slide">
              <div
                className="related-products__item"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.photo}
                  alt={product.productName}
                  className="related-products__image"
                />
                <h3 className="related-products__name">{product.productName}</h3>
                <p className="related-products__description">
                  {product.descriptionShort}
                </p>
                <p className="related-products__price">
                  R$ {product.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <div className="related-products__button-container">
                  <button
                    className="related-products__button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {isModalOpen && selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default RelatedProducts;
