// src/components/FavoriteList.js

import React, { useState } from 'react';

function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeFromFavorites(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
