import React from 'react';


/**
 * 
 * @param {Object} movie,
 * @param {string} movie.poster_path - gambar poster movie
 * @param {string} movie.title - judul movie
 * @param {number} movie.genre_ids - genre movie
 * @param {Object} genreMap - daftar genre untuk dicocokkan
 * @returns 
 */
const MovieCard = ({ movie, genreMap }) => {
    return (
        <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
                className="w-full sm:aspect-[3/5] aspect-[5/3] object-cover hover:brightness-50 hover:scale-105"
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
                }
                alt={movie.title || 'Movie Poster'}
            />
            <div className="p-4 h-full z-10 bg-white">
                <h3 className="movie-title font-bold text-lg mb-2">
                    {movie.title || 'No Title Available'}
                </h3>
                <div className="movie-categories flex flex-wrap gap-2">
                    {movie.genre_ids?.map(id => (
                        <span
                            key={id}
                            className="text-xs bg-gray-50 text-gray-400 rounded-full px-2 py-1"
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
