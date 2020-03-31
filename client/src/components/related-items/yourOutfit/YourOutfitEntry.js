import React from 'react';
import RatingStars from '../../RatingStars';

const YourOutfitEntry = ({
  category,
  name,
  price,
  image,
  productId,
  deleteOutfitHandler
}) => {
  const imageStyle = {
    width: '100%',
    height: '270px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div data-testid="your-outfit-entry" className="related-card">
      <button
        type="button"
        className="related-button"
        onClick={() => deleteOutfitHandler(productId)}
      >
        temp
      </button>
      <div className="related-image-container">
        <div style={imageStyle} />
      </div>
      <div className="related-product-info">
        <p className="related-category">{category}</p>
        <p className="related-name">{name}</p>
        <p className="related-price">${price}</p>
        <RatingStars rating={5} />
      </div>
    </div>
  );
};

export default YourOutfitEntry;
