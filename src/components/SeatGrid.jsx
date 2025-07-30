import React, { useState } from 'react';

const SeatGrid = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const cols = Array.from({ length: 14 }, (_, i) => i + 1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (row, col) => {
        const seatCode = `${row}${col}`;
        setSelectedSeats((prev) =>
            prev.includes(seatCode)
                ? prev.filter((seat) => seat !== seatCode)
                : [...prev, seatCode]
        );
    };

    return (
        <div className="flex flex-col gap-2 p-4 rounded">
            {rows.map((row) => (
                <div key={row} className="flex gap-[1vw] items-center">
                    <span className="text-xs  ">{row}</span>
                    {cols.map((col, colIndex) => {
                        const seatCode = `${row}${col}`;
                        const isSelected = selectedSeats.includes(seatCode);

                        return (
                            <React.Fragment key={seatCode}>
                                {/* Kursi */}
                                <div
                                    onClick={() => handleSeatClick(row, col)}
                                    className={`w-full aspect-square rounded cursor-pointer text-[10px] flex items-center justify-center transition-colors
                    ${isSelected ? 'bg-[#1D4ED8]' : 'bg-[#D6D8E7] hover:bg-[#1D4ED8]'}`}
                                    title={`Seat ${seatCode}`}
                                >
                                </div>

                                {/* Lorong setelah kolom ke-7 */}
                                {colIndex === 6 && <div className="w-[70vw]" />}
                            </React.Fragment>
                        );
                    })}
                </div>
            ))}

            <div className="mt-4 text-sm">
            </div>
        </div>
    );
};

export default SeatGrid;