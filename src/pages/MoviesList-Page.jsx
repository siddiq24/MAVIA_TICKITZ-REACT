import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieListPage = () => {
    const [movies, setMovies] = useState([]);
    const [genreMap, setGenreMap] = useState(new Map());
    const [searchQuery, setSearchQuery] = useState('');
    const [activeGenre, setActiveGenre] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch genre
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setIsLoading(true);
                const genreResponse = await axios.get(
                    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );

                const newGenreMap = new Map();
                genreResponse.data.genres.forEach(g => newGenreMap.set(g.id, g.name));
                setGenreMap(newGenreMap);

                const moviesResponse = await axios.get(
                    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                setMovies(moviesResponse.data.results);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialData();
    }, []);

    useEffect(() => {
        if (!searchQuery.trim()) return;

        const timer = setTimeout(async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchQuery)}&page=1`
                );
                setMovies(response.data.results);
            } catch (err) {
                console.error('Error searching movies:', err);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // filter buat genre
    const handleGenreFilter = async (genreName) => {
        try {
            setIsLoading(true);
            setActiveGenre(genreName);

            if (!genreName) {
                const response = await axios.get(
                    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                setMovies(response.data.results);
                return;
            }

            const genreResponse = await axios.get(
                `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );
            const genre = genreResponse.data.genres.find(
                g => g.name.toLowerCase() === genreName.toLowerCase()
            );

            if (!genre?.id) {
                const fallbackResponse = await axios.get(
                    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                setMovies(fallbackResponse.data.results);
                return;
            }

            const filteredResponse = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&language=en-US&page=1`
            );
            setMovies(filteredResponse.data.results);
        } catch (err) {
            console.error('Error filtering by genre:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {/* Search Input */}
                <div className="mb-8 md:flex gap-6">
                    <div>
                        <p className="text-sm font-semibold text-gray-600 mb-2">Cari Event</p>
                        <div className="search-input-container relative">
                            <div className="absolute top-3 left-2">
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="9.76639"
                                        cy="9.76688"
                                        r="8.98856"
                                        stroke="#A0A3BD"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16.0181 16.4854L19.5421 20.0002"
                                        stroke="#A0A3BD"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="New Born Expert"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-container mb-8 flex-1">
                        <p className="text-sm font-semibold text-gray-600 mb-2">Filter</p>
                        <ul className="filter-buttons flex flex-wrap gap-2">
                            {['Thriller', 'Horror', 'Comedy', 'Adventure', 'Romance'].map((genre) => (
                                <li
                                    key={genre}
                                    className={`px-4 py-2 rounded-xl cursor-pointer transition-colors ${activeGenre === genre
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                    onClick={() => handleGenreFilter(activeGenre === genre ? null : genre)}
                                >
                                    {genre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Movies Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : movies.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <p>No movies found. Try adjusting your search or filters.</p>
                    </div>
                ) : (
                    <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                genreMap={genreMap} // ✅ kita pass ke komponen baru
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MovieListPage;