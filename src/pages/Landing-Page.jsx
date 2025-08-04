import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import {Svg } from '../data/Svg';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        const [genreResponse, moviesResponse] = await Promise.all([
          axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`),
          axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        ]);

        const newGenreMap = new Map();
        genreResponse.data.genres.forEach(g => newGenreMap.set(g.id, g.name));
        setGenreMap(newGenreMap);
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
    const fetchUpcoming = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        setUpcoming(response.data.results);
      } catch (err) {
        console.error('Error fetching upcoming movies:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <main className="font-sans px-4 py-8 md:px-8 lg:px-16 xl:px-32">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 py-12">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-lg md:text-xl font-semibold text-blue-600">MOVIE TICKET PURCHASE #1</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h2>
          <p className="text-gray-600 text-lg">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              className="w-full h-auto aspect-[4/3] object-cover rounded-t-3xl shadow-lg" 
              src="/figure-1.png" 
              alt="Movie scene 1" 
            />
            <img 
              className="w-full h-auto aspect-[3/4] object-cover rounded-b-3xl shadow-lg" 
              src="/figure-3.png" 
              alt="Movie scene 3" 
            />
          </div>
          <div className="space-y-4">
            <img 
              className="w-full h-auto aspect-[3/4] object-cover rounded-t-3xl shadow-lg" 
              src="/figure-2.png" 
              alt="Movie scene 2" 
            />
            <img 
              className="w-full h-auto aspect-[4/3] object-cover rounded-b-3xl shadow-lg" 
              src="/figure-4.png" 
              alt="Movie scene 4" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold mb-2">WHY CHOOSE US</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Unleashing the Ultimate Movie Experience
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Svg.Seald/>
            </div>
            <h4 className="text-xl font-semibold mb-2">Guaranteed</h4>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
              dicta sed ut, ullam, dolores natus obcaecati.
            </p>
          </div>
          
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Svg.CheckList/>
            </div>
            <h4 className="text-xl font-semibold mb-2">Affordable</h4>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
              dicta sed ut, ullam, dolores natus obcaecati.
            </p>
          </div>
          
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Svg.Massage/>
            </div>
            <h4 className="text-xl font-semibold mb-2">24/7 customer support</h4>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
              dicta sed ut, ullam, dolores natus obcaecati.
            </p>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold mb-2">MOVIES</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Exciting Movies That Should Be Watched Today
          </h3>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto py-4">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
              </div>
            ) : movies.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No movies found. Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="flex space-x-6 w-max">
                {movies.map((movie) => (
                  <div key={movie.id} className="w-[20vw]">
                    <MovieCard
                      movie={movie}
                      genreMap={genreMap}
                      untuk={'landing'}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/movies/1" 
            className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors"
          >
            View All
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 10L2.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 5L17.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-16 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-blue-600 font-semibold mb-2">UPCOMING</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Exciting Movies Coming Soon
            </h3>
          </div>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto py-4">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
              </div>
            ) : upcoming.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No upcoming movies found.</p>
              </div>
            ) : (
              <div className="flex space-x-6 w-max">
                {upcoming.map((movie) => (
                  <div key={movie.id} className="md:w-[20vw]">
                    <MovieCard
                      movie={movie}
                      genreMap={genreMap}
                      untuk={'landing'}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative my-16 rounded-2xl p-8 pb-16 bg-blue-700 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6">
            Subscribe to our newsletter
          </h2>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-grow px-4 py-3 rounded-md text-white bg-blue-600 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-3 rounded-md text-white bg-blue-600 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-md font-semibold transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        
        <div className="absolute -right-30 -bottom-50 w-60 h-60 rounded-full border-8 border-white"></div>
      </section>
    </main>
  );
};

export default LandingPage;