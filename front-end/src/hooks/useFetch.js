import { useState, useCallback } from 'react';
import fetchServices from '../services/fetchServices';

function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (collection, pageIndex = 0, pageSize = 5) => {
        setIsLoading(true);

        try {
            if (collection === 'airports') {
                const response = await fetchServices.getAirports();

                const json = await response.json();
    
                if (response.ok) {
                    setData(json);
                } else {
                    Promise.reject(json);
                }
    
            } else if (collection === 'bookings') {
                const response = await fetchServices.getBookings(pageIndex, pageSize);

                const json = await response.json();
    
                if (response.ok) {
                    setData(json.list);
                } else {
                    Promise.reject(json);
                }
    
            }

        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }

    }, []);

    return [data, fetchData, isLoading, error];

}

export default useFetch
