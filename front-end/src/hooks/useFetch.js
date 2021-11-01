import { useState, useEffect } from 'react';
import fetchServices from '../services/fetchServices';

function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (pageIndex = 0, pageSize = 5) => {
        setIsLoading(true);

        try {
            const response = await fetchServices.getBookings(pageIndex, pageSize);
            const data = await response.json();

            setData(data.list);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }

    }

    // const fetchMethod = async () => {
    //     console.log('test');
    //     try {
    //         const response = await apiFunction();

    //         const data = await response.json();

    //         setData(data);
    //     } catch (err) {
    //         setError(err);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }


    return [data, fetchData, isLoading, error];

}

export default useFetch
