import React, { useState } from 'react';
import { Svg } from '../data/Svg';

const PaymentPage = () => {
    const dateTime = 'Tuesday, 07 July 2020 at 02:00pm'
    const movieName = 'Spider-Motor-Homecoming'
    const cinema = 'Cineon2.1 Cinema'
    const tickets = '3 Pieces'
    const total = 30
    const [activePayment, setActivePayment] = useState(null);

    const [formData, setFormData] = useState({
        fullName: 'Jones El Rodriguez',
        email: 'joneoself123@gmail.com',
        phone: '81445687121'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <main className="bg-gray-100 min-h-screen p-4 py-18 md:pt-8">
            <nav className='hidden md:flex items-center justify-center my-8 '>
                <div className='flex flex-col items-center gap-4'>
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="23.5" r="23.5" fill="#008000" />
                        <path d="M17 23L22 28L32 18" stroke="white" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    <p>Dates And Time</p>
                </div>
                <div className='w-22 h-[50%] border-b border-dashed'></div>
                <div className='flex flex-col items-center w-22 gap-4'>
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="23.5" r="23.5" fill="#008000" />
                        <path d="M17 23L22 28L32 18" stroke="white" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                    <p>Seat</p>
                </div>
                <div className='w-22 h-[50%] border-b border-dashed'></div>
                <div className='flex flex-col items-center w-22 gap-4'>
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="23.5" cy="23.5" r="23.5" fill="#1D4ED8" />
                        <path
                            d="M23.72 29.144C22.952 29.144 22.216 29.0267 21.512 28.792C20.8187 28.5573 20.2373 28.2267 19.768 27.8L20.296 26.648C20.8187 27.0747 21.3573 27.384 21.912 27.576C22.4667 27.768 23.0533 27.864 23.672 27.864C24.4933 27.864 25.1173 27.6933 25.544 27.352C25.9707 27 26.184 26.4987 26.184 25.848C26.184 25.208 25.9653 24.7227 25.528 24.392C25.1013 24.0613 24.472 23.896 23.64 23.896H21.912V22.664H23.528C24.232 22.664 24.7973 22.4827 25.224 22.12C25.6507 21.7573 25.864 21.2613 25.864 20.632C25.864 20.056 25.6667 19.6187 25.272 19.32C24.888 19.0107 24.3387 18.856 23.624 18.856C23.016 18.856 22.456 18.9627 21.944 19.176C21.432 19.3787 20.9467 19.6933 20.488 20.12L19.96 18.984C20.408 18.536 20.9627 18.1893 21.624 17.944C22.2853 17.6987 22.984 17.576 23.72 17.576C24.84 17.576 25.72 17.832 26.36 18.344C27 18.856 27.32 19.5707 27.32 20.488C27.32 21.1813 27.1227 21.7787 26.728 22.28C26.344 22.7707 25.816 23.096 25.144 23.256V23.08C25.9333 23.2187 26.5467 23.544 26.984 24.056C27.4213 24.5573 27.64 25.1867 27.64 25.944C27.64 26.936 27.288 27.72 26.584 28.296C25.8907 28.8613 24.936 29.144 23.72 29.144Z"
                            fill="white" />
                    </svg>
                    <p>Payment</p>
                </div>
            </nav>
            <div className='bg-white p-4 rounded-2xl max-w-[732px] mx-auto'>
                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Payment Info</h1>
                </header>

                {/* Payment Details */}
                <div className="bg-white rounded-lg p-5 mb-6">
                    <div className="space-y-3">
                        <div>
                            <p className="py-2 text-xs text-gray-500 uppercase">DATE & TIME</p>
                            <p className="py-2 text-base font-medium">{dateTime}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
                            <p className="py-2 text-xs text-gray-500 uppercase">MOVIE TITLE</p>
                            <p className="py-2 text-base font-medium">{movieName}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
                            <p className="py-2 text-xs text-gray-500 uppercase">CINEMA NAME</p>
                            <p className="py-2 text-base font-medium">{cinema}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
                            <p className="py-2 text-xs text-gray-500 uppercase">NUMBER OF TICKETS</p>
                            <p className="py-2 text-base font-medium">{tickets}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
                            <p className="py-2 text-xs text-gray-500 uppercase">TOTAL PAYMENT</p>
                            <p className="py-2 text-lg font-bold">${total}</p>
                        </div>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white rounded-lg p-5 mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1" for='fullName'>Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full p-5 border border-gray-200 rounded-md text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1" for='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-5 border border-gray-200 rounded-md text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1" for='phone'>Phone Number</label>
                            <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 border-gray-200 rounded-l-md bg-gray-50 text-sm">
                                    +62
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="flex-1 p-5 border border-gray-200 rounded-r-md text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg p-5 mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {[
                            { logo: <Svg.GPay />, name: 'GPay' },
                            { logo: <Svg.Visa />, name: 'Visa' },
                            { logo: <Svg.Gopay />, name: 'Gopay' },
                            { logo: <Svg.PayPal />, name: 'PayPal' },
                            { logo: <Svg.Bca />, name: 'BCA' },
                            { logo: <Svg.Bri />, name: 'BRI' },
                            { logo: <Svg.Ovo />, name: 'OVO' }
                        ].map((payment, index) => (
                            <button
                                key={index}
                                onClick={() => setActivePayment(payment.name)}
                                className={`flex flex-col items-center justify-center p-3 border rounded-md transition-colors ${activePayment === payment.name
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-400'
                                    }`}
                            >
                                {payment.logo}
                            </button>
                        ))}
                        <button
                            onClick={() => setActivePayment('DANA')}
                            className={`flex flex-col items-center justify-center p-3 border rounded-md transition-colors ${activePayment === 'DANA'
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-400'
                                }`}                        >
                            <img src="/DANA.png" alt="" />
                        </button>
                    </div>
                </div>

                {/* Pay Button */}
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors">
                    Pay Your Order
                </button>
            </div>
        </main>
    );
};

export default PaymentPage;