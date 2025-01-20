import React from 'react';
import '../styles/BackgroundCard.scss';

interface BackgroundCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="background-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="background-card__content">
        <h3 className="background-card__title">{title}</h3>
        <p className="background-card__description">{description}</p>
        <button className="background-card__button">{buttonText}</button>
      </div>
    </div>
  );
};

export default BackgroundCard;
