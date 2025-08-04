import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { Link, useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieListPage = () => {
    const [movies, setMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [genreMap, setGenreMap] = useState(new Map());
    const [searchQuery, setSearchQuery] = useState('');
    const [activeGenre, setActiveGenre] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('popular');
    const { page } = useParams();

    // Fetch genres and initial movies
    useEffect(() => {
        if (searchQuery.trim()) return;

        const fetchInitialData = async () => {
            try {
                setIsLoading(true);
                
                // Fetch genres
                const genreResponse = await axios.get(
                    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );

                const newGenreMap = new Map();
                genreResponse.data.genres.forEach(g => newGenreMap.set(g.id, g.name));
                setGenreMap(newGenreMap);

                // Fetch popular movies
                const popularResponse = await axios.get(
                    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page || 1}`
                );
                setMovies(popularResponse.data.results);
                console.log(popularResponse)

                // Fetch upcoming movies
                const upcomingResponse = await axios.get(
                    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page || 1}`
                );
                setUpcomingMovies(upcomingResponse.data.results);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialData();
    }, [page, searchQuery]);

    // Search functionality
    useEffect(() => {
        if (!searchQuery.trim()) return;

        const timer = setTimeout(async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `${BASE_URL}/search/movie?api_key=${API_KEY}&adult=true&language=en-US&query=${encodeURIComponent(searchQuery)}&page=${page || 1}`
                );
                setMovies(response.data.results);
                // console.log(response)

            } catch (err) {
                console.error('Error searching movies:', err);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery, page]);


    // Genre filter
    const handleGenreFilter = async (genreName) => {
        if (searchQuery.trim()) return;
        try {
            setIsLoading(true);
            setActiveGenre(genreName);

            if (!genreName) {
                const response = await axios.get(
                    `${BASE_URL}/movie/${activeTab === 'popular' ? 'popular' : 'upcoming'}?api_key=${API_KEY}&language=en-US&page=${page || 1}`
                );
                activeTab === 'popular' 
                    ? setMovies(response.data.results) 
                    : setUpcomingMovies(response.data.results);
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
                    `${BASE_URL}/movie/${activeTab === 'popular' ? 'popular' : 'upcoming'}?api_key=${API_KEY}&language=en-US&page=${page || 1}`
                );
                activeTab === 'popular' 
                    ? setMovies(fallbackResponse.data.results) 
                    : setUpcomingMovies(fallbackResponse.data.results);
                return;
            }

            const filteredResponse = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&language=en-US&page=${page || 1}`
            );
            activeTab === 'popular' 
                ? setMovies(filteredResponse.data.results) 
                : setUpcomingMovies(filteredResponse.data.results);
        } catch (err) {
            console.error('Error filtering by genre:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const currentMovies = activeTab === 'popular' ? movies : upcomingMovies;

    return (
        <>
            <img className="absolute -z-1 h-66 md:h-88 lg:h-[30vw] w-full object-cover" src="/Hero.png" alt="Cinema background" />

            <section className="h-66 md:h-88 lg:h-[30vw] py-[10%] md:px-[8vw] bg-black/40">
                <div className="flex flex-col justify-around h-full">
                    <h1 className='text-white black text-xs md:text-[1.5vw]'>LIST MOVIE OF THE WEEK</h1>
                    <h2 className='text-white black text-4xl md:text-[4vw]'>Experience the Magic of <br/> Cinema: Book Your Tickets<br />Today</h2>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'popular' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('popular')}
                    >
                        Popular Movies
                    </button>
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        Upcoming Movies
                    </button>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 md:flex gap-6">
                    <div className="flex-1">
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
                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="filter-container mt-4 md:mt-0 flex-1">
                        <p className="text-sm font-semibold text-gray-600 mb-2">Filter</p>
                        <ul className="filter-buttons flex flex-wrap gap-2">
                            {['Thriller', 'Horror', 'Comedy', 'Adventure', 'Romance'].map((genre) => (
                                <li
                                    key={genre}
                                    className={`px-4 py-2 rounded-xl cursor-pointer transition-colors ${
                                        activeGenre === genre
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
                ) : currentMovies.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <p>No movies found. Try adjusting your search or filters.</p>
                    </div>
                ) : (
                    <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {currentMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                genreMap={genreMap}
                            />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                    {[1, 2, 3, 4].map((num) => (
                        <Link 
                            key={num}
                            to={`/Movies/${num}`}
                            className={`px-4 py-2 rounded-md ${
                                parseInt(page || 1) === num 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {num}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieListPage;