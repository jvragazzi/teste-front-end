import React, { useState } from 'react';
import '../styles/ProductModal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    photo: string;
    productName: string;
    price: number;
    descriptionShort: string;
  };
}

const ProductModal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  if (!isOpen) return null;

  const handleQuantityChange = (operation: 'increment' | 'decrement') => {
    setQuantity((prevQuantity) =>
      operation === 'increment' ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        <div className="modal__body">
          <img src={product.photo} alt={product.productName} className="modal__image" />
          <div className="modal__details">
            <h2 className="modal__title">{product.productName}</h2>
            <p className="modal__price">
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="modal__description">{product.descriptionShort}</p>
            <a href="#" className="modal__link">
              Veja mais detalhes do produto &gt;
            </a>
            <div className="modal__actions">
              <div className="modal__quantity">
                <button
                  className="modal__quantity-button"
                  onClick={() => handleQuantityChange('decrement')}
                >
                  -
                </button>
                <span className="modal__quantity-value">{quantity}</span>
                <button
                  className="modal__quantity-button"
                  onClick={() => handleQuantityChange('increment')}
                >
                  +
                </button>
              </div>
              <button
                className="modal__button"
                onClick={() =>
                  console.log(
                    `Produto ${product.productName} comprado com quantidade: ${quantity}`
                  )
                }
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
