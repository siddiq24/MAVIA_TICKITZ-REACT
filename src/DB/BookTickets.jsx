const DateData = function() {
    return [
        { id: 1, date: '21/6/25' },
        { id: 2, date: '23/7/25' },
        { id: 3, date: '24/8/25' },
        { id: 4, date: '25/9/25' }
    ];
}

function TimeData() {
    return [
        { id: 1, time: '08:00' },
        { id: 2, time: '12:00' },
        { id: 3, time: '15:00' },
        { id: 4, time: '17:00' }
    ];
}

function LocationData() {
    return [
        { id: 1, loc: 'Bogor' },
        { id: 2, loc: 'Bandung' },
        { id: 3, loc: 'Jogja' },
        { id: 4, loc: 'Bontang' },
        { id: 5, loc: 'Batang' }
    ];
}

export { DateData, TimeData, LocationData };