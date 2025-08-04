import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {Object} movie,
 * @param {string} movie.poster_path - gambar poster movie
 * @param {string} movie.title - judul movie
 * @param {number} movie.genre_ids - genre movie
 * @param {Object} genreMap - daftar genre untuk dicocokkan
 * @param {string} untuk - menentukan layout khusus
 * @returns 
 */
const MovieCard = ({ movie, genreMap, untuk }) => {
    return (
        <div className={`bg-white h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300${
            untuk ? '' : 'w-[22vw]'
        }`}>
            <div className='relative group'>
                <img
                    className={`w-full object-cover aspect-[2/3] group-hover:brightness-50 transition-all duration-300`}
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : 'https://i.pinimg.com/originals/07/85/e7/0785e7dae354aba21aff4c3752166011.gif'
                    }
                    alt={movie.title || 'Movie Poster'}
                    loading="lazy"
                />

                <div className={`absolute inset-0 bg-black/70 flex-col justify-center items-center text-center hidden group-hover:flex transition-opacity duration-300 p-4 space-y-3`}>
                    <Link 
                        to={`/detail/${movie.id}`} 
                        className='rounded-lg border-2 border-white w-full py-2 text-sm hover:bg-blue-600 transition-colors duration-200 text-white font-medium'
                    >
                        Detail
                    </Link>
                    <Link 
                        to={`/order/${movie.id}`} 
                        className='rounded-lg bg-blue-600 w-full py-2 text-sm hover:bg-blue-700 transition-colors duration-200 text-white font-medium'
                    >
                        Buy Ticket
                    </Link>
                </div>
            </div>

            <div className="p-4 bg-white">
                <h3 className={`font-bold text-gray-800 mb-2 line-clamp-2 ${
                    untuk ? 'text-base md:text-lg' : 'text-lg'
                }`}>
                    {movie.title || 'No Title Available'}
                </h3>
                <div className={`flex flex-wrap gap-2 ${
                    untuk ? 'min-h-8' : ''
                }`}>
                    {movie.genre_ids?.map(id => (
                        <span
                            key={id}
                            className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1"
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