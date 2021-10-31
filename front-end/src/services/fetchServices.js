const BASE_URL = process.env.REACT_APP_BASE_URL;

function getAirports() {
    return fetch(BASE_URL + 'airports');
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

function listBookings(pageIndex, pageSize='') {
    return fetch(BASE_URL + `bookings?pageIndex=${pageIndex}&pageSize=${pageSize}`);
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
    listBookings,
    deleteBooking
}

export default fetchServices;