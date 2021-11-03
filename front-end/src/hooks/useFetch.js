// React, Hooks
import { useState, useEffect } from 'react';

// Services
import fetchServices from '../services/fetchServices';

function useFetch(collection, pageIndex = 0) {
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const setFetchedData = async (collection, pageIndex) => {
            setIsLoading(true);

            try {
                const json = await fetchServices.getData(collection, pageIndex);

                switch (collection) {
                    case 'airports':
                        setData(json);
                        break;

                    case 'bookings':
                        setTotalCount(json.totalCount);
                        setData(prevState => [...prevState, ...json.list]);
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

        setFetchedData(collection, pageIndex);
    }, [collection, pageIndex])

    useEffect(() => {
        if (data.length === totalCount) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
        }
    }, [data])


    return [data, isEnd, isLoading, error];

}

export default useFetch
