import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import CinemaSelection from '../components/CinemaSelection';
import Sponsor from '../data/Sponsor';
import { DateData, TimeData, LocationData } from '../DB/BookTickets'
import { Svg } from '../data/Svg';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function DetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const date = DateData();
    const time = TimeData();
    const loc = LocationData();

    useEffect(() => {
        if (!id) return;

        axios
            .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Failed to fetch movie details:', err);
            });
    }, [id]);

    if (!movie) return <div className="flex justify-center items-center py-12 h-screen w-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
    </div>;

    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
    const backdrop = movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    return (
        <main className='relative px-8 flex flex-col items-center mb-44 lg:mb-[20vw]'>
            <img src={backdrop} className='absolute right-0 left-0 w-full aspect-[4/4] md:aspect-[10/4] object-cover brightness-[50%] -z-1 '></img>
            <div className='w-[90%] min-h-[65vh] relative top-44 md:top-[20vw] rounded-2xl'>
                <div className='mb-12 flex flex-col md:flex-row md:gap-8 items-center md:items-end'>
                    <img className="rounded-xl brightness-110 md:w-[30vw]" style={{ boxShadow: '0 0 33px rgba(0,0,0,1)' }} src={poster} alt={`image: ${movie.title}`} />
                    {/* <!-- Movie Info Section --> */}
                    <section className="flex flex-col items-center md:justify-between md:items-start md:h-[50%] md:w-full">
                        <h1 className="my-4 md:my-0 lg:my-[] lg:text-[3vw] text-2xl font-semibold tracking-wider md:text-[calc(15px+1vw)]">{movie.title}</h1>
                        <div className="movie-categories flex flex-wrap gap-2">
                            {movie.genres?.map(genre => (
                                <span
                                    key={genre.id}
                                    className="lg:text-xl lg:my-8 md:text-[1vw] bg-gray-50 text-gray-400 rounded-full px-2 py-1 md:py-2 md:px-6"
                                >
                                    {genre.name || 'Unknown Genre'}
                                </span>
                            ))}
                        </div>
                        <nav className="flex justify-between w-full md:text-[calc(5px+1vw)]">
                            <div className=' flex flex-col gap-4'>
                                <div className='min-w-fit gap-y-2 md:flex md:flex-col'>
                                    <h3 className="text-gray-400">Release date</h3>
                                    <p className=" flex flex-wrap">June 28, 2017</p>
                                </div>
                                <div className='min-w-fit gap-y-2 md:flex md:flex-col'>
                                    <h3 className="text-gray-400">Duration</h3>
                                    <p className=" flex flex-wrap">2 hours 13 minutes</p>
                                </div>
                            </div>
                            <div className='max-w-[60%] flex flex-col gap-4'>
                                <div className='min-w-fit gap-y-2 md:flex md:flex-col'>
                                    <h3 className="text-gray-400">Directed by</h3>
                                    <p className=" flex flex-wrap">Jon Watts</p>
                                </div>
                                <div className='min-w-fit gap-y-2 md:flex md:flex-col'>
                                    <h3 className="text-gray-400">Casts</h3>
                                    <p className=" flex flex-wrap">Tom Holland, Michael Keaton, Robert Downey Jr</p>
                                </div>
                            </div>
                        </nav>
                    </section>
                </div>
                <h2 className="text-2xl mb-3 md:text-4xl">Synopsis</h2>
                <p className="text-gray-400 text-base/8 mb-12 md:text-xl">{movie.overview}</p>

                {/* <!-- Booking Section --> */}
                <section className="">
                    <h2 className="hidden md:block text-5xl my-12">Book Tickets</h2>
                    <h2 className="font-bold text-center md:hidden tracking-wider text-lg my-4">Showtimes and Tickets</h2>

                    {/* <!-- Booking Filters --> */}
                    <nav className="w-full flex flex-col gap-4 md:flex-row md:justify-between ">
                        <div className='flex-1'>
                            <label className="hidden mb-3 md:block text-2xl">Choose Date</label>
                            <div className="bg-gray-100 px-8 py-4 rounded-lg ">
                                <div className=" flex items-center justify-between">
                                    <div className="svg-placeholder">
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.107 3H4.90119C3.85928 3 3.01465 3.67157 3.01465 4.5V15C3.01465 15.8284 3.85928 16.5 4.90119 16.5H18.107C19.1489 16.5 19.9935 15.8284 19.9935 15V4.5C19.9935 3.67157 19.1489 3 18.107 3Z"
                                                stroke="#4E4B66" strokeWidth="1.66667" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M15.2773 1.5V4.5" stroke="#4E4B66" strokeWidth="1.66667"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.73047 1.5V4.5" stroke="#4E4B66" strokeWidth="1.66667"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.01465 7.5H19.9935" stroke="#4E4B66" strokeWidth="1.66667"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <select className='w-full pl-4 outline-0'>
                                        {date.map(data => (
                                            <option
                                                key={data.id}
                                                value={data.date}
                                            >{data.date}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <label className="hidden mb-3 md:block text-2xl">Choose Time</label>
                            <div className="bg-gray-100 px-8 py-4 rounded-lg ">
                                <div className=" flex items-center justify-between">
                                    <div className="svg-placeholder">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.00311 4.5L9.00266 9.0033L12.1824 12.1831M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                                                stroke="#4E4B66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <select className='w-full pl-4 outline-0'>
                                        {time.map(data => (
                                            <option
                                                key={data.id}
                                                value={data.time}
                                            >{data.time}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <label className="hidden mb-3 md:block text-2xl">Choose Location</label>
                            <div className="bg-gray-100 px-8 py-4 rounded-lg  hidden md:block">
                                <div className=" flex items-center justify-between">
                                    <div className="svg-placeholder">
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_19747_946)">
                                                <path
                                                    d="M22.1063 16.2918L20.5589 12.6H18.8611L19.8039 16.2H3.20316L4.14605 12.6H2.44817L0.899698 16.2918C0.506921 17.2314 1.20305 18 2.44817 18H20.5589C21.8041 18 22.5002 17.2314 22.1063 16.2918ZM17.1632 4.5C17.1632 3.30653 16.5669 2.16193 15.5055 1.31802C14.4441 0.474106 13.0046 0 11.5036 0C10.0025 0 8.56298 0.474106 7.5016 1.31802C6.44022 2.16193 5.84394 3.30653 5.84394 4.5C5.84394 8.7975 11.5036 13.5 11.5036 13.5C11.5036 13.5 17.1632 8.7975 17.1632 4.5ZM8.44736 4.554C8.44736 3.2121 9.81472 2.1249 11.5036 2.1249C12.314 2.1249 13.0912 2.38087 13.6642 2.8365C14.2372 3.29213 14.5592 3.91009 14.5592 4.55445C14.5592 5.19881 14.2372 5.81677 13.6642 6.2724C13.0912 6.72803 12.314 6.984 11.5036 6.984C10.693 6.984 9.91565 6.72798 9.3425 6.27227C8.76935 5.81656 8.44736 5.19848 8.44736 4.554Z"
                                                    fill="#4E4B66" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_19747_946">
                                                    <rect width="22.6385" height="18" fill="white" transform="translate(0.18457)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <select className='w-full pl-4 outline-0'>
                                        {loc.map(data => (
                                            <option
                                                key={data.id}
                                            >{data.loc}</option>
                                        ))
                                        }                                    
                                        </select>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-600 text-white px-8 py-4 mt-4 h-fit md:w-[20%] self-end w-full rounded-lg">Filter</button>
                    </nav>

                    {/* <!-- Cinema Selection --> */}
                    <h3 className="hidden">Choose Cinema</h3>
                    <nav className="flex flex-col gap-12 mt-12">
                        {Sponsor.map(sponsor => {
                                return <CinemaSelection key={sponsor.id} alamat={sponsor.alamat} name={sponsor.name} svg={<sponsor.svg/>}/>
                        })}
                    </nav>

                    {/* <!-- Pagination --> */}
                    {/* <nav className="hidden my-18 items-center justify-center gap-4">
                        <a className="w-12 h-12 block p-3 text-center border-2 rounded-lg border-gray-200 bg-blue-600 text-white">1</a>
                        <a className="w-12 h-12 block p-3 text-center border-2 rounded-lg border-gray-200 ">2</a>
                        <a className="w-12 h-12 block p-3 text-center border-2 rounded-lg border-gray-200 ">3</a>
                        <a className="w-12 h-12 block p-3 text-center border-2 rounded-lg border-gray-200 ">4</a>
                    </nav> */}

                    {/* <!-- Book Now Button --> */}
                    <button className="mb-28 bg-blue-600 my-8 md:my-0 w-full py-6 lg:py-8 lg:mt-18 px-18 rounded-xl text-white text-2xl mx-auto">
                        <Link to={`/order/${movie.id}`}>Book Now</Link>
                    </button>
                </section>
            </div>
        </main>
    )
}

export default DetailPage