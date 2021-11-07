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
            const json = await fetchServices.getData(collection, pageIndex, pageSize);

            switch (collection) {
                case 'airports':
                    setData(json);
                    break;

                case 'bookings':
                    setTotalCount(json.totalCount);
                    json.list.length === 0 && setIsEnd(true);

                    pageIndex === 0
                        ? setData(json.list)
                        : setData(prevState => [...prevState, ...json.list])

                    break;

                default:
                    break;
            }
        } catch (err) {
            setError(err);
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
