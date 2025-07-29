// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie, genreMap }) => {
    return (
        <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
                className="w-full h-64 object-cover"
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
                }
                alt={movie.title || 'Movie Poster'}
            />
            <div className="p-4">
                <h3 className="movie-title font-bold text-lg mb-2">
                    {movie.title || 'No Title Available'}
                </h3>
                <div className="movie-categories flex flex-wrap gap-2">
                    {movie.genre_ids?.map(id => (
                        <span
                            key={id}
                            className="text-xs bg-gray-200 rounded-full px-2 py-1"
                        >
                            {genreMap.get(id) || 'Unknown Genre'}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
