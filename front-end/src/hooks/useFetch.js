// React, Hooks
import { useState, useCallback } from 'react';

// Services
import fetchServices from '../services/fetchServices';

function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDataFromCollection = async (collection, pageIndex, pageSize) => {
        let response;
        let json;

        switch (collection) {
            case 'airports':
                response = await fetchServices.getAirports();
                break;

            case 'bookings':
                response = await fetchServices.getBookings(pageIndex, pageSize);
                break;

            default:
                break;
        }


        if (response.ok) {
            const json = await response.json();

            return json;
        } else {
            Promise.reject(json);
        }

    }

    const setFetchedData = useCallback(async (collection, pageIndex = 0, pageSize = 5) => {
        setIsLoading(true);

        try {
            const json = await fetchDataFromCollection(collection, pageIndex, pageSize);

            switch (collection) {
                case 'airports':
                    setData(json);
                    break;

                case 'bookings':
                    setData(json.list);
                    break;

                default:
                    break;
            }

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }

    }, []);

    return [data, setFetchedData, isLoading, error];

}

export default useFetch
