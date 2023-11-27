import React from 'react';

// Functional component
const Card = ({ imagePath, title, bodyText }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imagePath} alt={title} className="rounded-xl w-10 h-10" /> {/* Updated image size here */}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
