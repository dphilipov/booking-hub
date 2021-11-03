const BASE_URL = process.env.REACT_APP_BASE_URL;

async function getData(collection, pageIndex) {
    try {
        const response = await fetch(BASE_URL + `${collection}${collection === 'bookings' ? `?pageIndex=${pageIndex}` : ''}`);
        let json;
        if (response.ok) {
            json = await response.json();
            return json;
        } else {
            Promise.reject('This collection does not exist');
        }
    } catch (err) {
        return err;
    }
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
    getData,
    createBooking,
    deleteBooking
}

export default fetchServices;