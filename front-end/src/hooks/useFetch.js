// React, Hooks
import { useState, useEffect } from 'react';

// Services
import fetchServices from '../services/fetchServices';

function useFetch(collection, pageIndex, pageSize) {
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEnd, setIsEnd] = useState(false);

    const setFetchedData = async (collection, pageIndex, pageSize) => {
        setIsLoading(true);

        try {
            const fetchedData = await fetchServices.getData(collection, pageIndex, pageSize);

            switch (collection) {
                case 'airports':
                    setData(fetchedData);
                    break;

                case 'bookings':
                    setTotalCount(fetchedData.totalCount || 0);

                    fetchedData.list.length === 0 && setIsEnd(true);

                    pageIndex === 0
                        ? setData(fetchedData.list)
                        : setData(prevState => [...prevState, ...fetchedData.list])

                    break;

                default:
                    break;
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setFetchedData(collection, pageIndex, pageSize);
    }, [collection, pageIndex, pageSize])

    useEffect(() => {
        setIsEnd(data.length >= totalCount);
    }, [data, totalCount])



    return { data, isEnd, isLoading, error };

}

export default useFetch
