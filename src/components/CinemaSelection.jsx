import React, { useState } from 'react'
import { Svg } from '../data/Svg';

function CinemaSelection({ name, alamat, svg}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full p-8 pb-0 border rounded-2xl border-gray-300 overflow-hidden">
            <div className="border-b pb-8 border-gray-300 flex items-center">
                <div className="w-full">
                    {svg}
                    <h2 className="text-4xl font-bold my-4">{name}</h2>
                    <p className="mt-4 text-gray-400">{alamat}</p>
                </div>

                <div
                    id="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col cursor-pointer"
                >
                    <svg className={`rounded-full transition-all duration-700 ${isOpen ? "" : "rotate-x-180"
                        }`} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
                </div>
            </div>
            {isOpen && (
                <section>
                    <div className="mt-12 mb-8">
                        <h2 className="text-xl">REGULAR</h2>
                        <div className="my-8 flex flex-wrap gap-8">
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 py-2 px-8 text-gray-600 rounded-full"
                                >
                                    08:30 AM
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 mb-8">
                        <h2 className="text-xl">GOLD</h2>
                        <div className="my-8 flex flex-wrap gap-8">
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 py-2 px-8 text-gray-600 rounded-full"
                                >
                                    08:30 AM
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 mb-8">
                        <h2 className="text-xl">PLATINUM S</h2>
                        <div className="my-8 flex flex-wrap gap-8">
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 py-2 px-8 text-gray-600 rounded-full"
                                >
                                    08:30 AM
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default CinemaSelection