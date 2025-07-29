import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <main className="font-sans">
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-12 lg:px-24 bg-gray-50">
          <div className="hero-content md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">MOVIE TICKET PURCHASE #1</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Experience the Magic of Cinema: Book Your Tickets Today</h2>
            <p className="text-lg text-gray-600">Sign up and get the ticket with a lot of discount</p>
          </div>
          <div className="hero-images flex gap-4 md:w-1/2">
            <div className="images-left flex flex-col gap-4">
              <img className="image-top w-full rounded-lg shadow-lg" src="../assets/figure-1.png" alt="" />
              <img className="image-bottom w-full rounded-lg shadow-lg" src="../assets/figure-3.png" alt="" />
            </div>
            <div className="images-right flex flex-col gap-4">
              <img className="image-top w-full rounded-lg shadow-lg" src="../assets/figure-2.png" alt="" />
              <img className="image-bottom w-full rounded-lg shadow-lg" src="../assets/figure-4.png" alt="" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="px-6 py-16 md:px-12 lg:px-24 bg-white">
          <h2 className="section-subtitle text-blue-600 font-semibold text-center mb-2">WHY CHOOSE US</h2>
          <h3 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">Unleashing the Ultimate Movie Experience</h3>
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="benefit-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="benefit-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M12.2525 21.9137C12.3633 21.9715 12.4871 22.0009 12.6109 22C12.7347 21.999 12.8576 21.9686 12.9693 21.9097L16.5372 20.0025C17.549 19.4631 18.3413 18.8601 18.9594 18.1579C20.3034 16.6282 21.0373 14.6758 21.0242 12.6626L20.9819 6.02198C20.9779 5.25711 20.4755 4.57461 19.7326 4.32652L13.0951 2.09956C12.6955 1.96424 12.2575 1.96718 11.8649 2.10643L5.25266 4.41281C4.51371 4.67071 4.02041 5.35811 4.02444 6.12397L4.06672 12.7597C4.07981 14.7758 4.83889 16.7194 6.20503 18.2335C6.82921 18.9258 7.62856 19.52 8.65141 20.0505L12.2525 21.9137ZM11.308 14.1089C11.457 14.2521 11.6503 14.3227 11.8436 14.3207C12.0369 14.3198 12.2292 14.2472 12.3761 14.1021L16.2752 10.2581C16.5682 9.96882 16.5652 9.50401 16.2692 9.21866C15.9722 8.9333 15.494 8.93526 15.201 9.22454L11.8325 12.5449L10.4533 11.2191C10.1563 10.9337 9.67908 10.9367 9.38512 11.226C9.09216 11.5152 9.09518 11.98 9.39216 12.2654L11.308 14.1089Z"
                    fill="#1D4ED8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Guaranteed</h4>
              <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
                dicta sed ut, ullam, dolores natus obcaecati.</p>
            </div>
            <div className="benefit-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="benefit-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.2002 21C16.9992 21 21.7002 16.299 21.7002 10.5C21.7002 4.70101 16.9992 0 11.2002 0C5.4012 0 0.700195 4.70101 0.700195 10.5C0.700195 16.299 5.4012 21 11.2002 21ZM16.1618 8.24293C16.5463 7.85852 16.5463 7.23523 16.1618 6.85082C15.7774 6.4664 15.1542 6.4664 14.7698 6.85082L9.55957 12.061L7.63063 10.1321C7.24621 9.74765 6.62293 9.74765 6.23851 10.1321C5.85409 10.5165 5.85409 11.1398 6.23851 11.5242L8.86351 14.1491C9.24793 14.5336 9.87121 14.5336 10.2556 14.1491L16.1618 8.24293Z"
                    fill="#1D4ED8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Affordable</h4>
              <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
                dicta sed ut, ullam, dolores natus obcaecati.</p>
            </div>
            <div className="benefit-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="benefit-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.52518 0C1.13633 0 0 1.04375 0 2.31945V16.2362L3.78776 12.757H15.1511C16.5399 12.757 17.6762 11.7132 17.6762 10.4375V2.31945C17.6762 1.04375 16.5399 0 15.1511 0H2.52518ZM20.2014 5.79863V10.4375C20.2014 12.9959 17.9363 15.0764 15.1511 15.0764H7.57553V16.2362C7.57553 17.5119 8.71186 18.5556 10.1007 18.5556H21.464L25.2518 22.0348V8.11808C25.2518 6.84238 24.1154 5.79863 22.7266 5.79863H20.2014Z"
                    fill="#1D4ED8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 customer support</h4>
              <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatem quisquam rem iste a
                dicta sed ut, ullam, dolores natus obcaecati.</p>
            </div>
          </div>
        </section>

        {/* Movies Section */}
        <section id="movies" className="px-6 py-16 md:px-12 lg:px-24 bg-gray-50">
          <h2 className="section-subtitle text-blue-600 font-semibold text-center mb-2">MOVIES</h2>
          <h3 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">Exciting Movies That Should Be Watched Today</h3>
          <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="/src/assets/MOVIES/1.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="/src/assets/MOVIES/2.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Comedy</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="/src/assets/MOVIES/3.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Sci-Fi</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="/src/assets/MOVIES/4.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="view-all text-blue-700 font-semibold inline-flex items-center">
              View All
              <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 10L2.5 10" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 5L17.5 10L12.5 15" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* Upcoming Section */}
        <section id="upcoming" className="px-6 py-16 md:px-12 lg:px-24 bg-white">
          <div className="section-header flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="section-subtitle text-blue-600 font-semibold mb-2">UPCOMING</h2>
              <h3 className="section-title text-3xl md:text-4xl font-bold">Exciting Movies Coming Soon</h3>
            </div>
            <div className="slider-controls flex gap-4">
              <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 18L3 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12L3 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 6L21 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="../assets/MOVIES/1.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="../assets/MOVIES/2.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Comedy</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="../assets/MOVIES/3.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Sci-Fi</span>
                </div>
              </div>
            </div>
            <div className="movie-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img className="w-full" src="../assets/MOVIES/4.png" alt="Black Widow movie poster" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">Black Widow</h4>
                <div className="movie-categories flex gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Action</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="relative px-6 py-16 md:px-12 lg:px-24 bg-blue-700 text-white overflow-hidden">
          <div className="newsletter-content relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to our newsletter</h2>
            <form className="newsletter-form flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-md font-semibold transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="newsletter-circle absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-blue-800 opacity-30"></div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;