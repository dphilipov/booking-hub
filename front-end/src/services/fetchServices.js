const BASE_URL = process.env.REACT_APP_BASE_URL;

function getAirports() {
    return fetch(BASE_URL + 'airports');
}

function getBookings(pageIndex, pageSize) {
    return fetch(BASE_URL + `bookings?pageIndex=${pageIndex}&pageSize=${pageSize}`);
}

function createBooking(bookingInfo) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingInfo)
    };
    return fetch(BASE_URL + `bookings/create`, requestOptions);
}

function deleteBooking(bookingId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(BASE_URL + `bookings/delete/${bookingId}`, requestOptions);
}


const fetchServices = {
    getAirports,
    createBooking,
    getBookings,
    deleteBooking
}

export default fetchServices;