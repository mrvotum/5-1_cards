import React from 'react';

export default function Card({ data: { img, title }, children }) {
  return (
    <div className="card">
      <img
        src={img}
        className={img ? 'img' : 'none'}
        alt={title}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{children}</p>
        <a href="www.google.com" className="btn">Go somewhere</a>
      </div>
    </div>
  );
}
